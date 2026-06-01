// Adapter — re-shapes existing project / blog / career data into the wireframe format

import type { Project } from "../../component/Body/Home/projects/types";
import { MOCK_ALL_POSTS } from "../../component/Body/Blog/data/postingDatas";
import { careerData } from "../../component/Body/Home/skills/career/careerData";

const projectModules = import.meta.glob("../../component/Body/Home/projects/data/**/*.tsx", {
  eager: true,
}) as Record<string, Record<string, unknown>>;

const SUPPORTING_PROJECT_ORDER = [
  "p2p-service",
  "secure-chat",
  "vary-recycle",
  "llm-lstm-bert",
  "mogang",
  "ssangsang",
];

const PROFESSIONAL_PROJECT_IDS = new Set([
  "log-monitor-analyzer",
  "dlt-export-optimizer",
  "vtdm-state-refactor",
  "carla-alpamayo",
]);

const INDEPENDENT_PROJECT_IDS = new Set([
  "opensource-libraries",
  ...SUPPORTING_PROJECT_ORDER,
]);

const PROJECT_VISUAL: Record<string, { year: string; role: string; tags: string[]; color: string }> = {
  "log-monitor-analyzer": { year: "2024", role: "Frontend Lead", tags: ["Content Flow", "Performance"], color: "#2F80ED" },
  "dlt-export-optimizer": { year: "2025", role: "Frontend Lead", tags: ["Export UX", "Workflow"], color: "#00A36C" },
  "vtdm-state-refactor":  { year: "2025", role: "Frontend Engineer", tags: ["State Flow", "Maintainability"], color: "#D97706" },
  "opensource-libraries": { year: "2025", role: "Library Author", tags: ["Reusable UI Logic", "Quality"], color: "#E11D48" },
  "carla-alpamayo":       { year: "2026", role: "AI Simulation Engineer", tags: ["AI Interaction", "Validation"], color: "#7C3AED" },
  "p2p-service":          { year: "2023", role: "System Engineer", tags: ["System UI", "Performance"], color: "#2563EB" },
  "secure-chat":          { year: "2023", role: "Frontend Architect", tags: ["Security", "Architecture"], color: "#059669" },
  "vary-recycle":         { year: "2023", role: "Frontend Engineer", tags: ["AI/ML", "Mobile"], color: "#CA8A04" },
  "llm-lstm-bert":        { year: "2022", role: "Data Engineer", tags: ["AI/ML", "Data"], color: "#DC2626" },
  "mogang":               { year: "2024", role: "Frontend Lead", tags: ["Search UX", "SSR"], color: "#0891B2" },
  "ssangsang":            { year: "2023", role: "Frontend Engineer", tags: ["Service", "Workflow"], color: "#16A34A" },
};

