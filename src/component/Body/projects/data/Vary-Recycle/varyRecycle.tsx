import type { Project } from "../../types";

export const varyRecycleProjects: Project = {
  id: "vary-recycle",
  title: "Vary Recycle (분리수거 리워드 서비스)",
  subTitle: "Vary Recycle",
  subtitle:
    "Google 기술 기반, 분리수거 인식 및 리워드 제공 환경 문제 해결 서비스",
  summary:
    "UN SDGs(지속 가능한 개발 목표) 중 환경 분야를 대상으로 한 분리수거 리워드 서비스입니다. 80% 정확도의 Computer Vision AI로 쓰레기 종류를 인식하고, 올바른 분리수거 가이드를 제공하여 사용자 행동 변화를 이끌었습니다.",
  tags: [
    "Flutter",
    "Firebase Realtime Database",
    "Firebase Authentication",
    "TensorFlow",
    "Computer Vision",
    "Google Solution Challenge",
  ],
  links: [
    { label: "Github", href: "https://github.com/your-vary-recycle" },
    {
      label: "프로젝트 진행과정",
      href: "https://your-notion-or-blog.com/vary-recycle",
    },
    {
      label: "소개영상",
      href: "https://youtu.be/your-vary-recycle-demo",
    },
  ],
  period: " ~ 2023.02 (동계 프로젝트)",
  team: "Frontend 2명, Backend 1명, AI 모델 2명, 데이터 생성 1명",

  overview:
    "Vary Recycle은 사용자가 쓰레기를 촬영하면, AI가 실시간으로 종류를 인식하고 맞는 분리수거 방법을 안내해주는 리워드형 서비스입니다. 촬영–인식–가이드–리워드까지 하나의 플로우로 연결하여, 게임처럼 재미있게 분리수거 습관을 만들도록 설계했습니다.",

  why: [
    {
      title: "Why Flutter?",
      desc: "iOS/Android를 동시에 대응해야 했기 때문에, 단일 코드베이스로 크로스 플랫폼 개발이 가능한 Flutter를 선택했습니다. 위젯 기반 UI와 Hot Reload를 활용해 짧은 기간 내에 여러 화면을 빠르게 설계·반복 개선할 수 있었습니다.",
    },
    {
      title: "Why Computer Vision 기반 분리수거?",
      desc: "환경 문제 해결의 가장 큰 허들은 '귀찮음'과 '정보 부족'이라고 보았습니다. 사용자가 이름을 일일이 입력하는 대신, 카메라 한 번으로 유리병/캔/종이/PET를 자동 분류하고, 바로 분리수거 가이드를 보여줌으로써 진입장벽을 최소화했습니다.",
    },
  ],

  role: {
    percentage: "50%",
    tasks: [
      "Flutter 기반 하이브리드 앱 프론트엔드 개발 50% 담당: 홈, 촬영 화면, 결과 출력, 로그인 등 주요 화면 직접 설계 및 구현",
      "LayoutBuilder, MediaQuery, Flexible 등을 활용해 다양한 해상도·비율에서 깨지지 않는 반응형 UI 구성",
      "AnimatedContainer를 이용해 분리수거 결과에 따라 카드 색상/크기/위치를 애니메이션으로 표현, 사용자 피드백 강화",
      "Firebase Realtime Database 연동: 분리수거 결과 및 AI 학습 로그를 실시간 저장·조회하는 데이터 플로우 구현",
      "Firebase Authentication 적용: 이메일 로그인, 인증 토큰 만료 처리, 세션 유지 로직 설계 및 예외 상황(토큰 만료, 네트워크 에러) 처리",
      "Firebase Security Rules 작성으로 사용자별 데이터 접근 제어 및 읽기/쓰기 권한 분리",
      "TensorFlow 기반 Computer Vision 모델과의 연동을 위해 HTTP 인터페이스(REST API) 설계 및 Flutter 클라이언트 구현",
      "AI 인퍼런스 결과(예: 라벨, 신뢰도)에 따라 UI가 자동으로 상태를 전환하도록 상태 기반 화면 전환 로직 구현",
      "유리병/캔/종이/PET 4종에 대해 약 7,500장의 학습용 이미지 촬영 및 정제, 조명·각도·배경을 달리하여 데이터 다양성 확보 및 오버피팅 방지",
    ],
  },

  troubleshooting: [
    {
      title: "앱 재실행 시 로그인 상태인데도 로그인 화면으로 라우팅되는 문제",
      problem:
        "Firebase Authentication을 사용해 이메일 로그인 기능을 구현했는데, 최초 로그인 후에는 정상 동작하지만 앱을 완전히 종료 후 재실행하면 로그인되어 있음에도 로그인 페이지로 잘못 라우팅되는 문제가 발생.",
      cause:
        "앱 시작 직후 FirebaseAuth.instance.currentUser를 바로 조회하면, Firebase가 아직 내부적으로 인증 상태를 복구하기 전이라 null을 반환할 수 있음. 인증 상태 복구가 비동기적으로 동작함에도 이를 고려하지 않고 currentUser만으로 초기 라우팅을 결정한 것이 원인이었음.",
      solution:
        "FirebaseAuth.instance.authStateChanges() 스트림을 StreamBuilder로 구독하는 방식으로 초기 라우팅 구조를 전면 수정. 인증 상태 복구 중에는 SplashScreen을 보여주고, snapshot.hasData 여부에 따라 HomePage 또는 LoginPage로 분기하도록 설계하여 비동기 복구 구간을 안전하게 처리함.",
      learning:
        "Firebase Authentication의 인증 상태 복구는 비동기이며, ‘로그인 여부’뿐만 아니라 ‘복구가 끝났는지 여부’까지 UI 상태로 분리해야 한다는 것을 배웠음. 이를 계기로 Flutter 위젯 생명주기, 비동기 흐름 제어, 상태 기반 라우팅의 중요성을 몸으로 이해하게 되었고, 이후 다른 프로젝트에서도 모든 초기 라우팅을 스트림/상태 기반으로 설계하게 되는 계기가 되었음.",
    },
  ],

  results: [
    "2022년 교내 동계 모각소 활동 ‘최우수상’ 수상 (31개 팀 중 1위)",
    "Google Solution Challenge Winter Cup 국내 Top 8 (40+팀 중 8위)",
    "환경·분리수거 문화를 주제로 한 실제 사용자 테스트에서 ‘분리수거 가이드가 직관적이고 재미있다’는 피드백 다수 확보",
  ],

  images: [
    // { src: "/images/vary_recycle_ui.png", caption: "촬영 → 인식 → 결과 가이드 플로우 화면" },
    // { src: "/images/vary_recycle_arch.png", caption: "Flutter–Firebase–AI 모델 연동 아키텍처" },
  ],
};
