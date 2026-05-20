import type { Project } from "../../types";
import banner from "./banner.png";

export const mogangProject: Project = {
  id: "mogang",
  banner,
  title: "모강(SW 강의용 다나와 서비스)",
  subTitle: "모강",
  subtitle: "SW 강의용 다나와 서비스 (강의 비교 플랫폼)",
  summary:
    "SW 강의를 비교·탐색할 수 있도록 1000+개의 강의 데이터를 수집해 만든 추천 플랫폼입니다. Next.js 기반 SSR과 검색/추천 UI를 구현하고, 교내 사용자 50+명을 대상으로 베타 테스트를 진행했습니다.",
  tags: ["Next.js", "TypeScript", "SSR", "Styled-Components"],
  links: [
    // { label: "Github", href: "#" }, // 실제 링크 입력 필요
  ],
  period: "2023.9 ~ 2024.03",
  team: "Frontend 1명, Backend 1명, 기획 2명, Designer 1명",
  overview:
    "소프트웨어 강의 선택에 필요한 정보를 한 화면에서 비교할 수 있도록 만든 서비스입니다. 1000개 이상의 강의 데이터를 빠르게 탐색할 수 있도록 Next.js SSR을 도입하고, 사용자 조건에 맞춘 추천 리스트와 상세 비교 흐름을 설계했습니다.",

  // ❔ Why Next.js?
  why: [
    {
      title: "Why Next.js? (SSR 도입)",
      desc: "강의 목록과 상세 정보를 검색 가능한 형태로 제공해야 했기 때문에 SSR을 적용했습니다. 초기 로딩 속도와 SEO, 공유 링크 미리보기까지 고려해 Next.js를 선택했습니다.",
    },
    {
      title: "Why Recommendation UI?",
      desc: "사용자는 단순 목록보다 자신에게 맞는 강의를 빠르게 좁혀보는 흐름이 필요했습니다. 프로필과 탐색 로그를 기준으로 추천 리스트를 구성하고, 비교 화면에서 판단에 필요한 정보를 우선 노출했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "100% (Frontend Lead)",
    tasks: [
      "Next.js 기반 SSR 아키텍처 설계 및 초기 렌더링 성능·SEO 최적화",
      "getServerSideProps, next/head, dynamic import, next/image를 활용한 메타 정보와 로딩 성능 개선",
      "사용자 프로필·탐색 로그 기반 추천 리스트 UI 구현 및 Context API로 전역 상태 관리",
      "Skeleton UI, Framer Motion, 컴포넌트 분리로 탐색·비교 화면의 사용성 개선",
      "Styled-Components와 viewport-units-buggyfill을 활용한 모바일 뷰포트 대응",
    ],
  },

  // 🚨 트러블 슈팅
  troubleshooting: [
    {
      title: "무한 스크롤 중복 호출(Race Condition) 이슈 해결",
      problem:
        "스크롤이 하단에 도달할 때 데이터 로딩 중임에도 fetchNextPage()가 중복 호출되어 불필요한 API 요청과 중복 렌더링이 발생했습니다.",
      cause:
        "스크롤 이벤트 감지와 loading state 반영 사이에 시간 차이가 있어, 로딩 상태가 true로 바뀌기 전에 이벤트가 다시 트리거되었습니다.",
      solution:
        "isLoading 플래그로 중복 실행을 차단하고, IntersectionObserver를 직접 적용해 DOM 요소의 가시성을 기준으로 다음 페이지 호출을 제어했습니다.",
      learning:
        "무한 스크롤은 UI 이벤트와 비동기 상태가 맞물리는 기능이므로, 라이브러리 사용 여부와 관계없이 호출 조건을 명시적으로 제어해야 한다는 점을 배웠습니다.",
    },
  ],

  // ✨ 결과
  results: [
    "2023년 창업 동아리 캡스톤 디자인 평가 5위 (전체 25개 팀 중)",
    "교내 소학회 내 소스코드 오픈 및 웹 개발 스터디 교재로 활용 (지식 공유)",
    "교내 사용자 50+명 대상 베타 테스트 진행 및 피드백 수집",
  ],

  images: [], // 필요 시 이미지 경로 추가

  highlights: [
    { value: "1000+", label: "강의 데이터" },
    { value: "50+", label: "실사용자" },
    { value: "90+", label: "Lighthouse 점수" },
  ],

  techDecisions: [
    { tech: "Next.js", reason: "1000+ 강의 데이터를 검색 가능한 페이지로 제공하고 초기 로딩 속도를 개선" },
    { tech: "TypeScript", reason: "강의·사용자·추천 데이터의 타입을 명확히 관리" },
    { tech: "SSR", reason: "검색 엔진 노출과 공유 링크 미리보기, 초기 렌더링 안정성 확보" },
  ],
};
