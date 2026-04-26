## 0. 시작: “npm에 올렸는데… 뭔가 허전하다”

내가 만든 React 라이브러리를 npm에 배포했다.

근데 딱 거기까지 하고 나니까 이런 생각이 들었다.

- 테스트가 없으면… 내가 나중에 리팩토링하다 터뜨려도 모른다
- 배포는 매번 수동이면… 언젠가 귀찮아서 안 하게 된다
- 커버리지가 없으면… 테스트가 “있긴 한데 구멍 난 느낌”이다
- CI가 없으면… PR 머지하고 나서 터진 걸 뒤늦게 알게 된다

그래서 목표를 잡았다.

✅ **Vitest + React Testing Library로 테스트**

✅ **Coverage 뽑아서 구멍 난 라인 직접 추격**

✅ **GitHub Actions로 CI**

✅ **Git 태그 푸시하면 npm 자동 배포**

✅ **그리고 마지막 보스: EOTP(OTP) 에러 해결**

---

## 1. 테스트 환경 세팅 (여기까진 “음… 쉽네?”)

### 1-1) 설치

테스트는 Vitest로 갔다.

그리고 React hook 테스트는 Testing Library의 `renderHook`을 썼다.

```bash
npm install -D vitest@2.1.6 \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  @vitejs/plugin-react \
  @vitest/coverage-v8 \
  happy-dom
```

> 여기서 “happy-dom”을 설치한 이유는 뒤에서 나온다. (jsdom이 CI에서 나를 배신함)

---

### 1-2) vitest config

**vitest.config.mts**

```tsx
import { defineConfig }from"vitest/config";
import reactfrom"@vitejs/plugin-react";

exportdefaultdefineConfig({
plugins: [react()],
test: {
environment:"happy-dom",
setupFiles:"./__test__/setup.ts",
include: ["__test__/**/*.test.{ts,tsx}"],
coverage: {
provider:"v8",
reporter: ["text","json","html"],
include: ["src/**/*.{ts,tsx}"],
exclude: [
"node_modules/",
"__test__/",
"dist/",
"coverage/",
"src/types/**",
"src/index.ts",
"src/hooks/index.ts",
      ],
    },
  },
});
```

**test/setup.ts**

```tsx
import "@testing-library/jest-dom/vitest";
```

**package.json scripts**

```json
{
  "scripts": {
    "test": "vitest run",
    "test:coverage": "vitest run --coverage",
    "build": "tsc && tsc -p tsconfig.esm.json"
  }
}
```

---

## 2. 테스트 작성: “AI 도움도 받긴 했는데, 커버리지가 결국 나를 일하게 만들더라”

처음에는 솔직히 테스트를 빨리 늘리고 싶어서, 기본 케이스들은 AI 도움도 받았다.

> “응… 근데 성공 케이스만 잔뜩 있네?, 실패 상정을 안했네..?”

이때부터 **Coverage 기반 라인 추격 게임**이 시작되었다

### 내가 했던 루프

1. `npm run test:coverage` 돌림
2. coverage report에서 **빨간 줄(미커버 라인)** 찾음
3. 그 라인이 어떤 조건에서 실행되는지 분석
4. 그 조건을 억지로 만들어서 테스트 추가
5. 다시 커버리지 확인
6. 반복… 반복… 반복…

이 방식으로 가니까 커버리지가 “쭉쭉” 오른다.

**99%대는 테스트 수가 아니라 “구멍을 메우는 집착”** 이더라.

---

## 3. CI 붙이기: 이제 PR 날려도 마음이 편해짐

### 3-1) CI workflow

Node 버전 매트릭스로 돌렸다. (18/20/22)

- `npm ci`로 lock 기반 설치
- test → build 순으로

> 여기서 느낀 점: CI는 “안전벨트”가 아니라 “에어백”이다.
>
> 에어백은 사고가 나야 고마움을 안다.

---

### 3-2) 커버리지 업로드(CodeCov)

커버리지 job은 CI job이랑 분리했다.

- 이유: 테스트 매트릭스랑 커버리지 업로드를 섞으면 로그가 지저분해지고
- 커버리지 업로드는 한 번만 하면 된다

---

## 4. 자동 배포: 태그 푸시하면 npm 배포 끝 (여기까진 완벽)

배포 트리거를 “태그 푸시(v\*)”로 잡았다.

**publish.yml 핵심**

```yaml
on:
push:
tags: -'v*'
```

즉, 내가 하는 일은 이것뿐:

```bash
git tag v1.0.2
git push origin v1.0.2
```

끝.

이제 Actions가 알아서 테스트/빌드/배포를 한다.

…였는데…

---

## 5. (대망) 배포 마지막에서 터진다: EOTP 지옥 오픈

배포 로그를 보는데, 빌드까지는 완벽했다.

