import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PROFESSIONAL_PROJECTS,
  INDEPENDENT_PROJECTS,
  SKILLS,
  HERO_STREAM,
  type WireProject,
} from "../data";

const styles = {
  hero: {
    minHeight: "calc(100vh - var(--header-h) - 64px)",
    display: "flex", alignItems: "center", paddingBottom: 60,
  } as React.CSSProperties,
  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.05fr) minmax(280px, 0.5fr)",
    gap: 64, alignItems: "center",
  } as React.CSSProperties,
  title: {
    fontFamily: "var(--display)",
    fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 680,
    lineHeight: 1.12, letterSpacing: 0,
    margin: "0 0 24px",
    color: "var(--fg)",
    textShadow: "0 2px 30px rgba(0,0,0,0.72)",
    fontVariationSettings: "'opsz' 60",
  } as React.CSSProperties,
  intro: {
    fontFamily: "var(--sans)", fontSize: 12, fontWeight: 650, letterSpacing: "0.03em",
    textTransform: "uppercase" as const, color: "var(--fg-dim)",
    marginBottom: 32,
    display: "flex", alignItems: "center", gap: 12,
  },
  introDot: {
    width: 8, height: 8, background: "var(--accent)", borderRadius: 4,
    boxShadow: "0 0 16px var(--accent-glow)",
  } as React.CSSProperties,
  tags: { display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 36 },
  tag: {
    fontFamily: "var(--sans)", fontSize: 12, fontWeight: 650, letterSpacing: 0,
    padding: "6px 12px", borderRadius: 8,
    border: "1px solid var(--border-hi)", color: "var(--fg)",
    background: "color-mix(in oklab, var(--bg-elevated) 82%, transparent)",
    backdropFilter: "blur(6px)",
  } as React.CSSProperties,
  buttonRow: { display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" as const },
  btnPrimary: {
    padding: "13px 22px", borderRadius: 10, background: "var(--accent)",
    color: "white", border: 0, fontSize: 13, fontWeight: 600,
    boxShadow: "0 8px 32px var(--accent-glow), 0 0 0 1px color-mix(in oklab, var(--accent-hi) 60%, transparent) inset",
    transition: "all .25s", cursor: "pointer", textDecoration: "none",
    display: "inline-flex", alignItems: "center", gap: 8,
  } as React.CSSProperties,
  btnGhost: {
    padding: "13px 18px", borderRadius: 10,
    background: "color-mix(in oklab, var(--bg-elevated) 60%, transparent)",
    color: "var(--fg-muted)", border: "1px solid var(--border)",
    fontSize: 13, fontWeight: 500, backdropFilter: "blur(8px)",
    display: "inline-flex", alignItems: "center", gap: 8,
    transition: "all .25s", cursor: "pointer", textDecoration: "none",
  } as React.CSSProperties,
  rightStream: {
    display: "flex", flexDirection: "column" as const, gap: 0,
    fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600,
  },
  streamRow: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 0", borderBottom: "1px solid var(--border)",
    color: "var(--fg-muted)",
  } as React.CSSProperties,
  statsRow: {
    display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0,
    paddingTop: 36, marginTop: 56, borderTop: "1px solid var(--border)",
  } as React.CSSProperties,
  stat: { padding: "0 32px", borderLeft: "1px solid var(--border)" } as React.CSSProperties,
  statFirst: { padding: "0 32px 0 0", borderLeft: 0 } as React.CSSProperties,
  statValue: {
    fontFamily: "var(--display)", fontSize: 32, fontWeight: 720,
    color: "var(--accent-hi)", lineHeight: 1, letterSpacing: 0,
    textShadow: "0 2px 24px rgba(0,0,0,0.62)",
    fontVariationSettings: "'opsz' 60",
  } as React.CSSProperties,
  statUnit: { fontFamily: "var(--sans)", fontSize: 12, fontWeight: 650, color: "var(--accent)", marginLeft: 6 },
  statDesc: { marginTop: 12, fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.5 },
};

