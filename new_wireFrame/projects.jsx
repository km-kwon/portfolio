// PROJECTS · Option B — 3D thumbnail grid

const ProjectsPage = ({ onNav }) => {
  const [filter, setFilter] = React.useState("All");
  const allTags = ["All", ...new Set(PROJECTS.flatMap(p => p.tags))];
  const list = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <div className="page-fade">
      <div className="marker">
        <span className="num">02</span>
        <span>Selected Work · 2022 — 2026</span>
        <span className="bar" />
        <span style={{ fontFamily: "var(--mono)", fontSize: 11 }}>{list.length} / {PROJECTS.length}</span>
      </div>

      <h1 className="reveal" style={{
        fontFamily: "var(--serif)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 400,
        letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.02,
      }}>
        <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>Twelve</em> projects,
        <br/>
        <span style={{ color: "var(--fg-muted)" }}>one obsession.</span>
      </h1>
      <p className="reveal d1" style={{ fontSize: 15, color: "var(--fg-muted)", maxWidth: 540, lineHeight: 1.65, marginBottom: 48 }}>
        시스템 UI, 성능, 보안 — 세 축에서 만들어 온 작업들. 각 카드를 클릭하면 케이스 스터디로 이동합니다.
      </p>

      {/* Tag filter */}
      <div className="reveal d2" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
        {allTags.map(t => (
          <button key={t} onClick={() => setFilter(t)} style={{
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em",
            padding: "7px 14px", borderRadius: 999,
            border: filter === t ? "1px solid var(--accent)" : "1px solid var(--border)",
            background: filter === t ? "var(--accent-soft)" : "transparent",
            color: filter === t ? "var(--accent-hi)" : "var(--fg-muted)",
            transition: "all .25s",
          }}>{t}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
        {list.map((p, i) => (
          <div key={p.id} className="reveal" style={{ animationDelay: `${0.05 * i}s` }}
            onClick={() => onNav("detail", p.id)}>
            <ProjectCard p={p} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ p, index }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", aspectRatio: "1 / 1.18",
        borderRadius: 16, overflow: "hidden",
        border: hover ? "1px solid var(--accent)" : "1px solid var(--border)",
        background: "var(--bg-elev)",
        cursor: "pointer", transition: "all .4s cubic-bezier(.22,.61,.36,1)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? `0 24px 60px ${p.color}33` : "0 0 0 transparent",
      }}>
      {/* Mini 3D thumbnail */}
      <div style={{ position: "absolute", inset: 0, opacity: hover ? 1 : 0.7, transition: "opacity .4s" }}>
        <MiniThumb color={p.color} variant={index % 4} active={hover} />
      </div>
      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `linear-gradient(to bottom, transparent 0%, transparent 30%, var(--bg-elev) 95%)`,
      }} />
      {/* Content */}
      <div style={{ position: "absolute", inset: 0, padding: 22, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--fg-dim)" }}>
            0{(index + 1).toString().padStart(2, "0")} / {p.year}
          </span>
          <span style={{
            fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.1em",
            color: p.color, padding: "3px 8px", border: `1px solid ${p.color}55`,
            borderRadius: 999, textTransform: "uppercase",
          }}>{p.tags[0]}</span>
        </div>
        <div>
          <h3 style={{
            fontFamily: "var(--serif)", fontSize: 26, fontWeight: 500, margin: "0 0 6px",
            letterSpacing: "-0.01em", lineHeight: 1.05,
          }}>{p.title}</h3>
          <div style={{ fontSize: 12, color: "var(--fg-muted)", marginBottom: 12 }}>{p.subtitle}</div>
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            fontFamily: "var(--mono)", fontSize: 11,
            color: hover ? p.color : "var(--fg-muted)", transition: "color .3s",
          }}>
            View case →
          </div>
        </div>
      </div>
    </div>
  );
};

// Mini SVG 3D thumbnail — variant for visual variety
const MiniThumb = ({ color, variant = 0, active = false }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={`mg${variant}`}>
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="var(--bg-elev)" />
      <circle cx="100" cy="80" r="80" fill={`url(#mg${variant})`} />
      <g transform={`translate(100, 80) rotate(${variant * 15})`}>
        {variant === 0 && (
          <>
            <polygon points="0,-40 35,-12 22,30 -22,30 -35,-12" stroke={color} strokeWidth="1.2" fill="none" />
            <ellipse cx="0" cy="0" rx="60" ry="22" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="0" cy="0" r="4" fill={color} />
          </>
        )}
        {variant === 1 && (
          <>
            <rect x="-30" y="-30" width="60" height="60" stroke={color} strokeWidth="1.2" fill="none" transform="rotate(15)" />
            <rect x="-22" y="-22" width="44" height="44" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="0" cy="0" r="6" fill={color} opacity="0.7" />
          </>
        )}
        {variant === 2 && (
          <>
            {[...Array(7)].map((_, i) => (
              <line key={i} x1="-40" y1={-21 + i * 7} x2="40" y2={-21 + i * 7 + 4} stroke={color} strokeWidth="0.8" opacity={0.3 + i * 0.1} />
            ))}
            <circle cx="0" cy="0" r="5" fill={color} />
          </>
        )}
        {variant === 3 && (
          <>
            <circle cx="0" cy="0" r="40" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="0" cy="0" r="25" stroke={color} strokeWidth="1.2" fill="none" />
            <circle cx="0" cy="0" r="10" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.3" />
          </>
        )}
      </g>
      {/* Particles */}
      {[...Array(20)].map((_, i) => {
        const x = ((i * 37) % 180) + 10;
        const y = ((i * 53) % 180) + 10;
        return <circle key={i} cx={x} cy={y} r={0.8} fill={color} opacity={0.4} />;
      })}
    </svg>
  );
};

window.ProjectsPage = ProjectsPage;
window.MiniThumb = MiniThumb;
