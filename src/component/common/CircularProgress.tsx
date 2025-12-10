// src/component/common/CircularProgress.tsx
import React from "react";

interface CircularProgressProps {
    isActive: boolean;
    isPaused: boolean;
    duration: number; // 애니메이션 지속 시간 (ms)
    size?: number;
    strokeWidth?: number;
}

/**
 * 원형 프로그레스 인디케이터
 * isActive일 때 원형으로 채워지는 애니메이션이 실행됨
 */
const CircularProgress: React.FC<CircularProgressProps> = ({
    isActive,
    isPaused,
    duration,
    size = 16,
    strokeWidth = 2,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            {/* 배경 원 */}
            <svg
                className="absolute"
                width={size}
                height={size}
                style={{ transform: "rotate(-90deg)" }}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    className="stroke-(--border-subtle)"
                    strokeWidth={strokeWidth}
                    opacity={0.4}
                />
            </svg>

            {/* 프로그레스 원 */}
            <svg
                className="absolute"
                width={size}
                height={size}
                style={{ transform: "rotate(-90deg)" }}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    className="stroke-(--accent)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: isActive ? 0 : circumference,
                        transition: isActive
                            ? `stroke-dashoffset ${duration}ms linear`
                            : "stroke-dashoffset 0ms",
                        animationPlayState: isPaused ? "paused" : "running",
                    }}
                />
            </svg>

            {/* 중앙 점 */}
            <span
                className={[
                    "w-2 h-2 rounded-full",
                    "transition-all duration-200 ease-out",
                    isActive
                        ? "bg-(--accent)"
                        : "bg-(--bg-elevated) border border-(--border-subtle)",
                ].join(" ")}
            />
        </div>
    );
};

export default CircularProgress;
