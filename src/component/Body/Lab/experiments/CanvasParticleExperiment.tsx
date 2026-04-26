import React, { useRef, useEffect, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

const CanvasParticleExperiment: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const frameRef = useRef<number>(0);
  const fpsRef = useRef<number[]>([]);
  const lastTimeRef = useRef(0);

  const [particleCount, setParticleCount] = useState(0);
  const [fps, setFps] = useState(60);
  const [maxParticles, setMaxParticles] = useState(200);
  const [trailLength, setTrailLength] = useState(0.15);
  const [isPaused, setIsPaused] = useState(false);

  const spawnParticles = useCallback(
    (mx: number, my: number) => {
      const count = 3;
      for (let i = 0; i < count; i++) {
        if (particlesRef.current.length >= maxParticles) {
          particlesRef.current.shift();
        }

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;
        particlesRef.current.push({
          x: mx,
          y: my,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 60 + Math.random() * 60,
          size: Math.random() * 3 + 1.5,
          hue: (Date.now() * 0.05 + Math.random() * 60) % 360,
        });
      }
    },
    [maxParticles]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);

    const animate = (time: number) => {
      if (!isPaused) {
        const rect = canvas.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;

        // FPS calculation
        if (lastTimeRef.current > 0) {
          const delta = time - lastTimeRef.current;
          fpsRef.current.push(1000 / delta);
          if (fpsRef.current.length > 30) fpsRef.current.shift();
          const avg =
            fpsRef.current.reduce((a, b) => a + b, 0) /
            fpsRef.current.length;
          setFps(Math.round(avg));
        }
        lastTimeRef.current = time;

        // Spawn
        if (mouseRef.current.active) {
          spawnParticles(mouseRef.current.x, mouseRef.current.y);
        }

        // Clear with trail
        ctx.fillStyle = `rgba(0, 0, 0, ${trailLength})`;
        ctx.fillRect(0, 0, w, h);

        // Update & draw
        const alive: Particle[] = [];
        for (const p of particlesRef.current) {
          p.life -= 1 / p.maxLife;
          if (p.life <= 0) continue;

          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.02; // gravity
          p.vx *= 0.99;
          p.vy *= 0.99;

          const alpha = p.life * 0.8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha})`;
          ctx.fill();

          alive.push(p);
        }
        particlesRef.current = alive;
        setParticleCount(alive.length);
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, [isPaused, trailLength, spawnParticles]);

  const reset = () => {
    particlesRef.current = [];
    setParticleCount(0);
  };

  return (
    <div className="grid items-start gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-4">
          캔버스 위에서 <strong>마우스를 움직여</strong> 파티클을 생성하세요.
          requestAnimationFrame 기반으로 60fps를 유지하며 렌더링합니다.
        </p>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-[11px] text-fg-muted mb-1">
              <span>최대 파티클 수</span>
              <span className="font-mono">{maxParticles}</span>
            </div>
            <input
              type="range" min={50} max={500} step={50} value={maxParticles}
              onChange={(e) => setMaxParticles(Number(e.target.value))}
              className="w-full accent-(--accent) cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-fg-muted mb-1">
              <span>트레일 강도</span>
              <span className="font-mono">{trailLength.toFixed(2)}</span>
            </div>
            <input
              type="range" min={0.02} max={0.5} step={0.01} value={trailLength}
              onChange={(e) => setTrailLength(Number(e.target.value))}
              className="w-full accent-(--accent) cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-fg-dimmed mt-0.5">
              <span>긴 꼬리</span><span>빠른 소멸</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={
                "flex-1 text-[11px] px-3 py-1.5 rounded-lg border cursor-pointer transition-all duration-200 " +
                (isPaused
                  ? "border-(--accent-border) bg-(--accent-subtle) text-(--accent)"
                  : "border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover)")
              }
            >
              {isPaused ? "재개" : "일시정지"}
            </button>
            <button
              onClick={reset}
              className="flex-1 text-[11px] px-3 py-1.5 rounded-lg border border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer"
            >
              초기화
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mt-4">
          <div className="flex-1 px-3 py-2 rounded-lg border border-(--border-subtle) bg-(--bg-soft) text-center">
            <div className="text-[10px] text-fg-dimmed">파티클</div>
            <div className="text-[14px] font-semibold text-(--accent)">{particleCount}</div>
          </div>
          <div className="flex-1 px-3 py-2 rounded-lg border border-(--border-subtle) bg-(--bg-soft) text-center">
            <div className="text-[10px] text-fg-dimmed">FPS</div>
            <div className={`text-[14px] font-semibold ${fps >= 50 ? "text-(--accent)" : fps >= 30 ? "text-yellow-400" : "text-red-400"}`}>
              {fps}
            </div>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative rounded-2xl border border-(--border-subtle) overflow-hidden" style={{ height: 280 }}>
        <canvas
          ref={canvasRef}
          className="w-full h-full bg-black cursor-crosshair"
          style={{ display: "block" }}
        />
        <div className="absolute top-3 right-3 text-[10px] text-white/50 pointer-events-none">
          마우스를 움직여 보세요
        </div>
      </div>
    </div>
  );
};

export default CanvasParticleExperiment;
