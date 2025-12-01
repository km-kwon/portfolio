// src/workers/fibWorker.ts

/// <reference lib="webworker" />

// 타입 선언 (선택이지만 있으면 더 깔끔)
type FibRequestMessage = {
  type: "CALCULATE_FIBONACCI";
  number: number;
};

type FibResponseMessage = {
  result: number;
  time: number;
};

function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

self.onmessage = (e: MessageEvent<FibRequestMessage>) => {
  const { type, number } = e.data;
  if (type !== "CALCULATE_FIBONACCI") return;

  const start = performance.now();
  const result = fib(number); // 🔥 여기서 실제 무거운 계산
  const end = performance.now();

  const msg: FibResponseMessage = {
    result,
    time: end - start,
  };

  // 워커 → 메인 스레드
  (self as DedicatedWorkerGlobalScope).postMessage(msg);
};

// 모듈로 인식시키기 위한 빈 export
export {};
