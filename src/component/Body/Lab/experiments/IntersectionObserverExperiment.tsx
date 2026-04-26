import React, { useEffect, useRef, useState } from "react";

const ITEMS = 20;

const IntersectionObserverExperiment: React.FC = () => {
  const [threshold, setThreshold] = useState(0.5);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSet((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (entry.isIntersecting) {
              next.add(idx);
            } else {
              next.delete(idx);
            }
          });
          return next;
        });
      },
      { root: container, threshold },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div className="grid items-start gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-4">
          우측 리스트를 스크롤하면 요소가 뷰포트에 진입할 때 하이라이트됩니다.{" "}
          <strong>threshold</strong>를 조절하면 진입 비율에 따라 감지 시점이
          달라집니다.
        </p>

        {/* Threshold slider */}
        <div className="mb-5">
          <div className="flex justify-between text-[11px] text-fg-muted mb-2">
            <span>Threshold</span>
            <span className="font-mono">{(threshold * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="w-full accent-(--accent) cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-fg-dimmed mt-1">
            <span>0% (가장자리 닿으면)</span>
            <span>100% (완전 진입)</span>
          </div>
        </div>

        {/* Mini-map */}
        <div className="p-3 rounded-xl border border-(--border-subtle) bg-(--bg-soft)">
          <div className="text-[11px] text-fg-muted mb-2">Visibility Map</div>
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: ITEMS }, (_, i) => (
              <div
                key={i}
                className={
                  "w-5 h-5 rounded text-[9px] flex items-center justify-center font-mono transition-colors duration-200 " +
                  (visibleSet.has(i)
                    ? "bg-(--accent) text-white"
                    : "bg-(--bg) text-fg-dimmed border border-(--border-subtle)")
                }
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="mt-2 text-[11px] text-fg-muted">
            감지됨:{" "}
            <span className="font-mono text-(--accent)">{visibleSet.size}</span>{" "}
            / {ITEMS}
          </div>
        </div>
      </div>

      {/* Scrollable area */}
      <div
        ref={containerRef}
        className="relative rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-y-auto"
        style={{ maxHeight: 320 }}
      >
        <div className="p-3 space-y-2 pt-8">
          {Array.from({ length: ITEMS }, (_, i) => {
            const isVisible = visibleSet.has(i);
            return (
              <div
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                data-idx={i}
                className={
                  "flex items-center gap-3 px-4 py-4 rounded-xl border transition-colors duration-300 " +
                  (isVisible
                    ? "border-(--accent)/40 bg-(--accent-subtle)"
                    : "border-(--border-subtle) bg-(--bg-soft)")
                }
              >
                <div
                  className={
                    "w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-mono shrink-0 transition-colors duration-300 " +
                    (isVisible
                      ? "bg-(--accent) text-white"
                      : "bg-(--bg) text-fg-muted border border-(--border-subtle)")
                  }
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    className={
                      "text-[13px] font-medium transition-colors " +
                      (isVisible ? "text-fg" : "text-fg-muted")
                    }
                  >
                    Element #{i + 1}
                  </div>
                  <div className="text-[11px] text-fg-dimmed">
                    {isVisible ? "✓ 뷰포트 내 감지됨" : "뷰포트 밖"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IntersectionObserverExperiment;
