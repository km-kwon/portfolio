import React, { useState, useRef, useCallback, useEffect } from "react";

type Strategy = "none" | "debounce" | "throttle";

interface CallLog {
  time: number;
  value: string;
}

const DELAY = 300;

const DebounceThrottleExperiment: React.FC = () => {
  const [strategy, setStrategy] = useState<Strategy>("none");
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CallLog[]>([]);
  const [callCount, setCallCount] = useState<Record<Strategy, number>>({
    none: 0,
    debounce: 0,
    throttle: 0,
  });

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const throttleLock = useRef(false);
  const startTime = useRef(Date.now());
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs (container only, not page)
  useEffect(() => {
    const container = logsContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [logs]);

  const recordCall = useCallback(
    (value: string) => {
      const elapsed = Date.now() - startTime.current;
      setLogs((prev) => [...prev.slice(-30), { time: elapsed, value }]);
      setCallCount((prev) => ({ ...prev, [strategy]: prev[strategy] + 1 }));
    },
    [strategy]
  );

  const handleInput = useCallback(
    (value: string) => {
      setInput(value);

      if (strategy === "none") {
        recordCall(value);
        return;
      }

      if (strategy === "debounce") {
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        debounceTimer.current = setTimeout(() => recordCall(value), DELAY);
        return;
      }

      if (strategy === "throttle") {
        if (throttleLock.current) return;
        throttleLock.current = true;
        recordCall(value);
        setTimeout(() => {
          throttleLock.current = false;
        }, DELAY);
      }
    },
    [strategy, recordCall]
  );

  const reset = () => {
    setInput("");
    setLogs([]);
    setCallCount({ none: 0, debounce: 0, throttle: 0 });
    startTime.current = Date.now();
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    throttleLock.current = false;
  };

  const switchStrategy = (s: Strategy) => {
    reset();
    setStrategy(s);
  };

  const maxCount = Math.max(...Object.values(callCount), 1);

  return (
    <div className="grid items-start gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-4">
          아래 입력란에 빠르게 타이핑해 보세요. 전략에 따라{" "}
          <strong>API 호출(=콜백 실행) 횟수</strong>가 어떻게 달라지는지 확인합니다.
        </p>

        {/* Strategy selector */}
        <div className="flex gap-2 mb-4">
          {(["none", "debounce", "throttle"] as Strategy[]).map((s) => (
            <button
              key={s}
              onClick={() => switchStrategy(s)}
              className={
                "flex-1 text-[12px] px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 capitalize " +
                (strategy === s
                  ? s === "none"
                    ? "border-red-400/40 bg-red-500/10 text-red-400"
                    : s === "debounce"
                      ? "border-blue-400/40 bg-blue-500/10 text-blue-400"
                      : "border-(--accent-border) bg-(--accent-subtle) text-(--accent)"
                  : "border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover) hover:text-fg")
              }
            >
              {s === "none" ? "None" : s}
              {s !== "none" && (
                <span className="text-[10px] opacity-60 ml-1">{DELAY}ms</span>
              )}
            </button>
          ))}
        </div>

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="여기에 빠르게 타이핑하세요..."
          className="w-full px-4 py-2.5 rounded-lg border border-(--border-subtle) bg-(--bg) text-[13px] text-fg placeholder:text-fg-dimmed outline-none focus:border-(--accent)/40 transition-colors"
        />

        {/* Count comparison bars */}
        <div className="mt-5 space-y-2">
          {(["none", "debounce", "throttle"] as Strategy[]).map((s) => {
            const count = callCount[s];
            const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const color =
              s === "none"
                ? "bg-red-400"
                : s === "debounce"
                  ? "bg-blue-400"
                  : "bg-(--accent)";
            return (
              <div key={s} className="flex items-center gap-3">
                <span className="text-[11px] text-fg-muted w-16 capitalize">
                  {s === "none" ? "None" : s}
                </span>
                <div className="flex-1 h-4 rounded-full bg-(--bg-soft) overflow-hidden">
                  <div
                    className={`h-full rounded-full ${color} transition-all duration-300`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-[12px] font-mono text-fg-muted w-8 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        <button
          onClick={reset}
          className="mt-3 w-full text-[11px] px-3 py-1.5 rounded-lg border border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer"
        >
          초기화
        </button>
      </div>

      {/* Call log visualization */}
      <div className="relative flex flex-col rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-hidden" style={{ height: 280 }}>
        <div className="absolute top-3 right-3 text-[10px] text-fg-muted z-10">
          콜백 실행 로그
        </div>

        <div ref={logsContainerRef} className="flex-1 overflow-y-auto p-4 pt-8 space-y-1">
          {logs.length === 0 ? (
            <div className="flex items-center justify-center h-full text-[13px] text-fg-muted">
              타이핑하면 콜백 호출이 여기에 표시됩니다
            </div>
          ) : (
            logs.map((log, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[11px] font-mono animate-[fadeInUp_0.2s_ease-out]"
              >
                <span className="text-fg-dimmed w-14 text-right shrink-0">
                  {log.time}ms
                </span>
                <span className="w-px h-3 bg-(--border-subtle)" />
                <span className="text-fg-muted truncate">
                  → &quot;{log.value}&quot;
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DebounceThrottleExperiment;
