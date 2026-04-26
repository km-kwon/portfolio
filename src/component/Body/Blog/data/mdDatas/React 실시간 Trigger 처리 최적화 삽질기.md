실차/로그 기반 모니터링 UI를 만들다 보면, 어느 순간부터 이런 문장이 몸에 새겨진다.

> “데이터는 계속 들어오고, UI는 멈추면 안 된다.”

이번 글은 **ZeroMQ로 들어오는 trigger 이벤트(로그/뷰/차트)를 React 상태로 반영하는 파이프라인**에서,

UI 버벅임을 줄이기 위해 **WebWorker / throttle / frame time-slicing / batched updates**까지 다 해본 뒤,

**결국 baseline(그냥 바로 처리)이 가장 빠르고 합리적이었다**는 결론에 도달하기까지의 기록이다.

---

## 0. 목표: “빠른 처리”가 아니라 “버벅임 없는 UI”

이번 최적화의 목적은 단순히 “평균 처리시간(avg)을 줄이기”가 아니었다.

- 데이터 처리량은 앞으로도 계속 증가할 수 있고
- 사용자 입장에서는 “평균이 빠른 것”보다
- **가끔 멈추는 순간(프리즈/버벅임)** 이 훨씬 치명적이다

그래서 이번에 측정하고 싶었던 건 크게 두 가지였다.

1. **Trigger 처리의 계산 성능(처리 시간/처리량)**
2. **UI가 실제로 얼마나 부드러운지(FPS/최악 프레임)**

즉, “CPU에서 빨리 끝내는가?”뿐 아니라

“메인 스레드를 얼마나 오래 붙잡는가?”를 같이 보려 했다.

---

## 1. 배경: Trigger가 하는 일

Trigger 메시지는 대략 다음과 같은 내용이 있다.

- `FilterType.Log` → 이벤트 버스 emit (로그 리스트 등)
- `FilterType.View` → 여러 탭/뷰 스토어 업데이트
  - `LATEST`는 무조건 업데이트
  - `CUR_PRINT`는 “현재 보고 있는 탭인지” 조건부 업데이트
  - Sync 업데이트 중이면 `isUpdatingFromSync` 기준으로 무시
- `FilterType.Chart` → chart store 갱신 + 다른 chart window에 broadcast

이 Trigger의 문제는 **메시지 양이 많고(초당 수백~수천), View 업데이트/Chart broadcast가 UI thread를 잡아먹으면 화면이 끊긴다**는 점이었다.

---

## 2. 문제: UI 버벅임이 발생

초기 구현은 “received datas를 forEach 돌면서 즉시 처리” 방식이었다.

### Baseline(초기 코드)의 특징

- 데이터가 들어오는 즉시 처리
- 분기 로직은 명확
- store 업데이트/handler 호출이 곧바로 실행됨
- 단점: 특정 타이밍에 데이터가 몰리면, 한 프레임에 처리량이 커져서 **“뚝” 끊길 수 있음**

그럼에도 구조 자체는 단순했고, 그래서 더더욱 개발자의 입장에서 “최적화가 진짜 필요한지”가 궁금해졌다.

---

## 3. 무엇을 측정하려 했나(목적): “이 최적화가 진짜 이득인가?”

최적화는 “느낌상 좋아질” 수 있지만, 실제로는 반대도 흔하다.

그래서 이번엔 **Baseline vs Optimized(Worker/Time-slicing/Throttle 등)** 를 가능한 한 같은 조건에서 비교하려 했다.

### ✅ 측정 목적(What)

- **Trigger 처리 자체가 얼마나 걸리는지**
- **메시지를 얼마나 빨리 소화하는지**
- **UI 프레임이 얼마나 안정적인지**
- **꼬리 지연(tail latency: p95/p99)이 얼마나 나쁜지**

---

## 4. 어떻게 측정했나(방법): Perf 로그 + FPS/LongTask 관측

### 4-1) Perf 로그에서 측정한 것들

콘솔에 찍은 로그는 대략 이런 형태였다.

```
[PERF:baseline] n=341 avg=3.23ms p95=12.00ms max=57.90ms | msgs=5128
[PERF:optimized] n=39 avg=15.11ms p95=87.40ms max=101.80ms | msgs=2406 chunks=39
```

각 수치의 의미는 아래와 같다.

