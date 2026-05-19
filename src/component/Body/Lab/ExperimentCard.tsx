import React, { Suspense, useState } from "react";
import type { Experiment } from "./types";
import { categoryLabels, difficultyLabels } from "./types";

const difficultyColor: Record<string, string> = {
  beginner: "text-green-400 border-green-400/30 bg-green-500/10",
  intermediate: "text-blue-400 border-blue-400/30 bg-blue-500/10",
  advanced: "text-purple-400 border-purple-400/30 bg-purple-500/10",
};

interface ExperimentCardProps {
  experiment: Experiment;
  index?: number;
}

const categoryAccent: Record<Experiment["category"], string> = {
  performance: "#7dd3fc",
  animation: "#a78bfa",
  "web-api": "#34d399",
  canvas: "#fbbf24",
};

const ExperimentCard: React.FC<ExperimentCardProps> = ({ experiment, index = 0 }) => {
  const [isInsightOpen, setIsInsightOpen] = useState(false);
  const Component = experiment.component;
  const accent = categoryAccent[experiment.category];

  return (
    <article
      className={
        "lab-experiment-card relative rounded-2xl border border-(--border-subtle) " +
        "bg-[color-mix(in_oklab,var(--bg-elevated)_86%,transparent)] " +
        "transition-all duration-300 ease-out overflow-hidden backdrop-blur-xl " +
        "hover:border-(--accent-border) " +
        "[html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)] " +
        "[html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
      }
      style={{
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 18px 54px color-mix(in oklab, ${accent} 10%, transparent)`,
        animationDelay: `${Math.min(index, 6) * 70 + 260}ms`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      {/* Header */}
      <div className="relative z-10 p-5 pb-0 md:p-6 md:pb-0">
        <div className="mb-4 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dimmed">
          <span>Experiment {String(index + 1).padStart(2, "0")}</span>
          <span>{experiment.id}</span>
        </div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase tracking-wider text-(--accent) font-medium">
                {categoryLabels[experiment.category]}
              </span>
              <span
                className={
                  "text-[10px] px-2 py-0.5 rounded-full border font-medium " +
                  difficultyColor[experiment.difficulty]
                }
              >
                {difficultyLabels[experiment.difficulty]}
              </span>
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-fg tracking-[-0.01em]">
              {experiment.title}
            </h3>
          </div>
        </div>
        <p className="text-[13px] md:text-[14px] text-fg-muted leading-relaxed mb-4 max-w-3xl">
          {experiment.subtitle}
        </p>
      </div>

      {/* Interactive Demo */}
      <div className="relative z-10 px-5 pb-5 md:px-6 md:pb-6">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-40 rounded-xl border border-(--border-subtle) bg-(--bg)">
              <span className="h-4 w-4 rounded-full border-2 border-(--accent) border-t-transparent animate-spin" />
            </div>
          }
        >
          <Component />
        </Suspense>
      </div>

      {/* Insight toggle */}
      <div className="relative z-10 border-t border-(--border-subtle)">
        <button
          onClick={() => setIsInsightOpen(!isInsightOpen)}
          className="w-full flex items-center justify-between px-5 py-3 text-[12px] text-fg-muted hover:text-fg transition-colors cursor-pointer"
        >
          <span className="font-medium">
            {isInsightOpen ? "학습 포인트 접기" : "학습 포인트 보기 (Why · How · Result)"}
          </span>
          <svg
            className={
              "w-4 h-4 transition-transform duration-200 " +
              (isInsightOpen ? "rotate-180" : "")
            }
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className={
            "grid transition-all duration-300 ease-out " +
            (isInsightOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0")
          }
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 space-y-3">
              <InsightItem emoji="💡" label="Why" text={experiment.why} />
              <InsightItem emoji="🛠" label="How" text={experiment.how} />
              <InsightItem emoji="📊" label="Result" text={experiment.result} />

              <div className="flex flex-wrap gap-1.5 pt-2">
                {experiment.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const InsightItem: React.FC<{
  emoji: string;
  label: string;
  text: string;
}> = ({ emoji, label, text }) => (
  <div className="flex gap-2.5">
    <span className="text-[14px] shrink-0 mt-0.5">{emoji}</span>
    <div>
      <span className="text-[11px] font-semibold text-fg">{label}</span>
      <p className="text-[12px] text-fg-muted leading-relaxed mt-0.5">{text}</p>
    </div>
  </div>
);

export default ExperimentCard;