- tarball 파일 목록 쭉 나오고
- “Publishing to registry…” 뜨고
- “Signed provenance statement…” 이런 멋있는 문장도 뜨고

나는 이미 “됐다”라고 생각했다.

근데 마지막에 갑자기 이게 튀어나온다:

```
npm errorcode EOTP
npm error This operation requiresa one-time passwordfrom your authenticator.
```

### 순간 내 머릿속:

> “OTP? 내가 지금 로컬에서 배포하는 것도 아닌데…
>
> 여긴 GitHub Actions runner인데…
>
> 누가 폰을 들고 OTP를 입력해주지…?”

딱 이때 깨달았다.

**CI에서 `npm publish`는 ‘사람이 개입할 수 없는데’, NPM의 내 계정은 publish에 OTP(2FA)를 요구하고 있었던 것.**

---

## 6. EOTP가 왜 뜨는지?

### 6-1) 로컬 배포 vs CI 배포는 완전히 다르다

- 로컬 배포: 내가 직접 실행하니까, OTP 있으면 붙여서 해결 가능
  ```bash
  npm publish --otp=123456
  ```
- CI 배포: GitHub Actions는 사람이 없다
  → OTP 입력할 창도 없고, 입력할 사람도 없다
  → “그럼 CI 배포는 어떻게 하라고?”가 포인트

여기서 필요한 게 **CI용 토큰**이다.

---

## 7. 해결: CI에서는 “Automation(자동화)용 토큰”으로 간다

### 7-1) npm 토큰을 “CI용”으로 발급

- 사람이 OTP 치는 방식이 아니라 **CI에서 토큰으로 사용할 거니까**
- **토큰으로 인증이 끝나야 한다**
- 그리고 publish 권한이 있어야 한다

그래서 만든 토큰을 GitHub Secrets에 넣는다:

- repo settings → Secrets → `NPM_TOKEN`

---

### 7-2) GitHub Actions에서 토큰을 인증으로 물려준다

publish workflow에서 `NODE_AUTH_TOKEN`을 환경변수로 주입하면 된다.

```yaml
-name:Publishtonpm
run:npmpublish--provenance--accesspublic
env:
NODE_AUTH_TOKEN:${{secrets.NPM_TOKEN}}
```

여기까지 해도, 토큰이 “일반 토큰”이면 계정 설정에 따라 또 막힐 수 있다.

이 경우는 두 가지를 확인했다:

### 체크 1) 토큰 권한이 publish 가능한 권한인지

- read만 있으면 당연히 publish 못한다
- write/publish 권한이 있어야 한다

### 체크 2) 계정의 2FA 정책이 “토큰/자동화 publish도 막는” 형태인지

- 계정 설정에서 publish 작업에 OTP를 강제하면,
  어떤 토큰은 여전히 EOTP를 띄울 수도 있다.
- 그래서 “자동화 전용 토큰 성격”으로 맞춰야 CI가 산다.

(이 부분 때문에 나는 한 번 더 토큰을 다시 발급했다. 진짜 귀찮았다.)

---

### 7-3) 최종적으로 성공했을 때의 감정

EOTP 지옥을 뚫고 `npm publish`가 초록불로 끝나면

그때부터 진짜 “아 이제 배포는 시스템이 한다” 느낌이 든다.

내가 하는 건 태그 푸시 뿐이다.

---

## 8. docs-only 릴리즈: “문서만 바뀌었는데 배포는 하기 싫다”의 해결

이거 나도 엄청 고민했다.

### 문제 상황

- GitHub에서 README만 수정했다
- 근데 npm 페이지 README는 배포된 패키지 기준이라 안 바뀐다
- “문서 오타 하나”로 버전 올리는 게 뭔가 찜찜하다

### 결론(현실 버전)

**npm 페이지의 README까지 최신으로 유지하려면 결국 “patch 릴리즈”를 해야 한다.**

그래서 나는 docs-only 릴리즈를 공식 프로세스로 만들었다.

---

### docs-only 릴리즈 커맨드

### 1) 문서 수정 커밋

```bash
git add README.md
git commit -m"docs: update README"
git push origin master
```

### 2) patch 버전 올리기 (package.json 버전 업데이트)

npm을 쓰면:

```bash
npm version patch
```

이 명령이 하는 일:

- package.json version을 1.0.2 → 1.0.3으로 올리고
- 자동으로 git commit도 만들고
- 태그까지 만들게 설정할 수도 있음(환경에 따라)

나는 태그 트리거 배포를 쓰니까, 보통 이렇게 갔다:

```bash
git push origin master
```

### 3) 태그 푸시 (자동 배포 트리거)

```bash
git tag v1.0.3
git push origin v1.0.3
```

### 4) 결과

- GitHub Actions가 publish workflow 실행
- 테스트/빌드 통과하면 npm에 1.0.3 배포
- npm 페이지 README도 최신으로 따라옴