### ✅ n (Samples, 샘플 수)

- **측정한 배치 처리 횟수**
- Baseline은 작은 배치를 자주 처리하므로 n이 커지고
- Optimized는 배치를 모아서(또는 chunk로) 처리하므로 n이 작아지는 경향이 있다

> ⚠️ 주의: n이 작다고 성능이 좋은 게 아니다. “한 번에 많이 처리했을 뿐”일 수 있다.

### ✅ msgs (Messages, 처리한 메시지 수)

- 측정 구간 동안 **총 처리한 메시지 개수**
- 비교할 때 msgs가 비슷해야 공정하다(= 같은 양을 처리했다는 뜻)

### ✅ avg (평균 처리 시간)

- 배치 1회 처리에 걸린 **평균 시간**
- 다만 UI 체감은 평균보다 **tail(p95/p99)** 에 더 민감한 경우가 많다

### ✅ p95 / p99 (백분위)

- p95: 95%의 배치가 이 시간 안에 끝남
- p99: 99%의 배치가 이 시간 안에 끝남

UI 관점에서 중요한 이유:

- 16ms(60fps) 안에 끝나는 비율이 높아야 버벅임이 줄어든다
- “가끔 엄청 느린 케이스”가 체감을 망친다

### ✅ max (최대값)

- 측정 구간 중 **가장 느렸던 1회**
- max가 크면 “한 번 멈춘 경험”으로 사용자에게 강하게 각인될 수 있다

### ✅ chunks (Optimized에서만)

- time-slicing처럼 “한 배치를 몇 조각으로 나눴는지” 정도를 의미
- chunk 분할 자체도 오버헤드가 될 수 있다

---

### 4-2) FPS 로그에서 측정한 것들

내가 따로 찍은 로그:

```
[TriggerFPS] fps=34 worstFrame=185.3ms
[TriggerFPS] fps=2  worstFrame=736.6ms
```

이건 “처리 속도”가 아니라 **사용자가 느끼는 부드러움**에 훨씬 직결된다.

### ✅ fps

- 초당 프레임 수
- 높을수록 부드럽고, 낮아질수록 끊긴다

### ✅ worstFrame

- 측정 구간에서 **가장 오래 걸린 프레임(렌더/스크립트 포함)**
- 이 값이 큰 순간이 곧 “뚝 멈춘 순간”이다
  (100ms만 넘어도 체감은 거의 프리즈에 가깝다)

---

## 5. 첫 번째 시도: Worker로 분기/필터링을 offload하자

아이디어는 이거였다.

> “View/Chart에서 조건 검사/필터링이 많으니까, 그걸 worker로 빼면 main thread가 가벼워지지 않을까?”

### Worker 구조

- main thread는 worker에 payload를 던짐
- worker는 `datas`를 돌며 `actions`를 생성해서 전달
- main thread는 actions를 받아 handler/store update 수행

Wroker의 코드는 대략 이런 느낌:

```tsx
self.onmessage =(e) => {
const { datas, receivingTabIds, lastClickedId, baseIndex } = e.data;
const actions = [];

for (const itemof datas) {
switch (item.filterType) {
caseFilterType.Log:
        actions.push({type:'LOG', item });
break;

caseFilterType.View:
        actions.push({type:'VIEW_LATEST', item });
if (receivingTabIds.includes(lastClickedId)) {
          actions.push({type:'VIEW_CUR_PRINT', item });
        }
break;

caseFilterType.Chart:
if (receivingTabIds.includes(lastClickedId) && item.baseIndex >= baseIndex) {
          actions.push({type:'CHART', item });
        }
break;
    }
  }

postMessage(actions);
};
```

---

## 6. 결과: “수치상으로는 Worker가 훨씬 느렸다”

실측 로그를 보면 worker쪽이 크게 느렸다.

개선 작업을 이어가도 결론은 비슷했다.

- **Samples**
  - Optimized(큰 배치): 58회
  - Baseline(작은 배치): 268회
- **Messages**
  - 둘 다 ~3,700개 수준 (동일량)
- **Avg / P50 / P95 / P99 / Max**
  - Baseline 압승
- **Throughput**
  - baseline: 337 ops/s
  - optimized: 71 ops/s

결론은 명확했다.

> “이 workload에서는 worker 통신 오버헤드가 병렬 처리 이득을 압도한다.”