const SUPPORTING_PROJECT_ENRICHMENT: Record<string, Partial<Project>> = {
  "p2p-service": {
    summary:
      "동시 접속 파일 서버에서 I/O와 락 경계를 직접 검증했습니다.",
    problem:
      "여러 클라이언트가 같은 파일을 동시에 업로드·삭제할 때 데이터 오염과 좀비 프로세스가 발생할 수 있었습니다.",
    constraints:
      "C, Linux 시스템 콜, Socket API만으로 연결·파일·프로세스를 제어했습니다.",
    technicalJudgement:
      "fork로 세션을 분리하고 flock으로 파일 접근 경계를 나눴습니다.",
    implementation: [
      "TCP/IP 연결과 커스텀 FTP 명령어 처리 구현",
      "fork 기반 다중 클라이언트 세션 분리",
      "flock Reader/Writer Lock으로 파일 접근 경계 설정",
      "SIGCHLD, SIGINT 처리로 프로세스 종료 안정화",
    ],
    outcome:
      "다중 접속 업로드·다운로드·삭제에서 데이터 손상 없이 처리했습니다.",
    learning:
      "실시간 로그와 비동기 요청에서도 같은 동시성 감각이 필요했습니다.",
    contentBridge:
      "이벤트가 겹치는 화면에서 데이터 순서를 의식하게 만든 기반 경험입니다.",
    interviewQuestions: [
      "fork 모델을 선택한 이유와 스레드 모델을 제외한 이유는 무엇인가요?",
      "flock의 Advisory Lock 특성 때문에 생길 수 있는 한계는 무엇인가요?",
      "동시 접속 수가 늘어나면 어떤 병목이 먼저 생길까요?",
      "좀비 프로세스 이슈를 어떻게 재현하고 해결했나요?",
      "이 경험이 프론트엔드 실시간 데이터 처리와 어떻게 이어졌나요?",
    ],
  },
  "secure-chat": {
    summary:
      "RSA/AES 역할을 나눠 평문 노출 여부를 패킷으로 검증했습니다.",
    problem:
      "평문 전송은 패킷 캡처에 취약했고, RSA 단독 사용은 비용이 컸습니다.",
    constraints:
      "Java Socket 송수신과 암호화 검증을 함께 다뤄야 했습니다.",
    technicalJudgement:
      "RSA는 키 교환, AES는 메시지 암호화로 책임을 나눴습니다.",
    implementation: [
      "SendThread/ReceiveThread 분리로 양방향 통신 블로킹 완화",
      "RSA 공개키 기반 AES 세션 키 교환 구현",
      "AES-256 메시지 암호화·복호화 모듈 구현",
      "터미널 로그와 Wireshark 패킷 캡처로 평문 노출 여부 검증",
    ],
    outcome:
      "RSA-2048과 AES-256 기반 1:1 암호화 채팅을 구현했고, Wireshark 기준 평문 미노출을 확인했습니다.",
    learning:
      "보안 기능은 구현 후 실제 패킷으로 다시 확인해야 했습니다.",
    contentBridge:
      "입력과 메시지가 오가는 화면에서 검증 지점을 함께 보는 경험입니다.",
    interviewQuestions: [
      "RSA와 AES의 책임을 나눈 기준은 무엇인가요?",
      "RSA로 메시지 전체를 암호화하지 않은 이유는 무엇인가요?",
      "키 교환 과정에서 중간자 공격은 어떻게 막을 수 있을까요?",
      "Socket I/O 블로킹 문제를 어떻게 해결했나요?",
      "이 프로젝트에서 제품 보안 관점으로 더 보강할 부분은 무엇인가요?",
    ],
  },
  "vary-recycle": {
    summary:
      "촬영-인식-가이드-리워드를 하나의 모바일 화면으로 연결했습니다.",
    problem:
      "분리수거 품목 인식 후 처리 방법까지 이어지는 안내가 필요했습니다.",
    constraints:
      "짧은 일정 안에서 iOS/Android와 모델 연동을 함께 대응했습니다.",
    technicalJudgement:
      "Flutter로 빠르게 반복하고, 촬영 후 결과 피드백을 우선했습니다.",
    implementation: [
      "촬영 -> 인식 -> 가이드 -> 리워드 화면 구현",
      "Firebase 인증·실시간 DB·Security Rules 적용",
      "인퍼런스 결과에 따른 UI 상태 전환 구성",
      "7,500장 이상 학습 이미지 촬영·정제에 참여해 데이터 다양성 보강",
    ],
    outcome:
      "교내 동계 모각소 최우수상, Google Solution Challenge Winter Cup 국내 Top 8을 기록했습니다.",
    learning:
      "AI 결과는 다음 행동까지 안내될 때 서비스 가치가 생겼습니다.",
    contentBridge:
      "모델 결과를 이해 가능한 화면 상태로 바꾼 경험입니다.",
    interviewQuestions: [
      "모델 인식 결과를 사용자 행동으로 연결하기 위해 UI에서 무엇을 우선했나요?",
      "Flutter를 선택한 이유와 네이티브 앱을 제외한 이유는 무엇인가요?",
      "Firebase 인증 복구 문제를 어떻게 처리했나요?",
      "AI 인식 정확도가 낮을 때 UX는 어떻게 설계해야 하나요?",
      "챌린지 이후 실제 운영 서비스로 확장한다면 무엇을 먼저 바꾸겠나요?",
    ],
  },
  "llm-lstm-bert": {
    summary:
      "20만+ 리뷰 데이터를 정제하고 LSTM/BERT 감성 분류를 비교했습니다.",
    problem:
      "평점이 없는 SNS 리뷰를 정량화하려면 감성 표현, 신조어, 데이터 불균형, OOV 문제가 함께 해결되어야 했습니다.",
    constraints:
      "리뷰 출처별 표현 차이와 고평점 쏠림을 함께 보정해야 했습니다.",
    technicalJudgement:
      "LSTM 베이스라인으로 전처리와 라벨 설계의 영향을 먼저 확인했습니다.",
    implementation: [
      "Selenium 기반 네이버 영화/SNS 리뷰 크롤링",
      "중복·결측·특수문자 정제 및 KoNLPy 형태소 분석",
      "LSTM 베이스라인 모델 학습과 BERT 계열 모델 비교",
      "리뷰 길이 분포 기반 max_len, Dropout, Early Stopping 적용",
    ],
    outcome:
      "LSTM 정확도 85%를 달성하고 SNS 리뷰를 1~5점 척도로 정량화했습니다.",
    learning:
      "모델을 바꾸기 전 데이터 분포와 라벨 기준을 먼저 봐야 했습니다.",
    contentBridge:
      "콘텐츠 데이터의 품질과 분포를 읽는 기반 경험입니다.",
    interviewQuestions: [
      "BERT가 아니라 LSTM 베이스라인을 먼저 만든 이유는 무엇인가요?",
      "데이터 불균형은 어떻게 확인하고 완화했나요?",
      "OOV 문제를 사용자 사전으로 보완한 기준은 무엇인가요?",
      "정확도 85% 외에 어떤 지표를 더 봐야 했나요?",
      "이 프로젝트를 서비스로 만든다면 모델 실패 케이스를 UI에서 어떻게 보여주겠나요?",
    ],
  },
  "mogang": {
    summary:
      "1000+ 강의 데이터를 검색·비교 가능한 추천 UI로 구성했습니다.",
    problem:
      "여러 강의의 가격, 난이도, 플랫폼, 후기를 한 화면에서 비교해야 했습니다.",
    constraints:
      "기획·디자인·백엔드와 함께 움직이는 팀 프로젝트였고, 검색 노출·초기 로딩·모바일 대응을 동시에 고려해야 했습니다.",
    technicalJudgement:
      "검색 가능한 상세 페이지와 공유 링크를 고려해 Next.js SSR을 선택했습니다.",
    implementation: [
      "Next.js SSR 기반 강의 목록·상세 페이지 구현",
      "사용자 프로필·탐색 로그 기반 추천 리스트 UI 구성",
      "Skeleton UI, dynamic import, next/image로 초기 로딩 개선",
      "Context API로 추천·비교 상태 관리",
    ],
    outcome:
      "1000+ 강의 데이터를 탐색 가능한 형태로 제공했고, 교내 사용자 50+명 대상 베타 테스트와 캡스톤 디자인 평가 5위를 기록했습니다.",
    learning:
      "기술 선택이 검증 속도를 늦추지 않는지도 함께 봐야 했습니다.",
    contentBridge:
      "검색 가능한 콘텐츠와 추천 리스트를 구성하며, 사용자가 비교하고 선택하는 정보 구조를 먼저 설계한 경험입니다.",
    interviewQuestions: [
      "Next.js SSR을 선택한 이유와 CSR을 제외한 이유는 무엇인가요?",
      "추천 UI에서 사용자가 판단해야 하는 정보를 어떻게 우선순위화했나요?",
      "무한 스크롤 중복 호출은 왜 발생했고 어떻게 막았나요?",
      "안정적인 기술 선택 때문에 놓친 제품 검증 기회는 무엇이었나요?",
      "지금 다시 만든다면 MVP 범위를 어떻게 줄이겠나요?",
    ],
  },
  "ssangsang": {
    summary:
      "100+ 회원의 봉사 신청·관리 업무를 웹앱으로 정리했습니다.",
    problem:
      "봉사자 일정 매칭과 신청 관리가 매주 수작업으로 반복되었고, 작은 누락이 현장 운영 문제로 이어질 수 있었습니다.",
    constraints:
      "실사용자가 있는 서비스라 화면 변경이 곧 운영 방식 변경이었습니다.",
    technicalJudgement:
      "모바일 접근성과 빠른 배포를 위해 React 기반 웹앱으로 구현했습니다.",
    implementation: [
      "React Router 기반 신청·관리 SPA 구현",
      "Protected Route와 Axios Interceptor로 권한·토큰 처리",
      "Infinite Scroll, Skeleton UI, Loading Indicator 적용",
      "GitHub/Jira/Notion 기반 스프린트와 코드 리뷰 운영",
    ],
    outcome:
      "실사용자 100+명을 확보했고, 주 단위 개선 사이클을 운영했습니다. 교내 콘테스트 금상과 VMS 우수지역사회봉사단 선정으로 이어졌습니다.",
    learning:
      "반복 업무에서 시간을 잃는 지점을 먼저 찾아야 했습니다.",
    contentBridge:
      "운영자와 회원이 만나는 신청·관리 인터랙션을 구조화했습니다.",
    interviewQuestions: [
      "봉사 신청 흐름에서 가장 먼저 줄인 사용자의 혼란은 무엇이었나요?",
      "권한별 접근 제어를 어떻게 설계했나요?",
      "StrictMode의 useEffect 중복 실행 문제를 어떻게 이해하고 처리했나요?",
      "운영 피드백을 주 단위로 반영할 때 우선순위는 어떻게 잡았나요?",
      "작은 팀에서 코드 리뷰와 일정 관리를 어떻게 했나요?",
    ],
  },
};

