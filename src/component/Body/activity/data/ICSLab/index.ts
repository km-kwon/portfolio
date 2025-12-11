import type { Activity } from "../../types";

export const icsLabActivity: Activity = {
  id: "ics-lab-research-tor-vpn",
  title: "ICS Lab 자기주도연구 (교내활동)",
  subTitle: "Tor와 VPN의 익명성 메커니즘 비교 및 다크웹 포렌식 기법 연구",
  period: ["2024.03", "2024.06"], // 활동 기간 정보가 없어서 비워두었습니다. 필요시 추가해주세요.

  mainContent: [
    "Tor와 VPN의 암호화 프로토콜 및 익명성 메커니즘을 심층적으로 비교 분석.",
    "다크웹 환경에서의 사용자 행위 추적 한계점을 파악하고 기술적 난제를 식별.",
    "네트워크 트래픽, 메모리, 시스템 로그 분석을 통합한 실질적인 포렌식 기법 설계.",
    "실제 환경과 유사한 시나리오를 구축하여 설계한 포렌식 기법의 유효성을 검증.",
    "네트워크 보안 및 디지털 포렌식 분야에 기여하며 문제 해결 능력과 독립적인 연구 수행 역량을 향상.",
  ],
  result:
    "Tor와 VPN의 익명성 차이를 명확히 규명 및 다크웹 사용자 행위 추적을 위한 실질적 포렌식 기법 논문 작성.",

  tags: ["Research", "Security", "Forensics", "Darkweb", "Network"],

  type: "activity",
};
