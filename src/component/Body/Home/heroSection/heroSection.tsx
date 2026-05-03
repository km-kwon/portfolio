import React, { Suspense, lazy } from "react";
import SectionMarker from "../../../common/SectionMarker";
import HeroFallback from "../../../../three/scenes/HeroFallback";

// Lazy: keeps three / R3F / shader strings out of the initial bundle.
// HeroFallback paints synchronously; the canvas swaps in once this chunk
// arrives. Direct file path (not the barrel) so Vite cleanly splits.
const IntroWorldCanvas = lazy(
  () => import("../../../../three/scenes/PortfolioWorldCanvas")
);

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const Stat: React.FC<{ value: string; unit?: string; desc: string }> = ({
  value,
  unit,
  desc,
}) => (
  <div>
    <div className="flex items-baseline gap-1">
      <span className="text-[44px] font-bold text-(--accent) leading-none tracking-tight font-display">
        {value}
      </span>
      {unit && (
        <span className="text-[14px] text-(--accent)/70 font-medium">
          {unit}
        </span>
      )}
    </div>
    <div className="mt-2 text-[11px] text-fg-dimmed leading-normal">{desc}</div>
  </div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => {
  return (
    <section
      id="top"
      className="relative mb-10 isolate min-h-[calc(100vh-var(--header-height)-24px)] flex items-center overflow-visible py-8"
    >
      <span id="world" className="absolute top-0" aria-hidden />
      {/* Escapes <main>'s max-w via left:50% + 100vw so the gradient reads as
          ambient atmosphere rather than a constrained card. Body already has
          overflow-x:hidden, so 100vw never produces a horizontal scrollbar. */}
      <div
        className="pointer-events-none absolute inset-y-0 z-0"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          opacity: 0.92,
        }}
      >
        <Suspense fallback={<HeroFallback />}>
          <IntroWorldCanvas />
        </Suspense>
      </div>

      <div className="cinematic-frame pointer-events-none absolute inset-y-4 left-1/2 z-[1] hidden w-screen -translate-x-1/2 lg:block" />
      <div className="relative z-10 w-full">
        <SectionMarker number="01" label="Identity Profile" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.55fr)] lg:items-center">
          <div>
            <h1 className="hero-title mb-5 block text-[28px] font-bold leading-[1.18] tracking-tight sm:hidden">
              복잡한 시스템을
              <br />
              안전하고 읽기 쉬운
              <br />
              인터페이스로 만드는
              <br />
              프론트엔드 엔지니어,
              <br />
              <span className="text-(--accent)">권경민</span>입니다.
            </h1>
            <h1 className="hero-title hidden sm:block sm:text-[clamp(28px,4.2vw,46px)] font-bold sm:leading-[1.15] mb-5 tracking-tight max-w-[680px]">
              복잡한 시스템을 안전하고 읽기 쉬운 인터페이스로 만드는
              <br className="hidden sm:block" />
              프론트엔드 엔지니어,{" "}
              <span className="text-(--accent)">권경민</span>입니다.
            </h1>

            <div className="flex flex-wrap gap-2 mb-7">
              {[
                "Frontend Developer",
                "System UI",
                "Performance",
                "Security-minded",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-3 py-1 rounded border border-(--border-subtle) text-fg-muted
                             transition-colors duration-300 hover:border-(--border-hover) hover:text-fg"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <button
                className="text-[13px] px-5 py-2.5 rounded-lg bg-(--accent) text-white font-semibold
                           hover:bg-(--accent-hover) transition-all duration-300 ease-out cursor-pointer"
                onClick={() => onScrollTo("projects")}
              >
                프로젝트 보기
              </button>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-[13px] px-4 py-2.5 rounded-lg
                           border border-(--border-subtle) bg-(--bg-elevated)/80 text-fg-muted font-medium
                           backdrop-blur-sm hover:border-(--accent)/40 hover:text-fg transition-all duration-300 ease-out"
              >
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 4v12m0 0l-4-4m4 4l4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"
                  />
                </svg>
                이력서 (PDF)
              </a>
              <button
                className="inline-flex w-full items-center gap-1.5 text-[13px] text-fg-muted sm:w-auto
                           hover:text-(--accent) transition-colors duration-300 ease-out cursor-pointer"
                onClick={() => onScrollTo("skills")}
              >
                <span>역량 보기</span>
                <span className="text-[14px] translate-y-px">↳</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-3 text-[11px] font-mono text-fg-muted">
            {[
              ["01", "LOG STREAM", "80K/sec"],
              ["02", "WORKER INDEX", "1M rows"],
              ["03", "SECURE LAYER", "0 plain text"],
            ].map(([index, label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-5 border-b border-(--border-subtle) py-3"
              >
                <span className="text-(--accent)">{index}</span>
                <span className="flex-1 tracking-[0.16em]">{label}</span>
                <span className="text-fg">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-14 w-full pt-8 border-t border-(--border-subtle) grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
          <Stat value="80K" unit="logs/sec" desc="실시간 처리 경험" />
          <div className="border-t border-(--border-subtle) pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6 md:pl-12">
            <Stat value="2s" desc="DLT 1M 로그 검색 Web Worker 최적화" />
          </div>
          <div className="border-t border-(--border-subtle) pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6 md:pl-12">
            <Stat value="0" desc="Wireshark 평문 노출 RSA/AES 암호화 설계" />
          </div>
        </div>

        <div className="pointer-events-none mt-10 hidden h-px max-w-[520px] overflow-hidden bg-(--border-subtle) lg:block">
          <span className="cinematic-progress block h-full bg-(--accent)" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
