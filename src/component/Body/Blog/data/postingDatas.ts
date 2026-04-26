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
      "Zustand 쓰다가 '아니 왜 값이 안 바뀌지?' 하고 3시간 멍때린 적 있나요? 저도요. 결국 범인은 stale closure였습니다… 진짜 황당해서 정리해둔 글입니다. 나처럼 고통받지 말라고.",
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
    title: 'JS 기본 동작원리, "진짜 뼈대"만 잡아보기',
    excerpt:
      "비동기 개념을 계속 외우기만 했다면, 이번엔 뼈대부터 잡자. Heap/Call Stack이 무엇이고, JS가 왜 싱글 스레드인지, 비동기는 누가 처리하는지(Web APIs/Node APIs), 그리고 Task Queue vs Microtask Queue가 실행 순서를 어떻게 갈라놓는지. 딱 이 흐름만 머리에 넣으면 async/await도 결국 같은 얘기라는 걸 이해하게 된다.",
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
      "React 실시간 Trigger 처리 최적화 삽질기 (Worker, Throttle, Time-slicing… 결국 Baseline이 이겼다.)",
    excerpt:
      "실시간 이벤트 들어올 때 UI가 뚝뚝 끊기길래, WebWorker부터 throttle까지 별짓 다 해봤습니다. 근데 결국… 가장 단순한 방법이 이겼습니다. 내 삽질의 역사 공유합니다.",
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
    title: "웹(Web)이란 도대체 뭘까?",
    excerpt:
      "HTML/CSS/JS는 아는데 ‘그래서 웹이 어떻게 화면이 되는 건데?’ 하고 멈춰본 적 있나요? 저도 그래서 한 번 아주 기초부터 갈아엎고 정리해봤습니다. 웹의 원리 이해하면 프론트가 더 잘 보임.",
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
    title: "클로저란 당최 무엇인가",
    excerpt:
      "면접만 가면 꼭 나오는 게 클로저인데… 정작 설명하려면 머릿속이 하얘지는 그 개념. 그래서 빡쳐서(?) 제대로 다시 정리했습니다. 이 글 읽고 나면 최소한 면접에서 우는 일은 없습니다.",
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
    title: "커링?? 컬링도 아니고 이게뭐누",
    excerpt:
      "커링 처음 보면 ‘이걸 왜 씀?’ 싶은데, 막상 알아두면 코드가 맘 편해지는 순간이 옵니다. 이 글은 커링을 드디어 사람 언어로 설명해본 글입니다. 예제 많음. 자존감 지킴.",
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
      "npm 배포 한 번 해보겠다고 시작했다가 GitHub Actions, semantic-release, 토큰 지옥까지 거쳐온 이야기. 진짜 별별 오류 다 봄. 그래도 자동 배포 되면 감동합니다. (눈물)",
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
      "비동기 헷갈리는 사람들 99%가 ‘레이어 구분’을 안 해서 그렇습니다. 엔진 / 런타임 / 브라우저 구분하면 진짜 다 이해됩니다. 나도 이거 알기 전엔 async/await이랑 싸움 중이었음.",
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
      "브라우저는 생각보다 훨씬 복잡합니다. 렌더링 파이프라인 보면 ‘아 그래서 리렌더링이 느렸구나…’ 하고 현타 오는 그 글. 성능 최적화 힌트도 같이 담겨있음.",
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
      "프로젝트가 커질수록 파일이 정신없어지는 이유, 사실 구조 때문입니다. DDD/FSD를 프론트에 맞게 해석해서 ‘아 이래서 구조가 필요한 거구나’ 감이 오도록 써본 글.",
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
      "‘AI가 코드도 짜주는데 유지보수도 하겠지?’라는 말을 들었는데… 현실은 전혀 다릅니다. AI가 잘하는 것과 진짜 사람이 해야 하는 일이 뭐가 다른지 정리한 글. 약간 분노도 섞여 있음.",
    date: "2026년 1월 1일",
    tags: ["AI", "Software Engineering", "Maintenance", "Opinion"],
    cover:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",
    category: "devloper",
    content: getMdContent(
      "AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여",
    ),
  },
  {
    id: "senior-ai-idea",
    slug: "senior-ai-idea",
    title:
      "“AI로 업무 전체 자동화하면 끝 아니야?” 라고 말씀하시는 시니어를 보며 느낀 찝찝함",
    excerpt:
      "요즘 들어서 AI 쓰면 금방이잖아? 라는 말을 너무 많이 듣는다. 그리고 마치 구호처럼 느껴진다... 나에게 와닿지 않았던 이유에 대한 고찰과정과 개발자란 직업은 어떻게 변화되어가는지에 대해서 스스로 생각해 보았다.",
    date: "2026년 1월 15일",
    tags: ["AI", "Automation", "Technical Debt", "Engineering Culture"],
    cover:
      "https://plus.unsplash.com/premium_photo-1764695396810-3992d6bc4e51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "devloper",
    content: getMdContent(
      "“AI로 업무 전체 자동화하면 끝 아니야 ”이라는 시니어를 보며 느낀 찝찝함",
    ),
  },
  {
    id: "reducer-migration-store",
    slug: "reducer-migration-store",
    title: "useState → useReducer → 도메인 분리 → Store 까지의 이야기",
    excerpt:
      "지역 State를 Reducer로 액션함수로 분리하는 과정에서 응집도를 낮추기 위한 고민, 어떻게 작성해야 차후 전역 State로 빼기 용이할까 생각해본 그 일련의 과정들을 공유한다. (너무 어려웠어...)",
    date: "2026년 1월 19일",
    tags: ["State", "Architecture", "Refactoring", "Engineering Culture"],
    cover:
      "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "devloper",
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
