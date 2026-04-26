import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import type { Project } from "../types";
import { contentItem } from "./variants";

/* ── 숫자 파싱: "10+" → { num: 10, prefix: "", suffix: "+" } ── */
function parseNumber(value: string): {
  num: number;
  prefix: string;
  suffix: string;
} {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  return { num: parseInt(match[2], 10), prefix: match[1], suffix: match[3] };
}

/* ── 카운트업 애니메이션 ── */
const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const hasDigit = /\d/.test(value);
  const { num, prefix, suffix } = parseNumber(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!hasDigit || num === 0) {
      setDisplay(num);
      return;
    }
    const controls = animate(0, num, {
      duration: 1.5,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v: number) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [num, hasDigit]);

  if (!hasDigit) {
    return (
      <span className="text-2xl font-bold text-(--accent)">{value}</span>
    );
  }

  return (
    <span className="text-2xl font-bold text-(--accent)">
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

/* ── Hero Section ── */
interface HeroSectionProps {
  project: Project;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ project }) => {
  const techReasons = new Map(
    (project.techDecisions ?? []).map((td) => [td.tech, td.reason])
  );

  return (
    <>
      {/* Title + Meta */}
      <motion.div className="mb-6" variants={contentItem}>
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
          {project.subTitle && (
            <span className="text-xs font-medium text-(--accent) tracking-wider uppercase">
              {project.subTitle}
            </span>
          )}
          {project.period && (
            <span className="text-xs text-fg-muted font-mono">
              {project.period}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold mb-2 text-fg">{project.title}</h3>

        {project.subtitle && (
          <p className="text-sm text-fg-muted leading-relaxed mb-3">
            {project.subtitle}
          </p>
        )}

        {project.team && (
          <span className="inline-flex items-center gap-1.5 text-xs text-fg-dimmed">
            <span>👥</span> {project.team}
          </span>
        )}
      </motion.div>

      {/* Highlights Cards */}
      {project.highlights && project.highlights.length > 0 && (
        <motion.div
          className={`grid gap-3 mb-6 ${
            project.highlights.length === 2 ? "grid-cols-2" : "grid-cols-3"
          }`}
          variants={contentItem}
        >
          {project.highlights.map((h, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-(--bg-soft) border border-(--border-subtle) text-center"
            >
              <AnimatedNumber value={h.value} />
              <span className="text-[11px] text-fg-muted mt-1.5">
                {h.label}
              </span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Tech Tags with Tooltip + Links */}
      <motion.div
        className="flex flex-wrap items-center gap-2 mb-8"
        variants={contentItem}
      >
        {project.tags.map((tag) => {
          const reason = techReasons.get(tag);
          return (
            <span
              key={tag}
              className={[
                "group relative text-[11px] px-2.5 py-1 rounded-full",
                "bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",
                "transition-colors duration-200",
                "hover:border-(--accent-border) hover:text-(--accent)",
                reason ? "cursor-help" : "",
              ].join(" ")}
              title={reason || undefined}
            >
              {tag}
              {reason && (
                <span
                  className={[
                    "pointer-events-none absolute z-50",
                    "top-full left-1/2 -translate-x-1/2 mt-2",
                    "px-3 py-2 rounded-lg",
                    "bg-(--bg-elevated) border border-(--border-subtle)",
                    "text-[11px] text-fg-muted leading-snug text-left",
                    "opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-200",
                    "w-max max-w-[220px]",
                    "shadow-lg",
                  ].join(" ")}
                >
                  {reason}
                </span>
              )}
            </span>
          );
        })}

        {/* Links */}
        {project.links.length > 0 && (
          <>
            <span className="w-px h-4 bg-(--border-subtle) mx-1" />
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-fg-muted hover:text-(--accent) transition-colors duration-200"
              >
                {link.label} <span>↗</span>
              </a>
            ))}
          </>
        )}
      </motion.div>
    </>
  );
};
