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
      "프론트엔드에서 다뤄온 실시간 데이터 처리·시각화 역량을 자율주행 시뮬레이션의 추론·검증 루프로 확장하고 있습니다.",
    projects: [
      {
        name: "자율주행 추론 루프 지연 35% 개선",
        period: "2026.01 - 현재",
        role: "AI 시뮬레이션 연동 / 모델 검증 · 평가 파이프라인",
        impact:
          "CARLA 추론 루프를 평가 파이프라인으로 연결 — 지연 1.2s→0.78s, FPS 18→28, ADE/FDE 자동 기록",
        description:
          "자율주행 궤적 예측 모델을 CARLA 시뮬레이터 루프에 연결하고, 추론 결과를 실시간 시각화·로깅하는 검증 환경을 구축했습니다. 시나리오별 지표를 자동 수집해 모델 회귀 검증 흐름을 반복 가능하게 만들었습니다.",
        tasks: [
          "CARLA 소스 커스터마이징으로 시뮬레이터-AI 모델 간 실시간 양방향 데이터 통신 아키텍처 설계",
          "동기/비동기 추론 파이프라인 설계 및 차량 Tick 기반 추론 제어 로직 구현",
          "생성 궤적과 Ground Truth 간 Point-wise 좌표 오차 계산 모듈 및 ADE / FDE / RMSE 산출 로직 구현",
          "실시간 모니터링 UI 개발 및 다중 궤적 데이터 시각화 최적화",
          "Hugging Face·Waymo Open Dataset 기반 Alpamayo-r1 모델 성능 지표 도출 및 오류 데이터 자동 필터링",
          "시나리오별 오차율·추론 시간·FPS를 CSV로 자동 저장하는 평가 로깅 구조 설계",
        ],
        achievements: [
          "ADE 0.72m, FDE 1.84m, RMSE 0.91m 기준으로 궤적 예측 정확도 산출",
          "추론 지연 1.2s → 0.78s(약 35%) 단축으로 실시간 검증 흐름 개선",
          "CARLA 시뮬레이터 평균 FPS 18 → 28 개선으로 다중 궤적 시각화 부하 완화",
          "시나리오별 평가 지표 CSV 자동 저장으로 모델 회귀 검증 사이클 표준화",
          "Waymo 데이터셋 기반 오류 데이터 자동 필터링 파이프라인으로 데이터 검증 공수 절감",
        ],
        techStack: {
          languages: ["Python", "C++"],
          libs: ["CARLA", "PyTorch", "Hugging Face", "NumPy", "Pandas"],
          patterns: [
            "동기/비동기 추론 파이프라인",
            "시뮬레이터-모델 양방향 통신",
            "Point-wise 검증 (ADE / FDE / RMSE)",
            "평가 로깅 자동화",
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
        name: "80K/s 실시간 로그 렌더링 병목 개선",
        period: "2024.07 - 2025.06",
        role: "Frontend Lead / 아키텍처 설계",
        impact:
          "차량 평가 엔지니어의 분석 대기 5분→30초 — 80K/s 로그를 UI Freezing 없이 시각화",
        description:
          "DLT/CAN/DoIP/SOMEIP 로그를 실시간 수집·분석하는 Electron 기반 분석 플랫폼입니다. 대용량 로그에서도 사용자가 기다리거나 외부 도구로 우회하지 않도록 수집 파이프라인, 상태 구조, 렌더링 흐름을 함께 재설계했습니다.",
        tasks: [
          "웹 뷰어 → Electron 데스크톱 앱 전환 설계 및 ZeroMQ/IPC 기반 비동기 수집 파이프라인 구축",
          "가상 스크롤 + gridBufferDataObj 기반 탐색 최적화로 수십만 건 탐색 시 0.2초 미만 응답",
          "Zustand 기반 전역 상태 + Custom Store 설계로 실시간 데이터 동기화 안정화",
          "차량 평가 엔지니어 피드백을 반영해 분석 워크플로우와 화면 구조 재설계",
        ],
        achievements: [
          "렌더링 성능 2.3배 향상(1.04s→450ms), 메모리 30% 절감(3.3GB→2.0GB)",
          "로그 분석 시간 5분→30초로 단축해 반복 분석 흐름 개선",
          "초당 80,000건 이상 로그를 UI Freezing 없이 실시간 시각화",
          "차트 렌더링 Aggregation 적용으로 3.2s→0.48s(85% 개선)",
          "테스트 코드 및 스크립트 모듈화로 기능 추가 시 회귀 이슈를 빠르게 확인하는 구조 마련",
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
        name: "100만 건 DLT 로그 탐색·Export 메모리 최적화",
        period: "2025.07 - 2025.09",
        role: "Frontend Lead / 성능 최적화",
        impact:
          "100만 건 탐색 2초, Export 약 3초 — Stream API로 메모리 사용량 60% 절감",
        description:
          "수백만 건 DLT/CSV 로그를 사용자가 직접 필터링·배치·내보낼 수 있는 Electron 기반 분석 툴입니다. 반복 필터링, 패널 배치, 외부 뷰어 이동을 줄이기 위해 레이아웃 저장·복원과 Export 파이프라인을 개선했습니다.",
        tasks: [
          "DevExtreme DataGrid 가상 스크롤 고도화 및 Stream API 기반 대용량 Export 파이프라인 구축",
          "rc-dock 기반 도킹 레이아웃(패널 배치 저장·복원) 및 IPC 외부 뷰어 연동 자동화",
          "정규식 호환성·UI 렌더링 이슈 등 반복 문제 트러블슈팅 플레이북 문서화",
        ],
        achievements: [
          "100만 건 이상 로그 로딩·탐색 평균 응답 속도 2초 이내 달성",
          "Stream API 도입으로 대용량 CSV Export 시 메모리 사용량 60% 절감",
          "100만 행 데이터 3초 이내 파일 변환·저장 고속 Export 구현",
          "맞춤형 레이아웃 + 외부 뷰어 자동화로 반복 작업을 줄여 워크플로우 30~40% 단축",
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
        name: "Global State 해소와 DDD 구조 전환",
        period: "2025.09 - 2025.12",
        role: "Frontend / 아키텍처 개선",
        impact:
          "레거시 코드베이스 30% 경량화 — 리렌더링 80% 감소, 상태 변경 영향 범위 축소",
        description:
          "차량 테스트/평가 산출물 관리 SaaS의 레거시 구조를 정리하고 성능 병목을 개선했습니다. 단순 기능 추가보다 장기 운영을 고려해 도메인 경계, 상태 흐름, 렌더링 책임을 분리했습니다.",
        tasks: [
          "DDD 기반 아키텍처 재편 및 공통 로직 커스텀 훅 추상화로 유지보수성 강화",
          "무한 스크롤 DOM 연산을 Web Worker로 분리하여 메인 스레드 블로킹 제거",
          "Global → Local State 전환 및 AgGrid/AgChart 커스터마이징으로 대시보드 구현",
        ],
        achievements: [
          "DDD + 모듈화로 전체 코드베이스(LOC) 30% 절감",
          "컴포넌트 의존성 최적화로 리렌더링 80% 감소(5회→1회)",
          "Web Worker 연산 분산으로 대용량 리스트 스크롤 시 끊김 완화",
          "Global State 의존도 축소로 상태 변경 영향 범위 축소",
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
