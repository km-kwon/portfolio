# useState → useReducer → 도메인  분리 → Store 까지의 이야기

---

> 상태 라이브러리는 언제든 도입할 수 있다.
근데 “내 코드가 그때 덜 아프게 옮겨질 수 있는 구조인가?”는 완전히 다른 얘기다.
이번 리팩터링의 진짜 수확은 미래의 마이그레이션 레일을 깔아둔 것이었다.
> 

---

## 0. 시작: 중첩 상태를 useState로 건드리기 시작했을 때

필터 편집 상태는 아래처럼 **중첩된 구조**였다.

```tsx
FilterItem = {
  isChecked: false,
  name: '',
  type: {
    filter: { value: false },
    marker: { value: false, color: '#ffffff' },
  },
  applicationId: { value: '', type: 'none' },
  contextId: { value: '', type: 'none' },
  payLoad: { value: '', type: 'none' },
};
```

처음엔 `useState`로 갔다. 그런데 토글 하나만 구현해도 JSX가 금방 이렇게 된다.

```tsx
<input
  onClick={() => {
    setTempSelectedItem({
      ...tempSelectedItem,
      type: {
        ...tempSelectedItem.type,
        marker: {
          ...tempSelectedItem.type.marker,
          value: !tempSelectedItem.type.marker.value,
        },
      },
    });
  }}
/>
```

### 보기만 해도 복잡하며, UI가 하나의 로직처럼 보인다.

- JSX가 길어지고, UI 구조가 로직에 묻힘
- 중첩 스프레드가 복붙이 되면서 오타/누락 위험 급증
- 상태 변경 규칙이 각 컴포넌트/핸들러에 흩어져 추적 불가
- 테스트하려면 UI 이벤트부터 타야 해서 단위 테스트가 어려움

여기서 느낀 건 단순했다.

> 상태 변경 규칙을 UI에서 떼어내야 한다.
“어디서 어떻게 바뀌는가”를 한 곳에서 관리해야 한다.
> 

---

## 1. 전환 1: useReducer 도입 — “변경 규칙을 중앙화”

그래서 `useReducer`를 도입했다. 목적은 딱 하나.

> JSX는 dispatch만 한다.
변경 규칙은 reducer가 가진다.
> 

액션을 명세로 만들고 reducer에서만 상태를 바꾸게 했다.

```tsx
const selectedItemReducer = (state: FilterItem[], action: EditAction): FilterItem[] => {
  switch (action.type) {
    case 'INIT': return ...
    case 'CHECK_ITEM': return ...
    case 'CHANGE_ITEM_NAME': return ...
    case 'TYPE_TOGGLE': return ...
    case 'CHANGE_EXTRA_INFO': return ...
    case 'ADD_ITEM': return ...
    case 'DELETE_ITEM': return ...
    default: return state
  }
};
```

JSX는 이렇게 바뀌었다.

```tsx
<input
  type="checkbox"
  checked={item.type.marker.value}
  onChange={() =>
    dispatch({ type: 'TYPE_TOGGLE', payload: { id: item.id, key: 'marker' } })
  }
/>
```

### 이때부터

- UI가 다시 “UI”처럼 보이기 시작
- 액션이 명세가 되어 자동완성/오타 방지
- dispatch 로그/액션 기준 디버깅을 통해 상태 추적 용이
- 단위 테스트가 reducer 테스트로 간소화

---

## 2. 하지만: reducer가 거대한 switch가 되면 또 다른 지옥?

useReducer로 UI 직관성은 해결됐는데, 다음 불안이 왔다.

> “액션이 늘면 switch-case가 커진다.
이게 또 관리 지옥이 되지 않을까”
> 

그리고 이런 질문이 생겼다.

> reducer 로직을 외부 함수로 분리하면
JSX 핸들러 함수를 분리하는 거랑 뭐가 다르지?
> 

그렇기에 여기까지만 일단 작성했을 때 중요한 점은 진입 점이라는 것이다.

- JSX에서 함수로 빼면 로직이 다시 곳곳에 퍼질 수 있음 (분산 구조 유지)
- reducer에서 함수로 빼면 여전히 “상태 변경은 reducer를 통해서만” 발생 (집중 구조 유지)

즉, reducer의 switch는 “나쁜 것”이 아니라 정석이고
문제는 **응집도 없이 한 파일에 다 때려 넣는 것**이 진짜 문제임을 알게 되었다

---

## 3. 전환 2(핵심): 도메인 단위 reducer 분리 — “응집도 회복”

