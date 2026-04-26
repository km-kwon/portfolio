import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Project } from "./types";
import {
  backdropVariants,
  modalVariants,
  contentContainer,
  contentItem,
} from "./modal/variants";
import { HeroSection } from "./modal/HeroSection";
import { TroubleshootingSection } from "./modal/TroubleshootingSection";
import { RoleSection } from "./modal/RoleSection";
import { ResultsSection } from "./modal/ResultsSection";

/* ── Close Icon SVG ── */
const CloseIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <line x1="4" y1="4" x2="12" y2="12" />
    <line x1="12" y1="4" x2="4" y2="12" />
  </svg>
);

/* ── Component ── */
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  /* Focus trap — 모달 열릴 때 포커스를 모달로 이동 */
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  /* Escape 키 닫기 */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  /* Body 스크롤 잠금 */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center px-4">
      {/* ── Glassmorphism Backdrop ── */}
      <motion.div
        className={
          "absolute inset-0 " +
          "bg-(--modal-backdrop) " +
          "backdrop-blur-xl " +
          "[-webkit-backdrop-filter:blur(24px)_saturate(1.4)]"
        }
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        aria-label="Close project detail"
      />

      {/* ── Modal Card ── */}
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className={
          "relative z-50 w-full max-w-3xl max-h-[85vh] overflow-y-auto " +
          "rounded-2xl outline-none " +
          "bg-(--bg-elevated) " +
          "border border-(--border-subtle) " +
          "shadow-(--modal-shadow) " +
          /* Custom scrollbar */
          "[&::-webkit-scrollbar]:w-3 " +
          "[&::-webkit-scrollbar-track]:bg-transparent " +
          "[&::-webkit-scrollbar-track]:rounded-r-2xl " +
          "[&::-webkit-scrollbar-track]:my-2 " +
          "[&::-webkit-scrollbar-thumb]:bg-gray-500 " +
          "[&::-webkit-scrollbar-thumb]:rounded-full " +
          "[&::-webkit-scrollbar-thumb]:border-[3px] " +
          "[&::-webkit-scrollbar-thumb]:border-(--bg-elevated) " +
          "[&::-webkit-scrollbar-thumb:hover]:bg-gray-300"
        }
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* ── Close Button (absolute, above banner) ── */}
        <button
          onClick={onClose}
          aria-label="모달 닫기"
          className={
            "absolute top-4 right-4 z-50 " +
            "p-2 rounded-full cursor-pointer " +
            "bg-(--bg-elevated) " +
            "text-fg-muted " +
            "transition-all duration-250 ease-out " +
            "hover:text-fg hover:scale-110 active:scale-95 " +
            "border border-(--border-subtle) " +
            "hover:border-(--border-hover)"
          }
        >
          <CloseIcon />
        </button>

        {/* ── Banner (full-width, outside padding) ── */}
        {project.banner && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
            <img
              src={project.banner}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-(--bg-elevated) via-transparent to-transparent" />
          </div>
        )}

        {/* ── Inner Content ── */}
        <motion.div
          className="p-6 md:p-8"
          variants={contentContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Hero: Title, Highlights, Tags */}
          <HeroSection project={project} />

          {/* Body Sections */}
          <div className="space-y-10 text-sm leading-relaxed text-fg-muted">
            {/* 1. Images — 시각적 첫인상 */}
            {project.images && project.images.length > 0 && (
              <motion.section variants={contentItem}>
                <h4 className="text-fg font-semibold text-base mb-3">
                  📸 Screen & Architecture
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="rounded-lg overflow-hidden border border-(--border-subtle) bg-(--bg) aspect-video relative">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {img.caption && (
                        <p className="text-xs text-center text-fg-muted">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 2. Overview + Results — 임팩트 즉시 확인 */}
            {project.overview && (
              <motion.section variants={contentItem}>
                <h4 className="text-fg font-semibold text-base mb-3">
                  🔎 프로젝트 개요
                </h4>
                <p>{project.overview}</p>
              </motion.section>
            )}

            {/* 3. Results — 성과를 앞쪽에 배치 */}
            {project.results && project.results.length > 0 && (
              <ResultsSection results={project.results} />
            )}

            {/* 4. Role & Tasks */}
            {project.role && <RoleSection role={project.role} />}

            {/* 5. Why & Tech Decisions */}
            {project.why && (
              <motion.section variants={contentItem}>
                <h4 className="text-fg font-semibold text-base mb-3">
                  💡 기술적 의사결정
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.why.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-(--border-subtle) overflow-hidden"
                    >
                      <div className="px-4 py-2.5 bg-(--bg-soft) border-b border-(--border-subtle)">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">🤔</span>
                          <span className="text-sm font-medium text-fg">
                            {item.title}
                          </span>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-(--bg)">
                        <p className="text-xs text-fg-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 6. Troubleshooting */}
            {project.troubleshooting && project.troubleshooting.length > 0 && (
              <TroubleshootingSection items={project.troubleshooting} />
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
