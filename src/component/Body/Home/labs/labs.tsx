// src/WorkerLab.tsx
import React, { useEffect, useRef, useState } from "react";
import FibWorker from "./worker/fibWorker?worker";

// 공통 스타일 토큰 (다른 섹션이랑 맞춤)
const cardBase =
  "rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) p-5 " +
  "shadow-[0_14px_34px_rgba(0,0,0,0.32)] " +
  "transition-transform transition-shadow transition-colors duration-200 ease-out " +
  "hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.5)] hover:border-white/20 " +
  "[html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] " +
  "[html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]";

const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5";

const labelClass = "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";
const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";
const sectionSubTitleClass = "text-[13px] text-fg-muted leading-relaxed";

const chipClass =
  "text-[11px] px-2.5 py-1 rounded-full border border-(--border-subtle) text-fg-muted";

type FibWorkerResponse = {
  result: number;
  time: number;
};

export const WorkerLab: React.FC = () => {
  const [fibResult, setFibResult] = useState<number | null>(null);
  const [calcTime, setCalcTime] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [uiCounter, setUiCounter] = useState(0);
  const workerRef = useRef<Worker | null>(null);

  // 1. Web Worker 초기화
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

  // 2. UI 애니메이션 루프 (메인 스레드 생존 확인용)
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setUiCounter((c) => (c + 2) % 360);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // 3. 작업 실행 함수
  const runWorkerTask = () => {
    if (!workerRef.current) return;
    setIsCalculating(true);
    setFibResult(null);
    setCalcTime(null);

    workerRef.current.postMessage({
      type: "CALCULATE_FIBONACCI",
      number: 45, // 🔥 데모용으로 적당히 하드한 값
    });
  };

  return (
    <section id="lab" className="mb-14">
      {/* 섹션 헤더 */}
      <div className={sectionHeaderBase}>
        <div>
          <p className={labelClass}>Web Worker Lab</p>
          <h2 className={sectionTitleClass}>스레드 분리 실험</h2>
        </div>
        <p className={sectionSubTitleClass}>
          무거운 계산을 Worker로 분리하여 메인 스레드(UI)를 보호합니다.
        </p>
      </div>

      {/* 카드 바디 */}
      <div className={cardBase}>
        <div className="grid items-center gap-5 md:grid-cols-2">
          {/* 좌측: 컨트롤 패널 */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-[15px] font-medium">Fibonacci Calculator</h3>
              <span className={chipClass}>Worker Thread</span>
            </div>

            <p className="text-[13px] text-fg-muted leading-[1.7] mb-5">
              &apos;계산 시작&apos;을 누르면{" "}
              <strong>DP가 아닌 피보나치 수열(45번째)</strong>을 계산합니다.
              메인 스레드였다면 화면이 멈췄겠지만, Web Worker 덕분에 우측
              애니메이션은 멈추지 않습니다.
            </p>

            <button
              onClick={runWorkerTask}
              disabled={isCalculating}
              className={
                "w-full inline-flex items-center justify-center gap-2 text-[13px] px-4 py-2.5 rounded-full " +
                "border border-(--border-subtle) " +
                "bg-(--bg-elevated) text-fg " +
                "enabled:hover:bg-(--bg-soft) enabled:hover:border-white/20 enabled:hover:-translate-y-0.5 " +
                "transition-all duration-200 ease-out " +
                "cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              }
            >
              {isCalculating ? (
                <>
                  {/* 로딩 스피너 */}
                  <span className="inline-flex h-4 w-4 items-center justify-center">
                    <span className="h-3 w-3 rounded-full border border-current border-t-transparent animate-spin" />
                  </span>
                  <span>계산 중...</span>
                </>
              ) : (
                "▶ 무거운 계산 시작 (Fib 45)"
              )}
            </button>
          </div>

          {/* 우측: 시각화 패널 */}
          <div className="relative flex flex-col items-center justify-center min-h-[160px] h-full rounded-2xl border border-(--border-subtle) bg-(--bg) px-5 py-4 overflow-hidden">
            <div className="absolute top-3 right-3 text-[10px] text-fg-muted">
              Main Thread UI
            </div>

            {/* 메인 스레드가 멈추지 않음을 보여주는 회전체 */}
            <div
              className="w-6 h-6 rounded-md mb-3 bg-[linear-gradient(135deg,var(--fg),var(--fg-muted))]"
              style={{ transform: `rotate(${uiCounter}deg)` }}
            />
            <span className="text-[11px] text-fg-muted">
              ▲ UI Frame (Always Running)
            </span>

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
      </div>
    </section>
  );
};
