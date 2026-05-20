import type { Project } from "../../types";
import banner from "./banner.png";

export const p2pProject: Project = {
  id: "p2p-service",
  banner,
  title: "Multi-Client FTP Server",
  subTitle: "P2P Service",
  subtitle: "리눅스 시스템 콜 기반의 동시성 파일 전송 서버",
  summary:
    "C와 리눅스 시스템 콜로 다중 접속 파일 전송 서버를 구현했습니다. fork 기반 멀티프로세싱과 flock 파일 잠금을 적용해 동시 접근 상황에서도 데이터 무결성을 유지하도록 설계했습니다.",
  tags: ["C", "Linux", "Socket Programming", "System Call", "Multi-Processing"],
  links: [
    // { label: "Github", href: "#" }, // 실제 링크 입력 필요
  ],
  period: "2023.09 ~ 2023.12", // 기간 수정 필요 (예: 2023.09 – 2023.12)
  team: "Individual (100%)",
  overview:
    "소켓 통신, 프로세스, 파일 I/O를 직접 다루며 네트워크 서버의 기본 동작을 구현한 프로젝트입니다. 여러 클라이언트가 동시에 파일을 업로드·다운로드하는 상황을 만들고, 경쟁 상태를 제어하기 위한 동기화 메커니즘까지 함께 설계했습니다.",

  // ❔ Why System Programming?
  why: [
    {
      title: "Why Low-Level Implementation?",
      desc: "고수준 라이브러리보다 `open`, `read`, `write`, `socket` 같은 시스템 콜을 직접 사용해 OS가 I/O와 네트워크 요청을 처리하는 흐름을 확인하고자 했습니다.",
    },
    {
      title: "Why Multi-Processing?",
      desc: "다수의 클라이언트 요청을 병렬적으로 처리하기 위해 `fork()` 기반 자식 프로세스 모델을 적용했습니다. 각 클라이언트 세션을 분리해 요청 처리 중 서로 간섭하지 않도록 구성했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "100% (Individual)",
    tasks: [
        "TCP/IP 기반 연결 흐름 구현: Bind, Listen, Accept, Connect 단계별 서버·클라이언트 통신 구성",
        "`fork()` 기반 다중 클라이언트 접속 처리 및 `waitpid`를 활용한 자식 프로세스 회수",
        "`flock` 기반 Reader/Writer Lock으로 동시 파일 접근 시 데이터 손상 방지",
        "로그인, 파일 목록 조회, 업로드·다운로드·삭제 등 커스텀 FTP 명령어 처리 로직 개발",
        "`SIGINT` 등 시그널 핸들링으로 서버·클라이언트 종료 흐름 안정화",
    ],
  },

  // 🚨 트러블 슈팅
  troubleshooting: [
    {
      title: "동시 파일 접근 시 데이터 무결성 훼손 (Race Condition)",
      problem:
        "여러 클라이언트가 동시에 같은 파일에 업로드하거나 삭제를 시도할 때 파일 내용이 뒤섞이거나 손상되는 경쟁 상태가 발생했습니다.",
      cause:
        "파일 디스크립터에 대한 동시 접근을 애플리케이션 레벨에서 제어하지 않아 Critical Section을 보호하는 장치가 없었습니다.",
      solution:
        "`flock()`을 도입해 파일 접근 시 Advisory Lock을 적용했습니다. 쓰기 작업에는 Exclusive Lock, 읽기 작업에는 Shared Lock을 사용해 동시성을 제어했습니다.",
      learning:
        "멀티 프로세스 환경에서는 공유 자원의 접근 경계를 명확히 두어야 하며, OS가 제공하는 동기화 도구를 상황에 맞게 선택해야 한다는 점을 확인했습니다.",
    },
    {
      title: "예기치 않은 연결 종료와 좀비 프로세스 이슈",
      problem:
        "클라이언트가 강제 종료(`Ctrl+C`)될 때 서버 측 자식 프로세스가 회수되지 않고 좀비 프로세스로 남는 문제가 있었습니다.",
      cause:
        "부모 프로세스가 자식 프로세스의 종료 상태를 수신하지 않아 프로세스 테이블에 엔트리가 남았습니다.",
      solution:
        "`signal(SIGCHLD)` 핸들러를 등록하고, 핸들러 내부에서 `waitpid()`를 WNOHANG 모드로 호출해 종료된 자식 프로세스를 즉시 회수하도록 개선했습니다.",
      learning:
        "서버 프로그램에서는 요청 처리뿐 아니라 프로세스 생명주기와 종료 흐름까지 설계 대상이라는 점을 배웠습니다.",
    },
  ],

  // ✨ 결과
  results: [
    "다중 클라이언트 환경에서 안정적인 파일 업로드/다운로드/삭제 기능 구현 완료",
    "flock 적용 후 동시 접근 시 데이터 오염 없이 파일 무결성 유지",
    "로그인과 접근 제어 로직을 포함한 기본 보안 파일 서버 구축",
  ],

  images: [], // 필요 시 시연 스크린샷 추가

  highlights: [
    { value: "10+", label: "동시 접속 처리" },
    { value: "100%", label: "전송 성공률" },
    { value: "0건", label: "데이터 손상" },
  ],

  techDecisions: [
    { tech: "C", reason: "시스템 콜과 메모리·파일 I/O 흐름을 직접 제어하기 위해 선택" },
    { tech: "Linux", reason: "POSIX 시스템 콜(fork, flock, signal)을 활용한 서버 프로그래밍에 적합" },
    { tech: "Socket Programming", reason: "TCP/IP 연결 수립부터 데이터 전송까지 네트워크 흐름을 직접 구현" },
  ],
};
