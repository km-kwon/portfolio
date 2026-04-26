import React, { useState, useEffect, useRef, useCallback } from "react";

// Shapes defined as arrays of points (normalized 0-1)
const SHAPES: Record<string, [number, number][]> = {
  circle: Array.from({ length: 32 }, (_, i) => {
    const a = (i / 32) * Math.PI * 2;
    return [0.5 + Math.cos(a) * 0.4, 0.5 + Math.sin(a) * 0.4];
  }),
  square: (() => {
    const pts: [number, number][] = [];
    const sides = 32;
    const perSide = sides / 4;
    for (let i = 0; i < perSide; i++) pts.push([0.1 + (0.8 * i) / perSide, 0.1]);
    for (let i = 0; i < perSide; i++) pts.push([0.9, 0.1 + (0.8 * i) / perSide]);
    for (let i = 0; i < perSide; i++) pts.push([0.9 - (0.8 * i) / perSide, 0.9]);
    for (let i = 0; i < perSide; i++) pts.push([0.1, 0.9 - (0.8 * i) / perSide]);
    return pts;
  })(),
  star: Array.from({ length: 32 }, (_, i) => {
    const a = (i / 32) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? 0.4 : 0.18;
    return [0.5 + Math.cos(a) * r, 0.5 + Math.sin(a) * r] as [number, number];
  }),
  triangle: (() => {
    const pts: [number, number][] = [];
    const corners: [number, number][] = [
      [0.5, 0.1],
      [0.9, 0.85],
      [0.1, 0.85],
    ];
    const perSide = Math.floor(32 / 3);
    for (let s = 0; s < 3; s++) {
      const [x1, y1] = corners[s];
      const [x2, y2] = corners[(s + 1) % 3];
      const count = s < 2 ? perSide : 32 - perSide * 2;
      for (let i = 0; i < count; i++) {
        const t = i / count;
        pts.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]);
      }
    }
    return pts;
  })(),
};

const SHAPE_NAMES = Object.keys(SHAPES) as (keyof typeof SHAPES)[];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function pointsToPath(pts: [number, number][], size: number): string {
  if (pts.length === 0) return "";
  const scaled = pts.map(([x, y]) => [x * size, y * size]);
  let d = `M ${scaled[0][0].toFixed(1)} ${scaled[0][1].toFixed(1)}`;
  for (let i = 1; i < scaled.length; i++) {
    d += ` L ${scaled[i][0].toFixed(1)} ${scaled[i][1].toFixed(1)}`;
  }
  return d + " Z";
}

