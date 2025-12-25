import type { OpenSourcePackage } from "../types";

export const openSourceData: OpenSourcePackage[] = [
  {
    id: "pkg-1",
    name: "@broadcast-event-system",
    description:
      "“React 애플리케이션을 위한 타입 안전(Type-safe) 이벤트 버스 및 브로드캐스트 서비스입니다. React 훅을 사용할 때만 React가 필요하고, 그 외에는 의존성이 전혀 없는 순수 TypeScript(Zero dependencies)입니다.”",
    version: "1.0.3",
    downloads: "358",
    githubUrl: "https://github.com/km-kwon/broadcast-event-system",
    npmUrl: "https://www.npmjs.com/package/broadcast-event-system",
    techStack: ["React", "TypeScript", "event-driven", "web-broadcast"],
  },
  {
    id: "pkg-2",
    name: "@circular-queue-react",
    description:
      "TypeScript와 React를 위한 고성능 원형 버퍼/큐입니다. 의존성은 없고(React는 선택 사항), 로그 처리, 스트리밍 데이터, 롤링 윈도우, 실시간 UI 업데이트에 좋습니다.",
    version: "1.0.2",
    downloads: "255",
    githubUrl: "https://github.com/km-kwon/react-circular-queue",
    npmUrl: "https://www.npmjs.com/package/circular-queue-react",
    techStack: ["React", "TypeScript", "Data Structure"],
  },
];
