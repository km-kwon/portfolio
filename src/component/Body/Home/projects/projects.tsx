// src/ProjectsSection.tsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";
import CircularProgress from "../../../common/CircularProgress";
import {
  sectionHeaderBase,
  sectionTitleClass,
  sectionSubTitleClass,
  pillClass,
} from "../../../../styles/tokens";
import SectionMarker from "../../../common/SectionMarker";
import type { Project } from "./types";
import TiltCard from "../../../common/TiltCard";
import { useTilt } from "../../../../hooks/useTilt";

const AUTO_SLIDE_DURATION = 3000; // 자동 슬라이드 지속 시간 (ms)

const modules = import.meta.glob("./data/**/*.tsx", { eager: true });

const projects = Object.values(modules).map((m: any) => {
  // 각 module이 export default 또는 named export일 경우 처리
  return m.default ?? Object.values(m)[0];
}) as Project[];

// ➜ 이제는 baseX/baseY를 안 들고 있고, 랜덤 흔들림만 저장
type CardLayout = {
  jitterX: number;
  jitterY: number;
  baseRotate: number;
};

type DesktopProjectCardProps = {
  project: Project;
  isActive: boolean;
  index: number;
  zIndex: number;
  transform: string;
  opacity: number;
  filter: string;
  isInteractive: boolean;
  disableTransition: boolean;
  onOpen: (id: string) => void;
  onHoldAutoSlide: () => void;
};

type MobileProjectCardProps = {
  project: Project;
  onOpen: (id: string) => void;
};

