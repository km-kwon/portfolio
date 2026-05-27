import type { OpenSourcePackage } from "../types";

export const openSourceData: OpenSourcePackage[] = [
  {
    id: "pkg-1",
    name: "@broadcast-event-system",
    description:
      "반복되는 이벤트 전달 문제를 npm 패키지로 분리했습니다. Prop Drilling 없이 타입 안전하게 이벤트를 발행·구독하고, React 훅은 선택 사항으로 둬 핵심 로직을 의존성 없는 TypeScript로 유지했습니다.",
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
      "로그·스트리밍 UI에서 최신 N개 상태만 안정적으로 유지하기 위해 만든 원형 큐입니다. 오래된 값을 밀어내는 자료구조 로직을 React와 분리해 렌더링 상태와 데이터 보관 책임을 나눴습니다.",
    version: "1.0.2",
    // downloads: "255",
    githubUrl: "https://github.com/km-kwon/react-circular-queue",
    npmUrl: "https://www.npmjs.com/package/circular-queue-react",
    techStack: ["React", "TypeScript", "Data Structure"],
  },
];