export type WireProject = Omit<Project, "role"> & {
  year: string;
  // String label for the resume-style "Role" cell. The original Project.role
  // (with percentage + tasks) is preserved on `roleDetail` so DetailPage can
  // still render the task list.
  role: string;
  roleDetail: Project["role"];
  visualTags: string[];
  color: string;
  stack: string[];
  metrics: { v: string; d: string }[];
};

const CAREER_CASE_STUDIES: Project[] = [
  {
    id: "log-monitor-analyzer",
    title: "실시간 로그 탐색 UI 개선",
    subTitle: "실시간 정보 탐색 UI",
    subtitle: "초당 80,000건 이벤트를 멈춤 없이 탐색한 Electron 도구",
    summary:
      "실시간 이벤트 탐색의 렌더링 병목을 줄였습니다.",
    tags: ["React", "TypeScript", "Electron", "ZeroMQ", "Zustand", "DevExtreme"],
    links: [],
    period: "2024.07 - 2025.06",
    team: "SURESOFTTECH 차량솔루션 1팀",
    overview:
      "실시간 로그를 수집·분석하는 Electron 기반 도구입니다. 수집, 상태 전파, 렌더링을 분리해 장시간 탐색 성능을 개선했습니다.",
    problem:
      "장시간 로그 수신 시 메모리와 CPU 사용량이 증가하며 화면 지연이 발생했습니다.",
    constraints:
      "외부 UI 라이브러리를 유지하면서 Electron 메모리 한계 안에서 개선해야 했습니다.",
    technicalJudgement:
      "교체보다 프로파일링을 먼저 했고, 인스턴스 제어와 상태 분리로 병목을 좁혔습니다.",
    why: [
      {
        title: "Why profiling first?",
        desc: "수집량보다 렌더링·검증 인스턴스 캐싱 비용이 큰지 먼저 확인했습니다.",
      },
      {
        title: "Why keep DevExtreme?",
        desc: "DataGrid를 유지하고 CustomStore·가상 스크롤로 회귀 리스크를 줄였습니다.",
      },
    ],
    role: {
      percentage: "Frontend Lead",
      tasks: [
        "ZeroMQ/IPC 기반 비동기 수집 파이프라인 구성",
        "DevExtreme CustomStore와 가상 스크롤 기반 대용량 탐색 최적화",
        "Zustand와 Custom Store로 실시간 데이터 동기화 구조 분리",
        "프로파일링을 통해 Validation Controller 캐싱 문제를 추적하고 인스턴스 제어",
        "평가 엔지니어 피드백을 반영해 정보 탐색 화면 흐름 재정리",
      ],
    },
    troubleshooting: [
      {
        title: "장시간 수신 시 메모리·CPU 사용량 급증",
        problem: "실시간 로그 수신이 길어질수록 렌더링 지연과 UI Freezing이 발생했습니다.",
        cause: "라이브러리 내부 검증 인스턴스 캐싱과 잦은 상태 전파가 렌더링 비용을 키웠습니다.",
        solution: "인스턴스 제어와 메서드 오버라이딩, 상태 경계 분리, 가상 스크롤 버퍼링을 함께 적용했습니다.",
        learning: "성능 개선은 측정 가능한 병목에서 시작해야 한다는 기준을 얻었습니다.",
      },
    ],
    implementation: [
      "수집 파이프라인과 UI 갱신 분리",
      "CustomStore 기반 대용량 탐색 구조 구성",
      "전역 상태와 화면 지역 상태의 책임 분리",
      "라이브러리 내부 병목 프로파일링",
      "피드백 기반 화면 구조 개선",
    ],
    results: [
      "초당 80,000건 이상 이벤트 시각화",
      "렌더링 성능 2.3배 향상(1.04s -> 450ms)",
      "메모리 사용량 30% 절감(3.3GB -> 2.0GB)",
      "반복 분석 5분 -> 30초 수준 단축",
    ],
    outcome:
      "초당 80,000건 처리, 렌더링 2.3배 개선, 메모리 30% 절감을 달성했습니다.",
    learning:
      "라이브러리 교체 전 병목과 변경 비용을 먼저 봅니다.",
    contentBridge:
      "갱신이 잦은 화면의 데이터 흐름과 렌더링 구조를 함께 본 경험입니다.",
    highlights: [
      { value: "80K/s", label: "실시간 로그 처리" },
      { value: "2.3x", label: "렌더링 개선" },
      { value: "30%", label: "메모리 절감" },
    ],
    techDecisions: [
      { tech: "Electron", reason: "차량 평가 환경에서 로컬 파일·프로세스·외부 뷰어 연동이 필요했습니다." },
      { tech: "Zustand", reason: "실시간 데이터와 화면 상태를 가볍게 분리하고 필요한 범위에만 전파하기 위해 선택했습니다." },
      { tech: "Virtual Scroll", reason: "사용자가 보는 범위만 렌더링해 대용량 로그 탐색 중 UI 응답성을 유지했습니다." },
    ],
    interviewQuestions: [
      "초당 80,000건 처리량은 어떤 환경과 기준으로 측정했나요?",
      "DevExtreme을 유지한 이유와 교체하지 않은 판단 근거는 무엇인가요?",
      "메모리 누수 원인을 어떻게 재현하고 검증했나요?",
      "Zustand와 Local State의 경계를 어떻게 나눴나요?",
      "실시간 데이터가 더 많아질 때 다음 개선안은 무엇인가요?",
    ],
  },
  {
    id: "dlt-export-optimizer",
    title: "대용량 Export 흐름 최적화",
    subTitle: "100만 행 Export UX",
    subtitle: "100만 행 CSV Export의 대기와 메모리 리스크를 줄인 프로젝트",
    summary:
      "Stream API로 100만 행 Export 비용을 줄였습니다.",
    tags: ["React", "TypeScript", "Electron", "Stream API", "rc-dock", "IPC"],
    links: [],
    period: "2025.07 - 2025.09",
    team: "SURESOFTTECH 차량솔루션 1팀",
    overview:
      "수백만 건 로그를 필터링·배치·Export하는 Electron 도구입니다. Stream API와 패널 저장으로 반복 작업을 줄였습니다.",
    problem:
      "대용량 CSV 생성 시 메모리 사용량과 대기 시간이 크게 증가했습니다.",
    constraints:
      "100만 행 이상을 처리하면서 기존 DataGrid와 외부 뷰어 흐름을 유지해야 했습니다.",
    technicalJudgement:
      "전체 문자열 생성 대신 Stream API로 청크 처리하고, 반복 패널 배치를 저장했습니다.",
    why: [
      {
        title: "Why Stream API?",
        desc: "100만 행 데이터를 한 번에 올리지 않기 위해 청크 단위로 처리했습니다.",
      },
      {
        title: "Why dock layout?",
        desc: "반복되는 필터링·비교 화면을 저장해 작업 단계를 줄였습니다.",
      },
    ],
    role: {
      percentage: "Frontend Lead",
      tasks: [
        "Stream API 기반 CSV Export 파이프라인 구현",
        "DevExtreme DataGrid 가상 스크롤 고도화",
        "rc-dock 기반 패널 배치 저장·복원",
        "IPC 기반 외부 뷰어 원클릭 연동",
        "정규식 호환성과 렌더링 이슈를 트러블슈팅 문서로 정리",
      ],
    },
    implementation: [
      "CSV Export를 스트림 처리로 전환",
      "DataGrid 가상 스크롤과 필터링 흐름 최적화",
      "패널 레이아웃 저장·복원으로 반복 작업 단축",
      "외부 뷰어 연동으로 확인 단계 축소",
    ],
    results: [
      "100만 행 CSV Export 3초 이내 처리",
      "Export 메모리 사용량 60% 절감",
      "100만 건 로딩·탐색 평균 2초 이내",
      "레이아웃 저장과 외부 뷰어 연동으로 반복 작업 단축",
    ],
    outcome:
      "100만 행 CSV Export 3초, 메모리 사용량 60% 절감을 달성했습니다.",
    learning:
      "대용량 처리는 속도와 실패 리스크를 함께 봅니다.",
    contentBridge:
      "탐색 이후 저장·검토 단계까지 프론트엔드 흐름으로 본 경험입니다.",
    highlights: [
      { value: "1M", label: "CSV rows" },
      { value: "3s", label: "Export 처리" },
      { value: "60%", label: "메모리 절감" },
    ],
    techDecisions: [
      { tech: "Stream API", reason: "파일 전체를 메모리에 쌓지 않고 흐름 단위로 내보내기 위해 선택했습니다." },
      { tech: "rc-dock", reason: "분석자가 반복 사용하는 패널 배치를 저장·복원하기 위해 도입했습니다." },
      { tech: "IPC", reason: "Electron에서 외부 뷰어와 로컬 파일 확인 흐름을 연결하기 위해 사용했습니다." },
    ],
    interviewQuestions: [
      "Stream API 적용 전 방식의 병목은 무엇이었나요?",
      "100만 행 Export 3초는 어떤 파일 크기와 환경에서 측정했나요?",
      "Export 도중 취소·에러·부분 실패는 어떻게 처리했나요?",
      "rc-dock을 도입한 이유와 대안은 무엇이었나요?",
      "브라우저 메모리 한계가 더 낮은 환경이면 어떻게 대응하겠나요?",
    ],
  },
  {
    id: "vtdm-state-refactor",
    title: "상태 흐름 재구조화",
    subTitle: "상태 구조 리팩터링",
    subtitle: "Global State 의존을 줄이고 변경 범위를 좁힌 구조 개선",
    summary:
      "Global State를 Local State와 도메인 경계로 나눴습니다.",
    tags: ["React", "TypeScript", "DDD", "Web Worker", "AgGrid", "Custom Hooks"],
    links: [],
    period: "2025.09 - 2025.12",
    team: "SURESOFTTECH 차량솔루션 1팀",
    overview:
      "운영 중인 SaaS의 레거시 화면 구조를 정리했습니다. 상태 경계와 반복 로직을 나눠 변경 비용을 줄였습니다.",
    problem:
      "Global State에 화면 로직이 얽혀 작은 변경도 리렌더링과 회귀를 만들었습니다.",
    constraints:
      "운영 중인 화면과 API를 유지하며 점진적으로 바꿔야 했습니다.",
    technicalJudgement:
      "전역 상태를 고도화하기보다 전역일 필요가 없는 상태를 먼저 지역화했습니다.",
    why: [
      {
        title: "Why localize state?",
        desc: "전역일 필요가 없는 상태를 내려 변경 영향 범위를 줄였습니다.",
      },
      {
        title: "Why DDD slice?",
        desc: "화면보다 변경 이유가 보이는 도메인 기준으로 모듈을 나눴습니다.",
      },
    ],
    role: {
      percentage: "Frontend / Architecture",
      tasks: [
        "Global State를 Local State와 도메인 상태로 분리",
        "DDD 기반 모듈 경계 재정리",
        "반복 로직을 Custom Hooks로 추상화",
        "Web Worker로 무한 스크롤 DOM 연산 분산",
        "AgGrid/AgChart 커스터마이징으로 대시보드 UI 구성",
      ],
    },
    implementation: [
      "상태 영향 범위 기준으로 전역/지역 상태 재분류",
      "도메인 경계와 커스텀 훅 정리",
      "스크롤 연산을 Web Worker로 분리",
      "대시보드 데이터 흐름 단순화",
    ],
    results: [
      "리렌더링 80% 감소(5회 -> 1회)",
      "전체 코드베이스 LOC 30% 절감",
      "Web Worker로 대용량 리스트 스크롤 완화",
      "Global State 의존도 축소",
    ],
    outcome:
      "리렌더링 80% 감소, 코드량 30% 절감을 달성했습니다.",
    learning:
      "구조 개선은 다음 변경 비용을 줄이는 일이어야 합니다.",
    contentBridge:
      "요구사항이 바뀌는 화면의 상태 경계를 설계한 경험입니다.",
    highlights: [
      { value: "80%", label: "리렌더링 감소" },
      { value: "30%", label: "코드량 절감" },
      { value: "DDD", label: "상태 경계 재정리" },
    ],
    techDecisions: [
      { tech: "Local State", reason: "화면 안에서만 필요한 상태가 전역 변경을 유발하지 않도록 분리했습니다." },
      { tech: "DDD", reason: "기능 추가 시 변경 지점을 도메인 단위로 찾을 수 있게 하기 위해 적용했습니다." },
      { tech: "Web Worker", reason: "대용량 스크롤 연산이 메인 스레드 입력성을 막지 않게 분리했습니다." },
    ],
    interviewQuestions: [
      "DDD를 프론트엔드에 적용할 때 도메인 경계는 어떻게 잡았나요?",
      "Global State를 Local State로 내리면서 생긴 단점은 없었나요?",
      "리렌더링 80% 감소는 어떤 기준으로 측정했나요?",
      "일정 압박 속에서 리팩터링 범위를 어떻게 설득했나요?",
      "같은 상황이라면 서버 상태와 클라이언트 상태를 어떻게 나누겠나요?",
    ],
  },
  {
    id: "opensource-libraries",
    title: "재사용 가능한 프론트엔드 패키지",
    subTitle: "npm 패키지 배포",
    subtitle: "반복된 큐·이벤트 로직을 npm 패키지로 분리",
    summary:
      "반복 로직을 npm 패키지와 테스트로 정리했습니다.",
    tags: ["TypeScript", "React Hooks", "Vitest", "GitHub Actions", "npm"],
    links: [
      { label: "broadcast-event-system", href: "https://github.com/km-kwon/broadcast-event-system" },
      { label: "circular-queue-react", href: "https://github.com/km-kwon/react-circular-queue" },
      { label: "npm", href: "https://www.npmjs.com/~km-kwon" },
    ],
    period: "2025",
    team: "Personal Open Source",
    overview:
      "스트리밍 UI에서 반복한 원형 큐와 이벤트 전달 구조를 공개 패키지로 분리했습니다.",
    problem:
      "원형 큐와 이벤트 전달 로직이 프로젝트마다 흩어졌습니다.",
    constraints:
      "React 훅은 제공하되 핵심 로직은 React 없이도 동작해야 했습니다.",
    technicalJudgement:
      "순수 로직과 React wrapper를 나누고, README와 테스트를 함께 정리했습니다.",
    why: [
      {
        title: "Why separate core and hooks?",
        desc: "자료구조와 이벤트 전달은 core logic으로 분리했습니다.",
      },
      {
        title: "Why CI/CD before publishing?",
        desc: "배포 전 테스트와 패키지 품질 확인을 자동화했습니다.",
      },
    ],
    role: {
      percentage: "Package Author",
      tasks: [
        "circular-queue-react 자료구조 로직과 React hook 분리",
        "broadcast-event-system 타입 안전 이벤트 버스 구현",
        "Vitest 기반 단위 테스트 작성",
        "GitHub Actions 기반 CI/CD 구성",
        "npm 배포와 README 사용 예시 정리",
      ],
    },
    implementation: [
      "TypeScript core module 작성",
      "React hook wrapper와 사용 예시 분리",
      "Vitest 커버리지 100% 기준 구성",
      "GitHub Actions로 테스트와 배포 자동화",
    ],
    results: [
      "circular-queue-react, broadcast-event-system npm 배포",
      "Vitest 테스트 커버리지 100% 달성",
      "GitHub Actions 기반 CI/CD 구축",
      "README와 릴리스 흐름 정리",
    ],
    outcome:
      "npm 패키지 2종, Vitest 100%, GitHub Actions CI/CD를 구성했습니다.",
    learning:
      "라이브러리는 API와 README까지 제품이라는 점을 배웠습니다.",
    contentBridge:
      "반복 인터랙션 로직을 재사용 가능한 자산으로 만든 경험입니다.",
    highlights: [
      { value: "2", label: "npm packages" },
      { value: "100%", label: "Vitest coverage" },
      { value: "CI/CD", label: "GitHub Actions" },
    ],
    techDecisions: [
      { tech: "TypeScript", reason: "사용자가 이벤트 타입과 큐 데이터 타입을 컴파일 타임에 확인할 수 있게 했습니다." },
      { tech: "Vitest", reason: "자료구조와 이벤트 전달 핵심 동작을 빠르게 검증하기 위해 선택했습니다." },
      { tech: "GitHub Actions", reason: "배포 전 테스트와 패키지 품질 확인을 자동화했습니다." },
    ],
    interviewQuestions: [
      "두 패키지를 만들게 된 실무 문제는 무엇이었나요?",
      "React hook과 core logic을 분리한 이유는 무엇인가요?",
      "Vitest 커버리지 100%에서 어떤 케이스를 가장 중요하게 봤나요?",
      "npm 배포 후 버전 관리와 breaking change는 어떻게 관리했나요?",
      "기존 이벤트 버스 라이브러리 대신 직접 만든 이유는 무엇인가요?",
    ],
  },
  {
    id: "carla-alpamayo",
    title: "AI 결과 검증·시각화 흐름",
    subTitle: "AI 검증 인터랙션",
    subtitle: "모델 추론 결과를 시뮬레이션과 지표로 검증한 환경",
    summary:
      "모델 결과를 시각화와 지표 로깅으로 검증했습니다.",
    tags: ["Python", "C++", "CARLA", "PyTorch", "Hugging Face", "Pandas"],
    links: [],
    period: "2026.01 - 현재",
    team: "SURESOFTTECH 지능형 데이터팀",
    overview:
      "CARLA 시뮬레이터와 궤적 예측 모델을 연결하고, 추론 결과를 시각화·로깅했습니다.",
    problem:
      "학습 지표만으로는 실시간 운용 가능성을 판단하기 어려웠습니다.",
    constraints:
      "CARLA Tick, 추론 지연, 다중 궤적 시각화 부하를 함께 맞춰야 했습니다.",
    technicalJudgement:
      "동기/비동기 추론 파이프라인을 나누고 ADE/FDE/RMSE로 결과를 검증했습니다.",
    why: [
      {
        title: "Why split sync/async inference?",
        desc: "Tick과 추론 주기가 어긋나면 검증 결과의 의미가 줄어듭니다.",
      },
      {
        title: "Why point-wise metrics?",
        desc: "프레임별 좌표 오차를 남겨 예측이 흔들리는 지점을 추적했습니다.",
      },
    ],
    role: {
      percentage: "AI Simulation / Validation Pipeline",
      tasks: [
        "CARLA 소스 커스터마이징 및 모델 양방향 통신 구조 설계",
        "차량 Tick 기반 추론 제어 로직 구현",
        "Point-wise 좌표 오차, ADE/FDE/RMSE 산출 모듈 구현",
        "다중 궤적 실시간 시각화 최적화",
        "시나리오별 오차율·추론 시간·FPS CSV 로깅 자동화",
      ],
    },
    implementation: [
      "시뮬레이터와 모델 간 양방향 통신 구성",
      "동기/비동기 추론 파이프라인 분리",
      "좌표 오차와 ADE/FDE/RMSE 산출 로직 구현",
      "다중 궤적 시각화와 CSV 로깅 자동화",
    ],
    results: [
      "추론 지연 1.2s -> 0.78s 단축",
      "CARLA 평균 FPS 18 -> 28 개선",
      "ADE/FDE/RMSE 검증 체계 구축",
      "시나리오별 평가 지표 CSV 저장",
    ],
    outcome:
      "추론 지연을 0.78초로 줄이고 평균 FPS를 28로 개선했습니다.",
    learning:
      "모델 성능은 실제 운용 조건에서 다시 확인해야 합니다.",
    contentBridge:
      "AI 결과를 화면과 지표로 검증하는 흐름을 설계한 경험입니다.",
    highlights: [
      { value: "0.78s", label: "추론 지연" },
      { value: "28", label: "CARLA FPS" },
      { value: "ADE/FDE", label: "검증 지표" },
    ],
    techDecisions: [
      { tech: "CARLA", reason: "실시간 주행 시뮬레이션에서 모델 결과를 검증하기 위해 사용했습니다." },
      { tech: "PyTorch", reason: "Alpamayo 모델 추론 파이프라인과 지표 계산을 연결하기 위해 사용했습니다." },
      { tech: "CSV Logging", reason: "시나리오별 회귀 검증 결과를 반복 가능하게 남기기 위해 선택했습니다." },
    ],
    interviewQuestions: [
      "동기/비동기 추론 파이프라인을 어떻게 나눴나요?",
      "0.78초 지연은 실시간 요구사항을 충족한다고 판단한 근거가 있나요?",
      "ADE/FDE/RMSE 계산 모듈을 직접 구현한 이유는 무엇인가요?",
      "다중 궤적 시각화에서 병목은 CPU, GPU, 렌더링 중 어디였나요?",
      "이 경험이 프론트엔드 제품 개발과 어떻게 연결된다고 보나요?",
    ],
  },
];

