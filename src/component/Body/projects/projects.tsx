// src/ProjectsSection.tsx
import React, { useEffect, useState } from "react";
import { ssangsangProjects } from "./data/ssang-sangData";
import { mogangProject } from "./data/mogangData";
import { ProjectModal } from "./ProjectModal";
import { varyRecycleProjects } from "./data/varyRecycle";

const projects = [ssangsangProjects, mogangProject, varyRecycleProjects];

const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-8";

const labelClass = "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";
const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";
const sectionSubTitleClass = "text-[13px] text-fg-muted leading-relaxed";

const pillClass =
  "text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted";

type CardLayout = {
  baseX: number;
  baseY: number;
  baseRotate: number;
};

const ProjectsSection: React.FC = () => {
  // 타임라인/hover로 어떤 프로젝트가 선택됐는지
  const [focusedIndex, setFocusedIndex] = useState(0);

  // 모달 전용 상태
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [fromOffset, setFromOffset] = useState<{ x: number; y: number } | null>(
    null
  );

  // 🎴 카드 레이아웃: “섞여 있는 덱” 느낌 + 좌우로 넓게 퍼지도록
  const [cardLayouts] = useState<CardLayout[]>(() => {
    const middle = (projects.length - 1) / 2;
    
    const baseSpread = 200; // 카드 간 기본 간격(px) – 좌우로 넓게 하려면 값 크게

    return projects.map((_, idx) => {
      const centerOffset = (idx - middle) * baseSpread; // 좌우 기본 위치
      const jitterX = Math.random() * 30 - 30; // -15 ~ 15 (살짝 섞이게)
      const jitterY = Math.random() * 30 - 15; // -15 ~ 15
      const baseRotate = Math.random() * 16 - 8; // -8° ~ 8°

      return {
        baseX: centerOffset + jitterX,
        baseY: jitterY,
        baseRotate,
      };
    });
  });

  const activeProject = projects.find((p) => p.id === activeId) || null;

  // 카드 → 모달로 확대되는 느낌을 위한 open 함수
  const openModal = (id: string, cardEl: HTMLElement) => {
    const rect = cardEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const viewportCenterX = vw / 2;
    const viewportCenterY = vh / 2;

    const x = cardCenterX - viewportCenterX;
    const y = cardCenterY - viewportCenterY;

    setActiveId(id);
    setFromOffset({ x, y });

    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveId(null);
      setFromOffset(null);
    }, 220);
  };

  // ESC 닫기
  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  // 모달 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <>
      <section id="projects" className="mb-16">
        <div className={sectionHeaderBase}>
          <div>
            <p className={labelClass}>Projects</p>
            <h2 className={sectionTitleClass}>주요 프로젝트</h2>
          </div>
          <p className={sectionSubTitleClass}>
            아래 포인트를 hover하면 위의 카드 더미에서 해당 프로젝트 카드가
            살짝 앞으로 튀어나옵니다. 카드를 클릭하면 상세 모달을 볼 수 있어요.
          </p>
        </div>

        {/* 수납장 + 타임라인 래퍼 */}
        <div className="relative flex flex-col items-center">
          {/* 🎴 무작위 섞인 카드 영역 */}
          <div className="relative w-full max-w-5xl h-[260px] flex items-center justify-center mb-10">
            {projects.map((project, idx) => {
              const layout = cardLayouts[idx];
              const isActive = idx === focusedIndex;

              // 정수 좌표 → 폰트 또렷하게
              const translateX = Math.round(layout.baseX);
              const translateY = Math.round(layout.baseY + (isActive ? -10 : 6));

              // 활성 카드는 회전 없이 / 살짝 확대
              const transform = isActive
                ? `translateX(${translateX}px) translateY(${translateY}px) scale(1.05)`
                : `translateX(${translateX}px) translateY(${translateY}px) rotate(${layout.baseRotate}deg) scale(0.96)`;

              // 🎯 z-index: 프로젝트 순서대로 쌓이고, 포커스된 카드만 맨 위
              const zIndex = isActive ? 999 : 100 + idx; // idx 큰 카드가 더 위

              const opacity = isActive ? 1 : 0.8;
              const filter = isActive ? "none" : "blur(0.8px)";

              return (
                <article
                  key={project.id}
                  className={[
                    "group absolute w-full max-w-[320px]",
                    "rounded-2xl bg-(--bg-elevated)",
                    "shadow-[0_16px_36px_rgba(0,0,0,0.55)]",
                    "[html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.12)]",
                    "border border-(--border-subtle)",
                    "cursor-pointer overflow-hidden",
                    "transition-all duration-250 ease-out",
                    isActive ? "ring-2 ring-(--accent)" : "ring-0",
                  ].join(" ")}
                  style={{
                    zIndex,
                    transform,
                    opacity,
                    filter,
                  }}
                  onClick={(e) =>
                    openModal(project.id, e.currentTarget as HTMLElement)
                  }
                  onMouseEnter={() => setFocusedIndex(idx)}
                  onFocus={() => setFocusedIndex(idx)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(project.id, e.currentTarget as HTMLElement);
                    }
                  }}
                  role="button"
                >
                  <div className="p-5 text-[13px] text-fg-muted leading-[1.6] bg-gradient-to-br from-(--bg-elevated) to-(--bg-soft)">
                    <h3 className="text-[14px] font-medium text-fg mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-[12px] mb-2.5 line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {project.tags.slice(0, 6).map((t: string) => (
                        <span key={t} className={pillClass}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 text-[11px] mt-1">
                      {project.links.map((link) => (
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
                </article>
              );
            })}
          </div>

          {/* --- 아래 가로선 + 포인트 --- */}
          <div className="relative w-full max-w-3xl">
            {/* 기본 가로선 */}
            <div className="h-px w-full bg-(--border-subtle) opacity-70" />

            {/* 포인트들 */}
            <div className="absolute inset-x-0 -top-2 flex justify-between">
              {projects.map((project, idx: number) => {
                const isActive = idx === focusedIndex;
                return (
                  <button
                    key={project.id}
                    type="button"
                    className="relative flex flex-col items-center outline-none"
                    onMouseEnter={() => setFocusedIndex(idx)}
                    onFocus={() => setFocusedIndex(idx)}
                  >
                    {/* 작은 깜빡이는 segment (선 하이라이트) */}
                    <span
                      className={[
                        "mb-1 h-[3px] w-7 rounded-full",
                        "bg-(--border-subtle)",
                        isActive ? "animate-border-pulse" : "opacity-40",
                      ].join(" ")}
                    />

                    {/* 점 */}
                    <span
                      className={[
                        "w-3 h-3 rounded-full border",
                        "transition-all duration-200 ease-out",
                        isActive
                          ? "bg-(--accent) border-(--accent) shadow-[0_0_0_4px_rgba(255,255,255,0.18)]"
                          : "bg-(--bg-elevated) border-(--border-subtle)",
                      ].join(" ")}
                    />

                    {/* 라벨 (축약 title) */}
                    <span className="mt-1 text-[10px] text-fg-muted max-w-[80px] text-center line-clamp-2">
                      {project.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          isVisible={isVisible}
          fromOffset={fromOffset}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ProjectsSection;
