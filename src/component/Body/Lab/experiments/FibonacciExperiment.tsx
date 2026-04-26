import React, { useEffect, useRef, useState } from "react";
import FibWorker from "../../../Body/Home/labs/worker/fibWorker?worker";

type FibWorkerResponse = { result: number; time: number };

const FibonacciExperiment: React.FC = () => {
  const [fibResult, setFibResult] = useState<number | null>(null);
  const [calcTime, setCalcTime] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [uiCounter, setUiCounter] = useState(0);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new FibWorker();
    workerRef.current = worker;
    worker.onmessage = (e: MessageEvent<FibWorkerResponse>) => {
      setFibResult(e.data.result);
      setCalcTime(e.data.time);
      setIsCalculating(false);
    };
    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, []);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setUiCounter((c) => (c + 2) % 360);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const run = () => {
    if (!workerRef.current) return;
    setIsCalculating(true);
    setFibResult(null);
    setCalcTime(null);
    workerRef.current.postMessage({ type: "CALCULATE_FIBONACCI", number: 45 });
  };

  return (
    <div className="grid items-center gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-5">
          버튼을 누르면 <strong>재귀 피보나치(45)</strong>를 Worker 스레드에서 계산합니다.
          메인 스레드였다면 우측 회전 애니메이션이 멈추겠지만, Worker 덕분에 UI는 부드럽게 유지됩니다.
        </p>
        <button
          onClick={run}
          disabled={isCalculating}
          className={
            "w-full inline-flex items-center justify-center gap-2 text-[13px] px-4 py-2.5 rounded-lg " +
            "border border-(--accent-border) bg-(--accent-subtle) text-fg " +
            "enabled:hover:bg-(--accent)/10 enabled:hover:border-(--accent) enabled:hover:-translate-y-0.5 " +
            "transition-all duration-300 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
          }
        >
          {isCalculating ? (
            <>
              <span className="h-3 w-3 rounded-full border border-current border-t-transparent animate-spin" />
              <span>계산 중...</span>
            </>
          ) : (
            "▶ 무거운 계산 시작 (Fib 45)"
          )}
        </button>
      </div>

      {/* Visualization */}
      <div className="relative flex flex-col items-center justify-center min-h-40 h-full rounded-2xl border border-(--border-subtle) bg-(--bg) px-5 py-4 overflow-hidden">
        <div className="absolute top-3 right-3 text-[10px] text-fg-muted">
          Main Thread UI
        </div>
        <div
          className="w-6 h-6 rounded-md mb-3 bg-[linear-gradient(135deg,var(--fg),var(--fg-muted))]"
          style={{ transform: `rotate(${uiCounter}deg)` }}
        />
        <span className="text-[11px] text-fg-muted">▲ UI Frame (Always Running)</span>
        <div className="w-full h-px my-4 bg-(--border-subtle)" />
        <div className="text-center">
          <div className="text-[11px] text-fg-muted">Result (Fib 45)</div>
          <div className="text-[24px] font-semibold my-1">
            {fibResult !== null ? fibResult.toLocaleString() : "-"}
          </div>
          <div className="text-[10px] text-fg-muted">
            {calcTime !== null ? `Time: ${calcTime.toFixed(1)}ms` : "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FibonacciExperiment;
