import React, { useState } from "react";
import type { CareerItem, ProjectInCareer } from "../types";
import { careerData } from "./careerData";
import TechStackDisplay from "./TechStackDisplay";

interface CareerCardProps {
  career: CareerItem;
}

interface ProjectCardProps {
  project: ProjectInCareer;
  index: number;
}

/* ───────────────────────────────────────────
   Smooth accordion (CSS Grid 0fr ↔ 1fr)
   ─────────────────────────────────────────── */
const AccordionBody: React.FC<{
  open: boolean;
  children: React.ReactNode;
  durationMs?: number;
}> = ({ open, children, durationMs = 360 }) => (
  <div
    className={[
      "grid overflow-hidden transition-[grid-template-rows]",
      "ease-[cubic-bezier(.2,.8,.2,1)]",
      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
    ].join(" ")}
    style={{ transitionDuration: `${durationMs}ms` }}
  >
    <div className="min-h-0 overflow-hidden">
      <div
        className={[
          "transition-[opacity,transform] ease-[cubic-bezier(.2,.8,.2,1)]",
          "will-change-[opacity,transform]",
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
        ].join(" ")}
        style={{ transitionDuration: `${Math.max(220, durationMs - 80)}ms` }}
      >
        {children}
      </div>
    </div>
  </div>
);

/* ───────────────────────────────────────────
   성과 텍스트 내 수치 자동 하이라이트
   ─────────────────────────────────────────── */
const HighlightMetrics: React.FC<{ text: string }> = ({ text }) => {
  // 숫자+단위 패턴 (예: 2.3배, 450ms, 30%, 80,000건, 0.8초, 5분→30초)
  const pattern =
    /(\d[\d,.]*\s*(?:배|%|ms|s|초|분|건|GB|MB|회|개|행)?)(\s*→\s*\d[\d,.]*\s*(?:배|%|ms|s|초|분|건|GB|MB|회|개|행)?)?/g;

  const parts: { text: string; isMetric: boolean }[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), isMetric: false });
    }
    parts.push({ text: match[0], isMetric: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), isMetric: false });
  }

  if (parts.length === 0) return <>{text}</>;

  return (
    <>
      {parts.map((p, i) =>
        p.isMetric ? (
          <span
            key={i}
            className="font-semibold text-[var(--accent)]"
          >
            {p.text}
          </span>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </>
  );
};

/* ───────────────────────────────────────────
   Chevron Icon
   ─────────────────────────────────────────── */
const ChevronIcon: React.FC<{ expanded: boolean; className?: string }> = ({
  expanded,
  className = "w-4 h-4",
}) => (
  <svg
    className={[
      className,
      "shrink-0 text-fg-muted transition-transform duration-200",
      expanded ? "rotate-180" : "",
    ].join(" ")}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

/* ───────────────────────────────────────────
   ProjectCard
   ─────────────────────────────────────────── */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="group">
      {/* ── 헤더: 항상 보이는 영역 ── */}
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((v) => !v)}
        className="w-full text-left cursor-pointer"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h4 className="text-[14.5px] font-semibold leading-snug group-hover:text-(--accent) transition-colors">
              {project.name}
            </h4>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span className="text-[11.5px] text-fg-muted">{project.role}</span>
              <span className="text-[11px] text-fg-muted opacity-50">|</span>
              <span className="text-[11px] text-fg-muted">
                {project.period}
              </span>
            </div>
          </div>
          <ChevronIcon expanded={isExpanded} className="w-3.5 h-3.5" />
        </div>

        {/* ── Impact 한 줄 요약 (접힌 상태에서도 보임) ── */}
        {(project as any).impact && (
          <div className="mt-2 flex items-start gap-2">
            <svg
              className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-[12px] leading-relaxed font-medium text-[var(--fg-default)]">
              {(project as any).impact}
            </span>
          </div>
        )}
      </button>

      {/* ── 펼쳐지는 상세 내용 ── */}
      <AccordionBody open={isExpanded} durationMs={360}>
        <div className="mt-3 space-y-4">
          {/* Description */}
          {project.description && (
            <p className="text-[12.5px] leading-relaxed text-fg-muted">
              {project.description}
            </p>
          )}

          {/* Tasks */}
          <div>
            <div className="text-[10.5px] font-semibold mb-2 text-fg-muted uppercase tracking-widest">
              주요 업무
            </div>
            <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted">
              {project.tasks.map((task, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--fg-muted)/40" />
                  <span className="min-w-0">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          {project.achievements?.length ? (
            <div>
              <div className="text-[10.5px] font-semibold mb-2 text-(--accent) uppercase tracking-widest">
                성과
              </div>
              <ul className="space-y-2 text-[12.5px] leading-relaxed">
                {project.achievements.map((a, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
                    <span className="min-w-0 text-(--fg-default)">
                      <HighlightMetrics text={a} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Tech Stack */}
          {project.techStack ? (
            <TechStackDisplay techStack={project.techStack} />
          ) : null}
        </div>
      </AccordionBody>
    </article>
  );
};

/* ───────────────────────────────────────────
   CareerCard
   ─────────────────────────────────────────── */
const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-5 border-b border-(--border-subtle)/60 last:border-b-0">
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((v) => !v)}
        className="w-full text-left cursor-pointer group"
      >
        <div className="grid grid-cols-[110px_1fr_auto] gap-5 items-start">
          {/* 왼쪽: 기간 */}
          <div className="text-[11px] font-mono text-fg-dimmed leading-relaxed pt-1 uppercase tracking-wide">
            {career.period}
          </div>

          {/* 중앙: 회사 + 포지션 */}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              {career.companyLogo && (
                <img
                  src={career.companyLogo}
                  alt={`${career.company} logo`}
                  className="w-4 h-4 object-contain opacity-70"
                  loading="lazy"
                />
              )}
              <span className="text-[12px] font-mono text-fg-muted">
                @ {career.company}
              </span>
            </div>
            <h3 className="text-[16px] font-bold mt-1 leading-tight group-hover:text-(--accent) transition-colors">
              {career.position}
            </h3>
            {(career as any).department && (
              <div className="text-[11px] text-fg-muted mt-0.5">
                {(career as any).department}
              </div>
            )}
            {(career as any).transition && (
              <div className="mt-2 inline-flex items-center gap-1.5">
                <svg
                  className="w-3 h-3 text-(--accent)"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                <span className="text-[11px] font-medium text-(--accent)">
                  {(career as any).transition}
                </span>
              </div>
            )}
          </div>

          {/* 오른쪽: Chevron */}
          <ChevronIcon expanded={isExpanded} className="w-4 h-4 mt-1.5" />
        </div>
      </button>

      <AccordionBody open={isExpanded} durationMs={420}>
        <div className="grid grid-cols-[110px_1fr_auto] gap-5 mt-5">
          <div />
          <div className="border-l border-(--accent)/25 pl-5 space-y-5">
            {career.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
          <div />
        </div>
      </AccordionBody>
    </section>
  );
};

/* ───────────────────────────────────────────
   CareerTab
   ─────────────────────────────────────────── */
const CareerTab: React.FC = () => (
  <div className="space-y-0">
    {careerData.map((career) => (
      <CareerCard key={career.id} career={career} />
    ))}
  </div>
);

export default CareerTab;