그래서 선택한 게 “도메인 분리”였다.

Filter 편집을 자세히 보면, 사실 하나의 덩어리가 아니라 도메인이 있다.

- **item CRUD**: 추가/삭제
- **item 기본 편집**: 체크, 이름 변경
- **type 도메인**: filter/marker 토글, marker color
- **extraInfo 도메인**: applicationId/contextId/payload value/type

파일 구조를 이렇게 가져갔다. 

```
domain/filter/
  actions.ts
  reducer.ts                // top reducer: 액션 라우팅만
  reducers/
    itemCrud.ts
    itemEdit.ts
    type.ts
    extraInfo.ts
```

top reducer는 “분배”만 한다.

```tsx
export function selectedItemReducer(state: FilterItem[], action: EditAction) {
  switch (action.type) {
    case 'ADD_ITEM':
    case 'DELETE_ITEM':
      return reduceItemCrud(state, action);

    case 'CHECK_ITEM':
    case 'CHANGE_ITEM_NAME':
      return reduceItemEdit(state, action);

    case 'TYPE_TOGGLE':
    case 'CHANGE_MARKER_COLOR':
      return reduceType(state, action);

    case 'CHANGE_EXTRA_INFO':
    case 'CHANGE_EXTRA_INFO_TYPE':
      return reduceExtraInfo(state, action);

    default:
      return state;
  }
}
```

### 여기서 얻은 이점

- bug가 나면 “어느 도메인 파일을 보면 되는지”가 명확
- 코드 리뷰가 쉬워짐 (책임이 명확)
- 단위 테스트가 도메인 단위로 쪼개짐 (type 테스트, extraInfo 테스트)
- 요구사항 확장 시 “도메인 내부에서만” 확장됨

---

## 4. 이 구조가 미래 Store 마이그레이션을 쉽게 만든다

> 도메인 단위 reducer 분리는 “지금 JSX를 깔끔하게 만드는 리팩터링”으로 끝나지 않는다.
나중에 Zustand/Redux 같은 store로 확장할 때, 마이그레이션을 재작성(rewrite)이 아니라 재배선(re-wiring)으로 바꿔준다.
> 

많은 사람들이 store 도입을 “전역 상태로 올리는 일”로 생각하지만, 실제로 어려운 지점은 그게 아니다.
진짜 비용을 만드는 건 보통 아래 네 가지다.

- 상태 변경 규칙이 UI(컴포넌트/핸들러) 여기저기에 퍼져 있는가?
- 변경 규칙이 **순수 함수(도메인 로직)** 로 분리되어 있는가?
- “무슨 변경이 가능한지”가 액션/명세로 정리되어 있는가?
- 도메인 경계(책임 단위)가 명확히 세워져 있는가?

도메인 단위로 reducer를 분리해 둔 구조는, 이미 위 조건들을 상당 부분 충족한다.
그래서 store로 가는 길이 “큰 수술”이 아니라 “단계적 전환”이 된다.

---

### 4.1 비즈니스 로직이 프레임워크(useReducer)로부터 독립된다

도메인 단위로 reducer를 나눠둔 핵심 가치는 “파일을 예쁘게 쪼갰다”가 아니다.

> 상태 변경 규칙(비즈니스 로직)을 UI/프레임워크 바깥으로 빼서
재사용 가능한 도메인 모듈로 만들어 둔 것 자체가 핵심이다.
> 

즉, 지금은 `useReducer`가 도메인 로직을 호출하지만,

- 이후 store(Zustand/Redux)를 도입해도
“같은 도메인 로직”을 그대로 호출할 수 있다.

결과적으로 마이그레이션 시 바뀌는 건 “규칙”이 아니라 **컨테이너(상태 보관/구독/디버깅 도구)** 쪽이 된다.

> 도메인 로직은 유지하고, 컨테이너만 교체할 수 있는 구조.
이게 마이그레이션 난이도를 결정한다.
> 

---

### 4.2 마이그레이션은 ‘갈아엎기’가 아니라 ‘단계적 전환’이 된다

여기서 중요한 포인트는 “store를 쓰면 reducer를 무조건 유지한다/삭제한다”가 아니라,
현실적으로는 **2단계 전환**이 가장 안전하고 자연스럽다는 점이다.

### (1) 1단계: Store를 “어댑터(Wrapper)”로 먼저 도입한다

초기에는 store가 기존 reducer를 그대로 호출하는 방식으로 시작할 수 있다.

