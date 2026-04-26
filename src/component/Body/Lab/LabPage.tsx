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
  "relative min-h-screen pt-[calc(var(--header-height)+56px)] pb-24 px-5 overflow-hidden";

const bgDecor =
  "pointer-events-none absolute inset-0 " +
  "bg-[radial-gradient(900px_500px_at_20%_10%,rgba(125,211,252,0.16),transparent_60%),radial-gradient(800px_420px_at_80%_30%,rgba(167,139,250,0.14),transparent_60%),radial-gradient(700px_360px_at_50%_85%,rgba(34,197,94,0.10),transparent_60%)] " +
  "[mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]";

const pill =
  "inline-flex items-center rounded-full border border-(--border-subtle) " +
  "bg-(--bg-soft) px-3 py-1 text-[11px] text-fg-muted " +
  "[html[data-theme='light']_&]:bg-[#f5f5fb]";

const labelClass =
  "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted";

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
    <main className={pageBg}>
      <div className={bgDecor} />
      <div className="max-w-(--content-max-w) mx-auto relative">
        {/* Hero */}
        <section className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <span className={`${pill} gap-2`}>
              <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
              <span className={labelClass}>Lab</span>
            </span>
          </div>

          <h1 className="text-[34px] md:text-[44px] font-semibold tracking-[-0.02em] mb-4">
            프론트엔드 실험실
          </h1>

          <p className="text-[15px] md:text-[16px] text-fg-muted leading-relaxed max-w-lg mx-auto">
            &quot;왜?&quot;를 묻고, 직접 만들어보며 답을 찾습니다.
            <br className="md:block" />
            각 실험을 직접 조작해 보세요.
          </p>
        </section>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
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
        <div className="grid gap-6 max-w-4xl mx-auto">
          {filtered.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
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
