// src/component/Body/activity/activity.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { Activity } from "./types";
import CircularProgress from "../../common/CircularProgress";
import ActivityItem from "./ActivityItem";

const AUTO_SLIDE_DURATION = 4000; // 자동 슬라이드 지속 시간 (ms)

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
    const carouselRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const totalItems = activities.length;

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
        // 수동 이동 시 자동 재생 일시 중지 후 재시작
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
        }, AUTO_SLIDE_DURATION); // AUTO_SLIDE_DURATION마다 자동 이동

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

            {/* 본문: 좌측 타임라인 + 우측 세로 슬라이드 카드 */}
            <div
                className="flex flex-col md:flex-row gap-8"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* 좌측: 세로형 네비게이션 */}
                <div className="hidden md:block w-64 shrink-0">
                    {/* 선 + 포인트 전체 래퍼 (오른쪽 카드랑 높이 맞춤) */}
                    <div className="relative h-[340px] py-4">
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
                                            {isActive && (
                                                <span className="text-[11px] text-blue-400 mt-0.5 animate-fade-in">
                                                    Now Viewing
                                                </span>
                                            )}
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
                    className="flex-1 w-full overflow-hidden rounded-3xl border border-(--border-subtle) bg-(--bg-elevated)
                   shadow-[0_14px_34px_rgba(0,0,0,0.32)]
                   [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                   h-[340px]"
                >
                    <div
                        className="flex flex-col transition-transform duration-500 ease-out h-full"
                        style={{
                            transform: `translateY(-${currentIndex * 100}%)`,
                        }}
                    >
                        {activities.map((activity, idx) => (
                            <div key={activity.id} className="h-full w-full shrink-0">
                                <ActivityItem activity={activity} isActive={idx === currentIndex} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 모바일용 하단 인디케이터 (md 이상에서는 숨김) */}
            <div className="md:hidden flex justify-center w-full mt-4 gap-2">
                {activities.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-fg w-6" : "bg-(--border-subtle)"
                            }`}
                        aria-label={`${idx + 1}번 슬라이드로 이동`}
                    />
                ))}
            </div>
        </section>
    );

};

export default ActivitySection;