---

## 7. “그런데 체감 UI는 좀 부드러운 느낌도…?”의 함정

이상한 포인트가 하나 있었다.

- 수치상으론 optimized/worker가 느린데
- 체감으로는 “버벅임이 줄어든 것 같다”는 순간도 있었다

이 괴리는 **확인하는 지표가 ‘무엇을 측정하는지’** 와 관련이 있었다.

### 7-1) queue 대기 시간/스케줄링 비용이 포함된다

optimized 방식은 대개

- 데이터를 모으고(queue)
- 프레임 단위로 나눠 처리(time-slicing)
- 혹은 worker round-trip

이 과정에서 **실제 연산 시간 외의 ‘기다리는 시간’** 이 들어가면서 perf 상 시간은 커질 수 있다.

### 7-2) FPS는 평균이 아니라 Tail이 결정한다

사람이 느끼는 버벅임은 평균이 아니라 **worstFrame / p95~p99**가 좌우한다.

실제 로그에서도 optimized는 최악 프레임이 크게 튀었다.

```
[TriggerFPS] fps=2 worstFrame=736.6ms
```

이 한 방이 체감에서 “멈췄다”로 남는다.

---

## 8. 두 번째 시도: Throttle로 state 변경을 줄이면 빨라지지 않을까?

특히 chart broadcast가 많아서 “20fps 정도로 제한하면 좋아 보였다.”

```tsx
const throttledBroadcast = throttle((channel, payload) => {
  broadcastService.broadcast(channel, payload);
}, 50); // 20fps
```

직관은 맞아 보인다.

> “state 변경을 줄이면 리렌더가 줄고 빨라지겠지?”

그런데 실제 수치는 더 좋아지지 않았다.

### 왜? (내가 내린 결론 + 추가 의견)

### 8-1) “state 변경 수”가 병목이 아닐 수 있다

- handler 내부 store update가 무겁거나
- payload 생성/가공이 무겁거나
- tree 변환/대용량 객체 가공이 무거우면
  broadcast 횟수만 줄여도 전체 비용은 크게 줄지 않는다.

### 8-2) throttle 자체도 비용이 있다

timer/args 저장/클로저 등 오버헤드가 있고, 작은 배치에서 특히 손해가 커질 수 있다.

### 8-3) React/Zustand는 이미 어느 정도 batching이 된다

React 18 이후 batching이 강화되었고, 상태 업데이트도 사용 방식에 따라 자동으로 묶이는 경우가 있다.

즉 “또 배치/또 throttle”은 중복 최적화가 되어 손해가 날 수 있다.

---

## 9. 세 번째 시도: Frame Time-slicing (requestAnimationFrame 기반 분할)

이번엔 접근을 바꿨다.

> “평균이 조금 느려져도 좋다. 대신 UI가 끊기지만 않으면 된다.”

프레임 예산(`frameBudgetMs`)을 정해 분할 처리하고,

`unstable_batchedUpdates`로 React 업데이트도 묶어보았다.

중간에 `unstable_batchedUpdates` 관련 이슈도 있었지만 결국 해결했다.

### 그런데…

최종적으로 baseline이 수치상 계속 이겼다.

---

## 10. “Baseline이 빠른데, 왜 버벅임이 있었나?”

정리해보면 baseline은 평균적으로 아주 빠르다.

- avg 2~3ms
- p95 12ms (16ms 목표에 근접/달성)

문제는 **p99/max 구간에서 50~70ms 튀는 순간**이 있다는 점이다. 보통 이런 순간이 원인이다:

- datas가 큰 배치로 몰려 들어오는 순간
- handler가 큰 객체를 만들거나 깊은 복사를 하는 순간
- GC가 터지는 순간
- 특정 viewType이 유독 무거운 업데이트를 수행하는 순간 (tree 변환, 대용량 가공 등)

즉:

> baseline의 문제는 “항상 느림”이 아니라 “가끔 한 방이 큼”이다.

---

## 11. 최종 방향성: Baseline 유지 + “큰 배치일 때만” 보호장치

결론적으로 가장 합리적이었던 전략은 이거다.

- **기본은 baseline처럼 즉시 처리**
- 다만 **datas가 일정 크기 이상으로 커질 때만** 분할 처리/프레임 분산 같은 보호장치 발동

