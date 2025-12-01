import type { Project } from "../types";

export const mogangProject: Project = {
  id: "mogang",
  title: "모강",
  subtitle: "SW 강의용 다나와 서비스 (강의 비교 플랫폼)",
  summary:
    "수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위해 1000+개의 강의 데이터를 수집·비교하는 플랫폼입니다. 2024학년도 후배들을 대상으로 배포하여 50+명의 긍정적인 반응을 얻었습니다.",
  tags: ["Next.js", "TypeScript", "SSR", "Styled-Components"],
  links: [
    { label: "Github", href: "#" }, // 실제 링크 입력 필요
  ],
  period: "~ 2024. 3.",
  team: "Frontend 1명, Backend 1명, 기획 2명, Designer 1명",
  overview:
    "수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위한 'SW 강의용 다나와' 서비스입니다. 1000개 이상의 방대한 강의 데이터를 효율적으로 처리하고 비교하기 위해 Next.js(SSR)를 도입했습니다. 실제 교내 후배들을 대상으로 서비스를 제공하여 50명 이상의 유저로부터 긍정적인 피드백을 도출했습니다.",

  // ❔ Why Next.js?
  why: [
    {
      title: "Why Next.js? (SSR 도입)",
      desc: "1000개 이상의 강의 데이터를 처리하는 데 있어 클라이언트 사이드 렌더링(CSR)보다 서버 사이드 렌더링(SSR) 방식이 초기 로딩 속도와 검색 엔진 최적화(SEO) 측면에서 효율적이라 판단했습니다.",
    },
    {
      title: "성장과 학습",
      desc: "CSR과 SSR의 차이를 이론을 넘어 직접 구현하며 비교해보고 싶었습니다. SSR이 모던 웹의 주요 렌더링 방식으로 떠오름에 따라, 기존 React 기반 지식과 비교하며 기술적 성장을 이루고자 했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "100% (Frontend Lead)",
    tasks: [
      "Next.js 기반 SSR 아키텍처 설계: 초기 페이지 SSR 렌더링으로 SEO 및 LCP(Largest Contentful Paint) 최적화",
      "SEO 및 성능 최적화: getServerSideProps, next/head 활용 메타 태그 동적 구성, Code Splitting(dynamic import) 및 next/image로 Lighthouse 90점+ 달성",
      "추천 알고리즘 기반 렌더링: 유저 프로필/로그 기반 추천 리스트 UI 구현 및 Context API를 활용한 전역 상태 관리로 Props Drilling 해결",
      "UI/UX 고도화: Atomic Design 패턴 일부 도입으로 컴포넌트 재사용성 강화, Skeleton UI 및 Framer-Motion 애니메이션 적용",
      "반응형 웹 및 크로스 브라우징: Styled-Components 활용, viewport-units-buggyfill로 모바일(iOS/Android) 뷰포트 이슈 해결",
    ],
  },

  // 🚨 트러블 슈팅
  troubleshooting: [
    {
      title: "무한 스크롤 중복 호출(Race Condition) 이슈 해결",
      problem:
        "스크롤이 하단에 도달할 때 데이터 로딩 중임에도 fetchNextPage()가 중복 호출되어, 불필요한 API 요청과 UI 중복 렌더링 발생. 특히 네트워크가 느리거나 Skeleton UI가 작을 때 심화됨.",
      cause:
        "react-infinite-scroll-component 라이브러리의 내부 스크롤 이벤트 감지 속도가 상태 업데이트(loading state)보다 빨라, 로딩 상태가 true로 변하기 전에 이벤트가 다시 트리거되는 Race Condition 발생.",
      solution:
        "1차로 isLoading 플래그를 도입해 중복 실행을 Guard Clause로 차단하고, 2차로 IntersectionObserver를 직접 구현하여 DOM 요소의 가시성(Visibility)을 정밀하게 감지하는 방식으로 제어권을 확보.",
      learning:
        "라이브러리에 의존하기보다 내부 동작 원리(DOM 감지 등)를 이해하는 것이 중요함을 깨달음. 비동기 상태 관리 시 Race Condition 위험을 인지하고 IntersectionObserver를 직접 다루며 제어 경험을 쌓음.",
    },
  ],

  // ✨ 결과
  results: [
    "2023년 창업 동아리 캡스톤 디자인 평가 5위 (전체 25개 팀 중)",
    "교내 소학회 내 소스코드 오픈 및 웹 개발 스터디 교재로 활용 (지식 공유)",
    "실제 후배 50+명 대상 베타 테스트 진행 및 긍정적 반응 도출",
  ],

  images: [], // 필요 시 이미지 경로 추가
};