> “문서 변경인데 배포까지 하냐?”가 고민이긴 한데,
>
> 실사용자가 npm 페이지를 보고 설치하는 구조면 이게 제일 깔끔하더라.

---

## 9. 재밌는(?) 삽질 모음: 내가 실제로 막혔던 것들

### 9-1) jsdom이 CI에서만 터짐 → happy-dom으로 전환

로컬에서는 잘 도는데 CI에서만 이상하게 jsdom 초기화 오류가 났다.

그때는 그냥 “환경 차이”라고 생각했고, 빠르게 happy-dom으로 갈아탔다.

- 결론: CI에서 안정적으로 돌아가는 게 더 중요했다. (절대 아직도 원인 못찾은건 비밀)

---

### 9-2) “popped is used before being assigned” 같은 TS 경고

hook 테스트 쓸 때 이런거 자주 만난다.

```tsx
letpopped:number[];

act(() => {
  popped = result.current.popHead(3);
});

expect(popped).toEqual([1,2,3]);
```

TS는 `act()` 콜백에서 반드시 할당된다는 걸 증명 못 하니까 경고를 띄운다.

테스트 코드에서는 보통 이렇게 처리했다:

```tsx
let popped!: number[];

act(() => {
  popped = result.current.popHead(3);
});

expect(popped).toEqual([1, 2, 3]);
```

---

### 9-3) 커버리지 구멍 메우기: 진짜 고통인데, 끝나면 뿌듯함

커버리지 99% 찍는 과정은 거의 이런 느낌이었다:

- “아니 이 라인은 도대체 언제 타는 거야?”
- “오케이. 그럼 강제로 예외 상황을 만들자.”
- “아… 이런 입력에서 터지는구나”
- “테스트 추가”
- “coverage 올라감”
- “또 다음 빨간 줄….”

근데 이 과정 덕분에,

- 방어코드가 진짜로 작동하는지 확인했고
- “내 코드의 경계조건”을 내가 제일 잘 알게 됐다

---

## 10. 최종적으로 내가 얻은 것

이제 내 라이브러리는 이런 흐름이 됐다.

### ✅ 개발 흐름

- PR 올리면 CI가 테스트/빌드 자동 체크
- 커버리지도 확인 가능
- 안정성 생김

### ✅ 배포 흐름

- 태그 푸시하면 자동 배포
- 사람이 하는 일 최소화
- 실수 확 줄어듦

### ✅ 그리고 제일 중요한 건

이건 포트폴리오로도 “설득력”이 생기지 않을까..?

- “테스트 했다”가 아니라
- “테스트+커버리지+CI+자동배포까지 붙여서 운영 가능한 라이브러리로 만들었다”
  가 되니까.

---

## 11. 다음에 할 것

- 성능 벤치마크(원형 큐는 성능 이야기가 잘 먹힘)
- docs를 더 친절하게 (사용 예제/주의사항/edge case)
- 릴리즈 노트 자동 생성까지 붙이면 완성형

## Ps. 삽질 안하려면…

1. 배포 자동화는 **브랜치 푸시가 아니라 태그(vX.Y.Z) 푸시 트리거**로 구성하기
2. `npm publish`는 CI에서 돌릴 거면 **토큰 권한(write/publish)부터 확인하기**
3. CI에서 `EOTP` 뜨면 “내가 OTP를 못 치는 환경”이라는 걸 먼저 인정하기
4. `NODE_AUTH_TOKEN` 환경변수로 인증을 넘기는지 workflow에서 확인하기
5. 토큰 범위 제한(특정 패키지만 허용) 걸려 있으면 **패키지 포함 여부** 확인하기
6. 테스트는 “AI로 초안 → 커버리지 빨간 줄 추격” 루프로 마무리하기
7. 로컬 OK, CI FAIL이면 환경 차이(특히 DOM 환경)부터 의심하고 빠르게 대체안 준비하기
8. docs만 바뀌어도 npm README까지 최신 유지하려면 **docs-only patch 릴리즈**가 현실 해답
9. 태그 수동이면: `npm version patch` 후에 **태그 생성/푸시 순서** 실수하지 않기
10. 배포 성공 로그 확인은 “빌드 성공”이 아니라 **publish 단계 끝까지** 보고 환호하기(진짜 중요)

---

## 마무리: “그냥 배포”에서 “운영 가능한 라이브러리”로

처음엔 “테스트랑 CI 붙이는 게 그렇게 대단한가?” 싶었는데,

막상 해보니까 진짜 체감이 크다.

특히 EOTP는…

**배포 다 됐다고 방심한 순간 뒤통수 맞는** 타입이라 더 기억에 남는다.

이제는 내가 태그만 푸시하면

나머지는 GitHub Actions가 다 한다.

(그리고 난 DevOps 뉴비이기 떄문에 이게 제일 좋은것 같다. 왜냐? 편하니까!)
