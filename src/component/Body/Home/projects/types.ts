// 프로젝트 데이터 타입 정의
export interface Project {
  id: string;
  banner?: string;
  title: string;
  subTitle: string; // 카드 라벨용 짧은 이름 (예: "P2P Service")
  subtitle?: string; // 모달 내 부제목 (예: "리눅스 시스템 콜 기반의 동시성 파일 전송 서버")
  summary: string;
  tags: string[];
  links: { label: string; href: string }[];
  period: string;
  team: string;
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
  images?: { src: string; caption?: string }[];

  // 신규 필드 (옵셔널)
  highlights?: { value: string; label: string }[];
  techDecisions?: { tech: string; reason: string }[];
}