const HomePage: React.FC = () => {
  const professionalProjects = PROFESSIONAL_PROJECTS;
  const independentProjects = INDEPENDENT_PROJECTS;

  return (
    <div className="page-fade">
      {/* ── HERO ─────────────────────────────────── */}
      <section className="home-profile-hero" style={styles.hero}>
        <div className="home-profile-shell" style={{ width: "100%" }}>
          <div className="reveal home-profile-intro" style={styles.intro}>
            <span style={styles.introDot} />
            <span>01 / Identity Profile</span>
            <span className="home-profile-intro-rule" style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--border), transparent)", maxWidth: 200 }} />
          </div>

          <div className="home-profile-grid" style={styles.grid}>
            <div>
              <h1 className="reveal d1 home-profile-title" style={styles.title}>
                데이터와 상태를<br />
                <em style={{ fontStyle: "normal", color: "var(--accent-hi)", fontFamily: "var(--display)" }}>읽기 쉬운 제품 화면으로</em><br />
                정리합니다.
                <br />
                <span style={{ fontFamily: "var(--display)", fontStyle: "normal", color: "var(--accent)" }}>권경민</span>
                <span style={{ color: "var(--fg-muted)" }}>.</span>
              </h1>

              <p
                className="reveal d2"
                style={{
                  maxWidth: 600,
                  margin: "0 0 26px",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--fg-muted)",
                }}
              >
                React/TypeScript로 성능 병목과 상태 경계를 다룹니다.
                세부 지표는 프로젝트에서 확인할 수 있습니다.
              </p>

              <div className="reveal d2 home-profile-tags" style={styles.tags}>
                {["Frontend Engineer", "Content Flow UI", "State Architecture", "Performance UX"].map((t) => (
                  <span key={t} style={styles.tag}>{t}</span>
                ))}
              </div>

              <div className="reveal d3 home-profile-actions" style={styles.buttonRow}>
                <Link to="/projects" style={styles.btnPrimary}>
                  문제를 어떻게 풀었는지 보기 →
                </Link>
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.btnGhost}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"/>
                  </svg>
                  PDF 이력서 보기
                </a>
              </div>
            </div>

            <div className="reveal d4 home-profile-stream" style={styles.rightStream}>
              {HERO_STREAM.map(([i, l, v]) => (
                <div key={l} className="home-profile-stream-row" style={styles.streamRow}>
                  <span style={{ color: "var(--accent)" }}>{i}</span>
                  <span style={{ flex: 1, padding: "0 16px", letterSpacing: "0.16em" }}>{l}</span>
                  <span style={{ color: "var(--fg)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="home-profile-stats" style={styles.statsRow}>
            <div className="reveal d2 home-profile-stat" style={{ ...styles.stat, ...styles.statFirst }}>
              <div>
                <span style={styles.statValue}>80K</span>
                <span style={styles.statUnit}>logs/sec</span>
              </div>
              <div style={styles.statDesc}>실시간 정보 탐색 흐름을 유지한 처리량</div>
            </div>
            <div className="reveal d3 home-profile-stat" style={styles.stat}>
              <div>
                <span style={styles.statValue}>1M</span>
                <span style={styles.statUnit}>rows</span>
              </div>
              <div style={styles.statDesc}>필터링 결과 Export 3초 처리<br />메모리 사용량 60% 절감</div>
            </div>
            <div className="reveal d4 home-profile-stat" style={styles.stat}>
              <div>
                <span style={styles.statValue}>80%</span>
              </div>
              <div style={styles.statDesc}>상태 경계 재정리 후<br />리렌더링 감소</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Work ─────────────────────── */}
      <section style={{ marginTop: 120 }}>
        <div className="wf-marker">
          <span className="num">02</span>
          <span>Professional Case Studies</span>
          <span className="bar" />
          <Link
            to="/projects"
            style={{ color: "var(--fg-muted)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textDecoration: "none" }}
          >
            ALL CASES →
          </Link>
        </div>
        <p
          className="reveal d1"
          style={{ fontSize: 14, color: "var(--fg-muted)", maxWidth: 620, lineHeight: 1.65, margin: "0 0 28px" }}
        >
          실무에서 확인한 성능, Export, 상태 구조 개선 사례입니다.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gridAutoRows: "1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {professionalProjects.map((p, i) => (
            <div
              key={p.id}
              className="reveal"
              style={{ animationDelay: `${0.06 * i}s`, height: "100%" }}
            >
              <SelectedWorkCard project={p} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Independent Work ──────────────────────── */}
      <section style={{ marginTop: 96 }}>
        <div className="wf-marker">
          <span className="num">03</span>
          <span>Independent Projects · Decision Logs</span>
          <span className="bar" />
        </div>
        <p
          className="reveal d1"
          style={{ fontSize: 14, color: "var(--fg-muted)", maxWidth: 660, lineHeight: 1.65, margin: "0 0 28px" }}
        >
          개인·대외 프로젝트는 기술 선택과 사용자 흐름에서 배운 기준만 남겼습니다.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gridAutoRows: "1fr",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {independentProjects.map((p, i) => (
            <div
              key={p.id}
              className="reveal"
              style={{ animationDelay: `${0.05 * i}s`, height: "100%" }}
            >
              <SelectedWorkCard project={p} index={i} compact />
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────── */}
      <section style={{ marginTop: 120 }}>
        <div className="wf-marker">
          <span className="num">04</span>
          <span>Skills by Product Problem</span>
          <span className="bar" />
        </div>
        <div
          className="home-skills-grid"
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          {SKILLS.map((s, i) => (
            <div
              key={s.group}
              className="reveal home-skills-card"
              style={{
                animationDelay: `${0.05 * i}s`,
                padding: 24,
                background: "color-mix(in oklab, var(--bg-elevated) 92%, transparent)",
              }}
            >
              <div
                className="home-skills-label"
                style={{
                  fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "var(--accent)", marginBottom: 14,
                }}
              >
                <span>0{i + 1}</span>
                <span>·</span>
                <span>{s.group}</span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {s.items.map((it) => (
                  <li key={it} style={{ fontSize: 13, padding: "5px 0", color: "var(--fg)" }}>
                    <span style={{ color: "var(--fg-dim)", marginRight: 8 }}>·</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Statement ─────────────────────────────── */}
      <section style={{ marginTop: 140, marginBottom: 80, textAlign: "center" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--fg-dim)", marginBottom: 28 }}>
          — STATEMENT
        </div>
        <p
          style={{
            fontFamily: "var(--serif)", fontSize: "clamp(18px, 2vw, 26px)",
            fontWeight: 400, lineHeight: 1.4, letterSpacing: "-0.005em",
            maxWidth: 720, margin: "0 auto", textWrap: "balance" as React.CSSProperties["textWrap"],
          }}
        >
          좋은 인터페이스는 <em style={{ color: "var(--accent-hi)" }}>복잡함을 숨기지 않고</em>,
          <br />
          <span style={{ color: "var(--fg-muted)" }}>
            다음 행동이 분명한 <em style={{ color: "var(--fg)" }}>구조</em>로 정리합니다.
          </span>
        </p>
        <div style={{ marginTop: 36 }}>
          <Link to="/about" style={styles.btnGhost}>
            작업 기준 더 보기 →
          </Link>
        </div>
      </section>
    </div>
  );
};

interface SelectedWorkCardProps {
  project: WireProject;
  index: number;
  compact?: boolean;
}

const SelectedWorkCard: React.FC<SelectedWorkCardProps> = ({ project: p, index: i, compact = false }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      className="project-gallery-card project-gallery-card-compact"
      to={`/projects/${p.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: compact ? 22 : 28, borderRadius: 14,
        border: hover ? "1px solid var(--accent)" : "1px solid var(--border)",
        background: "color-mix(in oklab, var(--bg-elevated) 60%, transparent)",
        backdropFilter: "blur(12px)",
        cursor: "pointer",
        transition: "border-color .35s, transform .35s, box-shadow .35s",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hover ? `0 18px 40px ${p.color}33` : "0 0 0 transparent",
        position: "relative", overflow: "hidden",
        textDecoration: "none", color: "inherit",
        display: "flex", flexDirection: "column", height: "100%",
      }}
    >
      <div className="project-gallery-frame" />
      <div className="project-card-scanline" />
      {p.banner && (
        <img
          src={p.banner}
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "cover",
            opacity: hover ? 0.92 : 0.62,
            pointerEvents: "none",
            transition: "opacity .4s, transform .6s cubic-bezier(.22,.61,.36,1), filter .4s",
            transform: hover ? "scale(1.04)" : "scale(1)",
            filter: hover ? "saturate(1.15) brightness(1.02)" : "saturate(0.95) brightness(0.94)",
          }}
        />
      )}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          transition: "background .4s ease",
          background: p.banner
            ? hover
              ? `linear-gradient(180deg, color-mix(in oklab, var(--bg-elevated) 55%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 35%, transparent) 35%, color-mix(in oklab, var(--bg-elevated) 75%, transparent) 75%, var(--bg-elevated) 100%)`
              : `linear-gradient(180deg, color-mix(in oklab, var(--bg-elevated) 40%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 80%, transparent) 55%, var(--bg-elevated) 100%)`
            : "transparent",
        }}
      />
      <div
        style={{
          position: "absolute", top: 0, right: 0, width: 120, height: 120,
          background: `radial-gradient(circle at top right, ${p.color}40, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative", display: "flex", justifyContent: "space-between",
          marginBottom: 16, fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600,
          color: hover && p.banner ? "var(--fg-muted)" : "var(--fg-dim)",
          textShadow: hover && p.banner ? "0 1px 6px rgba(0,0,0,0.55)" : "none",
        }}
      >
        <span>0{i + 1} · {p.year}</span>
        <span style={{ color: p.color }}>●</span>
      </div>
      <h3
        style={{
          position: "relative",
          fontFamily: "var(--sans)", fontSize: compact ? 16 : 18, fontWeight: 700,
          margin: "0 0 6px", letterSpacing: 0, lineHeight: 1.22,
          color: "var(--fg)",
          textShadow: hover && p.banner ? "0 1px 8px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {p.subTitle}
      </h3>
      <div
        style={{
          position: "relative",
          fontSize: compact ? 12.5 : 13, marginBottom: compact ? 14 : 18, lineHeight: 1.5,
          color: hover && p.banner ? "var(--fg)" : "var(--fg-muted)",
          textShadow: hover && p.banner ? "0 1px 6px rgba(0,0,0,0.55)" : "none",
          flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: compact ? 3 : 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {p.summary}
      </div>
      <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
        {p.metrics.slice(0, compact ? 1 : 2).map((m) => (
          <span
            key={`${m.v}-${m.d}`}
            style={{
              fontFamily: "var(--sans)",
              fontSize: 12,
              fontWeight: 650,
              lineHeight: 1.2,
              padding: "6px 10px",
              borderRadius: 8,
              color: "var(--fg)",
              background: `linear-gradient(135deg, ${p.color}26, color-mix(in oklab, var(--bg-elevated) 84%, transparent))`,
              border: `1px solid ${p.color}99`,
              boxShadow: `0 0 0 1px ${p.color}22 inset`,
              textShadow: hover && p.banner ? "0 1px 8px rgba(0,0,0,0.55)" : "none",
            }}
          >
            {m.v} · {m.d}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default HomePage;
