// src/ProjectsSection.tsx
import React, { useEffect, useState } from "react";
import { ProjectModal } from "./ProjectModal";
import CircularProgress from "../../common/CircularProgress";

const AUTO_SLIDE_DURATION = 3000; // 자동 슬라이드 지속 시간 (ms)

const modules = import.meta.glob("./data/**/*.tsx", { eager: true });

const projects = Object.values(modules).map((m: any) => {
  // 각 module이 export default 또는 named export일 경우 처리
  return m.default ?? Object.values(m)[0];
});
const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-8";

const labelClass = "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";
const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";
const sectionSubTitleClass = "text-[13px] text-fg-muted leading-relaxed";

const pillClass =
  "text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted";

// ➜ 이제는 baseX/baseY를 안 들고 있고, 랜덤 흔들림만 저장
type CardLayout = {
  jitterX: number;
  jitterY: number;
  baseRotate: number;
};

const ProjectsSection: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // 자동 슬라이드 일시정지 여부
  const [isMobile, setIsMobile] = useState(false); // 모바일 여부

  const [activeId, setActiveId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [fromOffset, setFromOffset] = useState<{ x: number; y: number } | null>(
    null
  );

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
      const mobile = width < 768;
      console.log("Projects resize:", { width, mobile }); // 디버깅
      setViewportWidth(width);
      setIsMobile(mobile);
    };

    handleResize(); // 초기 한 번
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // 📐 화면 크기에 따른 baseSpread 계산 (대충 감성 튜닝값)
  const getBaseSpread = () => {
    if (!viewportWidth) return 140;

    const base = viewportWidth / (projects.length + 1); // 화면 폭 / 카드 수
    return Math.min(180, Math.max(70, base * 0.8));
  };

  const baseSpread = getBaseSpread();
  const middle = (projects.length - 1) / 2;

  return (
    <>
      <section id="projects" className="mb-16">
        <div className={sectionHeaderBase}>
          <div>
            <p className={labelClass}>Projects</p>
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
            <div className="w-full overflow-hidden">
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
                    <article
                      data-project-id={project.id}
                      className="w-full max-w-3xl rounded-2xl bg-(--bg-elevated) shadow-[0_16px_36px_rgba(0,0,0,0.55)] [html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.12)] border border-(--border-subtle) cursor-pointer overflow-hidden"
                      onClick={(e) =>
                        openModal(project.id, e.currentTarget as HTMLElement)
                      }
                    >
                      {project.banner && (
                        <div className="relative w-full h-32 overflow-hidden">
                          <img
                            src={project.banner}
                            alt=""
                            className="w-full h-full object-cover grayscale-[30%]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(0,0,0,0.6)] to-transparent" />
                        </div>
                      )}

                      <div className="relative z-10 p-4 text-[13px] text-fg-muted leading-[1.6]">
                        <h3 className="mb-1.5 text-fg text-[15px] font-semibold tracking-[0.02em]">
                          {project.title}
                        </h3>

                        <p className="text-[12px] mb-2.5 line-clamp-2 text-fg opacity-100">
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

                      <span className="mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-[80px] text-center line-clamp-2">
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
          <div className="relative flex flex-col items-center">
            {/* 🎴 무작위 섞인 카드 영역 */}
            <div
              className="relative w-full max-w-5xl h-[260px] flex items-center justify-center mb-10 overflow-visible"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {projects.map((project, idx) => {
                const layout = cardLayouts[idx];
                const isActive = idx === focusedIndex;

                // 🧮 화면 폭에 따른 centerOffset + 랜덤 흔들림
                const centerOffset = (idx - middle) * baseSpread;
                const baseX = centerOffset + layout.jitterX;
                const baseY = layout.jitterY;

                // 정수 좌표 → 폰트 또렷하게
                const translateX = Math.round(baseX);
                const translateY = Math.round(baseY + (isActive ? -10 : 6));

                // 활성 카드는 회전 없이 / 살짝 확대
                const transform = isActive
                  ? `translateX(${translateX}px) translateY(${translateY}px) scale(1.05)`
                  : `translateX(${translateX}px) translateY(${translateY}px) rotate(${layout.baseRotate}deg) scale(0.96)`;

                // z-index: 프로젝트 순서대로 쌓이고, 포커스된 카드만 맨 위
                const zIndex = isActive ? 999 : 100 + idx;

                const opacity = isActive ? 1 : 0.8;
                const filter = isActive ? "none" : "blur(0.8px)";

                return (
                  <article
                    key={project.id}
                    data-project-id={project.id} // ⬅⬅ 이 줄 추가
                    className={[
                      "group absolute w-full",
                      "max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]", // 🔥 폭을 화면 크기에 따라 줄이기
                      "rounded-2xl bg-(--bg-elevated)",
                      "shadow-[0_16px_36px_rgba(0,0,0,0.55)]",
                      "[html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.12)]",
                      "border border-(--border-subtle)",
                      "cursor-pointer overflow-hidden",
                      "transition-all duration-250 ease-out",
                      isActive
                        ? [
                            "ring-2 ring-(--accent)",
                            "ring-offset-2",
                            "ring-offset-[color:var(--bg-soft)]", // 🔧 라이트 모드에서 테두리 판
                          ].join(" ")
                        : "ring-0",
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
                    {project.banner && (
                      <div
                        className={[
                          "absolute inset-0 z-0 pointer-events-none",
                          "transition-all duration-200",
                          isActive ? "opacity-20" : "opacity-40", // 🔧 활성일 때 살짝 더 어둡게
                        ].join(" ")}
                      >
                        <img
                          src={project.banner}
                          alt=""
                          className="w-full h-full object-cover grayscale-[30%]"
                        />
                        {/* 🔧 활성일 때는 아래쪽 그라디언트를 좀 더 진하게 */}
                        <div
                          className={[
                            "absolute inset-0 bg-gradient-to-t to-transparent transition-colors duration-200",
                            isActive
                              ? "from-[color:rgba(0,0,0,0.6)] [html[data-theme='light']_&]:from-[color:rgba(0,0,0,0.52)]"
                              : "from-[color:rgba(0,0,0,0.35)] [html[data-theme='light']_&]:from-[color:rgba(0,0,0,0.3)]",
                          ].join(" ")}
                        />
                      </div>
                    )}

                    <div className="relative z-10 p-4 text-[13px] text-fg-muted leading-[1.6]">
                      <h3
                        className={[
                          "mb-1.5",
                          "text-fg",
                          "transition-all duration-200", // 부드럽게 변하도록
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
                          isActive
                            ? "text-fg opacity-100" // 활성: 더 진하게/선명하게
                            : "text-fg-muted opacity-80", // 비활성: 살짝 흐리게
                        ].join(" ")}
                      >
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

                    const cardEl = document.querySelector<HTMLElement>(
                      `[data-project-id="${project.id}"]`
                    );
                    if (cardEl) {
                      openModal(project.id, cardEl);
                    }
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
                      <span className="mt-1 text-[10px] text-fg-muted max-w-[80px] text-center line-clamp-2">
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