예시:

```tsx
if (datas.length > 200) {
  // chunk 처리 or time-slice
} else {
  // baseline 즉시 처리
}
```

이 방식이 좋은 이유:

- 평소(대부분)는 baseline의 빠른 경로를 탄다
- 위험한 순간(큰 배치 몰림)만 방어한다
- “최적화 오버헤드”를 항상 지불하지 않는다

---

## 12. 성능 측정: 어떻게 재고, 뭘 봐야 하나?

이번 작업에서 확실히 배운 점은:

> 성능은 “체감”과 “숫자” 둘 다 봐야 하고, 숫자도 “무슨 숫자냐”가 중요하다.

### 우리가 본 지표들

### 처리 시간

- avg / p50 / p95 / p99 / max
- **UI 체감은 p95~p99 + max가 중요**
- avg만 보면 속기 쉽다

### Samples

- baseline이 더 자주 호출되었다
- optimized는 배치를 크게 묶어 호출 횟수가 적었다
  → 호출 횟수가 적다고 빠른 게 아니다(한 번에 더 많이 처리하면 더 느릴 수 있음)

### Throughput

- baseline 337 ops/s vs optimized 71 ops/s
  → baseline이 처리량 측면에서도 안정적이었다

### FPS / worstFrame

- fps가 낮고 worstFrame이 크면 체감 버벅임이 생긴다
- worstFrame은 “한 번 멈춘 순간”을 그대로 보여준다

---

## 13. “왜 최적화했는데 더 느려졌나?” 정리 (내 의견 + 최종 결론)

내 결론은 이렇다.

### 13-1) 오버헤드가 이득보다 컸다

worker, queue, slice, rAF, time-slicing…

이 모든 건 “추가 구조”이고, 구조 자체가 비용이다.

현재 workload는

- 평균 배치가 아주 큰 편이 아니고 (10~20개 수준이 자주 들어옴)
- handler가 즉시 처리해도 충분히 빠른 편이라
  “추가 구조 비용”이 오히려 총 비용을 키웠다.

### 13-2) 진짜 병목은 분기/조건이 아니라 handler 내부일 가능성이 크다

worker가 분기만 대신해도, handler/store update가 무거우면 근본 병목은 그대로다.

### 13-3) React batching은 이미 생각보다 잘 되어 있다

React 18 환경에서 같은 tick 내 setState는 배치되는 경우가 많다.

내가 직접 배치를 넣은 것이 중복 최적화가 되었을 수 있다.

### 13-4) UI 부드러움의 핵심은 평균이 아니라 Tail

이번 실측에서는 optimized가 tail(p95/p99/worstFrame)까지 baseline보다 좋지 않았다.

그래서 더더욱 baseline 유지가 맞았다.

---

## 14. 최종 결론

### ✅ 지금 상황에서의 최선

- **Baseline 유지가 정답**
- worker는 이 workload에서는 손해
- throttle/time-slicing은 “항상 켜는 최적화”가 아니라
  “필요할 때만 발동하는 보호장치”로 쓰는 게 더 합리적

### ✅ 앞으로의 개선 포인트

Baseline이 이미 p95 12ms라 충분히 좋다.

그래도 p99/max(50~70ms)를 줄이고 싶다면:

- 큰 배치일 때만 chunk로 쪼개기
- 특정 viewType/chartType 핫스팟 프로파일링
- tree 변환 등 무거운 구간에 캐시/구조 개선 고려

---

## 15. 다음에 내가 한다면(추천 체크리스트)

1. datas가 커질 때만 time-slice 발동
2. 지표는 avg보다 **p95/p99 + worstFrame** 중심으로 본다
3. 최적화 대상은 분기 로직이 아니라 **handler 내부 핫스팟**
4. 필요하면 “전체 pipeline”이 아니라 “특정 핫스팟만” worker로 뺀다

---

## 덤: 이번 삽질에서 얻은 교훈

> “최적화는 멋진 아이디어가 아니라, 측정 가능한 문제를 해결하는 과정이다.”

worker도, batching도, throttle도 다 멋있다.

근데 내 시스템에서는 baseline이 가장 빠르다.

그리고 이건 실패가 아니라, **제대로 된 결론** 이며 나의 삽질은 나중에 다른 문제를 위한 거름을 옮긴 과정이다.
