import type { Project } from "../../types";
import banner from "./banner.png";

export const p2pProject: Project = {
  id: "p2p-service",
  banner,
  title: "동시 파일 전송 서버 무결성 설계",
  subTitle: "동시 전송 무결성 보장",
  subtitle: "fork·flock으로 다중 클라이언트 Race Condition 제어",
  summary:
    "여러 클라이언트가 같은 파일을 동시에 다룰 때 데이터가 손상되는 문제를 C와 Linux 시스템 콜로 해결했습니다. fork로 세션을 분리하고 flock으로 읽기/쓰기 경계를 나눠 파일 무결성을 보장했습니다.",
  tags: ["C", "Linux", "Socket Programming", "System Call", "Multi-Processing"],
  links: [
    // { label: "Github", href: "#" }, // 실제 링크 입력 필요
  ],
  period: "2023.09 ~ 2023.12", // 기간 수정 필요 (예: 2023.09 – 2023.12)
  team: "Individual (100%)",
  overview:
    "다중 클라이언트가 파일을 업로드·다운로드·삭제하는 과정에서 같은 파일에 동시에 접근하면 데이터가 쉽게 깨질 수 있습니다. 소켓 연결, 프로세스 생명주기, 파일 I/O를 직접 구현하고, 경쟁 상태를 제어하는 동기화 경계를 함께 설계했습니다.",

  // ❔ Why System Programming?
  why: [
    {
      title: "Why 시스템 콜 직접 구현?",
      desc: "파일 전송 오류의 원인을 추적하려면 `open`, `read`, `write`, `socket`이 실제 I/O 흐름에서 어디서 막히는지 알아야 했습니다. 고수준 라이브러리보다 시스템 콜을 직접 사용해 병목과 실패 지점을 확인했습니다.",
    },
    {
      title: "Why fork + flock?",
      desc: "동시 접속은 세션을 분리하고, 파일 충돌은 접근 경계를 잠가야 했습니다. `fork()`로 클라이언트별 요청 흐름을 나누고 `flock()`으로 읽기/쓰기 임계 구역을 제어했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "100% (Individual)",
    tasks: [
        "TCP/IP 연결 흐름(Bind, Listen, Accept, Connect)과 커스텀 FTP 명령어 처리 구현",
        "`fork()` 기반 다중 클라이언트 세션 분리 및 `waitpid`를 활용한 자식 프로세스 회수",
        "`flock` Reader/Writer Lock으로 동시 파일 접근 시 데이터 손상 방지",
        "로그인, 파일 목록 조회, 업로드·다운로드·삭제 흐름을 서버 명령 단위로 분리",
        "`SIGINT`, `SIGCHLD` 핸들링으로 종료와 예외 흐름 안정화",
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
    "다중 클라이언트 업로드·다운로드·삭제 흐름에서 데이터 손상 0건 유지",
    "동시 파일 접근 문제를 Reader/Writer Lock 구조로 분리해 재현 가능한 해결 방식 확보",
    "자식 프로세스 회수와 시그널 핸들링으로 서버 종료·예외 흐름 안정화",
  ],

  images: [], // 필요 시 시연 스크린샷 추가

  highlights: [
    { value: "10+", label: "동시 접속 처리" },
    { value: "100%", label: "개인 구현" },
    { value: "0건", label: "데이터 손상" },
  ],

  techDecisions: [
    { tech: "C", reason: "파일 I/O와 메모리 흐름을 직접 제어해 동시 접근 문제를 추적하기 위해 선택" },
    { tech: "Linux", reason: "fork, flock, signal 등 POSIX 도구로 프로세스와 파일 잠금을 직접 설계" },
    { tech: "Socket Programming", reason: "TCP/IP 연결 수립부터 데이터 전송 실패 지점까지 네트워크 흐름을 직접 확인" },
  ],
};
