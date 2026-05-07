// LAB · 프론트엔드 실험실 — 카테고리 필터 + 미니 라이브 데모 카드 그리드

const EXPERIMENTS = [
  {
    id: "web-worker",
    title: "Web Worker 스레드 분리",
    subtitle: "무거운 연산을 별도 스레드로 분리하여 UI 반응성을 유지합니다.",
    category: "performance",
    tags: ["Web Worker", "Threading"],
    difficulty: "intermediate",
    why: "메인 스레드에서 Fibonacci(45)처럼 무거운 연산을 실행하면 UI가 멈춥니다.",
    how: "Web Worker로 연산을 분리하고 결과는 postMessage로 수신합니다.",
    result: "메인 스레드 블로킹 0ms, UI 60fps 유지.",
    demo: "thread",
  },
  {
    id: "virtual-scroll",
    title: "Virtual Scroll vs Naive DOM",
    subtitle: "10,000개 항목 렌더링 시 전체 DOM 생성 vs 뷰포트만 렌더링.",
    category: "performance",
    tags: ["Virtual Scroll", "Rendering"],
    difficulty: "intermediate",
    why: "대량 데이터를 모두 DOM에 그리면 초기 렌더링이 느려집니다.",
    how: "뷰포트에 보이는 ~10개만 실제 DOM으로, 나머지는 absolute로 재배치.",
    result: "초기 렌더링 시간 90%↓, 일정한 DOM 노드 수 유지.",
    demo: "virtual",
  },
  {
    id: "debounce-throttle",
    title: "Debounce vs Throttle",
    subtitle: "이벤트 호출 빈도를 제어하는 두 가지 전략을 비교합니다.",
    category: "performance",
    tags: ["Debounce", "Throttle"],
    difficulty: "beginner",
    why: "고빈도 이벤트를 그대로 처리하면 불필요한 연산과 API 호출이 급증.",
    how: "Debounce = 마지막 이벤트 후 N초, Throttle = N초마다 1회.",
    result: "None ~50회 → Throttle ~8회 → Debounce 1회.",
    demo: "debounce",
  },
  {
    id: "intersection-observer",
    title: "Intersection Observer",
    subtitle: "요소가 뷰포트에 진입/이탈할 때를 감지하는 모던 API.",
    category: "web-api",
    tags: ["IntersectionObserver", "Lazy Loading"],
    difficulty: "beginner",
    why: "scroll 이벤트로 가시성을 체크하면 매 프레임 리플로우.",
    how: "브라우저 네이티브 레벨에서 교차 감지, threshold 조절 가능.",
    result: "scroll 이벤트 대비 CPU 사용량 대폭 감소.",
    demo: "io",
  },
  {
    id: "spring-physics",
    title: "스프링 물리 시뮬레이션",
    subtitle: "Stiffness와 Damping으로 스프링 역학을 실시간 체험.",
    category: "animation",
    tags: ["Spring", "rAF"],
    difficulty: "intermediate",
    why: "linear/ease만으로는 자연스러운 모션이 어렵습니다.",
    how: "F = -kx - cv (스프링력 + 감쇠력), 오일러 적분 + rAF.",
    result: "부드러운 이동 / 탄력 바운스 / 즉각 스냅 — 모두 가능.",
    demo: "spring",
  },
  {
    id: "flip-animation",
    title: "FLIP 애니메이션 원리",
    subtitle: "First→Last→Invert→Play로 부드러운 전환을 구현합니다.",
    category: "animation",
    tags: ["FLIP", "Layout"],
    difficulty: "advanced",
    why: "DOM 순서가 바뀌면 사용자는 갑작스러운 점프를 봅니다.",
    how: "변경 전 위치 저장 → 변경 후 측정 → transform invert → transition.",
    result: "reflow 최소화, 60fps 재정렬 애니메이션.",
    demo: "flip",
  },
  {
    id: "clipboard-dragdrop",
    title: "Clipboard API + Drag & Drop",
    subtitle: "이미지 붙여넣기와 파일 드래그를 DataTransfer로 처리.",
    category: "web-api",
    tags: ["Clipboard", "Drag & Drop"],
    difficulty: "beginner",
    why: "<input type='file'>만으로는 UX가 제한적.",
    how: "onPaste의 clipboardData, onDrop의 dataTransfer에서 File 추출.",
    result: "두 입력 방식의 DataTransfer 동작 원리를 체험.",
    demo: "clip",
  },
  {
    id: "canvas-particle",
    title: "Canvas 파티클 시스템",
    subtitle: "마우스를 따라다니는 파티클을 Canvas API로 렌더링.",
    category: "canvas",
    tags: ["Canvas", "Particles"],
    difficulty: "intermediate",
    why: "DOM으로 수백 요소 애니메이션 시 reflow/repaint 비용 폭증.",
    how: "rAF 루프에서 위치/속도/수명 업데이트, Canvas 2D로 그림.",
    result: "200+ 파티클 60fps, 트레일 강도 조절 가능.",
    demo: "particles",
  },
  {
    id: "svg-morph",
    title: "SVG Path 모핑",
    subtitle: "도형 간 부드러운 변환을 점 보간으로 구현.",
    category: "canvas",
    tags: ["SVG", "Morphing"],
    difficulty: "advanced",
    why: "path의 d 속성은 문자열이라 CSS transition으로 보간 불가.",
    how: "동일한 점 수(32개)로 샘플링 후 lerp + easeInOutCubic.",
    result: "원, 사각형, 별, 삼각형 간 매끄러운 모핑.",
    demo: "morph",
  },
];

