import React, { useState } from "react";
import ExperimentCard from "./ExperimentCard";
import { experiments } from "./experiments";
import type { ExperimentCategory } from "./types";
import { categoryLabels } from "./types";

const allCategories: (ExperimentCategory | "all")[] = [
  "all",
  "performance",
  "animation",
  "web-api",
  "canvas",
];

const pageBg =
  "relative min-h-screen pt-[calc(var(--header-height)+32px)] md:pt-[calc(var(--header-height)+40px)] pb-24 px-5 overflow-hidden";

const bgDecor =
  "pointer-events-none absolute inset-0 " +
  "bg-[linear-gradient(90deg,color-mix(in_oklab,var(--border)_26%,transparent)_1px,transparent_1px),linear-gradient(180deg,color-mix(in_oklab,var(--border)_20%,transparent)_1px,transparent_1px),linear-gradient(135deg,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_42%)] " +
  "bg-[size:72px_72px,72px_72px,auto] " +
  "[mask-image:linear-gradient(180deg,black,transparent_86%)]";

const pill =
  "inline-flex items-center rounded-full border border-(--border-subtle) " +
  "bg-(--bg-soft) px-3 py-1 text-[11px] text-fg-muted " +
  "[html[data-theme='light']_&]:bg-[#f5f5fb]";

const labelClass =
  "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted";

const labCodeColumns = [
  ["const", "useState", "=>", "[ok]", "// 🧪", "rAF"],
  ["> npm run dev", "async", "await", "0.03ms", "WebGL2", "WIP"],
  ["import", "<canvas />", "shader.vert", "{ ... }", "GLSL", "tick()"],
  ["playground", "draft", "[warn]", "Promise", "worker", "fps:60"],
  ["render()", "memo", "event", "commit", "trace", "done"],
];

const terminalLines = [
  ["01", "const", " experiment ", "= async () => {"],
  ["02", "// measure, break, rebuild"],
  ["03", "await", " draw(canvas);"],
  ["04", "}"],
  ["→", "[ok] lab server ready"],
];

const LabCodeAtmosphere: React.FC = () => (
  <div className="lab-code-atmosphere" aria-hidden="true">
    {labCodeColumns.map((column, columnIndex) => (
      <div
        key={columnIndex}
        className={`lab-code-column lab-code-column-${columnIndex + 1}`}
      >
        {[...column, ...column, ...column].map((token, tokenIndex) => (
          <span key={`${token}-${tokenIndex}`}>{token}</span>
        ))}
      </div>
    ))}
    <div className="lab-scan-line" />
    <div className="lab-corner lab-corner-tl" />
    <div className="lab-corner lab-corner-tr" />
    <div className="lab-corner lab-corner-bl" />
    <div className="lab-corner lab-corner-br" />
    <div className="lab-wip-tag">◇ /LAB · WIP</div>
  </div>
);

const LabPage: React.FC = () => {
  const [filter, setFilter] = useState<ExperimentCategory | "all">("all");

  const filtered =
    filter === "all"
      ? experiments
      : experiments.filter((e) => e.category === filter);

  // Only show categories that have experiments
  const activeCategories = allCategories.filter(
    (c) => c === "all" || experiments.some((e) => e.category === c)
  );

  return (
    <main className={`${pageBg} lab-playground-page`}>
      <div className={bgDecor} />
      <LabCodeAtmosphere />
      <div className="max-w-(--content-max-w) mx-auto relative z-10">
        {/* Hero */}
        <section className="lab-playground-hero mb-12">
          <div>
            <div className="mb-4">
              <span className={`${pill} gap-2`}>
                <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
                <span className={labelClass}>Lab</span>
              </span>
            </div>

            <h1 className="text-[34px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.05] mb-4">
              프론트엔드 실험실
            </h1>

            <p className="text-[15px] md:text-[16px] text-fg-muted leading-relaxed max-w-xl">
              &quot;왜?&quot;를 묻고, 직접 만들어보며 답을 찾습니다.
              각 실험은 원래 크기와 인터랙션을 유지한 채 직접 조작할 수 있습니다.
            </p>
          </div>

          <div className="lab-terminal-card" aria-hidden="true">
            <div className="lab-terminal-chrome">
              <span />
              <span />
              <span />
              <strong>/lab — playground.tsx</strong>
            </div>
            <div className="lab-terminal-body">
              {terminalLines.map((line, index) => (
                <div key={index} className="lab-terminal-line">
                  <span className="lab-line-no">{line[0]}</span>
                  {line.slice(1).map((part, partIndex) => (
                    <span
                      key={`${part}-${partIndex}`}
                      className={
                        partIndex === 0 && line.length > 2
                          ? "lab-token-accent"
                          : "lab-token-muted"
                      }
                    >
                      {part}
                    </span>
                  ))}
                </div>
              ))}
              <span className="lab-terminal-cursor" />
            </div>
          </div>
        </section>

        {/* Category filter */}
        <div className="relative z-10 mb-10 flex flex-wrap justify-center gap-2">
          {activeCategories.map((cat) => {
            const isActive = filter === cat;
            const label = cat === "all" ? "전체" : categoryLabels[cat];
            const count =
              cat === "all"
                ? experiments.length
                : experiments.filter((e) => e.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={
                  "px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 border cursor-pointer " +
                  (isActive
                    ? "bg-(--accent-subtle) text-(--accent) border-(--accent-border)"
                    : "text-fg-muted border-transparent hover:text-fg hover:bg-(--bg-soft)")
                }
              >
                {label}
                <span className="ml-1.5 text-[11px] opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Experiment cards */}
        <div className="grid gap-8 max-w-5xl mx-auto">
          {filtered.map((experiment, index) => (
            <ExperimentCard key={experiment.id} experiment={experiment} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-fg-muted text-[14px] py-20">
            해당 카테고리에 실험이 아직 없습니다.
          </div>
        )}
      </div>
    </main>
  );
};

export default LabPage;