const MobileProjectCard = ({ project, onOpen }: MobileProjectCardProps) => (
  <TiltCard
    className="w-full max-w-3xl"
    surfaceClassName="min-h-80 flex flex-col rounded-2xl bg-(--bg-elevated) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)] [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-(--border-subtle) cursor-pointer"
    data-project-id={project.id}
    onClick={() => onOpen(project.id)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen(project.id);
      }
    }}
  >
    {project.banner && (
      <div className="relative w-full h-32 shrink-0 overflow-hidden">
        <img
          src={project.banner}
          alt=""
          className="h-full w-full object-contain bg-black/18 saturate-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.6)] to-transparent" />
      </div>
    )}

    <div className="relative flex flex-col flex-1 justify-between z-10 p-4 text-[13px] text-fg-muted leading-[1.6]">
      <div>
        <h3 className="mb-1.5 text-fg text-[15px] font-semibold tracking-[0.02em]">
          {project.title}
        </h3>

        <p className="text-[12px] mb-2.5 line-clamp-2 text-fg opacity-100">
          {project.summary}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.highlights.slice(0, 2).map((h, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-full bg-(--accent-subtle) border border-(--accent-border) text-(--accent) font-medium"
              >
                {h.value} {h.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 6).map((t) => (
            <span key={t} className={pillClass}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 text-[11px] mt-3">
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
  </TiltCard>
);

const DesktopProjectCard = ({
  project,
  isActive,
  index,
  zIndex,
  transform,
  opacity,
  filter,
  isInteractive,
  disableTransition,
  onOpen,
  onHoldAutoSlide,
}: DesktopProjectCardProps) => {
  const { tiltHandlers, highlightStyle, isTiltDisabled } = useTilt();

  const handlePointerEnter: React.PointerEventHandler<HTMLElement> = (event) => {
    onHoldAutoSlide();
    tiltHandlers.onPointerEnter?.(event);
  };

  return (
    <div
      className={[
        "archive-wall-slot absolute w-full max-w-[340px]",
        disableTransition
          ? "transition-none"
          : "transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
      ].join(" ")}
      style={{
        zIndex,
        transform,
        opacity,
        filter,
        pointerEvents: isInteractive ? "auto" : "none",
        perspective: isTiltDisabled ? undefined : 900,
      }}
    >
      <motion.article
        data-project-id={project.id}
        className={[
          "archive-wall-card project-tilt-surface group relative w-full",
          "rounded-xl bg-(--bg-elevated)",
          "border border-(--border-subtle)",
          "cursor-pointer overflow-hidden",
          "transition-all duration-500 ease-out",
          isActive ? "archive-wall-card-active" : "archive-wall-card-idle",
        ].join(" ")}
        onClick={() => onOpen(project.id)}
        onPointerEnter={handlePointerEnter}
        onPointerMove={tiltHandlers.onPointerMove}
        onPointerLeave={tiltHandlers.onPointerLeave}
        onFocus={onHoldAutoSlide}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(project.id);
          }
        }}
        tabIndex={isInteractive ? 0 : -1}
        role="button"
      >
        {project.banner && (
          <div
            className={[
              "relative z-0 h-36 pointer-events-none overflow-hidden",
              "transition-all duration-500",
              isActive ? "opacity-100" : "opacity-72",
            ].join(" ")}
          >
            <img
              src={project.banner}
              alt=""
              className={[
                "h-full w-full object-contain bg-black/18 transition-all duration-700",
                isActive ? "grayscale-0 saturate-110" : "grayscale-[25%] opacity-90 saturate-90",
              ].join(" ")}
            />
            <div
              className={[
                "absolute inset-0 bg-linear-to-t to-transparent transition-colors duration-200",
                isActive
                  ? "from-[rgba(0,0,0,0.42)] via-transparent"
                  : "from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.08)]",
              ].join(" ")}
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
              Archive {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        )}

        <motion.div
          className="project-tilt-gloss absolute inset-0 z-20 pointer-events-none opacity-0 transition-opacity duration-200"
          style={highlightStyle}
        />

        <div className="relative z-10 p-4 text-[13px] text-fg-muted leading-[1.6]">
          <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-(--accent)">
            <span>{project.period}</span>
            <span>{project.team}</span>
          </div>
          <h3
            className={[
              "mb-1.5",
              "text-fg",
              "transition-all duration-200",
              isActive
                ? "text-[17px] font-semibold tracking-[0.01em]"
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
              {project.highlights.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-(--accent-subtle) border border-(--accent-border) text-(--accent) font-medium"
                >
                  {h.value} {h.label}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.tags.slice(0, 6).map((t) => (
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
          <div
            className={[
              "mt-4 h-px w-full origin-left bg-(--accent)",
              "transition-transform duration-700",
              isActive ? "scale-x-100" : "scale-x-20 opacity-40",
            ].join(" ")}
          />
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // 자동 슬라이드 일시정지 여부
  const [isMobile, setIsMobile] = useState(false); // 모바일 여부

  const [activeId, setActiveId] = useState<string | null>(null);

  // 터치 스크롤을 위한 상태
  const touchStartX = React.useRef<number>(0);
  const touchEndX = React.useRef<number>(0);

  // 🎠 자동 슬라이드: 3초마다 다음 카드로 이동
  useEffect(() => {
    if (isPaused || activeId) return; // 일시정지 중이거나 모달 열려있으면 중지

    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % projects.length);
    }, AUTO_SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, activeId]);

  // 🎴 카드 레이아웃: 랜덤 섞임(한 번만 생성)
  const [cardLayouts] = useState<CardLayout[]>(() =>
    projects.map(() => ({
      jitterX: Math.random() * 20 - 15, // -20 ~ 20
      jitterY: Math.random() * 30 - 15, // -15 ~ 15
      baseRotate: Math.random() * 16 - 10, // -8° ~ 8°
    }))
  );

  // 📏 뷰포트 너비를 추적해서, 화면이 줄어들면 spread를 자동으로 줄이기
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 1024;
      setViewportWidth(width);
      setIsMobile(mobile);
    };

    handleResize(); // 초기 한 번
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeProject = projects.find((p) => p.id === activeId) || null;

  const openModal = (id: string) => {
    setActiveId(id);
  };

  const closeModal = () => {
    setActiveId(null);
  };

  // ESC 닫기 & body 스크롤 잠금은 ProjectModal 내부에서 처리

  // 📐 화면 크기에 따른 baseSpread 계산 (대충 감성 튜닝값)
  const getBaseSpread = () => {
    if (!viewportWidth) return 140;

    const usableWidth = Math.min(viewportWidth - 40, 1024);
    const base = usableWidth / (projects.length + 1); // 실제 전시 영역 기준 카드 간격
    return Math.min(150, Math.max(82, base * 0.68));
  };

  const baseSpread = getBaseSpread();
  const middle = (projects.length - 1) / 2;
  const focusedProject = projects[focusedIndex];

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // 최소 스와이프 거리

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // 왼쪽으로 스와이프 -> 다음
        setFocusedIndex((prev) => (prev + 1) % projects.length);
      } else {
        // 오른쪽으로 스와이프 -> 이전
        setFocusedIndex(
          (prev) => (prev - 1 + projects.length) % projects.length
        );
      }
    }

    // 초기화
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <>
      <section id="projects" className="mb-16">
        <div className="cinematic-section-rail mb-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
          <span>Scene 03 / Evidence Archive</span>
          <div className="hidden h-px flex-1 bg-(--border-subtle) md:block">
            <span className="cinematic-progress block h-full max-w-[36%] bg-(--accent)" />
          </div>
          <span className="text-(--accent)">Auto Curated Projects</span>
        </div>
        <SectionMarker number="03" label="Projects" />
        <div className={sectionHeaderBase}>
          <div>
            <h2 className={sectionTitleClass}>주요 프로젝트</h2>
          </div>
          <p className={sectionSubTitleClass}>
            아래 포인트나 카드를 클릭하면 상세 모달을 볼 수 있습니다.
          </p>
        </div>

        {/* 레이아웃: 모바일 = 가로 슬라이더, 데스크탑 = 수납장 */}
        {isMobile ? (
          // ====================== 📱 모바일: 가로 슬라이더 ======================
          <div
            className="flex flex-col gap-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* 카드 슬라이더 */}
            <div
              className="w-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform"
                style={{
                  transform: `translate3d(-${focusedIndex * 100}%, 0, 0)`,
                }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full shrink-0 flex justify-center px-3"
                  >
                    <MobileProjectCard project={project} onOpen={openModal} />
                  </div>
                ))}
              </div>
            </div>

            {/* 아래 가로선 + 포인트 */}
            <div className="relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]">
              <div className="h-px w-full max-w-3xl bg-(--border-subtle) opacity-70" />

              <div className="absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6">
                {projects.map((project, idx) => {
                  const isActive = idx === focusedIndex;

                  return (
                    <button
                      key={project.id}
                      type="button"
                      className="relative flex flex-col items-center outline-none cursor-pointer shrink-0"
                      onMouseEnter={() => setFocusedIndex(idx)}
                      onClick={() => setFocusedIndex(idx)}
                      aria-label={`${project.title}로 이동`}
                    >
                      <span
                        className={[
                          "mb-1 h-[3px] w-5 sm:w-7 rounded-full",
                          "bg-(--border-subtle)",
                          isActive ? "animate-border-pulse" : "opacity-40",
                        ].join(" ")}
                      />

                      <CircularProgress
                        isActive={isActive}
                        isPaused={isPaused}
                        duration={AUTO_SLIDE_DURATION}
                        size={16}
                        strokeWidth={2}
                      />

                      <span className="mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-20 text-center line-clamp-2">
                        {project.subTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          // ====================== 💻 데스크탑: 수납장 스타일 ======================
          <div
            className={[
              "cinematic-project-stage relative flex flex-col items-center",
              activeId ? "cinematic-project-stage-paused" : "",
            ].join(" ")}
          >
            <div className="archive-wall-status pointer-events-none absolute right-0 top-0 z-[120] hidden w-[280px] border-l border-(--accent-border) bg-(--bg-elevated)/72 p-4 backdrop-blur-md xl:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent)">
                Now Exhibiting
              </div>
              <div className="mt-3 text-[18px] font-semibold leading-tight text-fg">
                {focusedProject?.subTitle}
              </div>
              <p className="mt-2 line-clamp-3 text-[12px] leading-[1.65] text-fg-muted">
                {focusedProject?.summary}
              </p>
            </div>
            {/* 🎴 무작위 섞인 카드 영역 */}
            <div
              className="archive-wall relative w-full max-w-5xl h-[430px] flex items-center justify-center mb-12 overflow-visible"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => {
                setIsPaused(false);
              }}
            >
              {projects.map((project, idx) => {
                const layout = cardLayouts[idx];
                const isActive = idx === focusedIndex;

                // 🧮 화면 폭에 따른 centerOffset + 랜덤 흔들림
                const relativeIndex = idx - focusedIndex;
                const isWrapping =
                  relativeIndex > middle || relativeIndex < -middle;
                const wrappedRelative =
                  relativeIndex > middle
                    ? relativeIndex - projects.length
                    : relativeIndex < -middle
                      ? relativeIndex + projects.length
                      : relativeIndex;
                const visibleDistance = 2;
                const isVisible = Math.abs(wrappedRelative) <= visibleDistance;
                const centerOffset = wrappedRelative * baseSpread;
                const baseX = centerOffset + layout.jitterX * 0.35;
                const baseY = layout.jitterY * 0.35;

                // 정수 좌표 → 폰트 또렷하게
                const translateX = Math.round(baseX);
                const translateY = Math.round(baseY + Math.abs(wrappedRelative) * 14);
                const depth = Math.min(1, Math.abs(wrappedRelative) / Math.max(1, middle));
                const rotateY = wrappedRelative * -12;
                const rotateZ = isActive ? 0 : layout.baseRotate * 0.28;

                const transform = isActive
                  ? `translate3d(${translateX}px, -20px, 72px) rotateY(0deg) scale(1.04)`
                  : `translate3d(${translateX}px, ${translateY}px, ${-150 * depth}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${0.84 - depth * 0.06})`;

                // z-index: 프로젝트 순서대로 쌓이고, 포커스된 카드만 맨 위
                const zIndex = isActive ? 90 : isVisible ? 60 - Math.abs(wrappedRelative) : 0;

                const opacity = isActive
                  ? 1
                  : isVisible
                    ? 0.42 + (1 - depth) * 0.22
                    : 0;
                const filter = isActive ? "none" : `saturate(${0.86 - depth * 0.12}) brightness(${0.82 - depth * 0.08})`;
                const isInteractive = isActive || Math.abs(wrappedRelative) <= 1;
                const disableTransition = isWrapping && !isVisible;

                return (
                  <DesktopProjectCard
                    key={project.id}
                    project={project}
                    isActive={isActive}
                    index={idx}
                    zIndex={zIndex}
                    transform={transform}
                    opacity={opacity}
                    filter={filter}
                    isInteractive={isInteractive}
                    disableTransition={disableTransition}
                    onOpen={openModal}
                    onHoldAutoSlide={() => setIsPaused(true)}
                  />
                );
              })}
            </div>

            {/* --- 아래 가로선 + 포인트 --- */}
            <div
              className="relative w-full max-w-3xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* 기본 가로선 */}
              <div className="h-px w-full bg-(--border-subtle) opacity-70" />

              {/* 포인트들 */}
              <div className="absolute inset-x-0 -top-2 flex justify-between">
                {projects.map((project, idx: number) => {
                  const isActive = idx === focusedIndex;

                  const handlePointActivate = () => {
                    setFocusedIndex(idx);
                    openModal(project.id);
                  };

                  return (
                    <button
                      key={project.id}
                      type="button"
                      className="relative flex flex-col cursor-pointer items-center outline-none"
                      onMouseEnter={() => setFocusedIndex(idx)}
                      onFocus={() => setFocusedIndex(idx)}
                      onClick={handlePointActivate}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handlePointActivate();
                        }
                      }}
                    >
                      {/* 작은 깜빡이는 segment (선 하이라이트) */}
                      <span
                        className={[
                          "mb-1 h-[3px] w-7 rounded-full",
                          "bg-(--border-subtle)",
                          isActive ? "animate-border-pulse" : "opacity-40",
                        ].join(" ")}
                      />

                      {/* 원형 프로그레스 인디케이터 */}
                      <CircularProgress
                        isActive={isActive}
                        isPaused={isPaused}
                        duration={AUTO_SLIDE_DURATION}
                        size={16}
                        strokeWidth={2}
                      />

                      {/* 라벨 (축약 title) */}
                      <span className="mt-1 text-[10px] text-fg-muted max-w-20 text-center line-clamp-2">
                        {project.subTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            key={activeProject.id}
            project={activeProject}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
