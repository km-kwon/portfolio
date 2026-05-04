// Shared data — projects, blog posts, timeline, skills

const PROJECTS = [
  {
    id: "dlt",
    year: "2025",
    title: "DLT Log Viewer",
    subtitle: "1M rows · 80K logs/sec · Web Worker",
    role: "Lead Frontend",
    stack: ["React", "TypeScript", "Web Worker", "Virtualization"],
    tags: ["System UI", "Performance"],
    summary: "차량용 로그 뷰어. 1M 라인 검색을 메인 스레드 블로킹 없이 2초 내 처리.",
    metrics: [
      { v: "2s",  d: "1M row 검색" },
      { v: "80K", d: "logs / sec" },
      { v: "60fps", d: "스크롤 유지" },
    ],
    color: "#7C5CFF",
  },
  {
    id: "auth",
    year: "2025",
    title: "Secure Auth Layer",
    subtitle: "RSA + AES · Wireshark 평문 0",
    role: "Frontend Architect",
    stack: ["React", "Node", "Crypto", "Web Crypto API"],
    tags: ["Security", "Architecture"],
    summary: "브라우저-서버 간 모든 인증 트래픽을 RSA + AES 하이브리드로 암호화. 평문 노출 0.",
    metrics: [
      { v: "0",   d: "평문 노출" },
      { v: "RSA", d: "+ AES-256" },
      { v: "98%", d: "리프레시 성공률" },
    ],
    color: "#19E6A6",
  },
  {
    id: "trigger",
    year: "2024",
    title: "Realtime Trigger",
    subtitle: "이벤트 100/sec · 메모리 누수 0",
    role: "Frontend Engineer",
    stack: ["React", "RxJS", "Zustand"],
    tags: ["Realtime", "State"],
    summary: "고빈도 이벤트 처리 최적화. stale closure 문제 해결, 도메인 슬라이스 도입.",
    metrics: [
      { v: "100/s", d: "이벤트 처리" },
      { v: "0",     d: "메모리 누수" },
    ],
    color: "#F5C518",
  },
  {
    id: "lib",
    year: "2024",
    title: "react-secure-view",
    subtitle: "오픈소스 라이브러리 · 12K downloads",
    role: "Author",
    stack: ["TypeScript", "Rollup", "Vitest", "GitHub Actions"],
    tags: ["OSS", "DX"],
    summary: "민감 정보 자동 마스킹 컴포넌트. 테스트 + CI + 자동 배포 파이프라인 구축.",
    metrics: [
      { v: "12K", d: "monthly DL" },
      { v: "100%", d: "test coverage" },
    ],
    color: "#FF4D2E",
  },
  {
    id: "editor",
    year: "2023",
    title: "Visual Query Editor",
    subtitle: "노드 기반 SQL 빌더",
    role: "Frontend Engineer",
    stack: ["React Flow", "Monaco", "Zustand"],
    tags: ["Tooling"],
    summary: "비개발자도 쓸 수 있는 시각적 SQL 작성 도구.",
    metrics: [
      { v: "30%", d: "쿼리 작성 속도 ↑" },
    ],
    color: "#7C5CFF",
  },
  {
    id: "studio",
    year: "2023",
    title: "Component Studio",
    subtitle: "내부 디자인 시스템",
    role: "Tech Lead",
    stack: ["Storybook", "Tokens Studio", "TypeScript"],
    tags: ["Design System"],
    summary: "팀 전체에서 쓰는 컴포넌트 라이브러리. 토큰 기반 테마 시스템.",
    metrics: [
      { v: "84",  d: "components" },
      { v: "5",   d: "팀 사용" },
    ],
    color: "#19E6A6",
  },
];

const BLOG_POSTS = [
  { date: "2026.04", title: "프론트엔드에서 DDD와 FSD, '도메인 슬라이스' 아키텍처", read: 14, tag: "Architecture", featured: true },
  { date: "2026.03", title: "JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)", read: 11, tag: "JS" },
  { date: "2026.02", title: "React × Zustand × Closure — stale closure 방지 전략", read: 8, tag: "React" },
  { date: "2026.01", title: "React 라이브러리 만들고 \"테스트 + CI + 자동 배포\" 붙이기", read: 12, tag: "React" },
  { date: "2025.12", title: "AI 시대, \"유지보수도 AI가 하면 되지 않나요\"라는 말에 대하여", read: 10, tag: "AI" },
  { date: "2025.11", title: "useState → useReducer → 도메인 분리 → Store 까지의 이야기", read: 9, tag: "React" },
  { date: "2025.10", title: "브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)", read: 11, tag: "Web" },
  { date: "2025.09", title: "커링 — 컬링도 아니고 이게뭐누", read: 7, tag: "JS" },
  { date: "2025.08", title: "클로저란 당최 무엇인가", read: 8, tag: "JS" },
  { date: "2025.07", title: "웹(Web)이란 도대체 뭘까", read: 9, tag: "Web" },
];

const TIMELINE = [
  { y: "2026", role: "Lead Frontend Engineer",  org: "Stealth Mode" },
  { y: "2024", role: "Frontend Engineer",       org: "Mobile Sec Co." },
  { y: "2023", role: "Frontend Developer",      org: "Startup Studio" },
  { y: "2022", role: "Junior Frontend",         org: "First job" },
  { y: "2020", role: "GDSC Lead · CS Student",  org: "Ajou University" },
];

const SKILLS = [
  { group: "Languages",  items: ["TypeScript", "JavaScript", "Python"] },
  { group: "Frontend",   items: ["React", "Vite", "Three.js / R3F", "Framer Motion", "Tailwind"] },
  { group: "Performance",items: ["Web Workers", "Virtualization", "Profiling"] },
  { group: "Backend",    items: ["Node.js", "Spring (JWT)", "REST"] },
  { group: "Tooling",    items: ["Vitest", "ESLint", "GitHub Actions", "Storybook"] },
];

window.PROJECTS = PROJECTS;
window.BLOG_POSTS = BLOG_POSTS;
window.TIMELINE = TIMELINE;
window.SKILLS = SKILLS;
