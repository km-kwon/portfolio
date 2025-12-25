import type { Post } from "./type/postingType";

// 모든 md 파일을 raw 문자열로 로드
const mdModules = import.meta.glob<string>("./mdDatas/*.md", {
  eager: true,
  as: "raw",
});

// md 파일 내용 가져오기
const webMd = mdModules["./mdDatas/웹(Web)이란 도대체 뭘까.md"];
const jsMd = mdModules["./mdDatas/JS 기본 동작원리, “진짜 뼈대”만 잡아보기.md"];

/**
 * ✅ 데모용 목데이터 (너는 나중에 API로 교체하면 됨)
 * cover는 실제 이미지 URL로 교체하면 카드 느낌이 스샷처럼 딱 살아남.
 */
export const MOCK_ALL_POSTS: Post[] = [
  {
    id: "p1",
    slug: "web-basic",
    title: "웹(Web)이란 도대체 뭘까",
    excerpt:
      "HTML/CSS/JS는 다 아는데… “웹이 왜 화면이 되는지”는 설명 못하겠더라. URL로 리소스를 요청하고(HTTP), 브라우저가 HTML을 DOM으로 바꾸고, CSSOM이 붙고, Render Tree → Layout → Paint → Composite까지 거쳐 화면이 된다. 이 흐름을 한 번에 정리해두면 React/Vue도 훨씬 쉽게 보인다.",
    date: "2025년 12월 7일",
    tags: ["Web", "기초", "Frontend"],
    cover:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",
    category: "frontend",
    content: webMd,
  },
  {
    id: "p2",
    slug: "js-basic",
    title: 'JS 기본 동작원리, "진짜 뼈대"만 잡아보기',
    excerpt:
      "비동기 개념을 계속 외우기만 했다면, 이번엔 뼈대부터 잡자. Heap/Call Stack이 무엇이고, JS가 왜 싱글 스레드인지, 비동기는 누가 처리하는지(Web APIs/Node APIs), 그리고 Task Queue vs Microtask Queue가 실행 순서를 어떻게 갈라놓는지. 딱 이 흐름만 머리에 넣으면 async/await도 결국 같은 얘기라는 걸 이해하게 된다.",
    date: "2025년 12월 5일",
    tags: ["JavaScript", "기초", "동작원리"],
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",
    category: "frontend",
    content: jsMd,
  },
];
