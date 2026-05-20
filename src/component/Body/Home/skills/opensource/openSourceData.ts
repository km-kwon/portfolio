import type { OpenSourcePackage } from "../types";

export const openSourceData: OpenSourcePackage[] = [
  {
    id: "pkg-1",
    name: "@broadcast-event-system",
    description:
      "React 앱에서 Prop Drilling 없이 이벤트를 전달하기 위해 만든 타입 안전 이벤트 버스입니다. React 훅은 선택적으로 제공하고, 핵심 로직은 의존성 없는 TypeScript로 구성했습니다.",
    version: "1.0.3",
    // downloads: "358",
    githubUrl: "https://github.com/km-kwon/broadcast-event-system",
    npmUrl: "https://www.npmjs.com/package/broadcast-event-system",
    techStack: ["React", "TypeScript", "event-driven", "web-broadcast"],
  },
  {
    id: "pkg-2",
    name: "@circular-queue-react",
    description:
      "로그·스트리밍 데이터처럼 오래된 값을 밀어내며 최신 상태를 유지해야 하는 UI를 위해 만든 원형 큐입니다. React 사용 여부와 관계없이 쓸 수 있도록 자료구조 로직을 분리했습니다.",
    version: "1.0.2",
    // downloads: "255",
    githubUrl: "https://github.com/km-kwon/react-circular-queue",
    npmUrl: "https://www.npmjs.com/package/circular-queue-react",
    techStack: ["React", "TypeScript", "Data Structure"],
  },
];
