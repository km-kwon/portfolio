import type { Post } from "./type/postingType";

// 모든 md 파일을 raw 문자열로 로드
const mdModules = import.meta.glob<string>("./mdDatas/*.md", {
  eager: true,
  as: "raw",
});

// md 파일 내용 가져오기
const webMd = mdModules["./mdDatas/웹(Web)이란 도대체 뭘까.md"];
const jsMd = mdModules["./mdDatas/JS 기본 동작원리, \"진짜 뼈대\"만 잡아보기.md"];

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
      "웹의 기본 개념과 동작 원리를 알아봅니다...",
    date: "2025년 12월 7일",
    tags: ["Web", "기초", "Frontend"],
    cover:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",
    likes: 83,
    comments: 4,
    category: "frontend",
    content: webMd,
  },
  {
    id: "p2",
    slug: "js-basic",
    title: "JS 기본 동작원리, \"진짜 뼈대\"만 잡아보기",
    excerpt:
      "자바스크립트의 핵심 동작 원리를 쉽게 이해해봅시다...",
    date: "2025년 12월 5일",
    tags: ["JavaScript", "기초", "동작원리"],
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",
    likes: 51,
    comments: 2,
    category: "frontend",
    content: jsMd,
  },
  // 아래는 데모용으로 더 찍어낸 느낌
  ...Array.from({ length: 50 }).map((_, i) => {
    const n = i + 3;
    const tagPool = [
      "frontend",
      "React",
      "web",
      "프로토타입",
      "Backend",
      "opensource",
      "career",
      "ux",
      "performance",
      "TypeScript",
    ];
    const tags = [
      tagPool[n % tagPool.length],
      tagPool[(n + 3) % tagPool.length],
    ];
    return {
      id: `p${n}`,
      slug: `post-${n}`,
      title: `블로그 포스트 #${n}`,
      excerpt:
        "이 글은 리스트 UI/무한스크롤/카드 레이아웃 확인을 위한 더미 글입니다. 나중에 API 연동으로 바꾸면 됩니다.",
      date: "2025년 12월 1일",
      tags,
      cover:
        n % 3 === 0
          ? "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1800&q=80"
          : undefined,
      likes: (n * 7) % 120,
      comments: (n * 3) % 12,
      category: tags.includes("frontend") ? "frontend" : "etc",
    } satisfies Post;
  }),
];
