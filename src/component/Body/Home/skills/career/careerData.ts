import type { CareerItem } from "../types";
import sureLogo from "./assets/SURE_LOGO.png";

export const careerData: CareerItem[] = [
  {
    id: "career-2",
    company: "SURESOFTTECH",
    companyLogo: sureLogo,
    position: "AI Simulation Engineer",
    department: "임베디드 기술 연구소 / 지능형 데이터팀",
    period: "2026.01 - 현재",
    transition:
      "프론트엔드에서 쌓은 실시간 데이터 처리·시각화 역량을 자율주행 시뮬레이션 도메인으로 확장",
    projects: [
      {
        name: "자율주행 궤적 예측 모델(Alpamayo) 시뮬레이션 연동 및 성능 평가 시스템 구축",
        period: "2026.01 - 현재",
        role: "AI 시뮬레이션 연동 / 성능 평가",
        impact:
          "CARLA 시뮬레이터 × AI 모델 실시간 연동 — 궤적 추론 0.8초 이내, 프레임 드랍 없는 시각화 달성",
        description:
          "자율주행 궤적 예측 모델(Alpamayo)을 CARLA 시뮬레이터에 연동하고, 추론 결과를 실시간 검증·시각화하는 평가 환경을 구축. 기존 오프라인 검증 방식을 시뮬레이션 루프 내 실시간 검증으로 전환하여 모델 평가 사이클을 단축.",
        tasks: [
          "CARLA 소스 커스터마이징으로 시뮬레이터-AI 모델 간 실시간 양방향 데이터 통신 아키텍처 설계",
          "동기/비동기 추론 파이프라인 설계 및 차량 Tick 기반 추론 제어 로직 구현",
          "Point-wise 궤적 정확도 검증 모듈 및 실시간 모니터링 UI 개발",
          "Hugging Face·Waymo Open Dataset 기반 Alpamayo-r1 모델 성능 지표 도출 및 오류 데이터 필터링",
        ],
        achievements: [
          "추론 지연 0.8초 이내 달성 — 오프라인 대비 모델 평가 피드백 루프 대폭 단축",
          "다중 궤적 데이터를 프레임 드랍 없이 실시간 렌더링하는 모니터링 환경 구축",
          "Waymo 데이터셋 기반 오류 데이터 자동 필터링 파이프라인 구현으로 데이터 검증 공수 절감",
        ],
        techStack: {
          languages: ["Python", "C++"],
          libs: ["CARLA", "PyTorch", "Hugging Face", "NumPy", "Pandas"],
          patterns: [
            "동기/비동기 추론 파이프라인",
            "시뮬레이터-모델 양방향 통신",
            "Point-wise 검증",
          ],
        },
      },
    ],
  },
  {
    id: "career-1",
    company: "SURESOFTTECH",
    companyLogo: sureLogo,
    position: "Frontend Developer",
    department: "임베디드 기술 연구소 / 차량솔루션 1팀",
    period: "2023.03 - 2025.12",
    projects: [
      {
        name: "차량 통합 제어기(CCU2) Log Monitor & Analyzer",
        period: "2024.07 - 2025.06",
        role: "Frontend Lead / 아키텍처 설계",
        impact:
          "초당 8만 건 로그 무중단 처리 — 현업 엔지니어 분석 시간 5분→30초, 고객사 납품 일정 단축에 기여",
        description:
          "DLT/CAN/DoIP/SOMEIP 대용량 로그를 실시간 수집·분석하는 Electron 기반 분석 플랫폼. 기존 DLT-Viewer의 한계를 대체하여 비전문가도 직관적으로 분석 가능한 UX 구현.",
        tasks: [
          "웹 뷰어 → Electron 데스크톱 앱 전환 설계 및 ZeroMQ/IPC 기반 비동기 수집 파이프라인 구축",
          "가상 스크롤 + gridBufferDataObj 기반 탐색 최적화로 수십만 건 탐색 시 0.2초 미만 응답",
          "Zustand 기반 전역 상태 + Custom Store 설계로 실시간 데이터 동기화 안정화",
          "비개발 직군(차량 평가 엔지니어) 대상 UX 피드백 수렴 및 분석 워크플로우 재설계",
        ],
        achievements: [
          "렌더링 성능 2.3배 향상(1.04s→450ms), 메모리 30% 절감(3.3GB→2.0GB)",
          "로그 분석 시간 5분→30초로 단축 — 엔지니어 일일 분석 처리량 증가에 기여",
          "초당 80,000건 이상 로그를 UI Freezing 없이 실시간 시각화",
          "차트 렌더링 Aggregation 적용으로 3.2s→0.48s(85% 개선)",
          "테스트 코드 및 스크립트 모듈화 도입으로 기능 추가 시 장애 발생률 대폭 감소",
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
        impact:
          "100만 건 로그 2초 이내 탐색 — 반복 분석 워크플로우 30~40% 단축",
        description:
          "수백만 건 DLT/CSV 로그를 사용자 맞춤 UI·필터링으로 분석하는 Electron 기반 툴. 반복 작업 자동화와 사용자 중심 레이아웃으로 현업 분석가의 실사용성에 집중.",
        tasks: [
          "DevExtreme DataGrid 가상 스크롤 고도화 및 Stream API 기반 대용량 Export 파이프라인 구축",
          "rc-dock 기반 도킹 레이아웃(패널 배치 저장·복원) 및 IPC 외부 뷰어 연동 자동화",
          "정규식 호환성·UI 렌더링 이슈 등 반복 문제 트러블슈팅 플레이북 문서화",
        ],
        achievements: [
          "100만 건 이상 로그 로딩·탐색 평균 응답 속도 2초 이내 달성",
          "Stream API 도입으로 대용량 CSV Export 시 메모리 사용량 60% 절감",
          "100만 행 데이터 3초 이내 파일 변환·저장 고속 Export 구현",
          "맞춤형 레이아웃 + 외부 뷰어 자동화로 반복 작업 제거, 워크플로우 30~40% 단축",
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
        period: "2025.09 - 2025.12",
        role: "Frontend / 아키텍처 개선",
        impact:
          "레거시 코드베이스 30% 경량화 — 리렌더링 80% 감소, 프레임 드랍 0% 달성",
        description:
          "차량 테스트/평가 산출물 클라우드 통합 관리 SaaS 플랫폼의 레거시 기술 부채 해소 및 구조적 리팩토링. 단순 기능 추가가 아닌 장기 운영을 고려한 아키텍처 개선에 집중.",
        tasks: [
          "DDD 기반 아키텍처 재편 및 공통 로직 커스텀 훅 추상화로 유지보수성 강화",
          "무한 스크롤 DOM 연산을 Web Worker로 분리하여 메인 스레드 블로킹 제거",
          "Global → Local State 전환 및 AgGrid/AgChart 커스터마이징으로 대시보드 구현",
        ],
        achievements: [
          "DDD + 모듈화로 전체 코드베이스(LOC) 30% 절감",
          "컴포넌트 의존성 최적화로 리렌더링 80% 감소(5회→1회)",
          "Web Worker 연산 분산으로 대용량 리스트 스크롤 시 프레임 드랍 0% 달성",
          "Global State 의존도 축소로 사이드 이펙트성 버그 발생 위험 최소화",
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