const SvgMorphExperiment: React.FC = () => {
  const [fromShape, setFromShape] = useState<keyof typeof SHAPES>("circle");
  const [toShape, setToShape] = useState<keyof typeof SHAPES>("star");
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [duration, setDuration] = useState(800);
  const [autoPlay, setAutoPlay] = useState(false);
  const frameRef = useRef<number>(0);
  const startRef = useRef(0);

  const animate = useCallback(() => {
    const elapsed = Date.now() - startRef.current;
    const t = Math.min(elapsed / duration, 1);
    setProgress(easeInOutCubic(t));

    if (t < 1) {
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      if (autoPlay) {
        setTimeout(() => {
          setFromShape(toShape);
          setToShape((prev) => {
            const idx = SHAPE_NAMES.indexOf(prev);
            return SHAPE_NAMES[(idx + 1) % SHAPE_NAMES.length];
          });
        }, 500);
      }
    }
  }, [duration, autoPlay, toShape]);

  const startMorph = useCallback(() => {
    setProgress(0);
    setIsAnimating(true);
    startRef.current = Date.now();
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(animate);
  }, [animate]);

  // Auto-play trigger
  useEffect(() => {
    if (autoPlay && !isAnimating) {
      const timer = setTimeout(startMorph, 600);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, isAnimating, fromShape, toShape, startMorph]);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const fromPts = SHAPES[fromShape];
  const toPts = SHAPES[toShape];
  const currentPts: [number, number][] = fromPts.map((fp, i) => [
    lerp(fp[0], toPts[i][0], progress),
    lerp(fp[1], toPts[i][1], progress),
  ]);

  const SVG_SIZE = 200;
  const path = pointsToPath(currentPts, SVG_SIZE);

  const shapeLabels: Record<string, string> = {
    circle: "원",
    square: "사각형",
    star: "별",
    triangle: "삼각형",
  };

  return (
    <div className="grid items-start gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-4">
          두 도형의 <strong>꼭짓점을 1:1로 보간</strong>하여 부드러운 모핑을 구현합니다.
          각 도형을 동일한 수의 점으로 샘플링한 뒤, lerp로 중간 형태를 계산합니다.
        </p>

        <div className="space-y-4">
          {/* Shape selectors */}
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="text-[11px] text-fg-muted mb-1">시작 도형</div>
              <div className="flex gap-1">
                {SHAPE_NAMES.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setFromShape(s); setProgress(0); }}
                    disabled={isAnimating || s === toShape}
                    className={
                      "flex-1 text-[10px] py-1.5 rounded-lg border cursor-pointer transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed " +
                      (fromShape === s
                        ? "border-blue-400/40 bg-blue-500/10 text-blue-400"
                        : "border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover)")
                    }
                  >
                    {shapeLabels[s]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-[11px] text-fg-muted mb-1">목표 도형</div>
            <div className="flex gap-1">
              {SHAPE_NAMES.map((s) => (
                <button
                  key={s}
                  onClick={() => { setToShape(s); setProgress(0); }}
                  disabled={isAnimating || s === fromShape}
                  className={
                    "flex-1 text-[10px] py-1.5 rounded-lg border cursor-pointer transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed " +
                    (toShape === s
                      ? "border-(--accent-border) bg-(--accent-subtle) text-(--accent)"
                      : "border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover)")
                  }
                >
                  {shapeLabels[s]}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <div className="flex justify-between text-[11px] text-fg-muted mb-1">
              <span>애니메이션 시간</span>
              <span className="font-mono">{duration}ms</span>
            </div>
            <input
              type="range" min={200} max={2000} step={100} value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-(--accent) cursor-pointer"
            />
          </div>

          {/* Progress (manual) */}
          <div>
            <div className="flex justify-between text-[11px] text-fg-muted mb-1">
              <span>진행도 (수동)</span>
              <span className="font-mono">{(progress * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range" min={0} max={1} step={0.01} value={progress}
              onChange={(e) => {
                if (!isAnimating) setProgress(Number(e.target.value));
              }}
              disabled={isAnimating}
              className="w-full accent-(--accent) cursor-pointer disabled:opacity-50"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={startMorph}
              disabled={isAnimating}
              className="flex-1 text-[11px] px-3 py-1.5 rounded-lg border border-(--accent-border) bg-(--accent-subtle) text-(--accent) cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              모핑 실행
            </button>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={
                "flex-1 text-[11px] px-3 py-1.5 rounded-lg border cursor-pointer transition-all duration-200 " +
                (autoPlay
                  ? "border-purple-400/40 bg-purple-500/10 text-purple-400"
                  : "border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover)")
              }
            >
              {autoPlay ? "자동 정지" : "자동 재생"}
            </button>
          </div>
        </div>
      </div>

      {/* SVG visualization */}
      <div className="relative flex items-center justify-center rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-hidden" style={{ height: 280 }}>
        <div className="absolute top-3 right-3 text-[10px] text-fg-muted">
          {shapeLabels[fromShape]} → {shapeLabels[toShape]}
        </div>

        <svg width={SVG_SIZE} height={SVG_SIZE} viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}>
          {/* Ghost shapes */}
          <path
            d={pointsToPath(fromPts, SVG_SIZE)}
            fill="none"
            stroke="var(--border-subtle)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.3"
          />
          <path
            d={pointsToPath(toPts, SVG_SIZE)}
            fill="none"
            stroke="var(--border-subtle)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.3"
          />

          {/* Morphing shape */}
          <path
            d={path}
            fill="var(--accent)"
            fillOpacity="0.15"
            stroke="var(--accent)"
            strokeWidth="2"
          />

          {/* Points */}
          {currentPts.map(([px, py], i) => (
            <circle
              key={i}
              cx={px * SVG_SIZE}
              cy={py * SVG_SIZE}
              r="2"
              fill="var(--accent)"
              opacity="0.6"
            />
          ))}
        </svg>

        {/* Progress bar */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="h-1 rounded-full bg-(--bg-soft) overflow-hidden">
            <div
              className="h-full rounded-full bg-(--accent) transition-[width] duration-100"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgMorphExperiment;
