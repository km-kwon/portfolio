React에서 Zustand를 쓰다 보면 “상태는 분명 바뀌었는데 이벤트 핸들러가 옛날 값을 찍는다” 같은 현상을 한 번쯤 만나게 된다.
처음엔 **“zustand가 렌더 안 타나?”**, **“React가 업데이트 안 하나?”** 같은 느낌인데… 결국 원인은 React의 아주 고전적인 함정

> **stale closure**
> (리렌더로 값은 바뀌었는데, 콜백 함수는 옛날 값을 클로저로 물고 있는 상태)

이 글은 내가 실제로 겪었던 stale closure 케이스를 기준으로,
**왜 이런 일이 생기는지(메모리/렌더 관점)**,
그리고 **Zustand에서 이걸 구조적으로 차단하는 패턴(getState)** 까지 정리한 글이다.

---

## 0. 상황: “값은 바뀌는데 핸들러는 옛날 값만 본다”

예를 들어 이런 코드가 있다고 치자.

```tsx
const value = useStore((s) => s.value);

const handle = useCallback(() => {
  console.log(value);
}, []);
```

`value`가 바뀌면 컴포넌트는 리렌더가 되고 화면도 바뀐다.
근데 `handle()`을 눌러보면 콘솔엔 **첫 렌더 때 value만 계속 찍힌다.**

“아니… UI는 바뀌는데 왜 handle만 과거에 살고 있냐?”

이게 stale closure다.

---

## 1. stale closure의 본질: “콜백은 과거 렌더의 메모리를 들고 있다”

React 컴포넌트는 리렌더될 때마다 **함수 본문을 다시 실행**한다.

즉 이 코드:

```tsx
function Component() {
  const value = useStore((s) => s.value);
  // ...
}
```

는 `value`가 바뀌면 `Component()`가 다시 실행되며 **새로운 렌더 컨텍스트**가 만들어진다.

여기서 중요한 포인트:

- 렌더마다 `value`는 새로운 값으로 계산된다.
- 렌더마다 `handle` 같은 함수도 “원칙적으로” 새로 만들어질 수 있다.
- 그런데 `useCallback([])`은 “함수를 재생성하지 말아라”라는 강력한 힌트를 준다.

그래서 결과적으로 이런 일이 발생한다.

### ✅ `useCallback([])`이 하는 일

- 첫 렌더 시점에 `handle`을 만들고
- 그 `handle`을 계속 재사용한다(참조 안정성 유지)

### ✅ closure가 하는 일

- `handle` 내부에서 참조한 `value`는
- **handle이 생성되던 시점의 렌더 스코프 값을 캡처한다**

즉:

> `handle`은 “첫 렌더의 value”를 클로저로 물고 있고,
> `useCallback([])`은 그 함수를 계속 재사용하게 만들기 때문에
> 이후 렌더에서 `value`가 바뀌어도 `handle`은 갱신되지 않는다.

**stale closure = “함수가 만들어질 당시의 스냅샷을 계속 들고 있음”**
이게 핵심이다.

---

## 2. 의존성 배열로 해결: 가장 정석, 가장 흔한 방식

정석은 이거다.

```tsx
const handle = useCallback(() => {
  console.log(value);
}, [value]);
```

`value`가 바뀌면 콜백도 다시 만들어지고,
새 콜백은 최신 `value`를 클로저로 캡처한다.

### 장점

- React 방식에 가장 충실
- 코드 의도가 명확 (`handle`이 `value`에 의존한다)

### 단점(현업에서 자주 문제되는 포인트)

- 콜백이 자주 재생성됨
- 이 콜백이 props로 내려가거나, memoized component의 비교 기준이 되면
  **리렌더링 폭탄**으로 이어질 수 있음
- 특히 `value`가 빈번히 변하는 값이면(예: 스트리밍 로그, 입력, 마우스, 타이머)
  `[value]`는 사실상 “useCallback 쓰는 의미가 줄어든다”

결국 “정석이긴 한데, 구조적으로 이게 맞나?”라는 생각이 든다.

---

## 3. Zustand에서 `getState()`를 쓰면 왜 stale closure가 구조적으로 사라질까?

여기서 Zustand가 등장한다.

Zustand는 React state처럼 “컴포넌트 내부 상태”가 아니라,
**컴포넌트 바깥 전역 store 객체**에 상태가 존재한다.

중요한 차이:

### React state / selector 기반 값

- 렌더 시점에 선택되고(=스냅샷)
- 그 렌더 스코프에 캡처될 수 있음(=클로저 위험)

### Zustand store (`useStore.getState()`)

- React 렌더 스코프와 무관하게
- store 객체에서 “지금 이 순간의 값”을 읽는다

즉 이런 코드:

```tsx
const handle = useCallback(() => {
  const current = useStore.getState().value;
  console.log(current);
}, []);
```

여기서 `handle`은 첫 렌더 때 만들어지고 계속 재사용되지만,
**매번 실행될 때마다 store에서 최신 값을 조회**한다.

