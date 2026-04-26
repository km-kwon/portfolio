import React, { useState, useRef, useCallback } from "react";

interface Item {
  id: number;
  color: string;
}

const COLORS = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-indigo-400",
  "bg-teal-400",
];

const initialItems: Item[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  color: COLORS[i],
}));

const FlipAnimationExperiment: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const containerRef = useRef<HTMLDivElement>(null);
  const rectsRef = useRef<Map<number, DOMRect>>(new Map());

  const captureFirst = useCallback(() => {
    if (!containerRef.current) return;
    const map = new Map<number, DOMRect>();
    const children = containerRef.current.children;
    for (let i = 0; i < children.length; i++) {
      const el = children[i] as HTMLElement;
      const id = Number(el.dataset.id);
      map.set(id, el.getBoundingClientRect());
    }
    rectsRef.current = map;
  }, []);

  const playFlip = useCallback(() => {
    if (!containerRef.current) return;
    const children = containerRef.current.children;

    for (let i = 0; i < children.length; i++) {
      const el = children[i] as HTMLElement;
      const id = Number(el.dataset.id);
      const firstRect = rectsRef.current.get(id);
      if (!firstRect) continue;

      const lastRect = el.getBoundingClientRect();

      const dx = firstRect.left - lastRect.left;
      const dy = firstRect.top - lastRect.top;

      if (dx === 0 && dy === 0) continue;

      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.style.transition = "none";

      requestAnimationFrame(() => {
        el.style.transition = "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
        el.style.transform = "";
      });
    }
  }, []);

  const shuffle = useCallback(() => {
    captureFirst();
    setItems((prev) => {
      const arr = [...prev];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    });
    requestAnimationFrame(() => playFlip());
  }, [captureFirst, playFlip]);

  const reverse = useCallback(() => {
    captureFirst();
    setItems((prev) => [...prev].reverse());
    requestAnimationFrame(() => playFlip());
  }, [captureFirst, playFlip]);

  const rotate = useCallback(() => {
    captureFirst();
    setItems((prev) => [...prev.slice(1), prev[0]]);
    requestAnimationFrame(() => playFlip());
  }, [captureFirst, playFlip]);

  const reset = useCallback(() => {
    captureFirst();
    setItems(initialItems);
    requestAnimationFrame(() => playFlip());
  }, [captureFirst, playFlip]);

  return (
    <div className="grid items-center gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-4">
          FLIP은 <strong>First → Last → Invert → Play</strong> 단계로 레이아웃
          변경을 부드럽게 애니메이션합니다. 브라우저의 reflow를 최소화하면서
          60fps를 유지할 수 있습니다.
        </p>

        <div className="flex gap-2 mb-2">
          <button
            onClick={shuffle}
            className="flex-1 text-[12px] px-3 py-2 rounded-lg border border-(--accent-border) bg-(--accent-subtle) text-(--accent) cursor-pointer transition-all duration-200 hover:brightness-110"
          >
            셔플
          </button>
          <button
            onClick={reverse}
            className="flex-1 text-[12px] px-3 py-2 rounded-lg border border-(--accent-border) bg-(--accent-subtle) text-(--accent) cursor-pointer transition-all duration-200 hover:brightness-110"
          >
            뒤집기
          </button>
          <button
            onClick={rotate}
            className="flex-1 text-[12px] px-3 py-2 rounded-lg border border-(--accent-border) bg-(--accent-subtle) text-(--accent) cursor-pointer transition-all duration-200 hover:brightness-110"
          >
            한칸 밀기
          </button>
        </div>
        <button
          onClick={reset}
          className="w-full text-[11px] px-3 py-1.5 rounded-lg border border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer"
        >
          초기화
        </button>
      </div>

      {/* Visualization */}
      <div
        className="relative rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-hidden p-4"
        style={{ minHeight: 180 }}
      >
        <div className="absolute top-3 right-3 text-[10px] text-fg-muted z-10">
          버튼을 눌러 보세요
        </div>

        <div ref={containerRef} className="grid grid-cols-4 gap-2 mt-6">
          {items.map((item) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`${item.color} rounded-lg flex items-center justify-center text-white text-[12px] font-semibold shadow-sm`}
              style={{ height: 52 }}
            >
              {item.id + 1}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FlipAnimationExperiment;
