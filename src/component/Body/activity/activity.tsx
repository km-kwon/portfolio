// src/component/Body/activity/activity.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { Activity } from "./types";
import ActivityItem from "./ActivityItem";
import CircularProgress from "../../common/CircularProgress";

const AUTO_SLIDE_DURATION = 4000; // 자동 슬라이드 지속 시간 (ms)
const ACTIVITY_HEIGHT = 500; // 데스크탑 세로 슬라이드 높이(px)

// 동적 import로 data 폴더의 모든 activity 데이터 로드
const modules = import.meta.glob("./data/**/index.ts", { eager: true });

const activities: Activity[] = Object.values(modules).map((m: any) => {
  return m.default ?? Object.values(m)[0];
});

// 스타일 토큰
const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-8";

const labelClass = "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";
const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";

const ActivitySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalItems = activities.length;

  // 반응형: 모바일 여부
  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 1000); // md 브레이크포인트 기준
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // 다음 슬라이드로 이동
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // 이전 슬라이드로 이동
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // 특정 인덱스로 이동
  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, []);

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlaying || isHovering) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, AUTO_SLIDE_DURATION);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isHovering, goToNext]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  return (
    <section id="activity" className="mb-16">
      {/* 섹션 헤더 */}
      <div className={sectionHeaderBase}>
        <div>
          <p className={labelClass}>Activity</p>
          <h2 className={sectionTitleClass}>활동 기록</h2>
        </div>
      </div>

      {/* 본문 레이아웃: 모바일 = 가로 슬라이드, 데스크탑 = 세로 타임라인 */}
      {isMobile ? (
        // ====================== 📱 모바일: 가로 슬라이더 + 아래 포인트 ======================
        <div
          className="flex flex-col gap-6"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* 카드 슬라이더 */}
          <div ref={carouselRef} className="w-full overflow-hidden">
            <div
              className="
                flex w-full
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,0.61,0.36,1)]
                will-change-transform
              "
              style={{
                transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              }}
            >
              {activities.map((activity, idx) => (
                <div
                  key={activity.id}
                  className="w-full shrink-0 flex justify-center px-3"
                >
                  {/* 가운데 정렬 + 좌우 여백 있는 카드 컨테이너 */}
                  <div className="w-full max-w-3xl rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) shadow-[0_14px_34px_rgba(0,0,0,0.32)] [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <ActivityItem
                      activity={activity}
                      isActive={idx === currentIndex}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 아래 가로선 + 포인트 */}
          <div className="relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]">
            {/* 기본 가로선 */}
            <div className="h-px w-full max-w-3xl bg-(--border-subtle) opacity-70" />

            {/* 포인트들 */}
            <div className="absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6">
              {activities.map((activity, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <button
                    key={activity.id}
                    type="button"
                    className="relative flex flex-col items-center outline-none cursor-pointer shrink-0"
                    onMouseEnter={() => goToIndex(idx)}
                    onClick={() => goToIndex(idx)}
                    aria-label={`${activity.title}로 이동`}
                  >
                    {/* 작은 segment (선 하이라이트) */}
                    <span
                      className={[
                        "mb-1 h-[3px] w-5 sm:w-7 rounded-full",
                        "bg-(--border-subtle)",
                        isActive ? "animate-border-pulse" : "opacity-40",
                      ].join(" ")}
                    />

                    {/* 원형 프로그레스 인디케이터 */}
                    <CircularProgress
                      isActive={isActive}
                      isPaused={isHovering || !isAutoPlaying}
                      duration={AUTO_SLIDE_DURATION}
                      size={16}
                      strokeWidth={2}
                    />

                    {/* 라벨 */}
                    <span className="mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-[80px] text-center line-clamp-2">
                      {activity.subTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // ====================== 💻 데스크탑: 왼쪽 세로 타임라인 + 오른쪽 세로 슬라이드 ======================
        <div
          className="flex flex-col md:flex-row gap-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* 좌측: 세로형 네비게이션 */}
          <div className="w-64 shrink-0">
            <div className="relative py-4" style={{ height: ACTIVITY_HEIGHT }}>
              {/* 세로선 (타임라인) */}
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-(--border-subtle) opacity-70" />

              {/* 포인트 리스트: 선 높이 기준으로 고르게 분배 */}
              <div className="relative h-full flex flex-col justify-evenly">
                {activities.map((activity, idx) => {
                  const isActive = idx === currentIndex;

                  return (
                    <button
                      key={activity.id}
                      type="button"
                      className="relative flex items-center gap-4 outline-none cursor-pointer group/point text-left pl-1"
                      onMouseEnter={() => goToIndex(idx)}
                      onClick={() => goToIndex(idx)}
                      aria-label={`${activity.title}로 이동`}
                    >
                      {/* 포인트/인디케이터 */}
                      <div className="relative z-10 flex items-center justify-center w-8 h-8 shrink-0">
                        {isActive && (
                          <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-sm" />
                        )}

                        <CircularProgress
                          isActive={isActive}
                          isPaused={isHovering || !isAutoPlaying}
                          duration={AUTO_SLIDE_DURATION}
                          size={18}
                          strokeWidth={2}
                        />

                        {!isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-(--border-subtle) group-hover/point:bg-fg-muted transition-colors" />
                        )}
                      </div>

                      {/* 라벨 */}
                      <div className="flex flex-col">
                        <span
                          className={[
                            "text-[13px] font-medium transition-colors duration-200",
                            isActive
                              ? "text-fg"
                              : "text-fg-muted group-hover/point:text-fg-subtle",
                          ].join(" ")}
                        >
                          {activity.subTitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 우측: 세로 슬라이드 영역 */}
          <div
            ref={carouselRef}
            className="flex-1 w-full overflow-hidden"
            style={{ height: ACTIVITY_HEIGHT }}
          >
            <div
              className="
                flex flex-col 
                h-full w-full
                transition-transform 
                duration-700 
                ease-[cubic-bezier(0.22,0.61,0.36,1)]
                will-change-transform
              "
              style={{
                transform: `translate3d(0, -${currentIndex * 100}%, 0)`,
              }}
            >
              {activities.map((activity, idx) => (
                <div
                  key={activity.id}
                  className="h-full w-full shrink-0 flex items-center justify-center"
                >
                  {/* 가운데 카드 컨테이너 */}
                  <div className="w-full max-h-full overflow-y-auto rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) shadow-[0_14px_34px_rgba(0,0,0,0.32)] [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <ActivityItem
                      activity={activity}
                      isActive={idx === currentIndex}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ActivitySection;
