import type { Project } from "../../types";
import banner from "./banner.png";

export const secureChatProject: Project = {
  id: "secure-chat",
  banner,
  title: "RSA/AES 하이브리드 암호화로 평문 노출 제거",
  subTitle: "평문 노출 0건 보안 채팅",
  subtitle: "Socket I/O 분리와 세션 키 교환으로 실시간 메시지 암호화",
  summary:
    "패킷 캡처 시 대화 내용이 그대로 보이는 문제를 Java Socket 위 암호화 계층으로 해결했습니다. RSA로 AES 세션 키를 교환하고 메시지는 AES-256으로 처리해 Wireshark 기준 평문 노출 0건을 확인했습니다.",
  tags: ["Java", "Socket", "RSA", "AES-256", "Multi-Thread"],
  links: [
    // { label: "Github", href: "#" }, // 실제 링크 입력
  ],
  period: "2023.03 ~ 2023.06", // 기간 입력 필요 (예: 2023.xx)
  team: "Individual (100%)",
  overview:
    "기본 Socket 채팅은 네트워크를 지나는 메시지가 평문으로 노출됩니다. 이 문제를 해결하기 위해 키 교환과 메시지 암호화 책임을 분리하고, 송수신 스레드를 나눠 사용자가 메시지를 입력하는 동안 수신 흐름이 막히지 않도록 구성했습니다.",

  // ❔ 기술적 의사결정
  why: [
    {
      title: "Why RSA + AES?",
      desc: "RSA는 키 교환에는 적합하지만 실시간 메시지 전체를 처리하기에는 비용이 큽니다. AES는 빠르지만 키 전달 문제가 있어, 키 교환은 RSA, 메시지 암호화는 AES로 책임을 나눴습니다.",
    },
    {
      title: "Why 송수신 스레드 분리?",
      desc: "채팅은 입력 대기와 수신 대기가 동시에 일어납니다. SendThread와 ReceiveThread를 분리해 블로킹 I/O가 사용자 입력 흐름을 막지 않도록 설계했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "100% (Individual)",
    tasks: [
      "Server/Client 구조와 SendThread·ReceiveThread 분리로 양방향 통신 블로킹 완화",
      "Server 공개키 배포, Client AES 키 암호화 전송, Server 복호화까지 이어지는 키 교환 구현",
      "AES-256 기반 메시지 암호화·복호화 모듈(encryptAES256/decryptAES256) 구현",
      "터미널 송수신 로그와 Wireshark 패킷 캡처를 비교해 평문 노출 여부 검증",
    ],
  },

  // 🚨 트러블 슈팅 (가상 시나리오: 프로젝트 특성에 맞춰 구성)
  troubleshooting: [
    {
      title: "Socket 입력 스트림의 블로킹(Blocking I/O) 문제 해결",
      problem:
        "메시지를 수신하는 동안(readUTF) 스레드가 입력 대기 상태에 머물러, 사용자가 메시지를 보내려 해도(writeUTF) 전송 흐름이 막히는 문제가 있었습니다.",
      cause:
        "Java 기본 InputStream은 블로킹 방식이므로 단일 스레드에서 송수신을 순차 처리할 경우 대기 상태가 길어졌습니다.",
      solution:
        "송신(SendThread)과 수신(ReceiveThread)을 담당하는 스레드를 분리해 입출력 작업이 서로를 차단하지 않고 독립적으로 수행되도록 재설계했습니다.",
      learning:
        "네트워크 I/O에서는 송수신 흐름을 분리해야 사용자 입력성과 수신 안정성을 함께 확보할 수 있다는 점을 확인했습니다.",
    },
    {
      title: "RSA 암호화 데이터 크기 제한(BadPaddingException) 해결",
      problem:
        "RSA로 데이터를 암호화할 때 `javax.crypto.BadPaddingException` 오류가 발생하며 암호화에 실패하는 경우가 있었습니다.",
      cause:
        "RSA는 키 크기에 따라 한 번에 암호화할 수 있는 평문 길이가 제한됩니다. 긴 메시지를 RSA로 직접 처리하려다 허용 범위를 초과했습니다.",
      solution:
        "RSA는 짧은 데이터인 AES 세션 키 교환에만 사용하고, 실제 채팅 메시지는 AES로 처리하도록 암호화 책임을 분리했습니다.",
      learning:
        "비대칭키와 대칭키는 보안 수준뿐 아니라 성능과 데이터 크기 제약까지 고려해 역할을 나눠야 한다는 점을 배웠습니다.",
    },
  ],

  // ✨ 결과
  results: [
    "RSA-2048 키 교환과 AES-256 메시지 암호화로 1:1 채팅 통신 구현",
    "Wireshark 패킷 캡처 기준 메시지 평문 노출 0건 확인",
    "송수신 스레드 분리로 입력 대기와 수신 대기가 서로 막지 않는 통신 흐름 확보",
  ],

  images: [], // 필요 시 시연 스크린샷 추가

  highlights: [
    { value: "256bit", label: "AES 메시지 암호화" },
    { value: "2048bit", label: "RSA 키 교환" },
    { value: "0건", label: "평문 노출" },
  ],

  techDecisions: [
    { tech: "Java", reason: "Socket, Thread, javax.crypto를 한 환경에서 다루며 통신과 암호화 흐름을 검증" },
    { tech: "RSA", reason: "클라이언트가 생성한 AES 세션 키를 서버에 안전하게 전달하기 위해 선택" },
    { tech: "AES-256", reason: "실시간 메시지를 RSA보다 낮은 비용으로 암호화·복호화하기 위해 적용" },
  ],
};
