import type { Project } from "../../types";
import banner from "./banner.png";

export const secureChatProject: Project = {
  id: "secure-chat",
  banner,
  title: "Secure Chat (보안 채팅 프로그램)",
  subTitle: "Secure-Chat",
  subtitle: "Java Socket & RSA/AES 하이브리드 암호화 메신저",
  summary:
    "Java 소켓 프로그래밍으로 1:1 통신을 구현하고, RSA 비대칭키로 AES 대칭키를 안전하게 교환하여 도청이 불가능한 보안 채팅 시스템을 구축했습니다.",
  tags: ["Java", "Socket", "RSA", "AES-256", "Multi-Thread"],
  links: [
    // { label: "Github", href: "#" }, // 실제 링크 입력
  ],
  period: "2023.03 ~ 2023.06", // 기간 입력 필요 (예: 2023.xx)
  team: "Individual (100%)",
  overview:
    "네트워크 통신의 기초인 소켓(Socket)을 활용해 1:1 채팅 프로그램을 구현하고, 그 위에 보안 계층을 입힌 프로젝트입니다. RSA 공개키 암호화 방식으로 대칭키(AES)를 안전하게 교환(Key Exchange)한 뒤, 실제 대화 내용은 AES-256으로 고속 암호화하여 전송하는 '하이브리드 암호화 시스템'을 직접 설계했습니다.",

  // ❔ 기술적 의사결정
  why: [
    {
      title: "Why Hybrid Encryption? (RSA + AES)",
      desc: "RSA는 보안성이 높지만 연산 속도가 느려 실시간 채팅에 부적합하고, AES는 빠르지만 키 배송(Key Distribution) 보안 문제가 있습니다. 이 둘을 결합해 '키 교환은 RSA, 메시지는 AES'로 처리하는 SSL/TLS의 기본 원리를 구현해보고자 했습니다.",
    },
    {
      title: "Why Java Sockets?",
      desc: "고수준 라이브러리에 의존하지 않고, TCP 연결 수립(3-way handshake)부터 스트림(Stream) 데이터 처리, 스레드 관리까지 네트워크 통신의 로우 레벨 메커니즘을 깊이 있게 이해하기 위해 선택했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "100% (Individual)",
    tasks: [
      "Socket 통신 아키텍처 설계: Server/Client 구조 및 Multi-thread(SendThread, ReceiveThread)를 이용한 양방향 비동기 통신 구현",
      "RSA 키 교환 프로토콜 구현: Server의 공개키(Public Key) 생성 및 배포, Client의 AES 키 암호화 전송 및 Server의 복호화 로직(Key Exchange) 개발",
      "AES-256 메시지 암호화: 대칭키 기반의 실시간 메시지 암호화/복호화 모듈(encryptAES256/decryptAES256) 구현",
      "보안 무결성 검증: 송수신 양측의 평문(Plaintext)과 암호문(Ciphertext) 로그 비교를 통한 기밀성 및 해킹 안전성 검증",
    ],
  },

  // 🚨 트러블 슈팅 (가상 시나리오: 프로젝트 특성에 맞춰 구성)
  troubleshooting: [
    {
      title: "Socket 입력 스트림의 블로킹(Blocking I/O) 문제 해결",
      problem:
        "메시지를 수신하는 동안(readUTF) 스레드가 입력 대기 상태에 빠져, 내가 메시지를 보내고 싶어도(writeUTF) 전송이 불가능해지는 '반이중(Half-duplex)' 현상 발생.",
      cause:
        "Java의 기본 InputStream은 블로킹 방식이므로, 단일 스레드에서 송수신을 순차적으로 처리하려다 데드락과 유사한 대기 상태가 됨.",
      solution:
        "송신(SendThread)과 수신(ReceiveThread)을 담당하는 스레드를 분리(Multi-threading)하여, 입출력 작업이 서로를 차단하지 않고 독립적으로 수행되도록 아키텍처를 재설계함.",
      learning:
        "네트워크 I/O 처리 시 스레드 분리의 필요성과 동시성(Concurrency) 제어의 중요성을 체감함.",
    },
    {
      title: "RSA 암호화 데이터 크기 제한(BadPaddingException) 해결",
      problem:
        "RSA로 데이터를 암호화할 때 간헐적으로 `javax.crypto.BadPaddingException` 오류가 발생하며 암호화에 실패함.",
      cause:
        "RSA 알고리즘은 키 크기(예: 2048bit)에 따라 한 번에 암호화할 수 있는 평문의 길이가 제한됨. 긴 문자열을 RSA로 직접 처리하려다 허용 범위를 초과함.",
      solution:
        "RSA는 오직 짧은 데이터인 'AES 대칭키' 교환에만 사용하고, 실제 긴 채팅 메시지는 블록 암호화 방식인 AES로 처리하도록 역할 분담을 명확히 하여 해결.",
      learning:
        "비대칭키 암호화의 용도(키 교환/서명)와 대칭키 암호화의 용도(데이터 암호화)를 구분해야 하는 기술적 이유를 명확히 이해함.",
    },
  ],

  // ✨ 결과
  results: [
    "RSA-2048 및 AES-256 기반의 안전한 1:1 채팅 통신 성공",
    "Wireshark 패킷 캡처 시 평문이 노출되지 않음을 확인 (기밀성 확보)",
    "Server/Client 간 키 교환 및 암호화 통신 시연 성공 (터미널 로그 검증)",
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