const CATEGORY_LABELS = {
  all: "전체",
  performance: "성능",
  animation: "애니메이션",
  "web-api": "Web API",
  canvas: "Canvas",
};

const DIFFICULTY_BARS = {
  beginner:     { count: 1, label: "기초" },
  intermediate: { count: 2, label: "중급" },
  advanced:     { count: 3, label: "고급" },
};

// ─────────────────────────────────────────────────────────────────────────────
// Mini live demos — small, contained, animated
// ─────────────────────────────────────────────────────────────────────────────

const useTick = (speed = 1) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    let alive = true, last = performance.now();
    const loop = (now) => {
      if (!alive) return;
      setT((prev) => prev + ((now - last) / 1000) * speed);
      last = now;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => { alive = false; };
  }, [speed]);
  return t;
};

const DemoThread = () => {
  const t = useTick(1);
  // two parallel "threads" — main and worker
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
      <text x={6} y={14} fill="var(--fg-dim)" fontSize="8" fontFamily="Geist Mono" letterSpacing="1.5">MAIN</text>
      <line x1={36} y1={20} x2={194} y2={20} stroke="var(--border)" strokeWidth="1" />
      <text x={6} y={50} fill="var(--accent-hi)" fontSize="8" fontFamily="Geist Mono" letterSpacing="1.5">WORK</text>
      <line x1={36} y1={56} x2={194} y2={56} stroke="var(--border)" strokeWidth="1" />
      {/* main: smooth pulses (UI) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const x = 36 + ((i * 14 + t * 30) % 158);
        return <circle key={"m" + i} cx={x} cy={20} r={2} fill="var(--accent)" opacity="0.7" />;
      })}
      {/* worker: heavy chunk */}
      <rect x={36 + (t * 25) % 130} y={50} width={28} height={12}
        fill="var(--accent-hi)" opacity="0.9" rx="2" />
      <text x={170} y={75} fill="var(--accent)" fontSize="7" fontFamily="Geist Mono" opacity="0.7">60fps</text>
    </svg>
  );
};

const DemoVirtual = () => {
  const t = useTick(1);
  const scroll = (Math.sin(t * 0.6) * 0.5 + 0.5);
  const rows = 30;
  const visStart = Math.floor(scroll * (rows - 6));
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
      <rect x={6} y={6} width={188} height={68} fill="var(--bg-elev)" stroke="var(--border)" rx="4" />
      {/* virtual rendering window */}
      <rect x={6} y={6 + (scroll * 50)} width={188} height={20}
        fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="0.6" />
      {/* "rendered" rows */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1={14} y1={11 + (scroll * 50) + i * 3} x2={186} y2={11 + (scroll * 50) + i * 3}
          stroke="var(--accent-hi)" strokeWidth="0.6" opacity={1 - i * 0.13} />
      ))}
      {/* Labels */}
      <text x={10} y={70} fill="var(--accent-hi)" fontSize="7" fontFamily="Geist Mono">DOM: 6 / {rows}</text>
    </svg>
  );
};

