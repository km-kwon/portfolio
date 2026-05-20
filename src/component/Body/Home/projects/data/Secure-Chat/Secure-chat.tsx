import type { Project } from "../../types";
import banner from "./banner.png";

export const secureChatProject: Project = {
  id: "secure-chat",
  banner,
  title: "Secure Chat (보안 채팅 프로그램)",
  subTitle: "Secure-Chat",
  subtitle: "Java Socket & RSA/AES 하이브리드 암호화 메신저",
  summary:
    "Java Socket 기반 1:1 채팅에 RSA/AES 하이브리드 암호화 구조를 적용했습니다. RSA로 AES 세션 키를 교환하고, 실제 메시지는 AES-256으로 암호화해 패킷 캡처 시 평문이 노출되지 않도록 구현했습니다.",
  tags: ["Java", "Socket", "RSA", "AES-256", "Multi-Thread"],
  links: [
    // { label: "Github", href: "#" }, // 실제 링크 입력
  ],
  period: "2023.03 ~ 2023.06", // 기간 입력 필요 (예: 2023.xx)
  team: "Individual (100%)",
  overview:
    "소켓 통신 위에 암호화 계층을 직접 얹어본 프로젝트입니다. RSA 공개키 방식으로 AES 세션 키를 교환한 뒤, 실제 대화 내용은 AES-256으로 암호화하여 전송하는 구조를 설계하고 터미널 로그와 패킷 캡처로 동작을 검증했습니다.",

  // ❔ 기술적 의사결정
  why: [
    {
      title: "Why Hybrid Encryption? (RSA + AES)",
      desc: "RSA는 키 교환에 적합하지만 메시지 전체를 암호화하기에는 비용이 크고, AES는 빠르지만 키 전달 문제가 있습니다. 두 방식을 분리해 '키 교환은 RSA, 메시지는 AES'로 처리하는 구조를 구현했습니다.",
    },
    {
      title: "Why Java Sockets?",
      desc: "TCP 연결 수립, 스트림 데이터 처리, 스레드 분리까지 네트워크 통신의 기본 흐름을 직접 다루기 위해 Java Socket을 선택했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "100% (Individual)",
    tasks: [
      "Server/Client 구조와 SendThread·ReceiveThread 분리를 통한 양방향 비동기 통신 구현",
      "Server 공개키 생성·배포, Client AES 키 암호화 전송, Server 복호화까지 이어지는 RSA 키 교환 로직 개발",
      "AES-256 기반 실시간 메시지 암호화·복호화 모듈(encryptAES256/decryptAES256) 구현",
      "송수신 로그와 Wireshark 패킷 캡처를 비교해 평문 노출 여부 검증",
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
    "RSA-2048 및 AES-256 기반 1:1 암호화 채팅 통신 구현",
    "Wireshark 패킷 캡처 기준 평문 미노출 확인",
    "Server/Client 간 키 교환과 암호화 통신 흐름을 터미널 로그로 검증",
  ],

  images: [], // 필요 시 시연 스크린샷 추가

  highlights: [
    { value: "256bit", label: "AES 메시지 암호화" },
    { value: "2048bit", label: "RSA 키 교환" },
    { value: "0건", label: "평문 노출" },
  ],

  techDecisions: [
    { tech: "Java", reason: "풍부한 암호화 라이브러리(javax.crypto)와 스레드 관리 지원" },
    { tech: "RSA", reason: "비대칭키로 AES 키를 안전하게 교환하는 SSL/TLS 기본 원리 구현" },
    { tech: "AES-256", reason: "RSA보다 빠른 대칭키 암호화로 실시간 채팅 메시지 처리" },
  ],
};
