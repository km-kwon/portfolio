import React, { useEffect, useRef, useState } from "react";

type StageKey = "home" | "projects" | "detail" | "about" | "contact" | "resume" | "blog";

type Stage = { tx: number; ty: number; sc: number; rot: number; intensity: number };

const STAGES: Record<StageKey, Stage> = {
  home:     { tx:    0, ty:   0, sc: 1.00, rot:   0, intensity: 1.00 },
  projects: { tx: -160, ty:  40, sc: 0.85, rot: -12, intensity: 0.80 },
  detail:   { tx:  140, ty: -50, sc: 1.20, rot:  18, intensity: 1.10 },
  about:    { tx:  -80, ty:  80, sc: 1.05, rot:  28, intensity: 0.70 },
  contact:  { tx:    0, ty: -90, sc: 0.70, rot:  -8, intensity: 1.30 },
  resume:   { tx:  180, ty:  60, sc: 0.90, rot:  35, intensity: 0.65 },
  blog:     { tx: -200, ty: -60, sc: 1.10, rot: -22, intensity: 0.85 },
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const ORBITS = [
  { rx: 130, ry:  46, period:  9.0, phase: 0.0, size: 4.5, color: "var(--accent-hi)" },
  { rx: 220, ry:  78, period: 16.0, phase: 1.3, size: 6.0, color: "var(--accent)"    },
  { rx: 330, ry: 116, period: 26.0, phase: 2.4, size: 5.0, color: "var(--accent-hi)" },
  { rx: 460, ry: 162, period: 42.0, phase: 4.1, size: 7.5, color: "var(--accent)"    },
  { rx: 600, ry: 210, period: 64.0, phase: 5.7, size: 4.0, color: "var(--accent-hi)" },
];

const STARS = Array.from({ length: 120 }, (_, i) => ({
  x: (i * 263.4) % 1600,
  y: (i * 137.7) % 900,
  size: 0.4 + ((i * 7) % 10) / 14,
  twinkleSpeed: 0.4 + ((i * 11) % 10) / 12,
  twinklePhase: (i * 0.41) % (Math.PI * 2),
}));

interface WorldProps {
  page: StageKey;
  scrollY?: number;
  mouse?: { x: number; y: number };
}

export const World: React.FC<WorldProps> = ({ page, scrollY = 0, mouse = { x: 0, y: 0 } }) => {
  const target = STAGES[page] || STAGES.home;
  const camRef = useRef<Stage>({ ...target });
  const tRef = useRef<number>(0);
  const [, force] = useState(0);

  useEffect(() => {
    let alive = true;
    let last = performance.now();
    const loop = (now: number) => {
      if (!alive) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      tRef.current += dt;
      const c = camRef.current;
      camRef.current = {
        tx:        lerp(c.tx,        target.tx,        0.045),
        ty:        lerp(c.ty,        target.ty,        0.045),
        sc:        lerp(c.sc,        target.sc,        0.04),
        rot:       lerp(c.rot,       target.rot,       0.04),
        intensity: lerp(c.intensity, target.intensity, 0.04),
      };
      force((n) => (n + 1) % 1_000_000);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => { alive = false; };
  }, [target]);

  const t = tRef.current;
  const cam = camRef.current;

  const drift = {
    x: Math.sin(t * 0.18) * 14 + mouse.x * 28,
    y: Math.cos(t * 0.22) * 10 + mouse.y * 18,
    r: Math.sin(t * 0.08) * 2.5,
  };
  const scrollOffset = scrollY * 0.06;
  const tx = cam.tx + drift.x;
  const ty = cam.ty + drift.y - scrollOffset;
  const rot = cam.rot + drift.r + t * 1.2;
  const corePulse = 1 + Math.sin(t * 1.4) * 0.06;

  return (
    <>
      <div className="world-stage">
        <svg className="world-svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="var(--accent)" stopOpacity={0.55 * cam.intensity} />
              <stop offset="50%"  stopColor="var(--accent)" stopOpacity={0.10 * cam.intensity} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="coreInner">
              <stop offset="0%"   stopColor="var(--accent-hi)" stopOpacity={cam.intensity} />
              <stop offset="60%"  stopColor="var(--accent)"    stopOpacity={0.6 * cam.intensity} />
              <stop offset="100%" stopColor="var(--accent)"    stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="var(--accent)"    stopOpacity="0" />
              <stop offset="50%"  stopColor="var(--accent-hi)" stopOpacity={0.7 * cam.intensity} />
              <stop offset="100%" stopColor="var(--accent)"    stopOpacity="0" />
            </linearGradient>
            <filter id="blurSoft"><feGaussianBlur stdDeviation="3" /></filter>
            <filter id="blurStrong"><feGaussianBlur stdDeviation="8" /></filter>
          </defs>

          <g>
            {STARS.map((s, i) => {
              const tw = 0.3 + (Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.5 + 0.5) * 0.6;
              return (
                <circle key={i} cx={s.x + tx * 0.12} cy={s.y + ty * 0.12}
                  r={s.size} fill="var(--accent-hi)" opacity={tw * 0.55 * cam.intensity} />
              );
            })}
          </g>

          <circle cx={800 + tx} cy={450 + ty}
            r={420 * cam.sc * corePulse} fill="url(#coreGlow)" />

          <g opacity={0.14 * cam.intensity} stroke="var(--accent)" strokeWidth="0.5" fill="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={i}
                x1={(i / 9) * 1600 + tx * 0.15}
                y1={0}
                x2={(i / 9) * 1600 + tx * 0.45}
                y2={900} />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={"h" + i}
                x1={0}
                y1={(i / 6) * 900 + ty * 0.15}
                x2={1600}
                y2={(i / 6) * 900 + ty * 0.45} />
            ))}
          </g>

          <g transform={`translate(${800 + tx}, ${450 + ty}) scale(${cam.sc}) rotate(${rot})`}>
            <g transform={`rotate(${t * 6})`}>
              <ellipse cx="0" cy="0" rx="600" ry="210" stroke="url(#ringGrad)" strokeWidth="1.2" fill="none" />
            </g>
            <g transform={`rotate(${-t * 3})`}>
              <ellipse cx="0" cy="0" rx="460" ry="162" stroke="var(--accent)" strokeWidth="0.7" fill="none"
                opacity={0.3 * cam.intensity} strokeDasharray="2 10" />
            </g>
            <g transform={`rotate(${t * 4})`}>
              <ellipse cx="0" cy="0" rx="330" ry="116" stroke="var(--accent)" strokeWidth="0.8" fill="none"
                opacity={0.4 * cam.intensity} strokeDasharray="6 4" />
            </g>

            {ORBITS.map((o, i) => (
              <ellipse key={"og" + i} cx="0" cy="0" rx={o.rx} ry={o.ry}
                stroke="var(--accent)" strokeWidth="0.4" fill="none"
                opacity={0.18 * cam.intensity} strokeDasharray="1 3" />
            ))}

            {ORBITS.map((o, i) => {
              const angle = o.phase + (t * Math.PI * 2) / o.period;
              const x = Math.cos(angle) * o.rx;
              const y = Math.sin(angle) * o.ry;
              const trailLen = 18;
              const trailPts = Array.from({ length: trailLen }, (_, k) => {
                const a = angle - (k / trailLen) * 0.6;
                return [Math.cos(a) * o.rx, Math.sin(a) * o.ry] as const;
              });
              const pulse = 1 + Math.sin(t * (1.0 + i * 0.3) + i) * 0.18;
              return (
                <g key={"orb" + i}>
                  <polyline
                    points={trailPts.map((p) => `${p[0]},${p[1]}`).join(" ")}
                    fill="none"
                    stroke={o.color}
                    strokeWidth="1.2"
                    opacity={0.45 * cam.intensity}
                    strokeLinecap="round" />
                  <circle cx={x} cy={y} r={o.size * 4} fill={o.color}
                    opacity={0.3 * cam.intensity} filter="url(#blurStrong)" />
                  <circle cx={x} cy={y} r={o.size * pulse} fill={o.color}
                    opacity={0.95 * cam.intensity} />
                </g>
              );
            })}

            <g transform={`rotate(${-t * 18}) scale(${corePulse})`} opacity={0.95 * cam.intensity}>
              <polygon points="0,-90 78,-26 48,68 -48,68 -78,-26"
                stroke="var(--accent-hi)" strokeWidth="1.4" fill="var(--accent-soft)" />
              <polygon points="0,-90 -78,-26 -48,68 48,68 78,-26"
                stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.6" />
              <line x1="0" y1="-90" x2="0" y2="68" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5" />
              <line x1="-78" y1="-26" x2="78" y2="-26" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5" />
              <line x1="-48" y1="68" x2="48" y2="68" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
            </g>

            <circle cx="0" cy="0" r={36 * corePulse} fill="url(#coreInner)" filter="url(#blurSoft)" />
            <circle cx="0" cy="0" r={5 + Math.sin(t * 3) * 1.2}
              fill="var(--accent-hi)" opacity={cam.intensity} />

            {[0, 1, 2].map((k) => {
              const phase = (t * 0.6 + k / 3) % 1;
              const r = 80 + phase * 480;
              const op = (1 - phase) * 0.35 * cam.intensity;
              return (
                <circle key={"pulse" + k} cx="0" cy="0" r={r}
                  stroke="var(--accent-hi)" strokeWidth="0.8" fill="none" opacity={op} />
              );
            })}

            {Array.from({ length: 50 }).map((_, i) => {
              const seed = (i * 137.5) % 1;
              const seed2 = (i * 89.3) % 1;
              const baseX = (seed - 0.5) * 1500;
              const baseY = (seed2 - 0.5) * 850;
              const drag = ((i * 17) % 10) / 10;
              const px = baseX + Math.sin(t * (0.2 + drag * 0.3) + i) * 14;
              const py = baseY + Math.cos(t * (0.18 + drag * 0.2) + i * 1.3) * 10;
              const size = 0.5 + ((i * 7) % 10) / 12;
              const tw = 0.3 + (Math.sin(t * 1.2 + i * 0.7) * 0.5 + 0.5) * 0.4;
              return (
                <circle key={"p" + i} cx={px} cy={py} r={size}
                  fill="var(--accent)" opacity={tw * 0.4} />
              );
            })}
          </g>
        </svg>
      </div>
      <div className="world-grain" />
      <div className="world-vignette" />
    </>
  );
};

export default World;
