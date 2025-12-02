// 프로젝트 데이터 타입 정의
export interface Project {
  id: string;
  title: string;
  subTitle: string;
  subtitle?: string;
  summary: string;
  tags: string[];
  links: { label: string; href: string }[];
  period: string;
  team: string; // 예: "Frontend 2명, Backend 1명"
  overview: string;


  // 상세 섹션 데이터
  why?: { title: string; desc: string }[];
  role?: { percentage: string; tasks: string[] };
  troubleshooting?: {
    title: string;
    problem: string;
    cause: string;
    solution: string;
    learning: string;
  }[];
  results?: string[];

  // 이미지 경로 (public 폴더 기준)
  images?: { src: string; caption?: string }[];
}