- store가 `dispatch(action)`을 제공하고
- 그 dispatch가 내부적으로 `selectedItemReducer(prev, action)`를 호출해 next state를 만든다

이 단계의 의미는:

- UI 코드를 대거 수정하지 않고도
- store 기반 구독 최적화 / devtools / persistence 같은 “store 인프라”를 먼저 도입할 수 있다는 것

즉, 마이그레이션을 한 번에 끝내려 하지 않고 **리스크를 쪼개는 전략**이 된다.

### (2) 2단계: reducer를 “도메인 순수 업데이트 함수 집합”으로 변환한다 (궁극적으로 더 깔끔)

store 도입이 안정화되면, 다음 단계로 자연스럽게 “변환”이 가능해진다.

- switch(action) 같은 디스패치 레이어는 점점 의미가 줄어들고
- 대신 도메인 모듈에 “업데이트 함수(순수 함수)”만 남겨서
- store action 메서드가 그 함수를 호출하는 구조로 전환한다

예를 들면:

```tsx
// domain/type/update.ts
export function toggleMarker(item: FilterItem): FilterItem {
  return {
    ...item,
    type: {
      ...item.type,
      marker: { ...item.type.marker, value: !item.type.marker.value },
    },
  };
}
```

store에서는 로직을 새로 쓰는 대신, 이 함수를 호출해 상태를 바꾼다.

```tsx
toggleMarker: (id) =>
  set(state => ({
    ...state,
    byId: {
      ...state.byId,
      [id]: toggleMarker(state.byId[id]),
    },
  }));
```

이렇게 되면 마이그레이션은 “복붙으로 재작성”이 아니라
**도메인 함수 호출로 연결**되는 형태가 된다.

> store로 확장한 시점부터 reducer를 반드시 유지할 필요는 없다.
중요한 건 reducer라는 형식이 아니라, 그 안에 있던 도메인 변경 규칙을
순수 함수로 남겨 재사용하는 것이다.
> 

---

### 4.3 결국 “마이그레이션 비용”을 결정하는 건 구조다

미래에 store가 필요해지는 순간은 보통 아래 같은 상황에서 온다.

- 페이지를 넘어 편집 상태(draft)를 유지해야 할 때
- 여러 컴포넌트 트리(패널/모달/테이블)가 같은 상태를 공유해야 할 때
- Context 기반 전역화에서 리렌더 병목이 생길 때
- undo/redo, persist, multi-tab 동기화 같은 요구가 붙을 때

이 요구들을 store로 해결하는 건 “도구를 바꾸는 것”이 아니라
“상태의 수명/공유/관찰 가능성”을 확장하는 일이다.

그리고 그 확장의 비용은 “store를 쓰느냐 마느냐”가 아니라,

- 도메인 로직이 UI에 퍼져 있느냐
- 도메인 로직이 순수 함수로 모여 있느냐
- 책임 경계가 세워져 있느냐

이 **구조적 준비 상태**에 의해 결정된다.

> 그래서 도메인 단위 reducer 분리는
“현재의 리팩터링”이면서 동시에
“미래의 확장을 위한 투자(마이그레이션 레일)”다.
> 

---

## 5. 결론: 흐름을 한 줄로 정리하면

- **useState**로 중첩 상태를 직접 업데이트하니 UI가 로직에 잠식됨
- **useReducer**로 상태 변경 규칙을 중앙화해 UI를 정리함
- **도메인 reducer 분리**로 응집도를 회복하고 확장/테스트/유지보수성을 확보함
- 그 결과, 나중에 **store로 갈 때 도메인 로직을 유지한 채 컨테이너만 바꾸는 “점진 마이그레이션”이 가능**해짐

---

이런 고민을 하면서 시간을 꽤 많이 썼다.

“왜 이렇게까지 설계해야 하지?”, “어떤 방식이 진짜 맞는 걸까?”를 계속 되물었고, 성능과 유지보수 관점에서 최선의 선택이 뭔지도 끝없이 저울질했다.

근데 파고들수록 깨달은 건 하나였다. **정답은 딱 하나로 떨어지지 않는다**는 것.

AI에게 물어보니 내가 선택한 방식도 충분히 타당하다고 한다. 결국 중요한 건 “누가 맞냐”가 아니라, **우리 상황에서 어떤 근거로 그 선택을 했는지**였다.

이제는 느낌이나 유행이 아니라, 요구사항과 제약, 팀의 운영 방식까지 포함한 **근거 기반의 최적 선택**이 더 중요하다고 생각한다.