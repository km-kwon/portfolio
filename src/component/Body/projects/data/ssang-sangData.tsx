import type { Project } from "../types";

export const ssangsangProjects: Project = {
  id: "ssangsang",
  title: "쌍상 (봉사 매칭 서비스)",
  subtitle: "자원봉사자-수요자 매칭 크로스 플랫폼 웹앱",
  summary:
    "100+명의 동아리 회원이 사용하는 봉사 매칭 서비스. React 웹앱으로 개발하여 접근성을 높이고, 애자일 프로세스로 운영 중입니다.",
  tags: [
    "React.js",
    "TypeScript",
    "Progressive Web App",
    "Axios",
    "Agile-Scrum",
  ],
  links: [
    { label: "Github", href: "https://github.com/your-repo" },
    { label: "Live", href: "https://your-service.com" },
  ],
  period: "2023.01 – 현재 운영중",
  team: "Frontend 2명, Backend 1명",
  overview:
    "자원봉사자와 봉사를 받고 싶어하는 사람들을 매칭하기 위한 웹/앱 크로스 플랫폼 서비스입니다. 현재 100명 이상의 동아리 회원들이 실제 봉사 신청 및 관리에 사용하고 있습니다.",

  why: [
    {
      title: "Why React?",
      desc: "컴포넌트 기반 아키텍처와 선언형 UI를 통해 재사용성과 유지보수성을 확보했습니다. 방대한 커뮤니티와 라이브러리 생태계를 활용해 개발 생산성을 높였습니다.",
    },
    {
      title: "Why WebApp?",
      desc: "하나의 코드로 웹과 모바일 환경(크로스 플랫폼)에 모두 대응하며, 스토어 심사 없이 빠른 배포와 수정이 가능하여 애자일한 운영에 적합하다고 판단했습니다.",
    },
  ],

  role: {
    percentage: "60%",
    tasks: [
      "React-Router-Dom을 활용한 SPA 페이지 전환 및 유저 권한별 접근 제어 (Protected Route) 구현",
      "사용자 경험(UX) 개선: Percentage Loading Indicator, 스크롤 기반 페이지네이션(Infinite Scroll), Skeleton UI 적용",
      "반응형 디자인: viewport width 기준 rem/flex Layout으로 다양한 디바이스 대응",
      "Axios Interceptor를 활용한 Access Token 자동 갱신 및 공통 에러 핸들링 로직 구현",
      "GitHub/Jira/Notion 기반의 애자일 스프린트 운영 및 코드 리뷰 주도",
    ],
  },

  troubleshooting: [
    {
      title: "React StrictMode와 useEffect 중복 실행 문제",
      problem:
        "초기 렌더링 시 useEffect 내 API 호출이 두 번 발생하여 불필요한 트래픽 유발.",
      cause:
        "React 18 StrictMode의 개발 환경 특성(마운트-언마운트-마운트)으로 인한 현상. Side-Effect 검증 과정임을 이해.",
      solution:
        "AbortController를 활용하여 언마운트 시 이전 요청을 취소(Clean-up)하도록 리팩토링하여 안전한 비동기 처리 구현.",
      learning:
        "StrictMode가 잠재적 버그를 찾아주는 도구임을 이해하고, 클린업 함수(Clean-up) 작성의 중요성을 체감.",
    },
    {
      title: "비동기 State 업데이트 시점 차이로 인한 필터링 오류",
      problem:
        "API로 데이터를 받아온(setVolunteers) 직후 필터링을 수행했으나, 빈 배열이 반환되는 문제 발생.",
      cause:
        "setState는 비동기적으로 동작하므로, 상태 업데이트가 완료되기 전에 다음 코드가 실행되어 초기값(빈 배열)을 참조함.",
      solution:
        "필터링 로직을 별도의 useEffect로 분리하고, volunteers 상태를 의존성 배열(dependency array)에 추가하여 데이터 변경 시점에 필터링이 수행되도록 수정.",
      learning:
        "React의 상태 업데이트 사이클과 의존성 배열의 역할을 명확히 이해하게 됨.",
    },
  ],

  results: [
    "2023 동아리 콘테스트 금상 수상 (교내 2위)",
    "2023년 6월 우수지역사회봉사단 선정 (VMS 인증)",
    "실사용자 100+명 확보 및 주 단위 기능 개선 사이클 정착",
  ],

  images: [
    // public/images 폴더에 이미지를 넣고 경로를 적어주세요.
    // { src: "/images/ssangsang_arch.png", caption: "서비스 아키텍처 다이어그램" },
    // { src: "/images/ssangsang_ui.png", caption: "메인 화면 및 봉사 신청 Flow" },
  ],
};
// 다른 프로젝트 데이터도 같은 형식으로 추가...
