import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, SKILLS, HERO_STREAM, type WireProject } from "../data";

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
    fontFamily: "var(--serif)",
    fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 400,
    lineHeight: 1.15, letterSpacing: "-0.015em",
    margin: "0 0 24px",
    fontVariationSettings: "'opsz' 60",
  } as React.CSSProperties,
  intro: {
    fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em",
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
    fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em",
    padding: "5px 12px", borderRadius: 999,
    border: "1px solid var(--border)", color: "var(--fg-muted)",
    background: "color-mix(in oklab, var(--bg-elevated) 50%, transparent)",
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
    fontFamily: "var(--mono)", fontSize: 11,
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
    fontFamily: "var(--serif)", fontSize: 32, fontWeight: 500,
    color: "var(--accent-hi)", lineHeight: 1, letterSpacing: "-0.015em",
    fontVariationSettings: "'opsz' 60",
  } as React.CSSProperties,
  statUnit: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", marginLeft: 6 },
  statDesc: { marginTop: 12, fontSize: 12, color: "var(--fg-dim)", lineHeight: 1.5 },
};

const HomePage: React.FC = () => {
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
                복잡한 시스템을<br />
                안전하고 <em style={{ fontStyle: "italic", color: "var(--accent-hi)", fontFamily: "var(--serif)" }}>읽기 쉬운</em><br />
                인터페이스로 만드는<br />
                <span style={{ color: "var(--fg-muted)", fontSize: "0.6em", fontFamily: "var(--sans)", fontWeight: 300, letterSpacing: "-0.01em" }}>
                  프론트엔드 엔지니어,
                </span><br />
                <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)" }}>권경민</span>
                <span style={{ color: "var(--fg-muted)" }}>.</span>
              </h1>

              <div className="reveal d2 home-profile-tags" style={styles.tags}>
                {["Frontend Engineer", "System UI", "Performance", "Security-minded"].map((t) => (
                  <span key={t} style={styles.tag}>{t}</span>
                ))}
              </div>

              <div className="reveal d3 home-profile-actions" style={styles.buttonRow}>
                <Link to="/projects" style={styles.btnPrimary}>
                  프로젝트 보기 →
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
                  이력서 (PDF)
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
              <div style={styles.statDesc}>실시간 로그 시각화 처리량 (CCU2)</div>
            </div>
            <div className="reveal d3 home-profile-stat" style={styles.stat}>
              <div>
                <span style={styles.statValue}>2</span>
                <span style={styles.statUnit}>sec</span>
              </div>
              <div style={styles.statDesc}>1M 라인 DLT 로그 검색<br />Web Worker · 가상 스크롤 최적화</div>
            </div>
            <div className="reveal d4 home-profile-stat" style={styles.stat}>
              <div>
                <span style={styles.statValue}>0</span>
              </div>
              <div style={styles.statDesc}>Wireshark 평문 노출<br />RSA-2048 + AES-256 하이브리드 설계</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Work ─────────────────────────── */}
      <section style={{ marginTop: 120 }}>
        <div className="wf-marker">
          <span className="num">02</span>
          <span>Selected Work</span>
          <span className="bar" />
          <Link
            to="/projects"
            style={{ color: "var(--fg-muted)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textDecoration: "none" }}
          >
            ALL →
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gridAutoRows: "1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {PROJECTS.map((p, i) => (
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

      {/* ── Skills ──────────────────────────────────── */}
      <section style={{ marginTop: 120 }}>
        <div className="wf-marker">
          <span className="num">03</span>
          <span>Skills · Stack</span>
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
                style={{
                  fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "var(--accent)", marginBottom: 14,
                }}
              >
                0{i + 1} · {s.group}
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
          좋은 인터페이스는 <em style={{ color: "var(--accent-hi)" }}>복잡한 시스템에 대해</em> 거짓말하지 않는다.
          <br />
          <span style={{ color: "var(--fg-muted)" }}>
            그저 그것을 <em style={{ color: "var(--fg)" }}>읽을 수 있게</em> 만들 뿐이다.
          </span>
        </p>
        <div style={{ marginTop: 36 }}>
          <Link to="/about" style={styles.btnGhost}>
            About me →
          </Link>
        </div>
      </section>
    </div>
  );
};

interface SelectedWorkCardProps {
  project: WireProject;
  index: number;
}

const SelectedWorkCard: React.FC<SelectedWorkCardProps> = ({ project: p, index: i }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      className="project-gallery-card project-gallery-card-compact"
      to={`/projects/${p.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 28, borderRadius: 14,
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
          marginBottom: 16, fontFamily: "var(--mono)", fontSize: 11,
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
          fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500,
          margin: "0 0 6px", letterSpacing: "-0.01em", lineHeight: 1.2,
          color: "var(--fg)",
          textShadow: hover && p.banner ? "0 1px 8px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {p.subTitle}
      </h3>
      <div
        style={{
          position: "relative",
          fontSize: 13, marginBottom: 18, lineHeight: 1.5,
          color: hover && p.banner ? "var(--fg)" : "var(--fg-muted)",
          textShadow: hover && p.banner ? "0 1px 6px rgba(0,0,0,0.55)" : "none",
          flex: 1,
        }}
      >
        {p.subtitle ?? p.summary.slice(0, 60) + "…"}
      </div>
      <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.visualTags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--mono)", fontSize: 10, padding: "3px 8px",
              borderRadius: 999,
              border: hover && p.banner
                ? "1px dashed color-mix(in oklab, var(--fg) 70%, transparent)"
                : "1px dashed var(--border-hi)",
              color: hover && p.banner ? "var(--fg)" : "var(--fg-muted)",
              background: hover && p.banner
                ? "color-mix(in oklab, var(--bg-elevated) 70%, transparent)"
                : "transparent",
              backdropFilter: hover && p.banner ? "blur(4px)" : undefined,
              WebkitBackdropFilter: hover && p.banner ? "blur(4px)" : undefined,
              transition: "all .3s ease",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default HomePage;
