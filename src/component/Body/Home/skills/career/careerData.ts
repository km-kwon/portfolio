import type { CareerItem } from "../types";
import sureLogo from "./assets/SURE_LOGO.png";

export const careerData: CareerItem[] = [
  {
    id: "career-1",
    company: "SURESOFT TECH",
    companyLogo: sureLogo,
    position: "Frontend Developer",
    period: "2023.03 - 현재",
    projects: [
      {
        name: "차량 통합 제어기(CCU2) Log Monitor & Analyzer",
        period: "2024.07 - 2025.06",
        role: "Frontend Lead / 아키텍처 설계",
        description:
          "DLT/CAN/DoIP/SOMEIP 대용량 로그를 실시간 수집·분석하여 차량 상태를 진단하는 Electron 기반 Log Analyzer. 기존 DLT-Viewer 한계를 극복하고 비전문가도 쉽게 분석 가능한 UX/성능 중심 데스크톱 앱 구축.",
        tasks: [
          "React + Node.js + Spring 기반 웹 뷰어를 Electron 데스크톱 앱으로 재설계하여 성능 한계 극복",
          "ZeroMQ 기반 실시간 통신 파이프라인 구축으로 초당 80,000+ 메시지를 UI 멈춤 없이 비동기 처리",
          "useMemo/Zustand 최적화 및 TraceTable 내부 캐싱 메소드 오버라이딩으로 렌더링 2.3배 개선 (1.04s → 450ms), 메모리 30% 절감 (10분 평균 3.3GB → 2.0GB)",
          "PREV/NEXT 증분 로딩 + 스크롤 오프셋 보정 기반 무한 스크롤 엔진 구현으로 수십만 로그를 0.2s 이내 지연으로 탐색",
          "gridBufferDataObj 기반 전/후방 데이터 삽입 및 인덱스 동기화로 데이터 정합성 100% 확보",
          "Aggregation 기법 적용으로 실시간 로그 차트 렌더링 85% 개선 (3.2s → 0.48s)",
          "현재 화면 기준 탐색 + 페이지 이동 방식으로 검색 성능 60% 개선 (4.5s → 1.8s)",
          "스크립트 모듈화 + 테스트 코드 적용으로 기능 추가 시 장애 발생률 90% 이상 감소",
        ],
        achievements: [
          "렌더링 성능 2.3배 향상 및 메모리 사용량 30% 절감",
          "수작업 로그 분석 시간 90% 단축 (5min → 30s)",
          "실시간 차트 렌더링 속도 85% 개선 (3.2s → 0.48s)",
          "분석 정확도 98% 달성",
        ],
        techStack: {
          languages: ["React(TypeScript)", "Electron", "Node.js"],
          libs: ["ZeroMQ", "DevExtreme", "Zustand", "TailwindCSS"],
          patterns: [
            "이벤트 버스(useEventOn)",
            "CustomStore",
            "무한 스크롤 버퍼링",
          ],
        },
      },

      {
        name: "사용자 정의 필터링 기반 DLT 로그 분석 툴",
        period: "2025.07 - 2025.09",
        role: "Frontend Lead / 성능 최적화",
        description:
          "수백만 건 로그(DLT/CSV)를 실시간에 가깝게 시각화하고 사용자 맞춤 UI·필터링으로 분석 효율을 극대화하는 Electron 기반 로그 분석 툴. 현업 분석가 워크플로우 단축과 정확도 향상에 집중.",
        tasks: [
          "rc-dock 기반 도킹 레이아웃 저장/복원 기능 구현으로 반복 UI 설정 작업 제거",
          "DevExtreme DataGrid 가상 스크롤 적용/튜닝으로 100만+ 데이터 로딩·탐색 평균 2s 이내 응답 달성",
          "스트리밍 기반 Export 구현으로 100만 행 CSV Export를 3초 이내 안정 처리",
          "IPC 기반 필터 파일 자동 생성 + 외부 DLT 뷰어 실행 자동화로 수동 작업 감소",
          "자동 스크롤/정규식 호환/타입 오류 등 반복 이슈 해결 과정을 플레이북으로 문서화하여 안정성 및 대응 속도 향상",
        ],
        achievements: [
          "100만 건 로그 로딩/탐색 평균 응답 속도 2s 이내 달성",
          "사용자 맞춤 레이아웃 제공으로 업무 효율 40%+ 개선",
          "외부 뷰어 연동 및 Export 자동화로 워크플로우 30% 단축",
        ],
        techStack: {
          languages: ["React(TypeScript)", "Electron", "Node.js"],
          libs: ["rc-dock", "DevExtreme DataGrid", "Recharts"],
          patterns: [
            "IPC 통신",
            "가상 스크롤(Virtual Scrolling)",
            "스트리밍 데이터 처리",
          ],
        },
      },

      {
        name: "차량제어 시험산출물 관리 시스템 고도화(VTDM)",
        period: "2025.09 - 현재",
        role: "Frontend Developer / 유지보수·아키텍처 개선",
        description:
          "차량 테스트/평가 산출물을 클라우드에서 통합 관리하는 웹 플랫폼(SaaS) 유지보수 및 고도화. 레거시 기술 부채로 인한 유지보수 난이도와 대용량 조회 성능 문제를 해결하기 위해 도메인 중심 재설계 및 렌더링 파이프라인 최적화를 주도.",
        tasks: [
          "DDD 도입으로 기능 중심 파편화 구조를 도메인 중심으로 재편, 공통 로직을 Util/Custom Hook으로 모듈화하여 LOC 30% 절감 및 유지보수 효율 향상",
          "컴포넌트 의존성 그래프 분석 후 Global State → Local State 전환 및 렌더 트리거 통합으로 불필요 리렌더링 5회 → 1회로 단축",
          "무한 스크롤 시 DOM 계산 병목을 Web Worker로 분리하여 메인 스레드 블로킹 제거 및 스크롤 끊김 해소",
          "AgGrid/AgChart 커스터마이징을 통해 로그 테이블·분석 그래프 컴포넌트 개발, 대시보드 내 시스템 로그 모니터링 기능 구현",
          "화이트리스트 기반 유저 관리 및 Hotfix 프로세스 정립으로 운영 안정성 및 보안성 강화",
        ],
        achievements: [
          "DDD 기반 구조 재편으로 3개월 내 코드베이스 30% 경량화",
          "중복 로직 모듈화로 신규 기능 개발 시간 단축",
          "핵심 컴포넌트 리렌더링 80% 감소 (5회 → 1회)",
          "Web Worker 도입으로 대용량 리스트 스크롤 Frame Drop 0% 달성",
          "전역 상태 오남용 방지 설계로 Side-effect성 버그 발생률 최소화",
        ],
        techStack: {
          languages: ["React(TypeScript)", "Node.js"],
          libs: ["AgGrid", "AgChart"],
          patterns: [
            "Domain-Driven Design(DDD)",
            "Web Worker",
            "Custom Hooks",
            "Docker",
            "Spring Boot 협업",
          ],
        },
      },
    ],
  },
];
