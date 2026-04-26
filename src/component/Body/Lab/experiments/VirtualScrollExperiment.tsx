import React, { useState, useRef, useCallback } from "react";

const ITEM_HEIGHT = 32;
const VIEWPORT_HEIGHT = 180;
const TOTAL_ITEMS = 10_000;

const VirtualScrollExperiment: React.FC = () => {
  const [mode, setMode] = useState<"idle" | "naive" | "virtual">("idle");
  const [naiveTime, setNaiveTime] = useState<number | null>(null);
  const [virtualTime, setVirtualTime] = useState<number | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const runNaive = useCallback(() => {
    setMode("naive");
    setNaiveTime(null);
    const start = performance.now();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setNaiveTime(performance.now() - start));
    });
  }, []);

  const runVirtual = useCallback(() => {
    setMode("virtual");
    setVirtualTime(null);
    setScrollTop(0);
    const start = performance.now();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVirtualTime(performance.now() - start));
    });
  }, []);

  const reset = useCallback(() => {
    setMode("idle");
    setNaiveTime(null);
    setVirtualTime(null);
    setScrollTop(0);
  }, []);

  const startIdx = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleCount = Math.ceil(VIEWPORT_HEIGHT / ITEM_HEIGHT) + 2;
  const endIdx = Math.min(startIdx + visibleCount, TOTAL_ITEMS);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className="grid items-center gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-5">
          <strong>{TOTAL_ITEMS.toLocaleString()}개</strong> 항목을 렌더링합니다.
          Naive DOM은 모든 요소를 한번에 생성하지만, Virtual Scroll은{" "}
          <strong>뷰포트 내 요소만</strong> 렌더링합니다.
        </p>

        <div className="flex gap-2 mb-3">
          <button
            onClick={runNaive}
            disabled={mode === "naive"}
            className={
              "flex-1 text-[12px] px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 " +
              "disabled:opacity-60 disabled:cursor-not-allowed " +
              (mode === "naive"
                ? "border-red-400/40 bg-red-500/10 text-red-400"
                : "border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover) hover:text-fg")
            }
          >
            Naive DOM
          </button>
          <button
            onClick={runVirtual}
            disabled={mode === "virtual"}
            className={
              "flex-1 text-[12px] px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 " +
              "disabled:opacity-60 disabled:cursor-not-allowed " +
              (mode === "virtual"
                ? "border-(--accent-border) bg-(--accent-subtle) text-(--accent)"
                : "border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover) hover:text-fg")
            }
          >
            Virtual Scroll
          </button>
        </div>

        <button
          onClick={reset}
          disabled={mode === "idle"}
          className={
            "w-full text-[11px] px-3 py-1.5 rounded-lg border border-(--border-subtle) transition-all duration-200 cursor-pointer " +
            (mode === "idle"
              ? "text-fg-dimmed opacity-40 cursor-not-allowed"
              : "text-fg-muted hover:text-fg hover:border-(--border-hover)")
          }
        >
          초기화
        </button>
      </div>

      {/* Visualization — fixed height to prevent layout shift */}
      <div className="relative flex flex-col rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-hidden" style={{ height: VIEWPORT_HEIGHT + 60 }}>
        <div className="absolute top-3 right-3 text-[10px] text-fg-muted z-10">
          {mode === "idle"
            ? "대기 중"
            : mode === "naive"
              ? `Naive · ${TOTAL_ITEMS.toLocaleString()} DOM nodes`
              : `Virtual · ${endIdx - startIdx} DOM nodes`}
        </div>

        {mode === "idle" && (
          <div className="flex-1 flex items-center justify-center text-[13px] text-fg-muted">
            왼쪽 버튼을 눌러 비교해 보세요
          </div>
        )}

        {mode === "naive" && (
          <div className="overflow-y-auto flex-1" style={{ maxHeight: VIEWPORT_HEIGHT }}>
            {Array.from({ length: TOTAL_ITEMS }, (_, i) => (
              <div
                key={i}
                className="flex items-center px-4 text-[12px] text-fg-muted border-b border-(--border-subtle)/30"
                style={{ height: ITEM_HEIGHT }}
              >
                <span className="w-12 text-fg-dimmed font-mono text-[10px]">{i + 1}</span>
                <span>Row Item #{i + 1}</span>
              </div>
            ))}
          </div>
        )}

        {mode === "virtual" && (
          <div
            ref={scrollRef}
            className="overflow-y-auto flex-1"
            style={{ maxHeight: VIEWPORT_HEIGHT }}
            onScroll={handleScroll}
          >
            <div style={{ height: TOTAL_ITEMS * ITEM_HEIGHT, position: "relative" }}>
              {Array.from({ length: endIdx - startIdx }, (_, i) => {
                const idx = startIdx + i;
                return (
                  <div
                    key={idx}
                    className="absolute left-0 right-0 flex items-center px-4 text-[12px] text-fg-muted border-b border-(--border-subtle)/30"
                    style={{ height: ITEM_HEIGHT, top: idx * ITEM_HEIGHT }}
                  >
                    <span className="w-12 text-fg-dimmed font-mono text-[10px]">{idx + 1}</span>
                    <span>Row Item #{idx + 1}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(naiveTime !== null || virtualTime !== null) && (
          <div className="flex gap-3 px-4 py-3 border-t border-(--border-subtle) bg-(--bg-soft)">
            {naiveTime !== null && (
              <div className="flex-1 text-center">
                <div className="text-[10px] text-fg-dimmed">Naive</div>
                <div className="text-[14px] font-semibold text-red-400">{naiveTime.toFixed(1)}ms</div>
              </div>
            )}
            {virtualTime !== null && (
              <div className="flex-1 text-center">
                <div className="text-[10px] text-fg-dimmed">Virtual</div>
                <div className="text-[14px] font-semibold text-(--accent)">{virtualTime.toFixed(1)}ms</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualScrollExperiment;