const allProjects: Project[] = Object.values(projectModules)
  .map((mod) => {
    const exported = mod.default ?? Object.values(mod)[0];
    return exported as Project | undefined;
  })
  .filter((p): p is Project => Boolean(p));

const indexById = new Map<string, Project>(allProjects.map((p) => [p.id, p]));
const supportingProjects = SUPPORTING_PROJECT_ORDER
  .map((id) => indexById.get(id))
  .map((project) => project ? { ...project, ...SUPPORTING_PROJECT_ENRICHMENT[project.id] } : project)
  .filter((p): p is Project => Boolean(p));

export const PROJECTS: WireProject[] = [...CAREER_CASE_STUDIES, ...supportingProjects]
  .map((p) => {
    const visual = PROJECT_VISUAL[p.id] ?? {
      year: "—", role: p.team || "", tags: p.tags.slice(0, 2), color: "#7C5CFF",
    };
    const stackFromTechDecisions = p.techDecisions?.map((d) => d.tech) ?? [];
    const stack = stackFromTechDecisions.length > 0
      ? Array.from(new Set([...stackFromTechDecisions, ...p.tags])).slice(0, 6)
      : p.tags.slice(0, 6);
    const metrics = (p.highlights ?? []).slice(0, 3).map((h) => ({ v: h.value, d: h.label }));
    const { role: originalRole, ...rest } = p;
    return {
      ...rest,
      year: visual.year,
      role: visual.role,
      roleDetail: originalRole,
      visualTags: visual.tags,
      color: visual.color,
      stack,
      metrics: metrics.length > 0
        ? metrics
        : [{ v: "—", d: "핵심 지표 준비 중" }],
    } satisfies WireProject;
  });