### ✅ 이 방식이 stale closure를 원천 차단하는 이유

stale closure가 성립하려면 조건이 필요하다:

- 함수 내부에서 “렌더 스코프 변수(value)”를 참조해야 한다

근데 `getState()` 방식은 아예 렌더 스코프 변수를 참조하지 않는다.

> 클로저로 `value`를 캡처하지 않고
> 매번 글로벌 store에서 “현재 값”을 조회한다.

그래서 구조적으로 stale closure가 발생할 여지가 없다.

---

## 4. 메모리/구조 관점으로 더 정확히 말하면

여기서 “전역 힙(global heap)” 같은 표현을 쓰면 좀 더 정확해진다.

### React 값(`const value = useStore(selector)`)

- 렌더 프레임 안에서 생성된 “스냅샷”
- 클로저가 캡처하는 대상
- `useCallback([])` 같은 것과 결합되면 stale 가능

### Zustand store (`useStore.getState()`)

- 컴포넌트 외부의 store 객체가 들고 있는 상태
- 함수 실행 시점에 store를 조회
- 콜백이 오래 살아도 상관없음 (항상 현재 store를 읽으니까)

정리하면:

> React 렌더 스코프 안의 값은 “캡처되는 값”이고
> Zustand `getState()`는 “조회되는 값”이다.

캡처(capture) vs 조회(read)의 차이가 곧 stale 여부를 결정한다.

---

## 5. 그럼 무조건 `getState()`가 정답이냐? (주의할 점)

여기서 한 번 더 전문가 관점으로 정리하면,
`getState()`가 만능은 아니고 “사용처”가 있다.

### ✅ `getState()`가 특히 좋은 케이스

- 이벤트 핸들러 (onClick, onKeyDown, onSubmit 등)
- setInterval / setTimeout 콜백
- 외부 라이브러리 콜백(WebSocket, worker, native event)
- 리렌더 사이클과 독립적인 로직(업로드 진행률, 스트리밍, polling 등)

즉 “콜백이 오래 살아남고, 최신 상태가 꼭 필요”한 영역에 최고다.

### ⚠️ 주의: React 렌더와 store 읽기의 타이밍이 다를 수 있다

React는 concurrent 모드에서 렌더를 지연/중단/재시도할 수 있다.
그런데 `getState()`는 “그 순간 store의 실제 값”을 읽는다.

그래서:

- “렌더에 반영된 값”과
- “getState로 읽은 값”이
  아주 특정 상황에서 **타이밍 차이**가 날 수 있다.

다만 일반적인 UI 이벤트/상호작용 수준에서는 실무적으로 큰 문제는 잘 안 생기고,
오히려 이벤트 핸들러는 “최신 값”이 필요한 경우가 더 많다.

---

## 6. 내가 정리한 실전 패턴들

### 패턴 A: “핸들러는 getState로 최신값 읽고, 렌더는 selector로”

가장 현실적인 하이브리드.

```tsx
const value = useStore((s) => s.value);

const handle = useCallback(() => {
  const current = useStore.getState().value;
  // 최신 값 기준으로 처리
}, []);
```

- UI는 `value`로 렌더 (React 방식)
- 핸들러는 `getState()`로 최신 값 보장

### 패턴 B: “setter도 getState로 안정화”

setter가 store에 들어있으면 그 참조는 보통 안정적이지만,
복잡해질수록 안정화를 위해 `getState()`를 쓰기도 한다.

```tsx
const handle = useCallback(() => {
  const { value, setValue } = useStore.getState();
  setValue(value + 1);
}, []);
```

---

## 7. 결론: “클로저를 고정시키는 게 문제가 아니라, 캡처된 값을 쓰는 게 문제다”

이 글의 결론을 한 문장으로 줄이면 이거다.

> stale closure의 원인은 `useCallback`이 아니라
> `useCallback`이 “캡처된 값”을 갱신하지 못하게 만드는 구조다.

그래서 해결책도 2가지 계열로 나뉜다.

### 1) React 정석: 의존성 배열로 캡처를 최신화

- `useCallback(fn, [value])`
- 값이 바뀌면 fn도 바뀐다

### 2) Zustand 실전: 캡처를 제거하고 store에서 직접 조회

- `useStore.getState()`
- fn은 고정돼도 내부는 매번 최신 조회

---

# 최종 요약

- React의 `useCallback([])`은 콜백을 고정하며, 콜백 내부에서 참조하는 값은 “생성 시점 렌더 스코프”를 클로저로 캡처한다.
- 따라서 리렌더 이후 값이 바뀌어도 콜백은 과거 값을 참조하는 stale closure가 발생할 수 있다.
- 일반적인 해결은 의존성 배열에 값을 넣어 콜백을 재생성하는 것이다.
- Zustand에서는 `getState()`를 통해 store에서 최신 값을 직접 조회함으로써, 클로저 캡처 구조 자체를 제거할 수 있다.
- 결과적으로 콜백을 안정적으로 유지하면서도 최신 Zustand 상태를 사용할 수 있다.
