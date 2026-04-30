import React, { Suspense, lazy, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import HeroFallback from "../../../../three/scenes/HeroFallback";
import SectionMarker from "../../../common/SectionMarker";

const PortfolioWorldCanvas = lazy(
  () => import("../../../../three/scenes/PortfolioWorldCanvas")
);

const metrics = [
  ["80K/sec", "real-time log UI"],
  ["1M rows", "worker indexed search"],
  ["0 plain", "encrypted transport"],
];

const scenes = ["Identity", "World", "Projects", "Skills", "Archive"];

const layers = [
  {
    label: "Interface",
    title: "읽히는 화면",
    body: "사용자가 복잡한 상태를 판단할 수 있도록 정보 밀도와 시각적 우선순위를 설계합니다.",
  },
  {
    label: "Performance",
    title: "버티는 구조",
    body: "대용량 데이터, 렌더링 비용, 메모리 흐름을 분리해 제품이 느려지는 지점을 줄입니다.",
  },
  {
    label: "Security",
    title: "안전한 연결",
    body: "보안 전공의 시각으로 데이터 흐름과 실패 시나리오를 먼저 의심합니다.",
  },
];

const ImmersiveShowcase: React.FC<{ onScrollTo: (id: string) => void }> = ({
  onScrollTo,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.35,
  });

  const sceneY = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    prefersReducedMotion ? [0, 0, 0] : [80, 0, -90]
  );
  const sceneScale = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    prefersReducedMotion ? [1, 1, 1] : [0.94, 1.03, 1.08]
  );
  const copyY = useTransform(
    smoothProgress,
    [0, 0.35, 1],
    prefersReducedMotion ? [0, 0, 0] : [62, 0, -52]
  );
  const copyOpacity = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [0.2, 1, 1, 0.45]);
  const calloutY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [0, 0, 0] : [110, -10, -120]
  );
  const calloutOpacity = useTransform(smoothProgress, [0.08, 0.28, 0.78, 0.96], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="world"
      className="relative left-1/2 mb-14 min-h-[clamp(680px,92vh,860px)] w-screen -translate-x-1/2 overflow-clip bg-(--bg)"
      aria-labelledby="world-title"
    >
      <div className="relative min-h-[clamp(680px,92vh,860px)] overflow-hidden">
        <motion.div
          className="immersive-scene-layer absolute inset-0"
          style={{ y: sceneY, scale: sceneScale }}
          aria-hidden
        >
          <Suspense fallback={<HeroFallback />}>
            <PortfolioWorldCanvas />
          </Suspense>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_46%,transparent_0%,rgba(26,29,35,0.04)_34%,rgba(26,29,35,0.42)_72%,rgba(26,29,35,0.82)_100%),linear-gradient(90deg,rgba(26,29,35,0.92),rgba(26,29,35,0.36)_48%,rgba(26,29,35,0.72))] [html[data-theme='light']_&]:bg-[radial-gradient(circle_at_64%_46%,rgba(250,251,252,0)_0%,rgba(250,251,252,0.18)_34%,rgba(250,251,252,0.54)_72%,rgba(250,251,252,0.9)_100%),linear-gradient(90deg,rgba(250,251,252,0.95),rgba(250,251,252,0.34)_48%,rgba(250,251,252,0.74))]" />
        <div className="cinematic-scan pointer-events-none absolute inset-0" />
        <div className="immersive-scene-rail pointer-events-none absolute left-1/2 top-6 z-10 w-screen -translate-x-1/2 px-6">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
            <span>Scene 02 / Spatial System</span>
            <div className="flex flex-1 items-center justify-end gap-3">
              {scenes.map((scene, index) => (
                <span
                  key={scene}
                  className={[
                    "flex items-center gap-2",
                    index === 1 ? "text-(--accent)" : "",
                  ].join(" ")}
                >
                  <span className="h-px w-8 bg-current opacity-45" />
                  {scene}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[clamp(680px,92vh,860px)] w-full max-w-[1180px] flex-col justify-center px-5 py-16">
        <motion.div
          className="immersive-copy max-w-[620px] 2xl:max-w-[760px]"
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <SectionMarker number="02" label="3D System Gallery" />
          <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.26em] text-(--accent)">
            Frontend as spatial product craft
          </p>
          <h2
            id="world-title"
            className="text-[clamp(36px,5.4vw,68px)] 2xl:text-[clamp(38px,6vw,74px)] font-bold leading-[0.98] tracking-tight text-fg"
          >
            제품의 흐름을 공간으로 보여주는 프론트엔드.
          </h2>
          <p className="mt-5 max-w-[620px] text-[14px] leading-[1.75] text-fg-muted">
            인터페이스, 성능, 보안 레이어를 하나의 3D 시스템으로 엮었습니다.
            보여주기 위한 3D가 아니라, 제가 문제를 읽고 구조화하는 방식을
            먼저 보이게 하는 장면입니다.
          </p>

          <div className="mt-7 flex max-w-[680px] flex-wrap gap-px border-l border-(--accent-border)">
            {metrics.map(([value, label]) => (
              <div
                key={value}
                className="cinematic-panel min-w-[180px] border-r border-(--border-subtle) bg-(--bg-elevated)/45 px-5 py-3 backdrop-blur-md"
              >
                <div className="font-mono text-[20px] font-semibold text-fg">
                  {value}
                </div>
                <div className="mt-1 text-[11px] text-fg-muted">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onScrollTo("projects")}
              className="rounded-lg bg-(--accent) px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-(--accent-hover)"
            >
              프로젝트 증거 보기
            </button>
            <button
              type="button"
              onClick={() => onScrollTo("skills")}
              className="rounded-lg border border-(--border-subtle) bg-(--bg-elevated)/60 px-5 py-2.5 text-[13px] font-medium text-fg-muted backdrop-blur-sm transition-all duration-300 hover:border-(--accent-border) hover:text-fg"
            >
              역량 레이어 보기
            </button>
          </div>
        </motion.div>

        <motion.div
          className="immersive-callouts pointer-events-none absolute right-5 top-1/2 w-[340px] -translate-y-1/2 2xl:right-0"
          style={{ y: calloutY, opacity: calloutOpacity }}
        >
          {layers.map((layer, index) => (
            <div
              key={layer.label}
              className={[
                "cinematic-panel absolute w-[320px] border-l border-(--accent-border) bg-(--bg-elevated)/30 py-3 pl-4 pr-3 backdrop-blur-md",
                index === 0 ? "-top-52 right-10" : "",
                index === 1 ? "-top-10 right-0" : "",
                index === 2 ? "top-36 right-20" : "",
              ].join(" ")}
            >
              <div className="font-mono text-[11px] text-(--accent)">
                0{index + 1} / {layer.label}
              </div>
              <div className="mt-2 text-[16px] font-semibold text-fg">
                {layer.title}
              </div>
              <p className="mt-2 text-[12px] leading-[1.65] text-fg-muted">
                {layer.body}
              </p>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveShowcase;
