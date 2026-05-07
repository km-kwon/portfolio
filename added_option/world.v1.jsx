// 3D world — orbiting solar-system style scene with continuous motion
// Each page = a "stage" with target camera position + scene mood

const STAGES = {
  home:     { tx:    0, ty:   0, sc: 1.00, rot:   0, intensity: 1.00 },
  projects: { tx: -160, ty:  40, sc: 0.85, rot: -12, intensity: 0.80 },
  detail:   { tx:  140, ty: -50, sc: 1.20, rot:  18, intensity: 1.10 },
  about:    { tx:  -80, ty:  80, sc: 1.05, rot:  28, intensity: 0.70 },
  contact:  { tx:    0, ty: -90, sc: 0.70, rot:  -8, intensity: 1.30 },
  resume:   { tx:  180, ty:  60, sc: 0.90, rot:  35, intensity: 0.65 },
  blog:     { tx: -200, ty: -60, sc: 1.10, rot: -22, intensity: 0.85 },
};

const lerp = (a, b, t) => a + (b - a) * t;

// Orbits: { radiusX, radiusY, period (sec), phase, size, color, label, glow }
const ORBITS = [
  { rx: 130, ry:  46, period:  9.0, phase: 0.0, size: 4.5, color: "var(--accent-hi)", label: "01" },
  { rx: 220, ry:  78, period: 16.0, phase: 1.3, size: 6.0, color: "var(--accent)",    label: "02" },
  { rx: 330, ry: 116, period: 26.0, phase: 2.4, size: 5.0, color: "var(--accent-hi)", label: "03" },
  { rx: 460, ry: 162, period: 42.0, phase: 4.1, size: 7.5, color: "var(--accent)",    label: "04" },
  { rx: 600, ry: 210, period: 64.0, phase: 5.7, size: 4.0, color: "var(--accent-hi)", label: "05" },
];

// Distant background stars — fixed seeded positions
const STARS = [...Array(120)].map((_, i) => ({
  x: ((i * 263.4) % 1600),
  y: ((i * 137.7) % 900),
  size: 0.4 + ((i * 7) % 10) / 14,
  twinkleSpeed: 0.4 + ((i * 11) % 10) / 12,
  twinklePhase: (i * 0.41) % (Math.PI * 2),
}));

