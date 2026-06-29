# KM-KWON Portfolio

React, TypeScript, Vite 기반의 인터랙티브 3D 포트폴리오입니다. 대용량 데이터 UI, 성능 병목 개선, 상태 구조 재설계, 오픈소스 라이브러리 배포 경험을 케이스 스터디 형식으로 보여줍니다. 프로젝트, 기술 블로그, 이력서, 연락처, 프론트엔드 실험실을 하나의 라우팅 경험으로 묶고, 페이지 이동에 따라 반응하는 월드 배경과 다크/라이트 테마를 제공합니다.

배포는 Cloudflare Workers Static Assets 기준으로 루트 경로(`/`)에서 동작하도록 설정되어 있습니다.

## 주요 기능

- 라우트별로 형태가 바뀌는 인터랙티브 월드 배경
- 회사 프로젝트와 개인·대외 프로젝트를 분리한 케이스 스터디 구조
- 실시간 로그 분석기, 100만 행 Export, 상태 구조 개선 중심의 Professional Case Studies
- 오픈소스 라이브러리, 봉사 매칭, 강의 추천, 보안 채팅 등 판단 기준을 보여주는 Independent Projects
- 프로젝트별 문제 상황, 제약 조건, 기술적 판단, 구현 내용, 결과, 면접 예상 질문 구성
- 프로젝트 목록, 태그 필터, 상세 케이스 스터디 페이지
- Markdown 기반 기술 블로그와 본문 TOC, 이전/다음 글 이동
- Web Worker, Virtual Scroll, Debounce/Throttle, Canvas 등 프론트엔드 실험실
- 이력서 PDF, Contact, GitHub/Velog/Email 링크
- 로컬 스토리지에 저장되는 다크/라이트 테마
- Cloudflare Workers Static Assets 배포와 SPA 직접 진입을 고려한 fallback 설정

## 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| Core | React 19, TypeScript, Vite |
| Routing | React Router DOM |
| 3D / Graphic | Three.js, React Three Fiber, Drei, SVG animation |
| Styling | Tailwind CSS 4, CSS custom properties |
| Motion | Framer Motion, requestAnimationFrame |
| Blog | React Markdown, remark-gfm, unified |
| Deploy | Cloudflare Workers Static Assets |

## 라우트

| 경로 | 설명 |
| --- | --- |
| `/` | 문제 해결 포지셔닝, 대표 실무 케이스, 문제 해결형 스킬 요약 |
| `/projects` | 실무/보조 프로젝트 갤러리와 태그 필터 |
| `/projects/:id` | 문제 상황, 제약 조건, 기술적 판단, 결과를 포함한 프로젝트 상세 케이스 스터디 |
| `/about` | 소개와 타임라인 |
| `/resume` | 경력/기술 스택/이력서 영역 |
| `/blog` | 기술 블로그 목록 |
| `/blog/:slug` | Markdown 블로그 상세 |
| `/contact` | 연락처와 외부 링크 |
| `/lab` | 프론트엔드 실험실 |

## 시작하기

### 요구 사항

- Node.js 20 이상 권장
- npm

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

기본 Vite 개발 서버 주소는 `http://localhost:5173`입니다.

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 결과 미리보기

```bash
npm run preview
```

### 린트

```bash
npm run lint
```

## 배포

Cloudflare Workers Builds에서는 아래 설정을 사용합니다.

| 항목 | 값 |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |

기본 프로덕션 빌드는 Cloudflare 루트 경로(`/`) 배포를 기준으로 합니다. `wrangler.jsonc`의 `assets.not_found_handling = "single-page-application"` 설정으로 `/projects`, `/blog/:slug` 같은 React Router 경로에 직접 진입해도 `index.html`로 fallback됩니다.

## 3D 옵션

3D 캔버스를 비활성화해야 하는 환경에서는 다음 환경 변수를 사용할 수 있습니다.

```bash
VITE_ENABLE_3D=false
```

또한 `prefers-reduced-motion` 사용자는 3D 연출 대신 fallback UI가 렌더링됩니다.

## 방문 분석 설정

프로덕션 빌드에서 아래 환경 변수를 설정하면 방문 분석 스크립트가 자동으로 로드됩니다. 값이 비어 있으면 해당 서비스는 비활성화됩니다.

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CLOUDFLARE_ANALYTICS_TOKEN=your-cloudflare-web-analytics-token
```

로컬 개발 서버에서 스크립트 로드를 확인하려면 다음 값을 추가합니다.

```bash
VITE_ANALYTICS_DEBUG=true
```

Google Analytics는 React Router 페이지 이동 시 `page_view`가 다시 전송되도록 처리되어 있습니다. Vercel Analytics는 Vercel 프로젝트에 연결해 배포할 때 `@vercel/analytics` 패키지로 추가하는 편이 가장 안정적입니다.

## 프로젝트 구조

```text
src
├─ component
│  ├─ Body
│  │  ├─ Blog
│  │  ├─ Contact
│  │  ├─ Home
│  │  └─ Lab
│  └─ common
├─ three
│  ├─ scenes
│  └─ shaders
├─ wireframe
│  ├─ data
│  ├─ layout
│  └─ pages
├─ App.tsx
└─ main.tsx
```

| 디렉터리 | 설명 |
| --- | --- |
| `src/wireframe` | 현재 포트폴리오의 주요 페이지, 레이아웃, 데이터 어댑터 |
| `src/component/Body/Home` | 홈 섹션별 컴포넌트와 프로젝트 데이터 |
| `src/component/Body/Blog` | 블로그 목록, 상세 페이지, Markdown 데이터 |
| `src/component/Body/Lab` | 성능/애니메이션/Web API 실험 컴포넌트 |
| `src/three` | 3D 캔버스, 씬, 셰이더 관련 코드 |
| `public` | 정적 파일과 `resume.pdf` |
| `added_option`, `new_wireFrame` | 이전 시안 및 참고용 standalone/wireframe 코드 |

## 데이터 추가 가이드

### 프로젝트 추가

1. `src/component/Body/Home/projects/data` 아래에 프로젝트 데이터 파일을 추가합니다.
2. `Project` 타입에 맞춰 요약, 역할, 기술 결정, 트러블슈팅, 결과 등을 작성합니다.
3. `src/wireframe/data/index.ts`의 `PROJECT_ORDER`와 `PROJECT_VISUAL`에 노출 순서와 시각 정보를 추가합니다.

### 블로그 글 추가

1. `src/component/Body/Blog/data/mdDatas`에 Markdown 파일을 추가합니다.
2. `src/component/Body/Blog/data/postingDatas.ts`에 제목, slug, 날짜, 태그, 본문 import 정보를 등록합니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버 실행 |
| `npm run build` | TypeScript 빌드 후 Vite 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 로컬 미리보기 |
| `npm run lint` | ESLint 검사 |
