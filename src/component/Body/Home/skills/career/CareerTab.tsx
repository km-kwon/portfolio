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

/**
 * Smooth accordion using CSS Grid trick (0fr <-> 1fr)
 * - No max-height hacks
 * - No layout "jump" even with large content
 */
const AccordionBody: React.FC<{
  open: boolean;
  children: React.ReactNode;
  durationMs?: number;
}> = ({ open, children, durationMs = 360 }) => {
  return (
    <div
      className={[
        "grid overflow-hidden",
        "transition-[grid-template-rows]",
        "ease-[cubic-bezier(.2,.8,.2,1)]",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      ].join(" ")}
      style={{ transitionDuration: `${durationMs}ms` }}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          className={[
            "transition-[opacity,transform]",
            "ease-[cubic-bezier(.2,.8,.2,1)]",
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
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      // ✅ 열려있을 때는 “아무데나 클릭하면 닫힘”
      onClick={() => {
        if (isExpanded) setIsExpanded(false);
      }}
      className={[
        "rounded-2xl border bg-[var(--bg-soft)] px-4 py-3",
        "transition-colors duration-200",
        // ✅ 기본 border 색
        isExpanded ? "border-gray-400" : "border-[var(--border-subtle)]",
        // ✅ accent는 hover 때만
        "hover:border-[var(--accent)]/50",
      ].join(" ")}
    >
      {/* 상단 메타 - 클릭 가능 */}
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={(e) => {
          e.stopPropagation(); // ✅ article 클릭(close)로 버블링 방지
          setIsExpanded((v) => !v);
        }}
        className="w-full flex items-center justify-between gap-3 text-left cursor-pointer"
      >
        <div className="min-w-0 flex-1">
          <h4 className="text-[15px] font-semibold leading-snug">
            {project.name}
          </h4>
          <div className="mt-0.5 text-[12px] text-fg-muted">{project.role}</div>
        </div>

        <span className="shrink-0 text-[11px] text-fg-muted">
          {project.period}
        </span>

        <svg
          className={[
            "w-4 h-4 shrink-0 text-fg-muted transition-transform duration-200",
            isExpanded ? "rotate-180" : "",
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
      </button>

      {/* 펼쳐지는 내용 */}
      <AccordionBody open={isExpanded} durationMs={360}>
        <div
          className="mt-3"
          // ✅ 내용 영역 클릭도 닫히게(원하면 제거 가능)
          onClick={() => {
            if (isExpanded) setIsExpanded(false);
          }}
        >
          {project.description && (
            <p className="text-[12.5px] leading-relaxed text-fg-muted">
              {project.description}
            </p>
          )}

          <div className="my-3 h-px bg-[var(--border-subtle)]/70" />

          <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted">
            {project.tasks.map((task, taskIdx) => (
              <li key={taskIdx} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-muted)]/40" />
                <span className="min-w-0">{task}</span>
              </li>
            ))}
          </ul>

          {project.achievements?.length ? (
            <>
              <div className="my-3 h-px bg-[var(--border-subtle)]/70" />
              <div className="text-[12px] font-semibold mb-2">성과</div>
              <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted">
                {project.achievements.map((a, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/70" />
                    <span className="min-w-0">{a}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {project.techStack ? (
            <>
              <div className="my-3 h-px bg-[var(--border-subtle)]/70" />
              <TechStackDisplay techStack={project.techStack} />
            </>
          ) : null}
        </div>
      </AccordionBody>
    </article>
  );
};

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="pb-8 last:pb-0">
      <header>
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((v) => !v)}
          className={[
            "w-full rounded-2xl border bg-[var(--bg-elevated)]",
            "px-4 py-3 flex items-start justify-between gap-3",
            "transition-colors duration-200 cursor-pointer",
            // ✅ 기본 / open border 색
            isExpanded ? "border-gray-400" : "border-[var(--border-subtle)]",
            // ✅ accent는 hover 때만
            "hover:border-[var(--accent)]/50",
          ].join(" ")}
        >
          <div className="min-w-0 flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              {career.companyLogo ? (
                <img
                  src={career.companyLogo}
                  alt={`${career.company} logo`}
                  className="w-9 h-9 shrink-0 object-contain rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] p-1"
                  loading="lazy"
                />
              ) : (
                <div className="w-9 h-9 shrink-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)]" />
              )}

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-[16px] font-bold leading-tight truncate">
                    {career.company}
                  </h3>
                  <span className="text-[12px] text-fg-muted">
                    {career.position}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex h-full items-center gap-3">
              <div className="text-[12px] text-fg-muted uppercase tracking-wide">
                {career.period}
              </div>
              <svg
                className={[
                  "w-5 h-5 text-fg-muted transition-transform duration-200",
                  isExpanded ? "rotate-180" : "",
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
            </div>
          </div>
        </button>
      </header>

      <AccordionBody open={isExpanded} durationMs={420}>
        <div className="space-y-4 mt-5 ml-2.5">
          {career.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </AccordionBody>
    </section>
  );
};

const CareerTab: React.FC = () => {
  return (
    <div className="space-y-0">
      {careerData.map((career) => (
        <CareerCard key={career.id} career={career} />
      ))}
    </div>
  );
};

export default CareerTab;
