import type { Project } from "../types";

export const ftpServerProject: Project = {
    id: "ftp-server",
    title: "Multi-Client FTP Server",
    subTitle: 'P2P Service',
    subtitle: "리눅스 시스템 콜 기반의 동시성 파일 전송 서버",
    summary: "C언어와 리눅스 시스템 콜을 직접 활용하여 다중 접속을 지원하는 FTP 서버입니다. Fork 기반 멀티프로세싱과 파일 락(Flock)을 통해 데이터 무결성을 보장하는 동시성 제어를 구현했습니다.",
    tags: ["C", "Linux", "Socket Programming", "System Call", "Multi-Processing"],
    links: [
        { label: "Github", href: "#" }, // 실제 링크 입력 필요
    ],
    period: "University Project", // 기간 수정 필요 (예: 2023.09 – 2023.12)
    team: "Individual (100%)",
    overview:
        "네트워크 프로그래밍의 핵심인 소켓(Socket)과 리눅스 시스템 콜(System Call)을 깊이 있게 이해하기 위해 시작된 프로젝트입니다. 단순 1:1 전송을 넘어, `fork()`를 활용해 여러 클라이언트가 동시에 접속하여 파일을 업로드/다운로드할 수 있는 환경을 구축했고, 이 과정에서 발생하는 경쟁 상태(Race Condition)를 제어하기 위한 동기화 메커니즘을 설계했습니다.",

    // ❔ Why System Programming?
    why: [
        {
            title: "Why Low-Level Implementation?",
            desc: "고수준 라이브러리 없이 `open`, `read`, `write`, `socket` 등 커널 수준의 시스템 콜을 직접 다루며 OS가 I/O와 네트워크를 처리하는 방식을 근본적으로 이해하고자 했습니다.",
        },
        {
            title: "Why Multi-Processing?",
            desc: "단일 프로세스 모델의 한계를 극복하고, 다수의 클라이언트 요청을 병렬적으로 처리하기 위해 `fork()`를 통한 자식 프로세스 생성 방식을 채택하여 독립적인 세션을 보장했습니다.",
        }
    ],

    // 👩🏻‍💻 수행 역할
    role: {
        percentage: "100% (Individual)",
        tasks: [
            "Socket 통신 아키텍처: TCP/IP 기반의 연결 지향형 통신 구현 (Bind, Listen, Accept, Connect)",
            "동시성 처리 (Concurrency): `fork()` 시스템 콜을 활용한 다중 클라이언트 접속 처리 및 좀비 프로세스 방지(`waitpid`)",
            "동기화 및 무결성: `flock`을 활용한 파일 잠금(Reader/Writer Lock) 메커니즘 구현으로 데이터 손상 방지",
            "프로토콜 설계 및 기능 구현: 로그인 인증, 파일 리스트(ls), 업로드/다운로드, 삭제 등 커스텀 FTP 명령어 처리 로직 개발",
            "예외 처리 및 시그널 핸들링: `SIGINT` 등 시그널 포착을 통한 안전한 서버/클라이언트 종료 처리",
        ],
    },

    // 🚨 트러블 슈팅
    troubleshooting: [
        {
            title: "동시 파일 접근 시 데이터 무결성 훼손 (Race Condition)",
            problem: "여러 클라이언트가 동시에 같은 파일에 업로드하거나 삭제를 시도할 때, 파일 내용이 뒤섞이거나 손상되는 경쟁 상태가 발생함.",
            cause: "운영체제 레벨에서 파일 디스크립터에 대한 동시 접근 제어가 기본적으로 보장되지 않아, Critical Section에 대한 보호 장치가 부재했음.",
            solution: "`flock()` 시스템 콜을 도입하여 파일 접근 시 Advisory Lock을 걸도록 구현. 쓰기 작업 시에는 Exclusive Lock(배타적 잠금)을, 읽기 시에는 Shared Lock(공유 잠금)을 적용하여 동시성을 제어함.",
            learning: "멀티 프로세스 환경에서 공유 자원(파일) 관리의 중요성과 OS가 제공하는 동기화 도구(Lock)의 동작 원리를 체득함.",
        },
        {
            title: "예기치 않은 연결 종료와 좀비 프로세스 이슈",
            problem: "클라이언트가 강제 종료(`Ctrl+C`)될 때 서버 측의 자식 프로세스가 제대로 회수되지 않고 좀비 프로세스로 남아 리소스를 점유하는 현상.",
            cause: "부모 프로세스가 자식 프로세스의 종료 상태를 수신(`wait`)하지 않아 프로세스 테이블에 엔트리가 남음.",
            solution: "`signal(SIGCHLD)` 핸들러를 등록하고, 핸들러 내부에서 `waitpid()`를 비봉쇄(WNOHANG) 모드로 호출하여 종료된 자식 프로세스를 즉시 회수하도록 로직 개선.",
            learning: "프로세스 생명주기 관리와 시그널(Signal) 처리를 통한 안정적인 데몬(Daemon) 서버 구조의 필요성을 배움.",
        }
    ],

    // ✨ 결과
    results: [
        "다중 클라이언트 환경에서 안정적인 파일 업로드/다운로드/삭제 기능 구현 완료",
        "Flock 적용 후 동시 접근 시 데이터 오염 0건 달성 (무결성 확보)",
        "로그인 보안 및 접근 제어 로직을 통해 기본적인 보안 파일 서버 구축"
    ],

    images: [] // 필요 시 시연 스크린샷 추가
};