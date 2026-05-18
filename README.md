# KM-KWON Portfolio

React, TypeScript, Vite 기반의 인터랙티브 3D 포트폴리오입니다. 프로젝트, 기술 블로그, 이력서, 연락처, 프론트엔드 실험실을 하나의 라우팅 경험으로 묶고, 페이지 이동에 따라 반응하는 월드 배경과 다크/라이트 테마를 제공합니다.

배포 주소: https://km-kwon.github.io/portfolio

## 주요 기능

- 라우트별로 형태가 바뀌는 인터랙티브 월드 배경
- 프로젝트 목록, 태그 필터, 상세 케이스 스터디 페이지
- Markdown 기반 기술 블로그와 본문 TOC, 이전/다음 글 이동
- Web Worker, Virtual Scroll, Debounce/Throttle, Canvas 등 프론트엔드 실험실
- 이력서 PDF, Contact, GitHub/Velog/Email 링크
- 로컬 스토리지에 저장되는 다크/라이트 테마
- GitHub Pages 배포를 고려한 Vite base 설정

## 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| Core | React 19, TypeScript, Vite |
| Routing | React Router DOM |
| 3D / Graphic | Three.js, React Three Fiber, Drei, SVG animation |
| Styling | Tailwind CSS 4, CSS custom properties |
| Motion | Framer Motion, requestAnimationFrame |
| Blog | React Markdown, remark-gfm, unified |
| Deploy | gh-pages, GitHub Pages |

## 라우트

| 경로 | 설명 |
| --- | --- |
| `/` | 메인 프로필, 대표 프로젝트, 스킬 요약 |
| `/projects` | 프로젝트 갤러리와 태그 필터 |
| `/projects/:id` | 프로젝트 상세 케이스 스터디 |
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

GitHub Pages 배포는 `gh-pages` 패키지를 사용합니다.

```bash
npm run deploy
```

프로덕션 빌드에서는 `vite.config.ts`의 `base` 값이 `/portfolio/`로 설정됩니다.

## 3D 옵션

3D 캔버스를 비활성화해야 하는 환경에서는 다음 환경 변수를 사용할 수 있습니다.

```bash
VITE_ENABLE_3D=false
```

또한 `prefers-reduced-motion` 사용자는 3D 연출 대신 fallback UI가 렌더링됩니다.

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
| `npm run deploy` | `dist`를 GitHub Pages로 배포 |
