// 3D world v2 — 7 distinct visual languages, cross-faded
// Each page has its own scene COMPONENT (not just camera). Scenes share the same
// SVG canvas + camera, but render different graphics. Crossfade by opacity when
// page changes. Mouse parallax + scroll dolly + planet-click navigation.

const STAGES = {
  home:     { tx:    0, ty:   0, sc: 1.00, rot:   0, intensity: 1.00 },
  projects: { tx: -120, ty:  20, sc: 0.92, rot:  -8, intensity: 0.85 },
  detail:   { tx:   80, ty: -30, sc: 1.40, rot:  12, intensity: 1.15 },
  about:    { tx:  -40, ty:  60, sc: 1.05, rot:  18, intensity: 0.75 },
  contact:  { tx:    0, ty: -50, sc: 0.65, rot:  -6, intensity: 1.30 },
  resume:   { tx:  120, ty:  40, sc: 0.95, rot:  22, intensity: 0.70 },
  blog:     { tx: -160, ty: -40, sc: 1.10, rot: -16, intensity: 0.85 },
  lab:      { tx:   60, ty:  20, sc: 1.00, rot:   4, intensity: 0.95 },
};

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Deterministic pseudo-random
const seedRand = (i, salt = 0) => {
  const x = Math.sin((i + salt) * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

// ─────────────────────────────────────────────────────────────────────────────
// Scene: HOME — Solar system with orbits + planets (clickable)
// ─────────────────────────────────────────────────────────────────────────────
const ORBITS = [
  { id: "projects", rx: 150, ry:  52, period:  9.0, phase: 0.0, size: 5.5, color: "var(--accent-hi)", label: "PROJECTS" },
  { id: "about",    rx: 240, ry:  84, period: 16.0, phase: 1.3, size: 7.0, color: "var(--accent)",    label: "ABOUT" },
  { id: "blog",     rx: 350, ry: 122, period: 26.0, phase: 2.4, size: 6.0, color: "var(--accent-hi)", label: "BLOG" },
  { id: "resume",   rx: 470, ry: 164, period: 42.0, phase: 4.1, size: 8.5, color: "var(--accent)",    label: "RESUME" },
  { id: "contact",  rx: 600, ry: 210, period: 64.0, phase: 5.7, size: 5.0, color: "var(--accent-hi)", label: "CONTACT" },
];

const SceneHome = ({ t, intensity, onPlanetClick, hoverOrbit, setHoverOrbit }) => {
  const corePulse = 1 + Math.sin(t * 1.4) * 0.06;
  return (
    <g>
      {/* Orbital paths */}
      {ORBITS.map((o, i) => (
        <ellipse key={"og" + i} cx="0" cy="0" rx={o.rx} ry={o.ry}
          stroke="var(--accent)" strokeWidth={hoverOrbit === o.id ? 1.4 : 0.4} fill="none"
          opacity={(hoverOrbit === o.id ? 0.6 : 0.18) * intensity}
          strokeDasharray={hoverOrbit === o.id ? "0" : "1 3"} />
      ))}

      {/* Outer aurora ring (decorative) */}
      <g transform={`rotate(${t * 6})`}>
        <ellipse cx="0" cy="0" rx="600" ry="210" stroke="url(#ringGrad)" strokeWidth="1.2" fill="none" />
      </g>
      <g transform={`rotate(${-t * 3})`}>
        <ellipse cx="0" cy="0" rx="460" ry="162" stroke="var(--accent)" strokeWidth="0.7" fill="none"
          opacity={0.3 * intensity} strokeDasharray="2 10" />
      </g>

      {/* Planets with trails */}
      {ORBITS.map((o, i) => {
        const angle = o.phase + (t * Math.PI * 2) / o.period;
        const x = Math.cos(angle) * o.rx;
        const y = Math.sin(angle) * o.ry;
        const trailLen = 22;
        const trailPts = Array.from({ length: trailLen }, (_, k) => {
          const a = angle - (k / trailLen) * 0.7;
          return [Math.cos(a) * o.rx, Math.sin(a) * o.ry];
        });
        const isHover = hoverOrbit === o.id;
        const pulse = 1 + Math.sin(t * (1.0 + i * 0.3) + i) * 0.18;
        return (
          <g key={"orb" + i}>
            <polyline
              points={trailPts.map((p) => `${p[0]},${p[1]}`).join(" ")}
              fill="none" stroke={o.color} strokeWidth="1.2"
              opacity={(isHover ? 0.85 : 0.45) * intensity} strokeLinecap="round" />
            <circle cx={x} cy={y} r={o.size * 4} fill={o.color}
              opacity={0.3 * intensity} filter="url(#blurStrong)" />
            <circle cx={x} cy={y} r={o.size * (isHover ? 1.6 : 1) * pulse} fill={o.color}
              opacity={0.95 * intensity}
              style={{ cursor: "pointer", pointerEvents: "auto" }}
              onClick={() => onPlanetClick && onPlanetClick(o.id)}
              onMouseEnter={() => setHoverOrbit && setHoverOrbit(o.id)}
              onMouseLeave={() => setHoverOrbit && setHoverOrbit(null)}
            />
            {isHover && (
              <text x={x + o.size * 2 + 8} y={y - o.size * 2}
                fill="var(--accent-hi)" fontSize="10" fontFamily="Geist Mono"
                letterSpacing="2" opacity={intensity}>
                → {o.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Icosahedron core */}
      <g transform={`rotate(${-t * 18}) scale(${corePulse})`} opacity={0.95 * intensity}>
        <polygon points="0,-90 78,-26 48,68 -48,68 -78,-26"
          stroke="var(--accent-hi)" strokeWidth="1.4" fill="var(--accent-soft)" />
        <polygon points="0,-90 -78,-26 -48,68 48,68 78,-26"
          stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.6" />
        <line x1="0" y1="-90" x2="0" y2="68" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5" />
        <line x1="-78" y1="-26" x2="78" y2="-26" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5" />
        <line x1="-48" y1="68" x2="48" y2="68" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
      </g>
      <circle cx="0" cy="0" r={36 * corePulse} fill="url(#coreInner)" filter="url(#blurSoft)" />
      <circle cx="0" cy="0" r={5 + Math.sin(t * 3) * 1.2} fill="var(--accent-hi)" opacity={intensity} />

      {/* Pulse rings from core */}
      {[0, 1, 2].map((k) => {
        const phase = (t * 0.6 + k / 3) % 1;
        const r = 80 + phase * 480;
        const op = (1 - phase) * 0.35 * intensity;
        return (
          <circle key={"pulse" + k} cx="0" cy="0" r={r}
            stroke="var(--accent-hi)" strokeWidth="0.8" fill="none" opacity={op} />
        );
      })}
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Scene: PROJECTS — Crystal lattice (hex grid of nodes)
// ─────────────────────────────────────────────────────────────────────────────
const SceneProjects = ({ t, intensity }) => {
  // Hex lattice nodes
  const nodes = [];
  const cols = 9, rows = 6;
  const sx = 90, sy = 78;
  for (let r = -Math.floor(rows / 2); r <= Math.floor(rows / 2); r++) {
    for (let c = -Math.floor(cols / 2); c <= Math.floor(cols / 2); c++) {
      const offsetX = (r % 2) * (sx / 2);
      const x = c * sx + offsetX;
      const y = r * sy;
      const dist = Math.sqrt(x * x + y * y);
      if (dist > 480) continue;
      const seed = seedRand(r * 100 + c, 7);
      nodes.push({ x, y, seed, dist });
    }
  }

  // Connecting edges (only nearby pairs)
  const edges = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < sx * 1.1) edges.push([nodes[i], nodes[j], d]);
    }
  }

  return (
    <g>
      {/* Edges */}
      {edges.map(([a, b, d], i) => {
        const wave = Math.sin(t * 0.8 + (a.seed + b.seed) * 6.28) * 0.5 + 0.5;
        const op = (1 - d / (sx * 1.1)) * 0.5 * intensity * (0.4 + wave * 0.6);
        return (
          <line key={"e" + i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke="var(--accent)" strokeWidth="0.5" opacity={op} />
        );
      })}

      {/* Nodes — diamond shapes pulsing */}
      {nodes.map((n, i) => {
        const localT = t * (0.6 + n.seed * 0.8) + n.seed * 6.28;
        const pulse = 0.5 + (Math.sin(localT) * 0.5 + 0.5) * 0.6;
        const size = 4 + n.seed * 4;
        const fadeByDist = clamp(1 - n.dist / 480, 0, 1);
        const op = pulse * fadeByDist * intensity;
        return (
          <g key={"n" + i} transform={`translate(${n.x}, ${n.y}) rotate(45)`}>
            <rect x={-size} y={-size} width={size * 2} height={size * 2}
              stroke="var(--accent-hi)" strokeWidth="0.8" fill="var(--accent)"
              fillOpacity={op * 0.4} opacity={op} />
            <rect x={-size * 0.4} y={-size * 0.4} width={size * 0.8} height={size * 0.8}
              fill="var(--accent-hi)" opacity={op} />
          </g>
        );
      })}

      {/* Sweep line — moving vertical scan */}
      <line
        x1={Math.sin(t * 0.4) * 480} y1={-300}
        x2={Math.sin(t * 0.4) * 480} y2={300}
        stroke="var(--accent-hi)" strokeWidth="0.8" opacity={0.6 * intensity}
        strokeDasharray="2 6" />
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Scene: DETAIL — Zoom-in surface, data stream flowing through one node
// ─────────────────────────────────────────────────────────────────────────────
const SceneDetail = ({ t, intensity }) => {
  return (
    <g>
      {/* Concentric data rings */}
      {[0, 1, 2, 3, 4].map((k) => {
        const r = 80 + k * 60;
        const speed = (k % 2 === 0 ? 1 : -1) * (0.6 + k * 0.15);
        const ticks = 24 + k * 4;
        return (
          <g key={"ring" + k} transform={`rotate(${t * speed * 30})`}>
            <circle cx="0" cy="0" r={r} stroke="var(--accent)" strokeWidth="0.4"
              fill="none" opacity={0.25 * intensity} />
            {Array.from({ length: ticks }).map((_, i) => {
              const a = (i / ticks) * Math.PI * 2;
              const x1 = Math.cos(a) * r;
              const y1 = Math.sin(a) * r;
              const x2 = Math.cos(a) * (r + 4);
              const y2 = Math.sin(a) * (r + 4);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="var(--accent-hi)" strokeWidth="0.6"
                  opacity={(0.3 + ((i % 3) === 0 ? 0.5 : 0)) * intensity} />
              );
            })}
          </g>
        );
      })}

      {/* Data packets flowing along radial lines */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const flow = (t * 0.5 + i * 0.13) % 1;
        const r = 60 + flow * 360;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <g key={"dp" + i}>
            <line x1={Math.cos(angle) * 60} y1={Math.sin(angle) * 60}
              x2={Math.cos(angle) * 420} y2={Math.sin(angle) * 420}
              stroke="var(--accent)" strokeWidth="0.3" opacity={0.15 * intensity} />
            <rect x={x - 3} y={y - 1} width="6" height="2"
              transform={`rotate(${(angle * 180) / Math.PI} ${x} ${y})`}
              fill="var(--accent-hi)" opacity={(1 - flow) * intensity} />
          </g>
        );
      })}

      {/* Center nucleus */}
      <circle cx="0" cy="0" r="50" fill="url(#coreInner)" filter="url(#blurSoft)" />
      <circle cx="0" cy="0" r={12 + Math.sin(t * 4) * 2}
        fill="var(--accent-hi)" opacity={intensity} />

      {/* Crosshair */}
      <g opacity={0.5 * intensity} stroke="var(--accent-hi)" strokeWidth="0.5">
        <line x1="-460" y1="0" x2="-100" y2="0" />
        <line x1="100" y1="0" x2="460" y2="0" />
        <line x1="0" y1="-300" x2="0" y2="-100" />
        <line x1="0" y1="100" x2="0" y2="300" />
      </g>

      {/* Corner brackets */}
      {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sy], i) => (
        <g key={"br" + i} transform={`translate(${sx * 380}, ${sy * 220})`}>
          <line x1={-sx * 24} y1={0} x2="0" y2={0} stroke="var(--accent)" strokeWidth="0.8" opacity={0.6 * intensity} />
          <line x1={0} y1={-sy * 24} x2={0} y2={0} stroke="var(--accent)" strokeWidth="0.8" opacity={0.6 * intensity} />
        </g>
      ))}
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Scene: ABOUT — Constellation (timeline as connected stars)
// ─────────────────────────────────────────────────────────────────────────────
const CONSTELLATION = [
  { x: -380, y:  120, label: "2020" },
  { x: -240, y:  -40, label: "2022" },
  { x:  -80, y:   90, label: "2023" },
  { x:   90, y:  -70, label: "2024" },
  { x:  260, y:   30, label: "2025" },
  { x:  380, y: -130, label: "2026" },
];

const SceneAbout = ({ t, intensity }) => {
  return (
    <g>
      {/* Connecting constellation lines (animated dash) */}
      {CONSTELLATION.slice(0, -1).map((p, i) => {
        const next = CONSTELLATION[i + 1];
        return (
          <line key={"cl" + i} x1={p.x} y1={p.y} x2={next.x} y2={next.y}
            stroke="var(--accent-hi)" strokeWidth="0.8"
            opacity={0.5 * intensity}
            strokeDasharray="3 4"
            strokeDashoffset={-t * 12} />
        );
      })}

      {/* Faint background stars */}
      {Array.from({ length: 30 }).map((_, i) => {
        const seed = seedRand(i, 41);
        const seed2 = seedRand(i, 73);
        const x = (seed - 0.5) * 1100;
        const y = (seed2 - 0.5) * 600;
        const tw = 0.3 + (Math.sin(t * (0.5 + seed) + i) * 0.5 + 0.5) * 0.5;
        return (
          <circle key={"bs" + i} cx={x} cy={y} r={0.6 + seed * 0.8}
            fill="var(--accent-hi)" opacity={tw * 0.5 * intensity} />
        );
      })}

      {/* Constellation stars (highlighted) */}
      {CONSTELLATION.map((p, i) => {
        const tw = 0.7 + (Math.sin(t * 1.6 + i * 0.8) * 0.5 + 0.5) * 0.3;
        return (
          <g key={"cs" + i} transform={`translate(${p.x}, ${p.y})`}>
            {/* Star burst */}
            <g opacity={tw * intensity}>
              <line x1={-12} y1={0} x2={12} y2={0} stroke="var(--accent-hi)" strokeWidth="0.5" />
              <line x1={0} y1={-12} x2={0} y2={12} stroke="var(--accent-hi)" strokeWidth="0.5" />
            </g>
            <circle cx={0} cy={0} r="14" fill="var(--accent)" opacity={0.25 * intensity} filter="url(#blurSoft)" />
            <circle cx={0} cy={0} r={3 + tw} fill="var(--accent-hi)" opacity={intensity} />
            <text x={10} y={-12} fill="var(--accent-hi)" fontSize="9"
              fontFamily="Geist Mono" letterSpacing="1.5" opacity={0.7 * intensity}>
              {p.label}
            </text>
          </g>
        );
      })}
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Scene: CONTACT — Letter / postcard typography (italic serif drift)
// ─────────────────────────────────────────────────────────────────────────────
const CONTACT_GREETINGS = [
  "hello", "안녕하세요", "let's talk", "say hi",
  "@", "→", "let's", "build something",
  "coffee?", "remote ok", "Seoul, KR", "open to roles",
  "let me know", "✉", "kmkwon@", "soon",
];

const SceneContact = ({ t, intensity }) => {
  return (
    <g>
      {/* Soft horizon glow band — postcard sky feel */}
      <rect x={-800} y={60} width={1600} height={2}
        fill="var(--accent)" opacity={0.4 * intensity} />
      <rect x={-800} y={62} width={1600} height={1}
        fill="var(--accent-hi)" opacity={0.3 * intensity} />

      {/* Drifting greeting words — 3 floating rows */}
      {[
        { row: -200, speed: 14, ws: 0,    italic: true },
        { row:  -50, speed: 22, ws: 0.45, italic: true },
        { row:  220, speed: 18, ws: 0.20, italic: true },
      ].map((r, ri) => {
        const offset = (t * r.speed + r.ws * 800) % 1400;
        return (
          <g key={"row" + ri}>
            {Array.from({ length: 6 }).map((_, i) => {
              const baseX = -700 + i * 280;
              const x = ((baseX - offset + 2100) % 1400) - 700;
              const fade = 1 - Math.abs(x) / 700;
              const idx = (ri * 6 + i) % CONTACT_GREETINGS.length;
              const isAccent = i % 3 === 0;
              return (
                <text key={i} x={x} y={r.row}
                  fill={isAccent ? "var(--accent-hi)" : "var(--accent)"}
                  fontFamily="Fraunces"
                  fontStyle={r.italic ? "italic" : "normal"}
                  fontSize={isAccent ? 38 : 26}
                  fontWeight={isAccent ? 500 : 400}
                  textAnchor="middle"
                  opacity={fade * (isAccent ? 0.75 : 0.45) * intensity}>
                  {CONTACT_GREETINGS[idx]}
                </text>
              );
            })}
          </g>
        );
      })}

      {/* Signature word — large center "say hi" with cursor */}
      <g opacity={0.85 * intensity}>
        <text x={0} y={90} fill="var(--accent-hi)"
          fontFamily="Fraunces" fontStyle="italic" fontSize="120"
          fontWeight={400} textAnchor="middle" letterSpacing="-2">
          say hi
        </text>
        {/* Underline doodle */}
        <path d="M -160 105 Q -80 120, 0 110 T 160 105"
          stroke="var(--accent)" strokeWidth="2" fill="none"
          opacity={0.6} strokeLinecap="round" />
        {/* Blinking cursor */}
        <rect x={150} y={20} width={3} height={70}
          fill="var(--accent-hi)"
          opacity={Math.floor(t * 1.6) % 2 === 0 ? 1 : 0} />
      </g>

      {/* Floating "@" symbols — like envelope marks */}
      {Array.from({ length: 9 }).map((_, i) => {
        const seed = seedRand(i, 211);
        const x = (seedRand(i, 17) - 0.5) * 1300;
        const baseY = (seedRand(i, 89) - 0.5) * 600;
        const drift = Math.sin(t * (0.3 + seed * 0.4) + i) * 14;
        const tw = 0.5 + (Math.sin(t * 1.2 + i) * 0.5 + 0.5) * 0.5;
        return (
          <text key={"at" + i} x={x} y={baseY + drift}
            fill="var(--accent)" fontFamily="Fraunces"
            fontStyle="italic" fontSize={14 + seed * 10}
            opacity={tw * 0.4 * intensity}>
            @
          </text>
        );
      })}

      {/* Punctuation marks scattered */}
      {[
        { c: "—",  x: -480, y: -260 },
        { c: ".",  x:  410, y:   80 },
        { c: ",",  x:  500, y: -200 },
        { c: "✦",  x: -540, y:  240 },
        { c: "✦",  x:  520, y:  280 },
        { c: "→",  x:  280, y: -280 },
      ].map((p, i) => {
        const tw = 0.6 + (Math.sin(t * 1.4 + i * 1.3) * 0.5 + 0.5) * 0.4;
        return (
          <text key={"punct" + i} x={p.x} y={p.y}
            fill="var(--accent-hi)" fontFamily="Fraunces"
            fontStyle="italic" fontSize="32"
            textAnchor="middle"
            opacity={tw * 0.5 * intensity}>
            {p.c}
          </text>
        );
      })}

      {/* Subtle handwriting line */}
      <path d="M -300 -340 Q -150 -360, 0 -350 T 300 -345"
        stroke="var(--accent)" strokeWidth="0.8" fill="none"
        opacity={0.3 * intensity}
        strokeDasharray="2 6" strokeDashoffset={-t * 18} />
      <path d="M -260 360 Q -100 340, 60 350 T 320 345"
        stroke="var(--accent)" strokeWidth="0.8" fill="none"
        opacity={0.3 * intensity}
        strokeDasharray="2 6" strokeDashoffset={t * 18} />
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Scene: LAB — Terminal / code playground (matrix-style code drift)
// ─────────────────────────────────────────────────────────────────────────────
const LAB_TOKENS = [
  "const", "=>", "useState", "// experimenting",
  "> npm run dev", "{ ... }", "async", "await",
  "[ok]", "[err]", "// TODO", "import * as",
  "0x7C5CFF", "ƒ()", "// hack", "<canvas/>",
  "shader.vert", "GLSL", "0.03ms", "rAF",
  "if (alive)", "log()", "// 🧪", "experiment#42",
  "WebGL2", "playground", "draft", "WIP",
];

const SceneLab = ({ t, intensity }) => {
  // 5 vertical columns of code text scrolling at different speeds (matrix-rain feel)
  return (
    <g>
      {/* Background code rain — 5 columns */}
      {[0, 1, 2, 3, 4].map((col) => {
        const colX = (col - 2) * 220;
        const speed = 28 + col * 9;
        const offset = (t * speed) % 100;
        return (
          <g key={"col" + col} transform={`translate(${colX}, 0)`}>
            {Array.from({ length: 11 }).map((_, i) => {
              const y = -440 + i * 100 + offset;
              const wrappedY = ((y + 440) % 1100) - 440;
              const fade = 1 - Math.abs(wrappedY) / 440;
              const idx = (col * 11 + i) % LAB_TOKENS.length;
              const isHead = i === 0; // brightest at top of trail
              return (
                <text key={i}
                  x={0} y={wrappedY}
                  fill={isHead ? "var(--accent-hi)" : "var(--accent)"}
                  fontFamily="Geist Mono"
                  fontSize={11 + (i % 3) * 2}
                  letterSpacing="1"
                  textAnchor="middle"
                  opacity={fade * (isHead ? 0.9 : 0.5) * intensity}>
                  {LAB_TOKENS[idx]}
                </text>
              );
            })}
          </g>
        );
      })}

      {/* Terminal-style center panel */}
      <g opacity={0.9 * intensity}>
        {/* Window chrome */}
        <rect x={-280} y={-90} width={560} height={180}
          fill="var(--bg-elev)" fillOpacity="0.85"
          stroke="var(--accent)" strokeWidth="0.8" rx="6" />
        <rect x={-280} y={-90} width={560} height={24}
          fill="var(--accent)" fillOpacity="0.12"
          stroke="var(--accent)" strokeWidth="0.5" rx="6" />
        {/* Traffic lights */}
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={-264 + i * 14} cy={-78} r={3.5}
            fill="var(--accent-hi)"
            opacity={0.4 + (i === 1 ? 0.4 : 0)} />
        ))}
        <text x={0} y={-74} fill="var(--accent-hi)"
          fontFamily="Geist Mono" fontSize="9" letterSpacing="2"
          textAnchor="middle" opacity="0.7">
          /lab — playground.tsx
        </text>

        {/* Code lines */}
        <g fontFamily="Geist Mono" fontSize="12">
          <text x={-256} y={-40} fill="var(--fg-dim)" opacity="0.5">01</text>
          <text x={-220} y={-40} fill="var(--accent-hi)">const</text>
          <text x={-176} y={-40} fill="var(--fg)">  experiment</text>
          <text x={-78}  y={-40} fill="var(--accent)">=</text>
          <text x={-60}  y={-40} fill="var(--accent-hi)">async</text>
          <text x={-12}  y={-40} fill="var(--fg)">() {`=>`} {`{`}</text>

          <text x={-256} y={-16} fill="var(--fg-dim)" opacity="0.5">02</text>
          <text x={-220} y={-16} fill="var(--fg-muted)">  // {Math.floor(t * 100) % 1000}ms tick</text>

          <text x={-256} y={  8} fill="var(--fg-dim)" opacity="0.5">03</text>
          <text x={-220} y={  8} fill="var(--fg)">  await</text>
          <text x={-176} y={  8} fill="var(--accent-hi)">draw</text>
          <text x={-138} y={  8} fill="var(--fg)">(canvas);</text>

          <text x={-256} y={ 32} fill="var(--fg-dim)" opacity="0.5">04</text>
          <text x={-220} y={ 32} fill="var(--accent)">{`}`};</text>

          <text x={-256} y={ 64} fill="var(--fg-dim)" opacity="0.5">→</text>
          <text x={-220} y={ 64} fill="var(--accent-hi)">
            [ok] {(Math.sin(t) * 0.5 + 0.5).toFixed(3)}ms
          </text>
          {/* Blinking cursor */}
          <rect x={-110} y={56} width={7} height={11}
            fill="var(--accent-hi)"
            opacity={Math.floor(t * 1.8) % 2 === 0 ? 1 : 0} />
        </g>
      </g>

      {/* Scan line sweeping vertically */}
      <line
        x1={-700} y1={((t * 80) % 700) - 350}
        x2={ 700} y2={((t * 80) % 700) - 350}
        stroke="var(--accent-hi)" strokeWidth="0.5"
        opacity={0.3 * intensity} />

      {/* Corner brackets — "experimental zone" framing */}
      {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sy], i) => (
        <g key={"br" + i} transform={`translate(${sx * 480}, ${sy * 320})`}
          opacity={0.5 * intensity}>
          <line x1={-sx * 28} y1={0} x2={0} y2={0}
            stroke="var(--accent)" strokeWidth="1" />
          <line x1={0} y1={-sy * 28} x2={0} y2={0}
            stroke="var(--accent)" strokeWidth="1" />
        </g>
      ))}

      {/* Tag label */}
      <text x={-470} y={-310} fill="var(--accent-hi)"
        fontFamily="Geist Mono" fontSize="10" letterSpacing="3"
        opacity={0.7 * intensity}>
        ◇ /LAB · WIP
      </text>
    </g>
  );
};

// (legacy helper kept for any leftover refs)
const _legacyDistantStars = ({ t, intensity }) => {
  return (
    <g>
      {Array.from({ length: 18 }).map((_, i) => {
        const seed = seedRand(i, 31);
        const x = (seed - 0.5) * 1200;
        const y = 100 - seed * 80;
        const tw = 0.4 + (Math.sin(t * 2 + i) * 0.5 + 0.5) * 0.6;
        return (
          <circle key={"ds" + i} cx={x} cy={y} r={0.8}
            fill="var(--accent-hi)" opacity={tw * 0.7 * intensity} />
        );
      })}
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Scene: RESUME — Network/dependency graph (force-directed look)
// ─────────────────────────────────────────────────────────────────────────────
const NETWORK_NODES = [
  { x:    0, y:    0, size: 12, label: "ME" },
  { x: -260, y: -120, size:  8, label: "FE" },
  { x:  220, y: -160, size:  8, label: "SYS" },
  { x:  300, y:   80, size:  8, label: "SEC" },
  { x: -180, y:  140, size:  8, label: "DX" },
  { x: -380, y:  -10, size:  5, label: "REACT" },
  { x: -340, y: -220, size:  4, label: "TS" },
  { x: -120, y: -240, size:  5, label: "VITE" },
  { x:  120, y: -280, size:  4, label: "WORKER" },
  { x:  340, y: -240, size:  4, label: "PERF" },
  { x:  420, y:  -60, size:  4, label: "RSA" },
  { x:  460, y:  120, size:  5, label: "AES" },
  { x:  280, y:  220, size:  4, label: "JWT" },
  { x:    0, y:  240, size:  4, label: "CI" },
  { x: -180, y:  280, size:  4, label: "OSS" },
  { x: -340, y:  200, size:  5, label: "SB" },
  { x: -460, y:   80, size:  4, label: "TEST" },
];
const NETWORK_EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 5], [1, 6], [1, 7], [4, 15], [4, 16], [4, 14],
  [2, 8], [2, 9], [3, 10], [3, 11], [3, 12], [4, 13],
  [5, 16], [6, 7], [10, 11], [13, 14],
];

const SceneResume = ({ t, intensity }) => {
  return (
    <g>
      {/* Edges with traveling pulse */}
      {NETWORK_EDGES.map(([a, b], i) => {
        const na = NETWORK_NODES[a], nb = NETWORK_NODES[b];
        const phase = (t * 0.4 + i * 0.13) % 1;
        const px = lerp(na.x, nb.x, phase);
        const py = lerp(na.y, nb.y, phase);
        return (
          <g key={"e" + i}>
            <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke="var(--accent)" strokeWidth="0.6" opacity={0.4 * intensity} />
            <circle cx={px} cy={py} r={1.5}
              fill="var(--accent-hi)" opacity={intensity} />
          </g>
        );
      })}

      {/* Nodes */}
      {NETWORK_NODES.map((n, i) => {
        const localT = t * (0.4 + (i % 5) * 0.1) + i;
        const drift = { x: Math.sin(localT) * 6, y: Math.cos(localT * 1.2) * 4 };
        const pulse = 0.7 + (Math.sin(localT * 1.4) * 0.5 + 0.5) * 0.3;
        const isHub = i === 0;
        return (
          <g key={"n" + i} transform={`translate(${n.x + drift.x}, ${n.y + drift.y})`}>
            <circle cx={0} cy={0} r={n.size * 2.5} fill="var(--accent)"
              opacity={(isHub ? 0.4 : 0.2) * intensity} filter="url(#blurSoft)" />
            <circle cx={0} cy={0} r={n.size * pulse}
              fill={isHub ? "var(--accent-hi)" : "var(--accent)"}
              opacity={(isHub ? 1 : 0.85) * intensity} />
            <text x={n.size + 6} y={3} fill="var(--accent-hi)"
              fontSize={isHub ? 11 : 8} fontFamily="Geist Mono" letterSpacing="1.2"
              opacity={0.8 * intensity}>
              {n.label}
            </text>
          </g>
        );
      })}
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Scene: BLOG — Drifting text fragments / typography stream
// ─────────────────────────────────────────────────────────────────────────────
const BLOG_FRAGMENTS = [
  "closure", "도메인 슬라이스", "stale closure", "RxJS",
  "{ useState }", "Web Worker", "FSD", "DDD",
  "이벤트 루프", "render", "// TODO", "promise",
  "/* 7 min */", "<Component />", "이게가능", "useMemo",
  "성능 ↑", "yarn build", "import", "★ featured",
];

const SceneBlog = ({ t, intensity }) => {
  return (
    <g>
      {/* Vertical text streams (3 columns drifting at different speeds) */}
      {[0, 1, 2].map((col) => {
        const colX = (col - 1) * 380;
        const speed = 18 + col * 8;
        const offset = (t * speed) % 80;
        return (
          <g key={"col" + col} transform={`translate(${colX}, 0)`}>
            {Array.from({ length: 9 }).map((_, i) => {
              const y = -360 + i * 80 + offset;
              const wrappedY = ((y + 360) % 720) - 360;
              const fade = 1 - Math.abs(wrappedY) / 360;
              const idx = (col * 9 + i) % BLOG_FRAGMENTS.length;
              return (
                <text key={i}
                  x={0} y={wrappedY}
                  fill="var(--accent-hi)"
                  fontFamily="Geist Mono"
                  fontSize={12 + (i % 3) * 3}
                  letterSpacing="1.5"
                  textAnchor="middle"
                  opacity={fade * 0.5 * intensity}>
                  {BLOG_FRAGMENTS[idx]}
                </text>
              );
            })}
          </g>
        );
      })}

      {/* Horizontal scan lines */}
      {Array.from({ length: 5 }).map((_, i) => {
        const y = ((t * 24 + i * 140) % 700) - 350;
        return (
          <line key={"sl" + i}
            x1={-700} y1={y} x2={700} y2={y}
            stroke="var(--accent)" strokeWidth="0.4"
            opacity={0.25 * intensity}
            strokeDasharray="3 6" />
        );
      })}

      {/* Faint grid */}
      <g opacity={0.08 * intensity} stroke="var(--accent)" strokeWidth="0.3">
        {[-2, -1, 0, 1, 2].map((x) => (
          <line key={x} x1={x * 200} y1={-360} x2={x * 200} y2={360} />
        ))}
      </g>

      {/* Pull-quote in center (large) */}
      <g opacity={0.5 * intensity}>
        <text x={0} y={-8} fill="var(--accent-hi)" fontFamily="Fraunces"
          fontStyle="italic" fontSize="44" textAnchor="middle"
          letterSpacing="-0.5">
          "words,
        </text>
        <text x={0} y={42} fill="var(--accent-hi)" fontFamily="Fraunces"
          fontStyle="italic" fontSize="44" textAnchor="middle"
          letterSpacing="-0.5">
          not just code."
        </text>
      </g>
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Master World — manages camera + scene crossfade
// ─────────────────────────────────────────────────────────────────────────────
const SCENES = {
  home:     SceneHome,
  projects: SceneProjects,
  detail:   SceneDetail,
  about:    SceneAbout,
  contact:  SceneContact,
  resume:   SceneResume,
  blog:     SceneBlog,
  lab:      SceneLab,
};

const World = ({ page, scrollY = 0, onPlanetClick }) => {
  const target = STAGES[page] || STAGES.home;
  const camRef = React.useRef({ ...target });
  const tRef = React.useRef(0);
  const mouseRef = React.useRef({ x: 0, y: 0 });
  const [, force] = React.useState(0);

  // Track which scene we're transitioning FROM and TO
  const [sceneState, setSceneState] = React.useState({ from: null, to: page, progress: 1 });
  const transitionRef = React.useRef({ active: false, start: 0 });

  const [hoverOrbit, setHoverOrbit] = React.useState(null);

  // Page change → kick off crossfade
  React.useEffect(() => {
    if (sceneState.to !== page) {
      transitionRef.current = { active: true, start: performance.now() };
      setSceneState({ from: sceneState.to, to: page, progress: 0 });
    }
  }, [page]);

  // Mouse parallax
  React.useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Main animation loop
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
        tx:        lerp(c.tx,        target.tx,        0.045),
        ty:        lerp(c.ty,        target.ty,        0.045),
        sc:        lerp(c.sc,        target.sc,        0.04),
        rot:       lerp(c.rot,       target.rot,       0.04),
        intensity: lerp(c.intensity, target.intensity, 0.04),
      };

      // Crossfade progress (1.4s)
      if (transitionRef.current.active) {
        const elapsed = (now - transitionRef.current.start) / 1400;
        const p = clamp(elapsed, 0, 1);
        // ease in-out cubic
        const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        setSceneState((s) => ({ ...s, progress: eased }));
        if (p >= 1) {
          transitionRef.current.active = false;
          setSceneState((s) => ({ from: null, to: s.to, progress: 1 }));
        }
      }

      force((n) => (n + 1) % 1_000_000);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => { alive = false; };
  }, [target]);

  const t = tRef.current;
  const cam = camRef.current;
  const m = mouseRef.current;

  // Scroll-driven dolly: as user scrolls, the world zooms in slightly
  const scrollDolly = clamp(scrollY / 800, 0, 1) * 0.15;
  const dollyScale = 1 + scrollDolly;

  const drift = {
    x: Math.sin(t * 0.18) * 14 + m.x * 32,
    y: Math.cos(t * 0.22) * 10 + m.y * 22,
    r: Math.sin(t * 0.08) * 2.0 + m.x * 4,
  };
  const scrollOffset = scrollY * 0.04;
  const tx = cam.tx + drift.x;
  const ty = cam.ty + drift.y - scrollOffset;
  const rot = cam.rot + drift.r;

  // Crossfade opacity
  const fromOpacity = 1 - sceneState.progress;
  const toOpacity = sceneState.progress;

  const FromScene = sceneState.from ? SCENES[sceneState.from] : null;
  const ToScene = SCENES[sceneState.to] || SceneHome;

  const handlePlanetClick = (id) => {
    if (onPlanetClick) onPlanetClick(id);
  };

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

          {/* Persistent ambient layer (stars + halo) - always visible */}
          <g>
            {Array.from({ length: 80 }).map((_, i) => {
              const s = {
                x: (i * 263.4) % 1600,
                y: (i * 137.7) % 900,
                size: 0.4 + ((i * 7) % 10) / 14,
                tspeed: 0.4 + ((i * 11) % 10) / 12,
                tphase: (i * 0.41) % (Math.PI * 2),
              };
              const tw = 0.3 + (Math.sin(t * s.tspeed + s.tphase) * 0.5 + 0.5) * 0.6;
              return (
                <circle key={i} cx={s.x + tx * 0.12} cy={s.y + ty * 0.12}
                  r={s.size} fill="var(--accent-hi)" opacity={tw * 0.5 * cam.intensity} />
              );
            })}
          </g>

          {/* Halo behind everything */}
          <circle cx={800 + tx} cy={450 + ty}
            r={420 * cam.sc * dollyScale} fill="url(#coreGlow)" />

          {/* Faint grid */}
          <g opacity={0.10 * cam.intensity} stroke="var(--accent)" strokeWidth="0.4" fill="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={i}
                x1={(i / 9) * 1600 + tx * 0.15} y1={0}
                x2={(i / 9) * 1600 + tx * 0.45} y2={900} />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={"h" + i}
                x1={0} y1={(i / 6) * 900 + ty * 0.15}
                x2={1600} y2={(i / 6) * 900 + ty * 0.45} />
            ))}
          </g>

          {/* Camera-transformed scene group */}
          <g transform={`translate(${800 + tx}, ${450 + ty}) scale(${cam.sc * dollyScale}) rotate(${rot})`}>
            {/* Outgoing scene */}
            {FromScene && (
              <g opacity={fromOpacity} style={{ transition: "none" }}>
                <FromScene
                  t={t}
                  intensity={cam.intensity * fromOpacity}
                  onPlanetClick={handlePlanetClick}
                  hoverOrbit={hoverOrbit}
                  setHoverOrbit={setHoverOrbit}
                />
              </g>
            )}
            {/* Incoming scene */}
            <g opacity={toOpacity}>
              <ToScene
                t={t}
                intensity={cam.intensity * toOpacity}
                onPlanetClick={handlePlanetClick}
                hoverOrbit={hoverOrbit}
                setHoverOrbit={setHoverOrbit}
              />
            </g>
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