export const PROFESSIONAL_PROJECTS = PROJECTS.filter((p) => PROFESSIONAL_PROJECT_IDS.has(p.id));
export const INDEPENDENT_PROJECTS = PROJECTS.filter((p) => INDEPENDENT_PROJECT_IDS.has(p.id));

// ── Blog ─────────────────────────────────────────────────────────────────
export interface WireBlogPost {
  slug: string;
  date: string;     // YYYY.MM
  title: string;
  read: number;
  tag: string;
  featured?: boolean;
  excerpt: string;
  cover?: string;
}

const monthFromKorean = (kor: string): string => {
  const m = kor.match(/(\d+)년\s*(\d+)월/);
  if (!m) return kor;
  return `${m[1]}.${m[2].padStart(2, "0")}`;
};

const estimateReadMinutes = (content: string | undefined): number => {
  if (!content) return 6;
  const words = content.split(/\s+/).length;
  return Math.max(4, Math.round(words / 320));
};

export const BLOG_POSTS: WireBlogPost[] = MOCK_ALL_POSTS.map((post, idx) => ({
  slug: post.slug,
  date: monthFromKorean(post.date),
  title: post.title,
  read: estimateReadMinutes(post.content),
  tag: post.tags[0] ?? post.category ?? "Etc",
  featured: idx === 0,
  excerpt: post.excerpt,
  cover: post.cover,
}));