const World = ({ page, scrollY = 0, mouse = { x: 0, y: 0 } }) => {
  const target = STAGES[page] || STAGES.home;
  const camRef = React.useRef({ ...target });
  const tRef = React.useRef(0);
  const [, force] = React.useState(0);

  // Single rAF loop drives both camera lerp + continuous time
  React.useEffect(() => {
    let alive = true;
    let last = performance.now();
    const loop = (now) => {
      if (!alive) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      tRef.current += dt;

      const c = camRef.current;
      camRef.current = {
        tx: lerp(c.tx, target.tx, 0.045),
        ty: lerp(c.ty, target.ty, 0.045),
        sc: lerp(c.sc, target.sc, 0.04),
        rot: lerp(c.rot, target.rot, 0.04),
        intensity: lerp(c.intensity, target.intensity, 0.04),
      };
      force((n) => (n + 1) % 1000000);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => { alive = false; };
  }, [target]);

  const t = tRef.current;
  const cam = camRef.current;

  // Idle drift + scroll + mouse parallax
  const drift = {
    x: Math.sin(t * 0.18) * 14 + mouse.x * 28,
    y: Math.cos(t * 0.22) * 10 + mouse.y * 18,
    r: Math.sin(t * 0.08) * 2.5,
  };
  const scrollOffset = scrollY * 0.06;
  const tx = cam.tx + drift.x;
  const ty = cam.ty + drift.y - scrollOffset;
  const rot = cam.rot + drift.r + t * 1.2; // whole system slowly turns

  // Pulsing core
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

          {/* Twinkling background stars */}
          <g>
            {STARS.map((s, i) => {
              const tw = 0.3 + (Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.5 + 0.5) * 0.6;
              return (
                <circle key={i} cx={s.x + tx * 0.12} cy={s.y + ty * 0.12}
                  r={s.size} fill="var(--accent-hi)" opacity={tw * 0.55 * cam.intensity} />
              );
            })}
          </g>

          {/* Ambient glow halo */}
          <circle cx={800 + tx} cy={450 + ty}
            r={420 * cam.sc * corePulse} fill="url(#coreGlow)" />

          {/* Far back parallax grid */}
          <g opacity={0.14 * cam.intensity} stroke="var(--accent)" strokeWidth="0.5" fill="none">
            {[...Array(10)].map((_, i) => (
              <line key={i}
                x1={(i / 9) * 1600 + tx * 0.15}
                y1={0}
                x2={(i / 9) * 1600 + tx * 0.45}
                y2={900} />
            ))}
            {[...Array(7)].map((_, i) => (
              <line key={"h" + i}
                x1={0}
                y1={(i / 6) * 900 + ty * 0.15}
                x2={1600}
                y2={(i / 6) * 900 + ty * 0.45} />
            ))}
          </g>

          {/* Main world group — camera transform */}
          <g transform={`translate(${800 + tx}, ${450 + ty}) scale(${cam.sc}) rotate(${rot})`}>
            {/* Outer ring with rotating shimmer */}
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

            {/* Static orbit guide ellipses */}
            {ORBITS.map((o, i) => (
              <ellipse key={"og" + i} cx="0" cy="0" rx={o.rx} ry={o.ry}
                stroke="var(--accent)" strokeWidth="0.4" fill="none"
                opacity={0.18 * cam.intensity} strokeDasharray="1 3" />
            ))}

            {/* Orbiting bodies — angle = phase + t * (2π/period) */}
            {ORBITS.map((o, i) => {
              const angle = o.phase + (t * Math.PI * 2) / o.period;
              const x = Math.cos(angle) * o.rx;
              const y = Math.sin(angle) * o.ry;
              const trailLen = 18;
              // Comet-like motion trail
              const trailPts = [...Array(trailLen)].map((_, k) => {
                const a = angle - (k / trailLen) * 0.6;
                return [Math.cos(a) * o.rx, Math.sin(a) * o.ry];
              });
              const pulse = 1 + Math.sin(t * (1.0 + i * 0.3) + i) * 0.18;
              return (
                <g key={"orb" + i}>
                  {/* trail */}
                  <polyline
                    points={trailPts.map(p => `${p[0]},${p[1]}`).join(" ")}
                    fill="none"
                    stroke={o.color}
                    strokeWidth="1.2"
                    opacity={0.45 * cam.intensity}
                    strokeLinecap="round" />
                  {/* glow */}
                  <circle cx={x} cy={y} r={o.size * 4} fill={o.color}
                    opacity={0.3 * cam.intensity} filter="url(#blurStrong)" />
                  {/* body */}
                  <circle cx={x} cy={y} r={o.size * pulse} fill={o.color}
                    opacity={0.95 * cam.intensity} />
                  {/* tiny moon for the larger ones */}
                  {i === 1 && (() => {
                    const ma = angle * 4;
                    const mx = x + Math.cos(ma) * 16;
                    const my = y + Math.sin(ma) * 6;
                    return <circle cx={mx} cy={my} r="1.6" fill="var(--accent-hi)" opacity={cam.intensity} />;
                  })()}
                  {i === 3 && (() => {
                    const ma = angle * 3;
                    const mx = x + Math.cos(ma) * 22;
                    const my = y + Math.sin(ma) * 8;
                    return <circle cx={mx} cy={my} r="1.8" fill="var(--accent-hi)" opacity={cam.intensity} />;
                  })()}
                </g>
              );
            })}

            {/* Icosahedron core — counter-rotating + breathing */}
            <g transform={`rotate(${-t * 18}) scale(${corePulse})`} opacity={0.95 * cam.intensity}>
              <polygon points="0,-90 78,-26 48,68 -48,68 -78,-26"
                stroke="var(--accent-hi)" strokeWidth="1.4" fill="var(--accent-soft)" />
              <polygon points="0,-90 -78,-26 -48,68 48,68 78,-26"
                stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.6" />
              <line x1="0" y1="-90" x2="0" y2="68" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5" />
              <line x1="-78" y1="-26" x2="78" y2="-26" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5" />
              <line x1="-48" y1="68" x2="48" y2="68" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
            </g>

            {/* Inner core glow + bright spot */}
            <circle cx="0" cy="0" r={36 * corePulse} fill="url(#coreInner)"
              filter="url(#blurSoft)" />
            <circle cx="0" cy="0" r={5 + Math.sin(t * 3) * 1.2}
              fill="var(--accent-hi)" opacity={cam.intensity} />

            {/* Pulse rings emitting from core */}
            {[0, 1, 2].map((k) => {
              const phase = (t * 0.6 + k / 3) % 1;
              const r = 80 + phase * 480;
              const op = (1 - phase) * 0.35 * cam.intensity;
              return (
                <circle key={"pulse" + k} cx="0" cy="0" r={r}
                  stroke="var(--accent-hi)" strokeWidth="0.8" fill="none" opacity={op} />
              );
            })}

            {/* Data shooting lines — periodic radial dashes */}
            {[0, 1, 2, 3, 4, 5].map((k) => {
              const a = (t * 0.4 + k * Math.PI / 3) % (Math.PI * 2);
              const r0 = 60;
              const r1 = 240 + Math.sin(t * 2 + k) * 40;
              const x1 = Math.cos(a) * r0, y1 = Math.sin(a) * r0;
              const x2 = Math.cos(a) * r1, y2 = Math.sin(a) * r1;
              return (
                <line key={"d" + k} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="var(--accent-hi)" strokeWidth="1.2"
                  opacity={0.5 * cam.intensity} strokeLinecap="round" />
              );
            })}

            {/* Floating panels — fade in/out with slow phase */}
            {[
              { x: -540, y: -60, w: 130, h: 78, label: "PROJECTS", off: 0 },
              { x:  410, y: -60, w: 130, h: 78, label: "SKILLS",   off: 1.5 },
              { x:  -65, y: -260, w: 130, h: 78, label: "ABOUT",   off: 3.0 },
              { x:  -65, y:  180, w: 130, h: 78, label: "BLOG",    off: 4.5 },
            ].map((p, i) => {
              const fade = 0.45 + Math.sin(t * 0.4 + p.off) * 0.18;
              const yBob = Math.sin(t * 0.6 + p.off) * 4;
              return (
                <g key={i} opacity={fade * cam.intensity} transform={`translate(0, ${yBob})`}>
                  <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="3"
                    stroke="var(--accent)" strokeWidth="0.8" fill="var(--accent-soft)" opacity="0.4" />
                  <line x1={p.x + 12} y1={p.y + 16} x2={p.x + 60} y2={p.y + 16}
                    stroke="var(--accent)" strokeWidth="1.2" opacity="0.7" />
                  <line x1={p.x + 12} y1={p.y + 30} x2={p.x + 90} y2={p.y + 30}
                    stroke="var(--fg-muted)" strokeWidth="0.6" opacity="0.4" />
                  <line x1={p.x + 12} y1={p.y + 42} x2={p.x + 70} y2={p.y + 42}
                    stroke="var(--fg-muted)" strokeWidth="0.6" opacity="0.4" />
                  <line x1={p.x + 12} y1={p.y + 54} x2={p.x + 100} y2={p.y + 54}
                    stroke="var(--fg-muted)" strokeWidth="0.6" opacity="0.3" />
                  <text x={p.x + 12} y={p.y + 70} fill="var(--accent-hi)" fontSize="6"
                    fontFamily="Geist Mono" letterSpacing="1.2">{p.label}</text>
                </g>
              );
            })}

            {/* Drifting particle cloud */}
            {[...Array(50)].map((_, i) => {
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

window.World = World;
window.STAGES = STAGES;
