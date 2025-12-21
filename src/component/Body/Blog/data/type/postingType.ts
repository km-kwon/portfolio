export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // "2025년 12월 7일" 같은 형태로 가정
  tags: string[];
  cover?: string; // optional image url
  likes?: number;
  comments?: number;
  category?: string; // 상단 탭 같은 분류용(옵션)
  content?: string; // 마크다운 콘텐츠
};
