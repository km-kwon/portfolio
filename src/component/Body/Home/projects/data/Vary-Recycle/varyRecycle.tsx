import type { Project } from "../../types";
import banner from "./banner.png";

export const varyRecycleProjects: Project = {
  id: "vary-recycle",
  banner,
  title: "분리수거 촬영-인식-리워드 흐름 설계",
  subTitle: "촬영 후 분리수거 행동 연결",
  subtitle:
    "AI 인식 결과를 가이드와 리워드로 이어주는 모바일 UX",
  summary:
    "분리수거 품목을 구분하고 처리 방법을 찾는 번거로움을 줄이기 위해 만든 모바일 서비스입니다. 촬영, AI 인식, 분리수거 가이드, 리워드를 한 흐름으로 연결해 행동 진입장벽을 낮췄습니다.",
  tags: [
    "Flutter",
    "Firebase",
    "TensorFlow",
    "CV Model",
    "Google Solution Challenge",
  ],
  links: [
    // { label: "Github", href: "https://github.com/your-vary-recycle" },
    // {
    //   label: "프로젝트 진행과정",
    //   href: "https://your-notion-or-blog.com/vary-recycle",
    // },
    // {
    //   label: "소개영상",
    //   href: "https://youtu.be/your-vary-recycle-demo",
    // },
  ],
  period: "2022.09 ~ 2023.08",
  team: "Frontend 2명, Backend 1명, AI 모델 2명, 데이터 생성 1명",

  overview:
    "사용자가 분리수거를 망설이는 지점은 품목 구분과 처리 방법 확인이었습니다. 카메라 촬영 후 AI가 유리병, 캔, 종이, PET를 분류하고, 결과 화면에서 바로 분리수거 방법과 리워드 흐름으로 이어지도록 설계했습니다.",

  why: [
    {
      title: "Why Flutter?",
      desc: "촬영과 결과 확인은 모바일에서 바로 일어나야 했습니다. iOS/Android를 단일 코드베이스로 대응하고, Hot Reload로 촬영-결과-리워드 화면을 빠르게 반복하기 위해 Flutter를 선택했습니다.",
    },
    {
      title: "Why Computer Vision?",
      desc: "검색창에 품목명을 입력하게 하면 사용자가 다시 고민해야 합니다. 촬영만으로 품목을 분류하고 바로 가이드를 보여줘 탐색 단계를 줄이는 방향을 선택했습니다.",
    },
  ],

  role: {
    percentage: "50%",
    tasks: [
      "Flutter 기반 앱 프론트엔드 50% 담당: 홈, 촬영, 결과, 로그인 등 핵심 사용자 흐름 설계·구현",
      "LayoutBuilder, MediaQuery, Flexible 등을 활용해 다양한 해상도·비율에서 깨지지 않는 반응형 UI 구성",
      "AnimatedContainer로 분리수거 결과에 따라 카드 색상·크기·위치를 전환해 사용자 피드백 강화",
      "Firebase Realtime Database 연동: 분리수거 결과 및 AI 학습 로그를 실시간 저장·조회하는 데이터 플로우 구현",
      "Firebase Authentication 적용: 이메일 로그인, 인증 토큰 만료 처리, 세션 유지 로직 설계 및 예외 상황(토큰 만료, 네트워크 에러) 처리",
      "Firebase Security Rules 작성으로 사용자별 데이터 접근 제어 및 읽기/쓰기 권한 분리",
      "TensorFlow 기반 Computer Vision 모델 연동을 위한 HTTP 인터페이스(REST API)와 Flutter 클라이언트 구현",
      "AI 인퍼런스 결과(라벨, 신뢰도)에 따라 화면이 자동 전환되도록 상태 기반 UI 흐름 구현",
      "유리병/캔/종이/PET 4종에 대해 약 7,500장의 학습용 이미지 촬영 및 정제, 조명·각도·배경을 달리하여 데이터 다양성 확보 및 오버피팅 방지",
    ],
  },

  troubleshooting: [
    {
      title: "앱 재실행 시 로그인 상태인데도 로그인 화면으로 라우팅되는 문제",
      problem:
        "Firebase Authentication 기반 이메일 로그인은 정상 동작했지만, 앱을 완전히 종료한 뒤 재실행하면 로그인 상태임에도 LoginPage로 이동하는 문제가 있었습니다.",
      cause:
        "앱 시작 직후 currentUser를 조회하면 Firebase가 내부 인증 상태를 복구하기 전이라 null을 반환할 수 있었습니다. 인증 복구가 비동기라는 점을 초기 라우팅에서 고려하지 않은 것이 원인이었습니다.",
      solution:
        "FirebaseAuth.instance.authStateChanges() 스트림을 StreamBuilder로 구독하도록 초기 라우팅을 수정했습니다. 인증 상태 복구 중에는 SplashScreen을 보여주고, snapshot.hasData 여부에 따라 HomePage 또는 LoginPage로 분기하도록 구성했습니다.",
      learning:
        "로그인 여부와 인증 상태 복구 완료 여부는 별도의 UI 상태로 다뤄야 한다는 점을 배웠습니다. 이후 초기 라우팅을 설계할 때 스트림과 상태 기반 분기를 우선 고려하게 되었습니다.",
    },
  ],

  results: [
    "2022년 교내 동계 모각소 활동 ‘최우수상’ 수상 (31개 팀 중 1위)",
    "Google Solution Challenge Winter Cup 국내 Top 8 (40+팀 중 8위)",
    "촬영 → 인식 → 가이드 → 리워드 흐름으로 분리수거 방법 탐색 단계를 단축",
  ],

  images: [
    // { src: "/images/vary_recycle_ui.png", caption: "촬영 → 인식 → 결과 가이드 플로우 화면" },
    // { src: "/images/vary_recycle_arch.png", caption: "Flutter–Firebase–AI 모델 연동 아키텍처" },
  ],

  highlights: [
    { value: "80%", label: "AI 인식 정확도" },
    { value: "1위", label: "교내 최우수상" },
    { value: "7500+", label: "학습 이미지" },
  ],

  techDecisions: [
    { tech: "Flutter", reason: "촬영과 결과 확인 중심의 모바일 흐름을 iOS/Android에 동시에 제공" },
    { tech: "Firebase", reason: "인증, 결과 저장, 학습 로그 조회를 서버리스로 연결해 빠르게 검증" },
    { tech: "TensorFlow", reason: "촬영 이미지의 품목 분류 결과를 앱 상태 전환의 기준으로 사용" },
  ],
};
