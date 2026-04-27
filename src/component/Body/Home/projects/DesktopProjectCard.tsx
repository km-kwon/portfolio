import React from "react";
import { motion, useMotionTemplate } from "framer-motion";
import { pillClass } from "../../../../styles/tokens";
import { useTilt } from "./useTilt";

interface DesktopProjectCardProps {
  project: any;
  isActive: boolean;
  outerStyle: {
    transform: string;
    zIndex: number;
    opacity: number;
    filter: string;
  };
  onActivate: () => void;
  onOpen: () => void;
}

/**
 * Desktop "수납장" project card with mouse-tracking 3D tilt.
 *
 * Two-layer transform split avoids conflict with the existing jitter/scale
 * animation:
 *   - <article>: outer position transform (translate/scale/rotate from layout),
 *                perspective, opacity, blur filter, click/keyboard handlers
 *   - <motion.div>: card chrome (bg/border/ring) + tilt rotateX/rotateY
 *
 * Tilt is gated on `isActive` because non-active cards have `filter: blur(...)`
 * which collapses 3D context — rotating a flattened layer just looks wrong.
 */
const DesktopProjectCard: React.FC<DesktopProjectCardProps> = ({
  project,
  isActive,
  outerStyle,
  onActivate,
  onOpen,
}) => {
  const tilt = useTilt({ disabled: !isActive });

  const highlightBg = useMotionTemplate`radial-gradient(circle at ${tilt.highlightX} ${tilt.highlightY}, rgba(255,255,255,0.18), transparent 55%)`;

  return (
    <article
      ref={tilt.ref as React.RefObject<HTMLElement>}
      data-project-id={project.id}
      className="group absolute w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] cursor-pointer transition-all duration-300 ease-out"
      style={{ ...outerStyle, perspective: `${tilt.perspective}px` }}
      onClick={onOpen}
      onMouseEnter={onActivate}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onFocus={onActivate}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      role="button"
    >
      <motion.div
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        className={[
          "relative w-full",
          "rounded-2xl bg-(--bg-elevated)",
          "[html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
          "[html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
          "border border-(--border-subtle)",
          "overflow-hidden",
          isActive
            ? "ring-2 ring-(--accent) ring-offset-2 ring-offset-(--bg-soft)"
            : "ring-0",
        ].join(" ")}
      >
        {project.banner && (
          <div
            className={[
              "absolute inset-0 z-0 pointer-events-none",
              "transition-all duration-200",
              isActive ? "opacity-20" : "opacity-40",
            ].join(" ")}
          >
            <img
              src={project.banner}
              alt=""
              className="w-full h-full object-cover grayscale-30"
            />
            <div
              className={[
                "absolute inset-0 bg-linear-to-t to-transparent transition-colors duration-200",
                isActive
                  ? "from-[rgba(0,0,0,0.6)] [html[data-theme='light']_&]:from-[rgba(0,0,0,0.52)]"
                  : "from-[rgba(0,0,0,0.35)] [html[data-theme='light']_&]:from-[rgba(0,0,0,0.3)]",
              ].join(" ")}
            />
          </div>
        )}

        <div className="relative z-10 p-4 text-[13px] text-fg-muted leading-[1.6]">
          <h3
            className={[
              "mb-1.5",
              "text-fg",
              "transition-all duration-200",
              isActive
                ? "text-[15px] font-semibold tracking-[0.02em]"
                : "text-[14px] font-medium tracking-[0.01em]",
            ].join(" ")}
          >
            {project.title}
          </h3>

          <p
            className={[
              "transition-all duration-200",
              "text-[12px] mb-2.5 line-clamp-2",
              isActive ? "text-fg opacity-100" : "text-fg-muted opacity-80",
            ].join(" ")}
          >
            {project.summary}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {project.highlights
                .slice(0, 2)
                .map(
                  (h: { value: string; label: string }, i: number) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-(--accent-subtle) border border-(--accent-border) text-(--accent) font-medium"
                    >
                      {h.value} {h.label}
                    </span>
                  )
                )}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.tags.slice(0, 6).map((t: string) => (
              <span key={t} className={pillClass}>
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 text-[11px] mt-1">
            {project.links.map((link: { label: string; href: string }) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out"
                onClick={(e) => e.stopPropagation()}
              >
                <span>{link.label}</span>
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Glossy highlight — radial light follows cursor, sits above content */}
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none rounded-2xl mix-blend-overlay"
          style={{ background: highlightBg, opacity: tilt.highlightOpacity }}
        />
      </motion.div>
    </article>
  );
};

export default DesktopProjectCard;
