import React from "react";
import SectionMarker from "../../../common/SectionMarker";

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
    <section id="top" className="mb-20">
      <div>
        <SectionMarker number="01" label="Identity Profile" />

        <h1 className="text-[clamp(30px,4.5vw,44px)] font-bold leading-[1.2] mb-5 tracking-tight">
          안전한 혁신을 설계하는
          <br />
          프론트엔드 엔지니어,{" "}
          <span className="text-(--accent)">권경민</span>입니다.
        </h1>

        <p className="text-[14px] text-fg-muted leading-[1.7] max-w-[560px] mb-7">
          <strong className="text-fg font-semibold">80K logs/sec</strong> 실시간
          시각화와 대규모 레거시 리팩터링 경험.
          <br />
          사이버보안 전공의 시각으로 견고하고 사용자 중심의 인터페이스를
          만듭니다.
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {[
            "Safety First",
            "Risk Management",
            "Team Ownership",
            "Frontend Core",
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
            onClick={() => onScrollTo("skills")}
          >
            경력 바로가기
          </button>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-[13px] px-4 py-2.5 rounded-lg
                       border border-(--border-subtle) bg-(--bg-elevated) text-fg-muted font-medium
                       hover:border-(--accent)/40 hover:text-fg transition-all duration-300 ease-out"
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
            className="inline-flex items-center gap-1.5 text-[13px] text-fg-muted
                       hover:text-(--accent) transition-colors duration-300 ease-out cursor-pointer"
            onClick={() => onScrollTo("about")}
          >
            <span>소개 더 보기</span>
            <span className="text-[14px] translate-y-px">↳</span>
          </button>
        </div>

        {/* Stat row */}
        <div className="mt-14 w-full pt-8 border-t border-(--border-subtle) grid grid-cols-3 gap-6 md:gap-12">
          <Stat value="80K" unit="logs/sec" desc="실시간 처리 경험" />
          <div className="border-l border-(--border-subtle) pl-6 md:pl-12">
            <Stat value="2s" desc="DLT 1M 로그 검색 Web Worker 최적화" />
          </div>
          <div className="border-l border-(--border-subtle) pl-6 md:pl-12">
            <Stat value="0" desc="Wireshark 평문 노출 RSA/AES 암호화 설계" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