const DemoDebounce = () => {
  const t = useTick(1);
  // input pulses (50/sec rate)
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
      <text x={6} y={12} fill="var(--fg-dim)" fontSize="7" fontFamily="Geist Mono">RAW</text>
      <text x={6} y={36} fill="var(--fg-dim)" fontSize="7" fontFamily="Geist Mono">THROT</text>
      <text x={6} y={60} fill="var(--fg-dim)" fontSize="7" fontFamily="Geist Mono">DEBO</text>
      {/* 50 raw pulses */}
      {Array.from({ length: 30 }).map((_, i) => (
        <line key={"r" + i} x1={36 + i * 5.4} y1={6} x2={36 + i * 5.4} y2={16}
          stroke="var(--accent)" strokeWidth="0.6" opacity={(((t * 20 - i) % 30) > 0 && ((t * 20 - i) % 30) < 30) ? 0.9 : 0.2} />
      ))}
      {/* throttled — every 4th */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={"t" + i} x1={36 + i * 20} y1={28} x2={36 + i * 20} y2={42}
          stroke="var(--accent-hi)" strokeWidth="1" />
      ))}
      {/* debounced — single at end */}
      <line x1={180} y1={52} x2={180} y2={68} stroke="var(--accent-hi)" strokeWidth="1.5" />
      <circle cx={180} cy={52} r="2" fill="var(--accent-hi)" />
    </svg>
  );
};

const DemoIO = () => {
  const t = useTick(1);
  const y = ((t * 30) % 120) - 30;
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
      {/* Viewport */}
      <rect x={70} y={20} width={60} height={40} stroke="var(--accent)" strokeWidth="0.8"
        strokeDasharray="3 3" fill="none" />
      <text x={72} y={30} fill="var(--accent)" fontSize="6" fontFamily="Geist Mono">VIEWPORT</text>
      {/* Moving element */}
      <rect x={86} y={y + 30} width={28} height={14} fill="var(--accent-hi)"
        opacity={(y + 30 > 20 && y + 30 < 60) ? 1 : 0.3} rx="2" />
      <circle cx={170} cy={40} r={5}
        fill={(y + 30 > 20 && y + 30 < 60) ? "var(--accent-hi)" : "var(--border)"}>
      </circle>
      <text x={140} y={70} fill="var(--accent-hi)" fontSize="7" fontFamily="Geist Mono">VISIBLE</text>
    </svg>
  );
};

const DemoSpring = () => {
  const xRef = React.useRef(50);
  const vRef = React.useRef(0);
  const targetRef = React.useRef(50);
  const [x, setX] = React.useState(50);
  React.useEffect(() => {
    let alive = true, last = performance.now(), tt = 0;
    const loop = (now) => {
      if (!alive) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      tt += dt;
      targetRef.current = 100 + Math.sin(tt * 0.7) * 60;
      const k = 80, c = 4;
      const F = -k * (xRef.current - targetRef.current) - c * vRef.current;
      vRef.current += F * dt;
      xRef.current += vRef.current * dt;
      setX(xRef.current);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => { alive = false; };
  }, []);
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
      <line x1={20} y1={40} x2={x} y2={40} stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="2 3" />
      <circle cx={20} cy={40} r="3" fill="var(--accent)" />
      <circle cx={x} cy={40} r="9" fill="var(--accent-hi)" />
      <circle cx={x} cy={40} r="14" fill="var(--accent)" opacity="0.2" />
      <text x={6} y={70} fill="var(--accent)" fontSize="7" fontFamily="Geist Mono">k=80 c=4</text>
    </svg>
  );
};

const DemoFlip = () => {
  const t = useTick(0.4);
  const indices = [0, 1, 2, 3];
  // shuffle pattern based on floor(t)
  const phase = Math.floor(t) % 4;
  const order = indices.map((i) => (i + phase) % 4);
  const colors = ["var(--accent)", "var(--accent-hi)", "var(--accent)", "var(--accent-hi)"];
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
      {indices.map((i) => {
        const slot = order.indexOf(i);
        const x = 30 + slot * 38;
        return (
          <g key={i}>
            <rect x={x - 14} y={26}
              width={28} height={28}
              fill={colors[i]} opacity="0.85"
              rx="3"
              style={{ transition: "x 0.6s cubic-bezier(.5,1.6,.4,1)" }} />
            <text x={x} y={45} fill="var(--bg)" fontSize="11" fontFamily="Geist Mono"
              fontWeight="600" textAnchor="middle"
              style={{ transition: "x 0.6s cubic-bezier(.5,1.6,.4,1)" }}>
              {i + 1}
            </text>
          </g>
        );
      })}
      <text x={6} y={70} fill="var(--accent-hi)" fontSize="7" fontFamily="Geist Mono">FLIP shuffle</text>
    </svg>
  );
};