// ── Career Timeline ─────────────────────────────────────────────────────
export interface WireTimelineRow {
  y: string;
  role: string;
  org: string;
  detail?: string;
}

const educationRows: WireTimelineRow[] = [
  { y: "2019",  role: "Cyber Security Major · CS Student", org: "Ajou University", detail: "사이버보안 전공 입학" },
  { y: "2024",  role: "Computer Engineering · B.S.",       org: "Ajou University", detail: "사이버보안/소프트웨어 전공 졸업" },
];

export const TIMELINE: WireTimelineRow[] = [
  ...careerData.map((c) => ({
    y: (c.period.split(" - ")[0] || c.period).slice(0, 7).trim(),
    role: c.position,
    org:  c.company,
    detail: c.department,
  })),
  ...educationRows,
].sort((a, b) => b.y.localeCompare(a.y));

// ── Skills (for resume + home preview) ───────────────────────────────────
export interface WireSkillGroup { group: string; items: string[] }

export const SKILLS: WireSkillGroup[] = [
  { group: "Content Flow UI", items: ["대용량 리스트의 첫 응답성을 유지합니다.", "패널 배치와 Export를 작업 단위로 설계합니다."] },
  { group: "State Architecture", items: ["상태 경계를 영향 범위와 렌더링 비용으로 나눕니다.", "반복 비동기 로직은 Custom Hooks로 분리합니다."] },
  { group: "Frontend Core", items: ["React/TypeScript로 화면 상태와 데이터 타입을 명확히 합니다.", "Electron/IPC로 로컬 분석 워크플로우를 연결합니다."] },
  { group: "Quality & Reuse", items: ["Vitest와 GitHub Actions로 배포 전 검증을 자동화합니다.", "npm 패키지로 반복 인터랙션 로직을 자산화합니다."] },
  { group: "AI & Validation", items: ["모델 결과를 시각화와 CSV 로깅으로 검증합니다."] },
];

// ── Misc ─────────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/km-kwon",            host: "github.com/km-kwon" },
  { label: "Velog",    href: "https://velog.io/@gyeongminkwon/posts", host: "velog.io/@gyeongminkwon" },
  { label: "Email",    href: "mailto:lanos0609@gmail.com",            host: "lanos0609@gmail.com" },
];

export const HERO_STREAM = [
  ["01", "CONTENT FLOW", "80K/sec"],
  ["02", "EXPORT UX", "1M rows"],
  ["03", "STATE GRAPH", "80% fewer renders"],
  ["04", "QUALITY LOOP", "Vitest 100%"],
] as const;
