import type { Project } from "../../types";
import banner from "./banner.png";

export const ssangsangProjects: Project = {
  id: "ssangsang",
  banner,
  title: "쌍상 (봉사 매칭 서비스)",
  subTitle: "쌍상",
  subtitle: "자원봉사자-수요자 매칭 크로스 플랫폼 웹앱",
  summary:
    "100+명의 동아리 회원이 사용하는 봉사 매칭 서비스입니다. React 웹앱으로 신청·관리 흐름을 정리하고, 운영 피드백을 반영해 주 단위로 개선했습니다.",
  tags: [
    "React.js",
    "TypeScript",
    "Progressive Web App",
    "Axios",
    "Agile-Scrum",
  ],
  links: [
    // { label: "Github", href: "https://github.com/your-repo" },
    // { label: "Live", href: "https://your-service.com" },
  ],
  period: "2023.01 ~ 현재 운영중",
  team: "Frontend 2명, Backend 1명",
  overview:
    "자원봉사자와 봉사 수요자를 연결하기 위한 웹/앱 크로스 플랫폼 서비스입니다. 100명 이상의 동아리 회원이 봉사 신청과 관리에 사용하도록 신청 흐름, 권한 처리, 운영자 관리 화면을 중심으로 구현했습니다.",

  why: [
    {
      title: "Why React?",
      desc: "신청, 목록, 관리 화면처럼 반복되는 UI가 많아 컴포넌트 단위로 재사용성과 유지보수성을 확보하기에 적합했습니다. 상태 변화에 따라 화면을 예측 가능하게 구성할 수 있다는 점도 중요했습니다.",
    },
    {
      title: "Why WebApp?",
      desc: "봉사 일정과 신청 흐름은 자주 바뀌기 때문에 빠르게 배포하고 수정할 수 있는 웹앱이 적합했습니다. 하나의 코드로 데스크톱과 모바일 접근성을 함께 확보했습니다.",
    },
  ],

  role: {
    percentage: "60%",
    tasks: [
      "React Router 기반 SPA 페이지 전환 및 사용자 권한별 접근 제어(Protected Route) 구현",
      "Percentage Loading Indicator, Infinite Scroll, Skeleton UI 적용으로 신청·탐색 흐름 개선",
      "viewport width 기준 rem/flex layout으로 다양한 디바이스 대응",
      "Axios Interceptor를 활용한 Access Token 자동 갱신 및 공통 에러 핸들링 로직 구현",
      "GitHub/Jira/Notion 기반의 애자일 스프린트 운영 및 코드 리뷰 주도",
    ],
  },

  troubleshooting: [
    {
      title: "React StrictMode와 useEffect 중복 실행 문제",
      problem:
        "개발 환경 초기 렌더링에서 useEffect 내부 API 호출이 두 번 발생해 불필요한 요청이 생겼습니다.",
      cause:
        "React 18 StrictMode가 개발 환경에서 마운트-언마운트-마운트를 한 번 더 수행하며 Side Effect를 검증하는 과정에서 발생한 현상이었습니다.",
      solution:
        "AbortController를 활용해 언마운트 시 이전 요청을 취소하도록 리팩토링하고, 컴포넌트 생명주기에 맞춘 비동기 정리 로직을 추가했습니다.",
      learning:
        "StrictMode를 단순 오류가 아니라 잠재적 비동기 문제를 드러내는 개발 도구로 보고, cleanup 함수를 명시적으로 작성하는 습관을 갖게 되었습니다.",
    },
    {
      title: "비동기 State 업데이트 시점 차이로 인한 필터링 오류",
      problem:
        "API 데이터를 상태에 저장한 직후 필터링을 수행했지만, 아직 상태가 반영되지 않아 빈 배열이 반환되는 문제가 있었습니다.",
      cause:
        "setState는 비동기적으로 동작하므로 상태 업데이트가 완료되기 전에 다음 코드가 실행되어 초기값을 참조했습니다.",
      solution:
        "필터링 로직을 별도 useEffect로 분리하고 volunteers 상태를 의존성 배열에 추가해 데이터 변경 시점에 필터링이 수행되도록 수정했습니다.",
      learning:
        "React 상태 업데이트 이후 파생 데이터를 계산할 때는 데이터 흐름을 effect나 memo로 명확히 분리해야 한다는 점을 배웠습니다.",
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

  highlights: [
    { value: "100+", label: "실사용자" },
    { value: "60%", label: "프론트엔드 기여도" },
    { value: "2위", label: "교내 콘테스트" },
  ],

  techDecisions: [
    { tech: "React.js", reason: "신청·목록·관리 화면을 컴포넌트 단위로 나누고 상태 흐름을 예측 가능하게 관리" },
    { tech: "Progressive Web App", reason: "웹/모바일을 하나의 코드로 대응하고 운영 피드백을 빠르게 배포" },
  ],
};