const DemoClip = () => {
  const t = useTick(0.6);
  const dragX = 60 + Math.sin(t) * 40;
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
      {/* Drop zone */}
      <rect x={110} y={14} width={80} height={52} fill="var(--accent-soft)"
        stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="4 3" rx="4" />
      <text x={150} y={42} fill="var(--accent)" fontSize="9" fontFamily="Geist Mono"
        textAnchor="middle">DROP</text>
      {/* File icon being dragged */}
      <g transform={`translate(${dragX}, 30)`}>
        <rect x={-10} y={-8} width={20} height={26} fill="var(--accent-hi)" rx="2" opacity="0.9" />
        <polygon points="6,-8 10,-4 10,-8" fill="var(--accent)" />
        <line x1={-6} y1={2} x2={6} y2={2} stroke="var(--bg)" strokeWidth="0.8" />
        <line x1={-6} y1={6} x2={6} y2={6} stroke="var(--bg)" strokeWidth="0.8" />
        <line x1={-6} y1={10} x2={3} y2={10} stroke="var(--bg)" strokeWidth="0.8" />
      </g>
    </svg>
  );
};

const DemoParticles = () => {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    c.width = c.offsetWidth * dpr;
    c.height = c.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    const W = c.offsetWidth, H = c.offsetHeight;
    const target = { x: W / 2, y: H / 2 };
    let alive = true, tt = 0, last = performance.now();
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: 0, vy: 0,
      life: Math.random(),
    }));
    const loop = (now) => {
      if (!alive) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      tt += dt;
      target.x = W / 2 + Math.cos(tt * 0.8) * (W / 3);
      target.y = H / 2 + Math.sin(tt * 1.1) * (H / 3);
      ctx.fillStyle = "rgba(11,12,15,0.18)";
      ctx.fillRect(0, 0, W, H);
      particles.forEach((p) => {
        const dx = target.x - p.x, dy = target.y - p.y;
        const d = Math.sqrt(dx * dx + dy * dy) + 1;
        p.vx += (dx / d) * 30 * dt;
        p.vy += (dy / d) * 30 * dt;
        p.vx *= 0.95; p.vy *= 0.95;
        p.x += p.vx; p.y += p.vy;
        p.life = Math.max(0, p.life - dt * 0.3);
        if (p.life <= 0) {
          p.x = Math.random() * W;
          p.y = Math.random() * H;
          p.vx = 0; p.vy = 0;
          p.life = 1;
        }
        ctx.fillStyle = `rgba(159,135,255,${p.life * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6 * p.life, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => { alive = false; };
  }, []);
  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", borderRadius: 6 }} />;
};

const DemoMorph = () => {
  const t = useTick(0.5);
  // Sample 16 points around center, blending between circle/square/triangle/star
  const N = 24;
  const phase = ((t % 4) + 4) % 4;
  const shapes = [
    (a) => 24, // circle
    (a) => 24 / Math.max(Math.abs(Math.cos(a)), Math.abs(Math.sin(a))) * 0.7, // square
    (a) => {
      // 5-point star
      const k = (a / (Math.PI * 2)) * 10;
      return ((Math.floor(k) % 2 === 0) ? 26 : 12);
    },
    (a) => {
      // triangle
      const v = Math.cos(a - Math.PI / 2) * 0.5 + 0.5;
      return 12 + v * 18;
    },
  ];
  const fromIdx = Math.floor(phase) % shapes.length;
  const toIdx = (fromIdx + 1) % shapes.length;
  const localT = phase - Math.floor(phase);
  const eased = localT < 0.5 ? 4 * localT ** 3 : 1 - Math.pow(-2 * localT + 2, 3) / 2;
  const fromFn = shapes[fromIdx] || shapes[0];
  const toFn = shapes[toIdx] || shapes[0];
  const pts = Array.from({ length: N }, (_, i) => {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2;
    const r = fromFn(a) * (1 - eased) + toFn(a) * eased;
    return [100 + Math.cos(a) * r, 40 + Math.sin(a) * r];
  });
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
      <polygon points={pts.map((p) => p.join(",")).join(" ")}
        fill="var(--accent-soft)" stroke="var(--accent-hi)" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
};

const DEMOS = {
  thread: DemoThread, virtual: DemoVirtual, debounce: DemoDebounce,
  io: DemoIO, spring: DemoSpring, flip: DemoFlip,
  clip: DemoClip, particles: DemoParticles, morph: DemoMorph,
};

// ─────────────────────────────────────────────────────────────────────────────
// Card
// ─────────────────────────────────────────────────────────────────────────────

const ExperimentCard = ({ exp, expanded, onToggle }) => {
  const Demo = DEMOS[exp.demo];
  const diff = DIFFICULTY_BARS[exp.difficulty];
  return (
    <div
      className="reveal"
      style={{
        borderRadius: 14,
        border: "1px solid " + (expanded ? "var(--accent)" : "var(--border)"),
        background: expanded
          ? "linear-gradient(180deg, var(--accent-soft) 0%, color-mix(in oklab, var(--bg-elev) 70%, transparent) 60%)"
          : "color-mix(in oklab, var(--bg-elev) 60%, transparent)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        transition: "all .35s",
        cursor: expanded ? "default" : "pointer",
      }}
      onClick={(e) => {
        if (e.target.closest("[data-no-toggle]")) return;
        onToggle();
      }}
      onMouseEnter={(e) => { if (!expanded) e.currentTarget.style.borderColor = "var(--border-hi)"; }}
      onMouseLeave={(e) => { if (!expanded) e.currentTarget.style.borderColor = "var(--border)"; }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: 0, alignItems: "stretch" }}>
        {/* Left — info */}
        <div style={{ padding: "24px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
              color: "var(--accent-hi)", textTransform: "uppercase",
            }}>
              {CATEGORY_LABELS[exp.category]}
            </span>
            <span style={{ color: "var(--fg-dim)", fontSize: 10 }}>·</span>
            {/* Difficulty bars */}
            <div style={{ display: "flex", gap: 2 }}>
              {[1, 2, 3].map((n) => (
                <div key={n} style={{
                  width: 14, height: 3, borderRadius: 1.5,
                  background: n <= diff.count ? "var(--accent-hi)" : "var(--border)",
                }} />
              ))}
            </div>
            <span style={{ fontFamily: "var(--mono)", fontSize: 9,
              color: "var(--fg-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {diff.label}
            </span>
          </div>

          <h3 style={{
            fontFamily: "var(--sans)", fontSize: 20, fontWeight: 600,
            margin: "0 0 8px", letterSpacing: "-0.01em",
          }}>
            {exp.title}
          </h3>
          <p style={{
            fontSize: 13, lineHeight: 1.55, color: "var(--fg-muted)",
            margin: 0, maxWidth: 540,
          }}>
            {exp.subtitle}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14 }}>
            {exp.tags.map((tag) => (
              <span key={tag} style={{
                padding: "3px 9px", borderRadius: 999,
                border: "1px solid var(--border)",
                fontFamily: "var(--mono)", fontSize: 10,
                color: "var(--fg-muted)", letterSpacing: "0.06em",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — mini demo */}
        <div style={{
          background: "color-mix(in oklab, var(--bg) 70%, transparent)",
          borderLeft: "1px solid var(--border)",
          display: "grid", placeItems: "stretch",
          minHeight: 160, padding: 12,
        }}>
          {Demo ? <Demo /> : null}
        </div>
      </div>

      {/* Expanded section */}
      {expanded && (
        <div style={{
          borderTop: "1px solid var(--border)",
          padding: "24px 28px",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
        }}
        data-no-toggle>
          {[
            { label: "Why",    key: "why",    color: "var(--fg)" },
            { label: "How",    key: "how",    color: "var(--fg)" },
            { label: "Result", key: "result", color: "var(--accent-hi)" },
          ].map((sec) => (
            <div key={sec.key}>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em",
                color: "var(--fg-dim)", textTransform: "uppercase",
                marginBottom: 8,
              }}>
                {sec.label}
              </div>
              <p style={{
                fontSize: 13, lineHeight: 1.6, margin: 0, color: sec.color,
              }}>
                {exp[sec.key]}
              </p>
            </div>
          ))}
          <div style={{ gridColumn: "span 3", display: "flex", justifyContent: "flex-end", marginTop: -8 }}>
            <button
              onClick={onToggle}
              style={{
                background: "none", border: "1px solid var(--border)",
                color: "var(--fg-muted)", padding: "6px 14px",
                borderRadius: 8, fontFamily: "var(--mono)", fontSize: 10,
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}>
              ▲ COLLAPSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

const LabPage = ({ onNav }) => {
  const [filter, setFilter] = React.useState("all");
  const [expandedId, setExpandedId] = React.useState(null);

  const cats = ["all", "performance", "animation", "web-api", "canvas"];
  const filtered = filter === "all" ? EXPERIMENTS : EXPERIMENTS.filter((e) => e.category === filter);

  return (
    <div className="page-fade">
      <div className="marker">
        <span className="num">08</span>
        <span>Lab · {EXPERIMENTS.length} experiments</span>
        <span className="bar" />
      </div>

      {/* Hero */}
      <div className="reveal" style={{ marginBottom: 48, maxWidth: 720 }}>
        <div className="cinematic-line" />
        <h1 style={{
          fontFamily: "var(--serif)", fontSize: "clamp(42px, 5.5vw, 72px)",
          fontWeight: 400, letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.05,
        }}>
          프론트엔드{" "}
          <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>실험실</em>
        </h1>
        <p style={{
          fontSize: 16, lineHeight: 1.7, color: "var(--fg-muted)",
          margin: 0, maxWidth: 580,
        }}>
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--fg)" }}>
            "왜?"
          </em>를 묻고 직접 만들어보며 답을 찾습니다.
          각 실험을 클릭해 자세한 동작 원리를 확인할 수 있습니다.
        </p>
      </div>

      {/* Category filter */}
      <div className="reveal d1" style={{
        display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32,
        padding: 6, borderRadius: 12,
        background: "color-mix(in oklab, var(--bg-elev) 60%, transparent)",
        border: "1px solid var(--border)", width: "fit-content",
      }}>
        {cats.map((c) => {
          const isActive = filter === c;
          const count = c === "all" ? EXPERIMENTS.length
            : EXPERIMENTS.filter((e) => e.category === c).length;
          return (
            <button key={c} onClick={() => setFilter(c)}
              style={{
                padding: "8px 14px", borderRadius: 8, border: 0,
                background: isActive ? "var(--accent)" : "transparent",
                color: isActive ? "white" : "var(--fg-muted)",
                fontFamily: "var(--sans)", fontSize: 13, fontWeight: isActive ? 600 : 500,
                transition: "all .25s",
                display: "flex", alignItems: "center", gap: 8,
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "var(--fg-muted)"; }}
            >
              {CATEGORY_LABELS[c]}
              <span style={{
                fontSize: 10, fontFamily: "var(--mono)",
                opacity: 0.75, padding: "1px 6px", borderRadius: 4,
                background: isActive ? "rgba(255,255,255,0.18)" : "var(--bg-soft)",
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div style={{ display: "grid", gap: 16, marginBottom: 80 }}>
        {filtered.map((exp, i) => (
          <ExperimentCard
            key={exp.id}
            exp={exp}
            expanded={expandedId === exp.id}
            onToggle={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{
          textAlign: "center", padding: 80,
          color: "var(--fg-muted)", fontSize: 14,
        }}>
          해당 카테고리에 실험이 아직 없습니다.
        </div>
      )}

      {/* CTA back */}
      <div className="reveal" style={{
        padding: 28, borderRadius: 14,
        border: "1px solid var(--border)",
        background: "color-mix(in oklab, var(--bg-elev) 60%, transparent)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 16,
      }}>
        <div>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
            color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 6,
          }}>
            More to explore
          </div>
          <div style={{ fontSize: 16, color: "var(--fg)" }}>
            실제 프로젝트에 적용한 사례가 궁금하다면 →
          </div>
        </div>
        <button onClick={() => onNav && onNav("projects")} style={{
          padding: "13px 22px", borderRadius: 10,
          background: "var(--accent)", color: "white", border: 0,
          fontSize: 13, fontWeight: 600,
          boxShadow: "0 8px 32px var(--accent-glow), 0 0 0 1px color-mix(in oklab, var(--accent-hi) 60%, transparent) inset",
        }}>
          Projects 보기 →
        </button>
      </div>
    </div>
  );
};

window.LabPage = LabPage;
