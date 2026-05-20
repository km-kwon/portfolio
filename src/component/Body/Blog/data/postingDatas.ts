import type { Post } from "./type/postingType";

// 모든 md 파일을 raw 문자열로 로드
const mdModules = import.meta.glob<string>("./mdDatas/*.md", {
  eager: true,
  as: "raw",
});

// 파일명으로 컨텐츠 가져오는 헬퍼 함수
const getMdContent = (filename: string): string => {
  const content = mdModules[`./mdDatas/${filename}.md`];
  return content || "";
};

const ALL_POSTS_UNSORTED: Post[] = [
  {
    id: "react-zustand-closure",
    slug: "react-zustand-closure-stale-closure",
    title: "React × Zustand × Closure: stale closure 방지 전략 기술 정리",
    excerpt:
      "Zustand 상태를 콜백과 이벤트 핸들러 안에서 사용할 때 stale closure가 발생하는 원인을 정리하고, 최신 상태 참조와 구독 구조로 방지하는 방법을 기록했습니다.",
    date: "2025년 12월 15일",
    tags: ["React", "Zustand", "JavaScript", "Closure", "State Management"],
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",
    category: "frontend",
    content: getMdContent(
      "React × Zustand × Closure stale closure 방지 전략 기술",
    ),
  },
  {
    id: "js-basic",
    slug: "js-basic",
    title: "JavaScript 런타임 기본 동작 원리 정리",
    excerpt:
      "Heap, Call Stack, Web APIs, Task Queue, Microtask Queue의 역할을 기준으로 JavaScript 비동기 처리 흐름을 정리했습니다. async/await까지 같은 실행 모델 안에서 이해하는 것을 목표로 했습니다.",
    date: "2025년 12월 5일",
    tags: ["JavaScript", "기초", "동작원리"],
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",
    category: "frontend",
    content: getMdContent("JS 기본 동작원리, “진짜 뼈대”만 잡아보기"),
  },
  {
    id: "react-trigger-optimization",
    slug: "react-realtime-trigger-optimization",
    title:
      "React 실시간 Trigger 처리 최적화 회고",
    excerpt:
      "실시간 이벤트 처리 중 발생한 UI 끊김을 Web Worker, throttle, time-slicing 관점에서 비교하고, 가장 단순한 baseline 구조가 더 안정적이었던 이유를 정리했습니다.",
    date: "2025년 11월 28일",
    tags: ["React", "Performance", "WebWorker", "Optimization"],
    cover:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",
    category: "frontend",
    content: getMdContent("React 실시간 Trigger 처리 최적화 삽질기"),
  },
  {
    id: "web-fundamentals",
    slug: "what-is-web",
    title: "웹(Web)의 기본 동작 원리",
    excerpt:
      "HTML, CSS, JavaScript가 브라우저에서 화면으로 렌더링되기까지의 기본 흐름을 정리했습니다. HTTP 요청부터 DOM/CSSOM, 렌더링 파이프라인까지 연결해 이해하는 글입니다.",
    date: "2025년 10월 20일",
    tags: ["Web", "HTTP", "Browser", "Fundamentals"],
    cover:
      "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "frontend",
    content: getMdContent("웹(Web)이란 도대체 뭘까"),
  },
  {
    id: "closure-deep-dive",
    slug: "what-is-closure",
    title: "JavaScript Closure 개념 정리",
    excerpt:
      "Closure가 생성되는 조건, Lexical Environment와 Scope Chain의 관계, 실무에서 자주 만나는 stale closure 문제까지 함께 정리했습니다.",
    date: "2025년 9월 15일",
    tags: ["JavaScript", "Closure", "Scope", "Fundamentals"],
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",
    category: "frontend",
    content: getMdContent("클로저란 당최 무엇인가"),
  },
  {
    id: "currying",
    slug: "what-is-currying",
    title: "JavaScript Currying 패턴 정리",
    excerpt:
      "Currying이 함수 인자를 단계적으로 고정하는 방식이라는 점을 중심으로, 재사용 가능한 함수 조합과 설정 주입 패턴에서 어떻게 활용되는지 예제로 정리했습니다.",
    date: "2025년 8월 25일",
    tags: ["JavaScript", "Functional Programming", "Currying"],
    cover:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "frontend",
    content: getMdContent("커링 컬링도 아니고 이게뭐누"),
  },
  {
    id: "react-library-ci-cd",
    slug: "react-library-test-ci-cd",
    title: 'React 라이브러리 만들고 "테스트 + CI + 자동 배포" 붙이기',
    excerpt:
      "React 라이브러리를 npm에 배포하면서 GitHub Actions, 테스트, 커버리지, semantic-release를 연결한 과정을 정리했습니다. 배포 자동화에서 자주 만나는 설정 포인트도 함께 다뤘습니다.",
    date: "2025년 12월 10일",
    tags: ["React", "Library", "Testing", "CI/CD", "npm"],
    cover:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1800&q=80",
    category: "frontend",
    content: getMdContent(
      "React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기",
    ),
  },
  {
    id: "js-event-loop-part1",
    slug: "js-event-loop-understanding-part1",
    title:
      "JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)",
    excerpt:
      "JavaScript 비동기 흐름을 엔진, 런타임, 브라우저 레이어로 나누어 설명했습니다. 이벤트 루프를 실행 주체와 큐의 관점에서 이해하는 글입니다.",
    date: "2025년 6월 18일",
    tags: ["JavaScript", "Event Loop", "Asynchronous", "Architecture"],
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
    category: "frontend",
    content: getMdContent(
      "JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)",
    ),
  },
  {
    id: "browser-rendering-part2",
    slug: "browser-js-rendering-mechanism-part2",
    title: "브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)",
    excerpt:
      "브라우저 렌더링 파이프라인과 JavaScript 실행이 어떻게 맞물리는지 정리했습니다. 리렌더링 비용과 성능 최적화 포인트를 함께 다뤘습니다.",
    date: "2025년 6월 20일",
    tags: ["Browser", "Rendering", "JavaScript", "Performance"],
    cover:
      "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "frontend",
    content: getMdContent(
      "브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)",
    ),
  },
  {
    id: "frontend-ddd-fsd",
    slug: "frontend-ddd-fsd-domain-slice",
    title: "프론트엔드에서 DDD와 FSD, 그리고 '도메인 슬라이스' 아키텍처",
    excerpt:
      "프로젝트 규모가 커질수록 도메인 기준으로 코드를 나누는 이유를 DDD와 FSD 관점에서 정리했습니다. 프론트엔드에 맞는 도메인 슬라이스 구조를 고민한 글입니다.",
    date: "2025년 5월 15일",
    tags: ["Architecture", "DDD", "FSD", "Frontend", "Design Pattern"],
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "frontend",
    content: getMdContent(
      "프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처",
    ),
  },
  {
    id: "ai-era-maintenance",
    slug: "ai-era-code-maintenance",
    title: 'AI 시대, "유지보수도 AI가 하면 되지 않나요?"라는 말에 대하여',
    excerpt:
      "AI가 코드 작성에 도움을 주는 시대에도 유지보수 책임과 도메인 이해가 왜 여전히 중요한지 정리했습니다. 자동화와 엔지니어링 책임의 경계를 다룬 글입니다.",
    date: "2026년 1월 1일",
    tags: ["AI", "Software Engineering", "Maintenance", "Opinion"],
    cover:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",
    category: "developer",
    content: getMdContent(
      "AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여",
    ),
  },
  {
    id: "senior-ai-idea",
    slug: "senior-ai-idea",
    title:
      "AI 기반 업무 자동화 논의에서 생각한 엔지니어링 책임",
    excerpt:
      "AI로 업무를 자동화하자는 논의 속에서 개발자가 끝까지 책임져야 하는 맥락, 검증, 운영 리스크를 정리했습니다. 개발자 역할이 어떻게 바뀌는지에 대한 회고입니다.",
    date: "2026년 1월 15일",
    tags: ["AI", "Automation", "Technical Debt", "Engineering Culture"],
    cover:
      "https://plus.unsplash.com/premium_photo-1764695396810-3992d6bc4e51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "developer",
    content: getMdContent(
      "“AI로 업무 전체 자동화하면 끝 아니야 ”이라는 시니어를 보며 느낀 찝찝함",
    ),
  },
  {
    id: "reducer-migration-store",
    slug: "reducer-migration-store",
    title: "useState → useReducer → 도메인 분리 → Store 까지의 이야기",
    excerpt:
      "지역 상태를 reducer로 정리하고, 도메인 로직을 분리한 뒤 전역 store로 확장하기까지의 설계 과정을 정리했습니다. 상태 관리 구조를 점진적으로 개선한 기록입니다.",
    date: "2026년 1월 19일",
    tags: ["State", "Architecture", "Refactoring", "Engineering Culture"],
    cover:
      "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "developer",
    content: getMdContent(
      "useState → useReducer → 도메인 분리 → Store 까지의 이야기",
    ),
  },
];

// 날짜순으로 정렬 (최신 포스트가 위로)
export const MOCK_ALL_POSTS: Post[] = [...ALL_POSTS_UNSORTED].sort((a, b) => {
  // "2026년 1월 1일" → "2026-01-01" 형식으로 변환
  const parseDate = (dateStr: string) => {
    const match = dateStr.match(/(\d+)년\s*(\d+)월\s*(\d+)일/);
    if (match) {
      const [, year, month, day] = match;
      return new Date(
        parseInt(year),
        parseInt(month) - 1, // 월은 0부터 시작
        parseInt(day),
      );
    }
    return new Date(0); // 파싱 실패 시 기본값
  };

  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateB.getTime() - dateA.getTime(); // 내림차순 (최신순)
});
