import React, { useEffect, useRef, useState } from "react";

export type StageKey =
  | "home"
  | "projects"
  | "detail"
  | "about"
  | "contact"
  | "resume"
  | "blog"
  | "lab";

type Stage = {
  tx: number;
  ty: number;
  sc: number;
  rot: number;
  intensity: number;
};

type SceneProps = {
  t: number;
  intensity: number;
  onPlanetClick?: (id: StageKey) => void;
  hoverOrbit?: StageKey | null;
  setHoverOrbit?: (id: StageKey | null) => void;
};

interface WorldProps {
  page: StageKey;
  scrollY?: number;
  mouse?: { x: number; y: number };
  onPlanetClick?: (id: StageKey) => void;
}

const STAGES: Record<StageKey, Stage> = {
  home: { tx: 0, ty: 0, sc: 1, rot: 0, intensity: 1 },
  projects: { tx: -120, ty: 20, sc: 0.92, rot: -8, intensity: 0.85 },
  detail: { tx: 80, ty: -30, sc: 1.4, rot: 12, intensity: 1.15 },
  about: { tx: -40, ty: 60, sc: 1.05, rot: 18, intensity: 0.75 },
  contact: { tx: 0, ty: -44, sc: 0.7, rot: -4, intensity: 1.25 },
  resume: { tx: 120, ty: 40, sc: 0.95, rot: 22, intensity: 0.7 },
  blog: { tx: -160, ty: -40, sc: 1.1, rot: -16, intensity: 0.85 },
  lab: { tx: 60, ty: 20, sc: 1, rot: 4, intensity: 0.95 },
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

const seedRand = (i: number, salt = 0) => {
  const x = Math.sin((i + salt) * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

const AMBIENT_STARS = Array.from({ length: 82 }, (_, i) => ({
  x: (i * 263.4) % 1600,
  y: (i * 137.7) % 900,
  size: 0.4 + ((i * 7) % 10) / 14,
  twinkleSpeed: 0.4 + ((i * 11) % 10) / 12,
  twinklePhase: (i * 0.41) % (Math.PI * 2),
}));

const ORBITS: {
  id: Exclude<StageKey, "home" | "detail" | "lab">;
  rx: number;
  ry: number;
  period: number;
  phase: number;
  size: number;
  color: string;
  label: string;
}[] = [
  { id: "projects", rx: 150, ry: 52, period: 9, phase: 0, size: 5.5, color: "var(--accent-hi)", label: "PROJECTS" },
  { id: "about", rx: 240, ry: 84, period: 16, phase: 1.3, size: 7, color: "var(--accent)", label: "ABOUT" },
  { id: "blog", rx: 350, ry: 122, period: 26, phase: 2.4, size: 6, color: "var(--accent-hi)", label: "BLOG" },
  { id: "resume", rx: 470, ry: 164, period: 42, phase: 4.1, size: 8.5, color: "var(--accent)", label: "RESUME" },
  { id: "contact", rx: 600, ry: 210, period: 64, phase: 5.7, size: 5, color: "var(--accent-hi)", label: "CONTACT" },
];

const SceneHome: React.FC<SceneProps> = ({
  t,
  intensity,
  onPlanetClick,
  hoverOrbit,
  setHoverOrbit,
}) => {
  const corePulse = 1 + Math.sin(t * 1.4) * 0.06;

  return (
    <g>
      {ORBITS.map((o) => (
        <ellipse
          key={`orbit-${o.id}`}
          cx="0"
          cy="0"
          rx={o.rx}
          ry={o.ry}
          stroke="var(--accent)"
          strokeWidth={hoverOrbit === o.id ? 1.4 : 0.4}
          fill="none"
          opacity={(hoverOrbit === o.id ? 0.62 : 0.18) * intensity}
          strokeDasharray={hoverOrbit === o.id ? "0" : "1 3"}
        />
      ))}

      <g transform={`rotate(${t * 6})`}>
        <ellipse cx="0" cy="0" rx="600" ry="210" stroke="url(#ringGrad)" strokeWidth="1.2" fill="none" />
      </g>
      <g transform={`rotate(${-t * 3})`}>
        <ellipse
          cx="0"
          cy="0"
          rx="460"
          ry="162"
          stroke="var(--accent)"
          strokeWidth="0.7"
          fill="none"
          opacity={0.3 * intensity}
          strokeDasharray="2 10"
        />
      </g>

      {ORBITS.map((o, i) => {
        const angle = o.phase + (t * Math.PI * 2) / o.period;
        const x = Math.cos(angle) * o.rx;
        const y = Math.sin(angle) * o.ry;
        const isHover = hoverOrbit === o.id;
        const pulse = 1 + Math.sin(t * (1 + i * 0.3) + i) * 0.18;
        const trailPts = Array.from({ length: 22 }, (_, k) => {
          const a = angle - (k / 22) * 0.7;
          return [Math.cos(a) * o.rx, Math.sin(a) * o.ry] as const;
        });

        return (
          <g key={`planet-${o.id}`}>
            <polyline
              points={trailPts.map((p) => `${p[0]},${p[1]}`).join(" ")}
              fill="none"
              stroke={o.color}
              strokeWidth="1.2"
              opacity={(isHover ? 0.86 : 0.45) * intensity}
              strokeLinecap="round"
            />
            <circle
              cx={x}
              cy={y}
              r={o.size * 4}
              fill={o.color}
              opacity={0.3 * intensity}
              filter="url(#blurStrong)"
            />
            <circle
              className="world-hotspot"
              cx={x}
              cy={y}
              r={o.size * (isHover ? 1.7 : 1) * pulse}
              fill={o.color}
              opacity={0.96 * intensity}
              onClick={() => onPlanetClick?.(o.id)}
              onMouseEnter={() => setHoverOrbit?.(o.id)}
              onMouseLeave={() => setHoverOrbit?.(null)}
            />
            {isHover && (
              <text
                x={x + o.size * 2 + 8}
                y={y - o.size * 2}
                fill="var(--accent-hi)"
                fontSize="10"
                fontFamily="var(--mono)"
                letterSpacing="2"
                opacity={intensity}
              >
                {`-> ${o.label}`}
              </text>
            )}
          </g>
        );
      })}

      <g transform={`rotate(${-t * 18}) scale(${corePulse})`} opacity={0.95 * intensity}>
        <polygon points="0,-90 78,-26 48,68 -48,68 -78,-26" stroke="var(--accent-hi)" strokeWidth="1.4" fill="var(--accent-soft)" />
        <polygon points="0,-90 -78,-26 -48,68 48,68 78,-26" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.6" />
        <line x1="0" y1="-90" x2="0" y2="68" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5" />
        <line x1="-78" y1="-26" x2="78" y2="-26" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5" />
        <line x1="-48" y1="68" x2="48" y2="68" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
      </g>
      <circle cx="0" cy="0" r={36 * corePulse} fill="url(#coreInner)" filter="url(#blurSoft)" />
      <circle cx="0" cy="0" r={5 + Math.sin(t * 3) * 1.2} fill="var(--accent-hi)" opacity={intensity} />

      {[0, 1, 2].map((k) => {
        const phase = (t * 0.6 + k / 3) % 1;
        const r = 80 + phase * 480;
        return (
          <circle
            key={`pulse-${k}`}
            cx="0"
            cy="0"
            r={r}
            stroke="var(--accent-hi)"
            strokeWidth="0.8"
            fill="none"
            opacity={(1 - phase) * 0.35 * intensity}
          />
        );
      })}
    </g>
  );
};

const SceneProjects: React.FC<SceneProps> = ({ t, intensity }) => {
  const nodes: { x: number; y: number; seed: number; dist: number }[] = [];
  const sx = 90;
  const sy = 78;

  for (let r = -3; r <= 3; r += 1) {
    for (let c = -4; c <= 4; c += 1) {
      const x = c * sx + (r % 2) * (sx / 2);
      const y = r * sy;
      const dist = Math.sqrt(x * x + y * y);
      if (dist <= 480) nodes.push({ x, y, seed: seedRand(r * 100 + c, 7), dist });
    }
  }

  const edges: [typeof nodes[number], typeof nodes[number], number][] = [];
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < sx * 1.1) edges.push([nodes[i], nodes[j], d]);
    }
  }

  return (
    <g>
      {edges.map(([a, b, d], i) => {
        const wave = Math.sin(t * 0.8 + (a.seed + b.seed) * Math.PI * 2) * 0.5 + 0.5;
        return (
          <line
            key={`edge-${i}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--accent)"
            strokeWidth="0.5"
            opacity={(1 - d / (sx * 1.1)) * 0.5 * intensity * (0.4 + wave * 0.6)}
          />
        );
      })}
      {nodes.map((n, i) => {
        const localT = t * (0.6 + n.seed * 0.8) + n.seed * Math.PI * 2;
        const pulse = 0.5 + (Math.sin(localT) * 0.5 + 0.5) * 0.6;
        const size = 4 + n.seed * 4;
        const op = pulse * clamp(1 - n.dist / 480, 0, 1) * intensity;
        return (
          <g key={`node-${i}`} transform={`translate(${n.x}, ${n.y}) rotate(45)`}>
            <rect x={-size} y={-size} width={size * 2} height={size * 2} stroke="var(--accent-hi)" strokeWidth="0.8" fill="var(--accent)" fillOpacity={op * 0.4} opacity={op} />
            <rect x={-size * 0.4} y={-size * 0.4} width={size * 0.8} height={size * 0.8} fill="var(--accent-hi)" opacity={op} />
          </g>
        );
      })}
      <line
        x1={Math.sin(t * 0.4) * 480}
        y1="-300"
        x2={Math.sin(t * 0.4) * 480}
        y2="300"
        stroke="var(--accent-hi)"
        strokeWidth="0.8"
        opacity={0.6 * intensity}
        strokeDasharray="2 6"
      />
    </g>
  );
};

const SceneDetail: React.FC<SceneProps> = ({ t, intensity }) => (
  <g>
    {[0, 1, 2, 3, 4].map((k) => {
      const r = 80 + k * 60;
      const speed = (k % 2 === 0 ? 1 : -1) * (0.6 + k * 0.15);
      const ticks = 24 + k * 4;
      return (
        <g key={`ring-${k}`} transform={`rotate(${t * speed * 30})`}>
          <circle cx="0" cy="0" r={r} stroke="var(--accent)" strokeWidth="0.4" fill="none" opacity={0.25 * intensity} />
          {Array.from({ length: ticks }).map((_, i) => {
            const a = (i / ticks) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={Math.cos(a) * r}
                y1={Math.sin(a) * r}
                x2={Math.cos(a) * (r + 4)}
                y2={Math.sin(a) * (r + 4)}
                stroke="var(--accent-hi)"
                strokeWidth="0.6"
                opacity={(0.3 + (i % 3 === 0 ? 0.5 : 0)) * intensity}
              />
            );
          })}
        </g>
      );
    })}

    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const flow = (t * 0.5 + i * 0.13) % 1;
      const r = 60 + flow * 360;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      return (
        <g key={`packet-${i}`}>
          <line x1={Math.cos(angle) * 60} y1={Math.sin(angle) * 60} x2={Math.cos(angle) * 420} y2={Math.sin(angle) * 420} stroke="var(--accent)" strokeWidth="0.3" opacity={0.15 * intensity} />
          <rect x={x - 3} y={y - 1} width="6" height="2" transform={`rotate(${(angle * 180) / Math.PI} ${x} ${y})`} fill="var(--accent-hi)" opacity={(1 - flow) * intensity} />
        </g>
      );
    })}

    <circle cx="0" cy="0" r="50" fill="url(#coreInner)" filter="url(#blurSoft)" />
    <circle cx="0" cy="0" r={12 + Math.sin(t * 4) * 2} fill="var(--accent-hi)" opacity={intensity} />
    <g opacity={0.5 * intensity} stroke="var(--accent-hi)" strokeWidth="0.5">
      <line x1="-460" y1="0" x2="-100" y2="0" />
      <line x1="100" y1="0" x2="460" y2="0" />
      <line x1="0" y1="-300" x2="0" y2="-100" />
      <line x1="0" y1="100" x2="0" y2="300" />
    </g>
    {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sy], i) => (
      <g key={`detail-bracket-${i}`} transform={`translate(${sx * 380}, ${sy * 220})`}>
        <line x1={-sx * 24} y1="0" x2="0" y2="0" stroke="var(--accent)" strokeWidth="0.8" opacity={0.6 * intensity} />
        <line x1="0" y1={-sy * 24} x2="0" y2="0" stroke="var(--accent)" strokeWidth="0.8" opacity={0.6 * intensity} />
      </g>
    ))}
  </g>
);

const CONSTELLATION = [
  { x: -380, y: 120, label: "2020" },
  { x: -240, y: -40, label: "2022" },
  { x: -80, y: 90, label: "2023" },
  { x: 90, y: -70, label: "2024" },
  { x: 260, y: 30, label: "2025" },
  { x: 380, y: -130, label: "2026" },
];

const SceneAbout: React.FC<SceneProps> = ({ t, intensity }) => (
  <g>
    {CONSTELLATION.slice(0, -1).map((p, i) => {
      const next = CONSTELLATION[i + 1];
      return (
        <line
          key={`constellation-line-${i}`}
          x1={p.x}
          y1={p.y}
          x2={next.x}
          y2={next.y}
          stroke="var(--accent-hi)"
          strokeWidth="0.8"
          opacity={0.5 * intensity}
          strokeDasharray="3 4"
          strokeDashoffset={-t * 12}
        />
      );
    })}
    {Array.from({ length: 30 }).map((_, i) => {
      const x = (seedRand(i, 41) - 0.5) * 1100;
      const y = (seedRand(i, 73) - 0.5) * 600;
      const tw = 0.3 + (Math.sin(t * (0.5 + seedRand(i, 41)) + i) * 0.5 + 0.5) * 0.5;
      return <circle key={`about-star-${i}`} cx={x} cy={y} r={0.6 + seedRand(i, 41) * 0.8} fill="var(--accent-hi)" opacity={tw * 0.5 * intensity} />;
    })}
    {CONSTELLATION.map((p, i) => {
      const tw = 0.7 + (Math.sin(t * 1.6 + i * 0.8) * 0.5 + 0.5) * 0.3;
      return (
        <g key={`constellation-${p.label}`} transform={`translate(${p.x}, ${p.y})`}>
          <g opacity={tw * intensity}>
            <line x1="-12" y1="0" x2="12" y2="0" stroke="var(--accent-hi)" strokeWidth="0.5" />
            <line x1="0" y1="-12" x2="0" y2="12" stroke="var(--accent-hi)" strokeWidth="0.5" />
          </g>
          <circle cx="0" cy="0" r="14" fill="var(--accent)" opacity={0.25 * intensity} filter="url(#blurSoft)" />
          <circle cx="0" cy="0" r={3 + tw} fill="var(--accent-hi)" opacity={intensity} />
          <text x="10" y="-12" fill="var(--accent-hi)" fontSize="9" fontFamily="var(--mono)" letterSpacing="1.5" opacity={0.7 * intensity}>
            {p.label}
          </text>
        </g>
      );
    })}
  </g>
);

const SceneContact: React.FC<SceneProps> = ({ t, intensity }) => (
  <g>
    <line x1="-760" y1="150" x2="760" y2="150" stroke="var(--accent)" strokeWidth="0.8" opacity={0.42 * intensity} strokeDasharray="4 10" />
    <line x1="-760" y1="154" x2="760" y2="154" stroke="var(--accent-hi)" strokeWidth="0.4" opacity={0.22 * intensity} />
    <g transform="translate(0, 150)" opacity={intensity}>
      <path d="M -74 24 H 74" stroke="var(--accent)" strokeWidth="1" opacity="0.45" />
      <path d="M -10 24 L 0 -116 L 10 24 Z" fill="var(--accent-soft)" stroke="var(--accent-hi)" strokeWidth="0.9" opacity="0.82" />
      <line x1="0" y1="-116" x2="0" y2="20" stroke="var(--accent-hi)" strokeWidth="1.2" />
      <path d="M 0 -70 C 44 -82, 72 -58, 78 -24" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.55" />
      <circle cx="0" cy="-116" r={4 + Math.sin(t * 3) * 1.2} fill="var(--accent-hi)" />
      {[0, 1, 2].map((i) => {
        const phase = (t * 0.55 + i * 0.28) % 1;
        const r = 52 + phase * 260;
        return (
          <circle
            key={`signal-${i}`}
            cx="0"
            cy="-116"
            r={r}
            stroke="var(--accent-hi)"
            strokeWidth="0.8"
            fill="none"
            opacity={(1 - phase) * 0.46}
          />
        );
      })}
    </g>
    {Array.from({ length: 14 }).map((_, i) => {
      const x = (seedRand(i, 90) - 0.5) * 1300;
      const y = 70 + seedRand(i, 12) * 170;
      return (
        <line
          key={`horizon-mark-${i}`}
          x1={x}
          y1={y}
          x2={x + 16 + seedRand(i, 44) * 42}
          y2={y}
          stroke="var(--accent)"
          strokeWidth="0.5"
          opacity={(0.12 + seedRand(i, 51) * 0.18) * intensity}
        />
      );
    })}
  </g>
);

const NETWORK_NODES = [
  { x: 0, y: 0, size: 12, label: "ME" },
  { x: -260, y: -120, size: 8, label: "FE" },
  { x: 220, y: -160, size: 8, label: "SYS" },
  { x: 300, y: 80, size: 8, label: "SEC" },
  { x: -180, y: 140, size: 8, label: "DX" },
  { x: -380, y: -10, size: 5, label: "REACT" },
  { x: -340, y: -220, size: 4, label: "TS" },
  { x: -120, y: -240, size: 5, label: "VITE" },
  { x: 120, y: -280, size: 4, label: "WORKER" },
  { x: 340, y: -240, size: 4, label: "PERF" },
  { x: 420, y: -60, size: 4, label: "RSA" },
  { x: 460, y: 120, size: 5, label: "AES" },
  { x: 280, y: 220, size: 4, label: "JWT" },
  { x: 0, y: 240, size: 4, label: "CI" },
  { x: -180, y: 280, size: 4, label: "OSS" },
  { x: -340, y: 200, size: 5, label: "SB" },
  { x: -460, y: 80, size: 4, label: "TEST" },
];

const NETWORK_EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 5], [1, 6], [1, 7], [4, 15], [4, 16], [4, 14],
  [2, 8], [2, 9], [3, 10], [3, 11], [3, 12], [4, 13],
  [5, 16], [6, 7], [10, 11], [13, 14],
] as const;

const SceneResume: React.FC<SceneProps> = ({ t, intensity }) => (
  <g>
    {NETWORK_EDGES.map(([a, b], i) => {
      const na = NETWORK_NODES[a];
      const nb = NETWORK_NODES[b];
      const phase = (t * 0.4 + i * 0.13) % 1;
      return (
        <g key={`resume-edge-${i}`}>
          <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="var(--accent)" strokeWidth="0.6" opacity={0.4 * intensity} />
          <circle cx={lerp(na.x, nb.x, phase)} cy={lerp(na.y, nb.y, phase)} r="1.5" fill="var(--accent-hi)" opacity={intensity} />
        </g>
      );
    })}
    {NETWORK_NODES.map((n, i) => {
      const localT = t * (0.4 + (i % 5) * 0.1) + i;
      const drift = { x: Math.sin(localT) * 6, y: Math.cos(localT * 1.2) * 4 };
      const pulse = 0.7 + (Math.sin(localT * 1.4) * 0.5 + 0.5) * 0.3;
      const isHub = i === 0;
      return (
        <g key={`resume-node-${n.label}`} transform={`translate(${n.x + drift.x}, ${n.y + drift.y})`}>
          <circle cx="0" cy="0" r={n.size * 2.5} fill="var(--accent)" opacity={(isHub ? 0.4 : 0.2) * intensity} filter="url(#blurSoft)" />
          <circle cx="0" cy="0" r={n.size * pulse} fill={isHub ? "var(--accent-hi)" : "var(--accent)"} opacity={(isHub ? 1 : 0.85) * intensity} />
          <text x={n.size + 6} y="3" fill="var(--accent-hi)" fontSize={isHub ? 11 : 8} fontFamily="var(--mono)" letterSpacing="1.2" opacity={0.8 * intensity}>
            {n.label}
          </text>
        </g>
      );
    })}
  </g>
);

const BLOG_FRAGMENTS = [
  "closure", "domain slice", "stale closure", "RxJS",
  "{ useState }", "Web Worker", "FSD", "DDD",
  "event loop", "render", "// TODO", "promise",
  "/* 7 min */", "<Component />", "memo", "useMemo",
  "perf++", "npm run build", "import", "featured",
];

const SceneBlog: React.FC<SceneProps> = ({ t, intensity }) => (
  <g>
    {[0, 1, 2].map((col) => {
      const colX = (col - 1) * 380;
      const speed = 18 + col * 8;
      const offset = (t * speed) % 80;
      return (
        <g key={`blog-col-${col}`} transform={`translate(${colX}, 0)`}>
          {Array.from({ length: 9 }).map((_, i) => {
            const y = -360 + i * 80 + offset;
            const wrappedY = ((y + 360) % 720) - 360;
            const fade = 1 - Math.abs(wrappedY) / 360;
            const idx = (col * 9 + i) % BLOG_FRAGMENTS.length;
            return (
              <text key={i} x="0" y={wrappedY} fill="var(--accent-hi)" fontFamily="var(--mono)" fontSize={12 + (i % 3) * 3} letterSpacing="1.5" textAnchor="middle" opacity={fade * 0.5 * intensity}>
                {BLOG_FRAGMENTS[idx]}
              </text>
            );
          })}
        </g>
      );
    })}
    {Array.from({ length: 5 }).map((_, i) => {
      const y = ((t * 24 + i * 140) % 700) - 350;
      return <line key={`blog-scan-${i}`} x1="-700" y1={y} x2="700" y2={y} stroke="var(--accent)" strokeWidth="0.4" opacity={0.25 * intensity} strokeDasharray="3 6" />;
    })}
    <g opacity={0.5 * intensity}>
      <text x="0" y="-8" fill="var(--accent-hi)" fontFamily="var(--serif)" fontStyle="italic" fontSize="44" textAnchor="middle" letterSpacing="-0.5">
        "words,
      </text>
      <text x="0" y="42" fill="var(--accent-hi)" fontFamily="var(--serif)" fontStyle="italic" fontSize="44" textAnchor="middle" letterSpacing="-0.5">
        not just code."
      </text>
    </g>
  </g>
);

const LAB_TOKENS = [
  "const", "=>", "useState", "// experimenting",
  "> npm run dev", "{ ... }", "async", "await",
  "[ok]", "[err]", "// TODO", "import * as",
  "0x7C5CFF", "fn()", "// lab", "<canvas/>",
  "shader.vert", "GLSL", "0.03ms", "rAF",
  "if (alive)", "log()", "// test", "experiment#42",
  "WebGL2", "playground", "draft", "WIP",
];

const SceneLab: React.FC<SceneProps> = ({ t, intensity }) => (
  <g>
    {[0, 1, 2, 3, 4].map((col) => {
      const colX = (col - 2) * 220;
      const speed = 28 + col * 9;
      const offset = (t * speed) % 100;
      return (
        <g key={`lab-col-${col}`} transform={`translate(${colX}, 0)`}>
          {Array.from({ length: 11 }).map((_, i) => {
            const y = -440 + i * 100 + offset;
            const wrappedY = ((y + 440) % 1100) - 440;
            const fade = 1 - Math.abs(wrappedY) / 440;
            const idx = (col * 11 + i) % LAB_TOKENS.length;
            return (
              <text key={i} x="0" y={wrappedY} fill={i === 0 ? "var(--accent-hi)" : "var(--accent)"} fontFamily="var(--mono)" fontSize={11 + (i % 3) * 2} letterSpacing="1" textAnchor="middle" opacity={fade * (i === 0 ? 0.9 : 0.5) * intensity}>
                {LAB_TOKENS[idx]}
              </text>
            );
          })}
        </g>
      );
    })}

    <g opacity={0.9 * intensity}>
      <rect x="-280" y="-90" width="560" height="180" fill="var(--bg-elev)" fillOpacity="0.85" stroke="var(--accent)" strokeWidth="0.8" rx="6" />
      <rect x="-280" y="-90" width="560" height="24" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" strokeWidth="0.5" rx="6" />
      {[0, 1, 2].map((i) => (
        <circle key={`traffic-${i}`} cx={-264 + i * 14} cy="-78" r="3.5" fill="var(--accent-hi)" opacity={0.4 + (i === 1 ? 0.4 : 0)} />
      ))}
      <text x="0" y="-74" fill="var(--accent-hi)" fontFamily="var(--mono)" fontSize="9" letterSpacing="2" textAnchor="middle" opacity="0.7">
        /lab - playground.tsx
      </text>
      <g fontFamily="var(--mono)" fontSize="12">
        <text x="-256" y="-40" fill="var(--fg-dim)" opacity="0.5">01</text>
        <text x="-220" y="-40" fill="var(--accent-hi)">const</text>
        <text x="-176" y="-40" fill="var(--fg)"> experiment </text>
        <text x="-78" y="-40" fill="var(--accent)">=</text>
        <text x="-60" y="-40" fill="var(--accent-hi)"> async </text>
        <text x="-12" y="-40" fill="var(--fg)">() =&gt; {"{"}</text>
        <text x="-256" y="-16" fill="var(--fg-dim)" opacity="0.5">02</text>
        <text x="-220" y="-16" fill="var(--fg-muted)">  // {Math.floor(t * 100) % 1000}ms tick</text>
        <text x="-256" y="8" fill="var(--fg-dim)" opacity="0.5">03</text>
        <text x="-220" y="8" fill="var(--fg)">  await </text>
        <text x="-176" y="8" fill="var(--accent-hi)">draw</text>
        <text x="-138" y="8" fill="var(--fg)">(canvas);</text>
        <text x="-256" y="32" fill="var(--fg-dim)" opacity="0.5">04</text>
        <text x="-220" y="32" fill="var(--accent)">{"}"};</text>
        <text x="-256" y="64" fill="var(--fg-dim)" opacity="0.5">-&gt;</text>
        <text x="-220" y="64" fill="var(--accent-hi)">[ok] {(Math.sin(t) * 0.5 + 0.5).toFixed(3)}ms</text>
        <rect x="-110" y="56" width="7" height="11" fill="var(--accent-hi)" opacity={Math.floor(t * 1.8) % 2 === 0 ? 1 : 0} />
      </g>
    </g>

    <line x1="-700" y1={((t * 80) % 700) - 350} x2="700" y2={((t * 80) % 700) - 350} stroke="var(--accent-hi)" strokeWidth="0.5" opacity={0.3 * intensity} />
    {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sy], i) => (
      <g key={`lab-bracket-${i}`} transform={`translate(${sx * 480}, ${sy * 320})`} opacity={0.5 * intensity}>
        <line x1={-sx * 28} y1="0" x2="0" y2="0" stroke="var(--accent)" strokeWidth="1" />
        <line x1="0" y1={-sy * 28} x2="0" y2="0" stroke="var(--accent)" strokeWidth="1" />
      </g>
    ))}
    <text x="-470" y="-310" fill="var(--accent-hi)" fontFamily="var(--mono)" fontSize="10" letterSpacing="3" opacity={0.7 * intensity}>
      DIAMOND /LAB - WIP
    </text>
  </g>
);

const SCENES: Record<StageKey, React.FC<SceneProps>> = {
  home: SceneHome,
  projects: SceneProjects,
  detail: SceneDetail,
  about: SceneAbout,
  contact: SceneContact,
  resume: SceneResume,
  blog: SceneBlog,
  lab: SceneLab,
};

export const World: React.FC<WorldProps> = ({
  page,
  scrollY = 0,
  mouse = { x: 0, y: 0 },
  onPlanetClick,
}) => {
  const target = STAGES[page] || STAGES.home;
  const camRef = useRef<Stage>({ ...target });
  const tRef = useRef(0);
  const transitionRef = useRef({ active: false, start: 0 });
  const [sceneState, setSceneState] = useState<{ from: StageKey | null; to: StageKey; progress: number }>({
    from: null,
    to: page,
    progress: 1,
  });
  const [hoverOrbit, setHoverOrbit] = useState<StageKey | null>(null);
  const [frame, setFrame] = useState<{ t: number; cam: Stage }>({
    t: 0,
    cam: { ...target },
  });

  useEffect(() => {
    setSceneState((prev) => {
      if (prev.to === page) return prev;
      transitionRef.current = { active: true, start: performance.now() };
      return { from: prev.to, to: page, progress: 0 };
    });
  }, [page]);

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
        tx: lerp(c.tx, target.tx, 0.045),
        ty: lerp(c.ty, target.ty, 0.045),
        sc: lerp(c.sc, target.sc, 0.04),
        rot: lerp(c.rot, target.rot, 0.04),
        intensity: lerp(c.intensity, target.intensity, 0.04),
      };

      if (transitionRef.current.active) {
        const elapsed = (now - transitionRef.current.start) / 1400;
        const p = clamp(elapsed, 0, 1);
        const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        setSceneState((s) => ({ ...s, progress: eased }));
        if (p >= 1) {
          transitionRef.current.active = false;
          setSceneState((s) => ({ from: null, to: s.to, progress: 1 }));
        }
      }

      setFrame({ t: tRef.current, cam: camRef.current });
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
    return () => {
      alive = false;
    };
  }, [target]);

  const { t, cam } = frame;
  const scrollDolly = clamp(scrollY / 800, 0, 1) * 0.15;
  const dollyScale = 1 + scrollDolly;
  const drift = {
    x: Math.sin(t * 0.18) * 14 + mouse.x * 32,
    y: Math.cos(t * 0.22) * 10 + mouse.y * 22,
    r: Math.sin(t * 0.08) * 2 + mouse.x * 4 + mouse.y * 1.5,
  };
  const tx = cam.tx + drift.x;
  const ty = cam.ty + drift.y - scrollY * 0.04;
  const rot = cam.rot + drift.r;
  const fromOpacity = 1 - sceneState.progress;
  const toOpacity = sceneState.progress;
  const FromScene = sceneState.from ? SCENES[sceneState.from] : null;
  const ToScene = SCENES[sceneState.to] || SceneHome;

  return (
    <>
      <div className="world-stage">
        <svg className="world-svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.55 * cam.intensity} />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity={0.1 * cam.intensity} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="coreInner">
              <stop offset="0%" stopColor="var(--accent-hi)" stopOpacity={cam.intensity} />
              <stop offset="60%" stopColor="var(--accent)" stopOpacity={0.6 * cam.intensity} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--accent-hi)" stopOpacity={0.7 * cam.intensity} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
            <filter id="blurSoft"><feGaussianBlur stdDeviation="3" /></filter>
            <filter id="blurStrong"><feGaussianBlur stdDeviation="8" /></filter>
          </defs>

          <g>
            {AMBIENT_STARS.map((s, i) => {
              const tw = 0.3 + (Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.5 + 0.5) * 0.6;
              return <circle key={i} cx={s.x + tx * 0.12} cy={s.y + ty * 0.12} r={s.size} fill="var(--accent-hi)" opacity={tw * 0.5 * cam.intensity} />;
            })}
          </g>

          <circle cx={800 + tx} cy={450 + ty} r={420 * cam.sc * dollyScale} fill="url(#coreGlow)" />

          <g opacity={0.1 * cam.intensity} stroke="var(--accent)" strokeWidth="0.4" fill="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`grid-v-${i}`} x1={(i / 9) * 1600 + tx * 0.15} y1="0" x2={(i / 9) * 1600 + tx * 0.45} y2="900" />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={`grid-h-${i}`} x1="0" y1={(i / 6) * 900 + ty * 0.15} x2="1600" y2={(i / 6) * 900 + ty * 0.45} />
            ))}
          </g>

          <g transform={`translate(${800 + tx}, ${450 + ty}) scale(${cam.sc * dollyScale}) rotate(${rot})`}>
            {FromScene && (
              <g opacity={fromOpacity}>
                <FromScene
                  t={t}
                  intensity={cam.intensity * fromOpacity}
                  onPlanetClick={onPlanetClick}
                  hoverOrbit={hoverOrbit}
                  setHoverOrbit={setHoverOrbit}
                />
              </g>
            )}
            <g opacity={toOpacity}>
              <ToScene
                t={t}
                intensity={cam.intensity * toOpacity}
                onPlanetClick={onPlanetClick}
                hoverOrbit={hoverOrbit}
                setHoverOrbit={setHoverOrbit}
              />
            </g>
          </g>
        </svg>
      </div>
      {page === "home" && (
        <svg className="world-hotspot-layer" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g transform={`translate(${800 + tx}, ${450 + ty}) scale(${cam.sc * dollyScale}) rotate(${rot})`}>
            {ORBITS.map((o) => {
              const angle = o.phase + (t * Math.PI * 2) / o.period;
              const x = Math.cos(angle) * o.rx;
              const y = Math.sin(angle) * o.ry;
              const isHover = hoverOrbit === o.id;

              return (
                <g key={`home-hotspot-${o.id}`}>
                  <circle
                    className="world-hotspot"
                    cx={x}
                    cy={y}
                    r={Math.max(26, o.size * 5)}
                    fill="transparent"
                    onClick={() => onPlanetClick?.(o.id)}
                    onMouseEnter={() => setHoverOrbit(o.id)}
                    onMouseLeave={() => setHoverOrbit(null)}
                  />
                  {isHover && (
                    <text
                      x={x + o.size * 2 + 8}
                      y={y - o.size * 2}
                      fill="var(--accent-hi)"
                      fontSize="10"
                      fontFamily="var(--mono)"
                      letterSpacing="2"
                      opacity="0.95"
                    >
                      {`-> ${o.label}`}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      )}
      <div className="world-grain" />
      <div className="world-vignette" />
    </>
  );
};

export default World;
