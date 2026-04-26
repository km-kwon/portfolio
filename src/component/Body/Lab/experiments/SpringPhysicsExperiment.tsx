import React, { useState, useRef, useEffect, useCallback } from "react";

const SpringPhysicsExperiment: React.FC = () => {
  const [stiffness, setStiffness] = useState(180);
  const [damping, setDamping] = useState(12);
  const [displayX, setDisplayX] = useState(0);
  const [displayVel, setDisplayVel] = useState(0);
  const [displayTarget, setDisplayTarget] = useState(0);

  const xRef = useRef(0);
  const velocityRef = useRef(0);
  const targetRef = useRef(0);
  const frameRef = useRef<number>(0);
  const runningRef = useRef(false);
  const stiffnessRef = useRef(stiffness);
  const dampingRef = useRef(damping);
  const containerRef = useRef<HTMLDivElement>(null);

  stiffnessRef.current = stiffness;
  dampingRef.current = damping;

  const simulate = useCallback(() => {
    const dt = 1 / 60;
    const springForce = -stiffnessRef.current * (xRef.current - targetRef.current);
    const dampingForce = -dampingRef.current * velocityRef.current;
    const acceleration = springForce + dampingForce;

    velocityRef.current += acceleration * dt;
    xRef.current += velocityRef.current * dt;

    // Snap to target when close enough
    const dist = Math.abs(xRef.current - targetRef.current);
    const vel = Math.abs(velocityRef.current);

    if (dist < 0.1 && vel < 0.1) {
      xRef.current = targetRef.current;
      velocityRef.current = 0;
      runningRef.current = false;
      setDisplayX(targetRef.current);
      setDisplayVel(0);
      return;
    }

    setDisplayX(xRef.current);
    setDisplayVel(velocityRef.current);

    frameRef.current = requestAnimationFrame(simulate);
  }, []);

  const startLoop = useCallback(() => {
    if (runningRef.current) return;
    runningRef.current = true;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(simulate);
  }, [simulate]);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    targetRef.current = relX * 120;
    setDisplayTarget(targetRef.current);
    startLoop();
  };

  const reset = () => {
    targetRef.current = 0;
    velocityRef.current = 0;
    setDisplayTarget(0);
    startLoop();
  };

  // Round display value — avoid -0.0 flickering
  const roundDisplay = (v: number) => {
    const r = Math.round(v * 10) / 10;
    return Object.is(r, -0) ? 0 : r;
  };

  return (
    <div className="grid items-start gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-4">
          우측 영역을 클릭하면 공이 스프링 물리로 이동합니다.
          <strong> Stiffness</strong>와 <strong>Damping</strong>을 조절해 보세요.
        </p>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-[11px] text-fg-muted mb-1">
              <span>Stiffness (강성)</span>
              <span className="font-mono">{stiffness}</span>
            </div>
            <input
              type="range" min={20} max={500} value={stiffness}
              onChange={(e) => setStiffness(Number(e.target.value))}
              className="w-full accent-(--accent) cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-fg-dimmed mt-0.5">
              <span>느슨</span><span>단단</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-fg-muted mb-1">
              <span>Damping (감쇠)</span>
              <span className="font-mono">{damping}</span>
            </div>
            <input
              type="range" min={1} max={40} value={damping}
              onChange={(e) => setDamping(Number(e.target.value))}
              className="w-full accent-(--accent) cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-fg-dimmed mt-0.5">
              <span>탄성적</span><span>점성적</span>
            </div>
          </div>

          <button
            onClick={reset}
            className="w-full text-[11px] px-3 py-1.5 rounded-lg border border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer"
          >
            중앙으로 리셋
          </button>
        </div>

        {/* Presets */}
        <div className="flex gap-2 mt-3">
          {[
            { label: "부드러운", s: 80, d: 10 },
            { label: "탄력적", s: 300, d: 8 },
            { label: "단단한", s: 500, d: 30 },
          ].map((p) => (
            <button
              key={p.label}
              onClick={() => { setStiffness(p.s); setDamping(p.d); }}
              className="flex-1 text-[11px] px-2 py-1.5 rounded-lg border border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover) hover:text-fg transition-all duration-200 cursor-pointer"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Visualization */}
      <div
        ref={containerRef}
        onClick={handleClick}
        className="relative rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-hidden cursor-crosshair select-none"
        style={{ height: 280 }}
      >
        <div className="absolute top-3 right-3 text-[10px] text-fg-muted">
          클릭하여 이동
        </div>

        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-(--border-subtle) opacity-50" />

        {/* Target indicator */}
        <div
          className="absolute top-1/2 w-3 h-3 rounded-full border-2 border-(--accent)/30 -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
          style={{ left: `calc(50% + ${displayTarget}px)` }}
        />

        {/* Spring ball */}
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `calc(50% + ${displayX}px)` }}
        >
          <div className="w-8 h-8 rounded-full bg-(--accent) shadow-[0_0_16px_rgba(32,201,151,0.4)]" />
        </div>

        {/* Spring line visualization */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <line
            x1="50%"
            y1="50%"
            x2={`calc(50% + ${displayX}px)`}
            y2="50%"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.4"
          />
        </svg>

        {/* Stats */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-3 text-[10px] font-mono text-fg-dimmed">
          <span>pos: {roundDisplay(displayX)}px</span>
          <span>vel: {roundDisplay(displayVel)}</span>
          <span>target: {roundDisplay(displayTarget)}px</span>
        </div>
      </div>
    </div>
  );
};

export default SpringPhysicsExperiment;
