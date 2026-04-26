자바스크립트 이벤트 루프를 공부하다 보면 꼭 이런 혼란이 온다.

> “V8이 이벤트 루프 돌리는 거 아냐?”
>
> “setTimeout은 브라우저가 하는 거라며?”
>
> “ECMAScript? 그건 또 뭐야…?”

검색해 보면 “매크로 태스크 / 마이크로태스크 / 이벤트 루프” 설명은 많은데,

**“누가 뭘 하는지”** 에 대한 계층 구조를 정확히 찍어주는 설명은 의외로 잘 안 보인다.

그래서 이 글에서는 이벤트 루프 얘기하기 전에, 먼저 이 셋을 분리해서 정리해보려고 한다.

- **ECMAScript 스펙**
- **JS 엔진(V8 등)**
- **호스트 환경(브라우저, Node.js 등)**

이 세 개를 구분해서 보면

Promise, async/await, setTimeout, Node의 libuv까지 한 번에 머릿속에 정리가 된다.

---

## 0. 큰 그림 먼저: 세 레이어를 한 방에 보고 가기

먼저 전체 구조를 한 컷으로 보면:

```
[ECMAScript 스펙]
  - 자바스크립트 언어의 "룰북" (문서)

        ↓ 이걸 구현한 게

[JS 엔진 (V8, SpiderMonkey, JavaScriptCore...)]
  - 파서, 컴파일러(JIT), 실행기
  - 콜 스택, 힙, GC
  - Promise, microtask queue 구현

        ↓ 이 엔진을 품고 돌리는

[호스트 환경 (브라우저, Node.js, Deno...)]
  - 이벤트 루프 (타이머, I/O, UI 이벤트 처리)
  - DOM, setTimeout, fetch, fs, net, ...
  - "지금 이 콜백 실행해줘"라고 엔진에게 부탁
```

조금 더 구체적으로 말하면:

- **ECMAScript**: “자바스크립트는 이렇게 동작해야 한다”라고 적힌 **설명서/규격 문서**
- **V8 같은 엔진**: 그 규격을 실제 코드로 구현한 **C++ 프로그램**
- **브라우저/Node 같은 호스트**: OS 위에서 돌아가면서,
  **엔진을 안에 품고, 이벤트 루프와 각종 API(DOM/타이머/네트워크 등)를 제공하는 껍데기**

여기까지만 잡혀도, “누가 이벤트 루프를 돌리냐”, “setTimeout은 어디 꺼냐” 같은 질문이 훨씬 덜 헷갈린다.

---

## 1. ECMAScript: 자바스크립트의 “법전”

### 1-1. ECMAScript가 뭔데?

우리가 보통 “자바스크립트”라고 부르는 언어의 공식 이름이 사실 **ECMAScript**다.

- TC39라는 위원회가 매년 ECMAScript 2020, 2021, 2022… 이런 식으로 스펙을 찍어낸다.
- 이 문서 안에는:
  - 문법: `if`, `for`, `function`, `class`, `async/await`…
  - 타입 시스템: Number, String, Object, Symbol, BigInt…
  - 빌트인 객체: `Array.prototype.map`, `Promise`, `Map`, `Set`…
  - 심지어 **Promise가 resolve 되면 어떤 “Job”이 큐에 들어가고, 언제 실행되어야 하는지**까지
    알고리즘 수준으로 적혀 있다.

중요한 포인트:

> ECMAScript는 문서다.
>
> 코드가 아니다.

그래서 여기에는 “타이머를 이런 OS API로 구현해라” 이런 말은 없다.

단지:

> “Promise가 resolve되면 PromiseReactionJob을 Job Queue에 추가해라”

같은 말만 써 있고, 그 Job Queue를 **어떻게 / 언제 처리할지**는

엔진/호스트 쪽에서 구현해야 할 내용이다.

### 1-2. ECMAScript가 **하지 않는 것들**

ECMAScript 스펙에는 **다음이 없다**:

- `window`, `document`, `addEventListener`
- `setTimeout`, `setInterval`
- `XMLHttpRequest`, `fetch`
- DOM, CSS, Canvas
- 파일 시스템, TCP 소켓, HTTP 서버…

이건 모두 “언어”가 아니라 **플랫폼 API**다.

그래서 구조를 이렇게 볼 수 있다.

- ECMAScript: 순수 언어 스펙
- 그 위에 브라우저/Node가 **자기만의 API**를 얹어서 “환경”을 만든다.

---

## 2. JS 엔진(V8 등): 스펙을 코드로 만든 C++ 프로그램

이제 두 번째 레이어.

### 2-1. V8은 정확히 뭔가?

V8은 구글이 만든 **자바스크립트 엔진**이다.

- 크롬, 엣지(요즘), Node.js, Deno 등이 V8을 안에 품고 있다.
- 하는 일:
  1. JS 소스 코드를 문자열로 입력받는다.
  2. 토큰화/파싱 → AST 생성.
  3. 바이트코드 / 머신코드로 **컴파일(JIT)**.
  4. 런타임에 그 코드를 실행하면서 콜 스택/힙/GC 관리.
  5. `Promise`, `Map`, `Set`, `Array.prototype.map` 같은 빌트인 동작 구현.
  6. **Promise Job Queue / Microtask Queue**도 여기서 관리.

한 줄로 말하면:

> “ECMAScript 스펙에 적힌 규칙을
>
> 실제로 지켜가며 자바스크립트를 실행해주는 C++ 프로그램”

우리가 흔히 “JS가 컴파일된다”, “엔진이 최적화한다”고 말하는 대상이 바로 이 엔진이다.

### 2-2. V8이 **모르는** 것들

이게 포인트다:

> V8은 setTimeout, DOM, 네트워크, 이벤트 루프 전체를 혼자서 책임지지 않는다.

V8은:

- JS 코드 파싱/실행
- Promise 상태 관리, microtask queue, GC 등 “언어 레벨 런타임” 구현

까지 담당하고,

- **“언제 어떤 JS를 실행해야 하는지”**,
- **“타이머/네트워크/이벤트에서 들어오는 콜백은 언제 실행해야 하는지”**

는 **호스트(브라우저/Node)** 가 결정한다.

즉, V8은 “실행기”,

브라우저/Node는 “언제 무엇을 실행시킬지 스케줄링하는 운영자” 역할.

---

## 3. 호스트 환경: 브라우저, Node.js, Deno…

세 번째 레이어가 여기다.

### 3-1. 호스트 환경의 역할

브라우저(Chrome, Firefox, Safari…)나 Node.js는 한마디로

> OS 위에서 돌아가는 큰 프로그램이고,
>
> 그 안에 V8 같은 엔진을 **임베딩(embed)** 해서 JS를 실행한다.

이 호스트 환경이 하는 일은 대략 이렇다:

1. **엔진(V8)을 초기화하고, JS 코드 실행**
   - 예: `<script>` 태그 실행, Node.js에서 `node app.js` 실행
2. **플랫폼 API 제공**
   - 브라우저:
     - DOM, `window`, `document`, `addEventListener`, `fetch`, `setTimeout`…
   - Node.js:
     - `fs`, `http`, `net`, `setTimeout`(libuv 기반), `process`…
3. **이벤트 루프와 Task 큐 관리**
   - 타이머, 네트워크, 사용자 입력 등 시스템 이벤트를 감시하고
   - 콜백을 Task/Microtask 큐에 쌓아두었다가,
   - 적절한 타이밍에 **V8에 “이 콜백 실행해줘”라고 요청**한다.

즉, 호스트는:

> **“세상의 모든 입력(I/O, 타이머, 사용자 이벤트)을 받아서 자바스크립트 콜백 호출로 변환해주는 거대한 어댑터”** 라고 보면 된다.

### 3-2. 브라우저 엔진 vs JS 엔진

여기서 헷갈리기 쉬운 개념:

- **브라우저 엔진**(예: Blink, WebKit, Gecko)은 사실 여러 컴포넌트 묶음이다.
  - **렌더링 엔진**: HTML 파싱, DOM, CSS, 레이아웃, 페인트
  - **JS 엔진**: V8(Chrome/Edge), SpiderMonkey(Firefox), JavaScriptCore(Safari)
  - 네트워크, GPU, 프로세스 관리, 등등…
- 즉:
  - V8 = 브라우저 엔진 안에서 “JS만 담당하는 모듈”
  - 브라우저 엔진 = V8 + 렌더링 + DOM + 이벤트 루프… 전체 덩어리

Node.js 쪽은 조금 다르지만 구조는 비슷하다.

- JS 엔진: V8
- 이벤트 루프 + IO: libuv
- 파일 시스템, HTTP, 등: Node Core 모듈

---

## 4. 세 레이어를 “이벤트 루프” 관점에서 다시 연결해보기

이제 진짜 하고 싶은 이야기:

**이 세 레벨이 어떻게 합쳐져서 이벤트 루프/비동기 동작을 만드는가?**

### 4-1. ECMAScript 레벨에서 보는 비동기: Job Queue

ECMAScript는 이벤트 루프를 직접 구현하지 않는다. 대신 이렇게 말한다:

- “Promise가 resolve되면 `PromiseReactionJob`이라는 Job을 만들어 Job Queue에 넣어라.”
- “호스트는 적절한 타이밍에 이 Job들을 꺼내 실행해야 한다.”

여기서 말하는 Job이 바로 우리가 흔히 부르는 **마이크로태스크**의 추상 모델이다.

즉 ECMAScript는:

- “어떤 일이 ‘나중에 실행되어야 하는지’”를 정의하고
- “어떤 순서로 Job을 처리해야 하는지”를 알고리즘으로 적어둔다.

### 4-2. 엔진(V8)의 역할: Microtask Queue 구현

V8은 ECMAScript에서 요구한 Job Queue를 실제로 구현한다.

- `Promise.then`, `queueMicrotask`가 호출되면:
  - V8 내부의 microtask queue에 콜백과 관련 데이터가 쌓인다.
- 그리고 호스트가 “지금 microtask 처리해”라고 호출하면
  - V8은 queue가 빌 때까지 그 Job들을 처리한다.

여기서 중요한 구조:

> “microtask queue”라는 구조는 엔진이 갖고 있고,
> “언제 비울지” 결정하는 것은 호스트다.

### 4-3. 호스트(브라우저)의 역할: Task → Microtask → 렌더링

브라우저 이벤트 루프는 대략 이렇게 돈다:

1. **Task 하나 선택**
   - 예: 타이머 콜백, 클릭 이벤트 콜백, `<script>` 실행 등
2. 그 Task 안의 JS를 V8에게 실행시키기
   - 동기 코드, 그 안에서 Promise.then, queueMicrotask 등록 가능
3. Task 실행이 끝나 콜 스택이 비면
4. **이제 microtask 처리 타이밍**
   - V8의 microtask queue를 비움 (Promise.then, queueMicrotask 등)
5. 렌더링 타이밍이면
   - DOM 변경사항을 기반으로 레이아웃/페인트
6. 다음 Task로

그래서 흔히 나오는 패턴:

```jsx
setTimeout(() => console.log("macro"), 0);
Promise.resolve().then(() => console.log("micro"));
```

실행 순서:

1. 현재 스크립트(하나의 Task) 실행
   - Promise.then → microtask queue
   - setTimeout → Task queue
2. Task 종료 → **microtask queue 비움** → `"micro"`
3. 그 다음 Task에서 `"macro"`

→ **항상 `Promise.then`이 `setTimeout(0)`보다 먼저**인 이유가 이 구조에서 나온다.

Node.js도 구조는 비슷하지만,

- libuv 이벤트 루프가 `timers → poll → check` 같은 phase를 가지고 있고
- 각 phase 끝에서 `process.nextTick` queue와 V8 microtask queue를 비워주는 식으로 동작한다.

---

## 5. 정리: “누가 뭘 하는지”만 정확히 기억하면 된다

다시 한 번, 핵심만 정리해보면:

### 1) ECMAScript 스펙

- 자바스크립트 언어의 **룰북/문서**
- “Promise가 resolve되면 이런 Job을 큐에 넣어야 한다”,
  “Job은 이렇게 run-to-completion 해야 한다” 정도까지 정의
- DOM, 브라우저, setTimeout, 파일 IO에 대한 건 **전혀 모른다**

### 2) JS 엔진(V8 등)

- ECMAScript 스펙을 실제 C++ 코드로 구현한 **실행기**
- 파싱/컴파일/JIT/GC, `Promise`, microtask queue 구현
- Promise.then/queueMicrotask → 엔진 내부 microtask queue에 쌓음
- 하지만:
  - **언제** 그 큐를 비울지는 호스트가 정해준 타이밍에 맞춰 호출해야 함

### 3) 호스트 환경(브라우저, Node.js…)

- OS 위에서 돌아가는 큰 프로그램
- 엔진(V8)을 심어서 JS를 실행시키고
- 이벤트 루프 + Task 큐를 직접 관리
- 타이머/네트워크/사용자 입력 등을 감시하다가,
  - “이 콜백 실행할 차례야” → V8에 JS 콜백 실행 요청
- 브라우저: DOM/렌더링 + 각종 Web API 제공
- Node: 파일 시스템, 네트워크, 서버 API 등 제공

---

## 6. 그래서 앞으로 이벤트 루프 공부할 때는…

이제 문서나 글을 읽을 때 이런 식으로 구분해서 보는 게 좋다.

- “ECMAScript Job Queue” → **언어 스펙 레벨 이야기**
- “Promise.then, microtask queue” → **엔진(V8) 레벨 구현 + 호스트 타이밍**
- “setTimeout, 클릭 이벤트, libuv phase” → **호스트(브라우저/Node) 레벨 이야기**

이 세 레벨만 분리해서 생각해도:

- 왜 Promise.then이 setTimeout보다 먼저인지
- 왜 브라우저/Node 이벤트 루프가 서로 조금씩 다르게 설명되는지
- 왜 “V8 혼자 이벤트 루프를 돌린다”고 말하면 틀린 건지

이런 것들이 전부 납득이 갈 거다.
