// HOME · Option A — Fixed-bg 3D world with scroll-synced camera + section trail

const homeStyles = {
  hero: {
    minHeight: "calc(100vh - var(--header-h) - 64px)",
    display: "flex", alignItems: "center",
    paddingBottom: 60,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.05fr) minmax(280px, 0.5fr)",
    gap: 64, alignItems: "center",
  },
  title: {
    fontFamily: "var(--serif)",
    fontSize: "clamp(40px, 5.4vw, 76px)",
    fontWeight: 400,
    lineHeight: 1.04,
    letterSpacing: "-0.02em",
    margin: "0 0 28px",
    fontVariationSettings: "'opsz' 96",
  },
  intro: {
    fontFamily: "var(--mono)",
    fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
    color: "var(--fg-dim)", marginBottom: 32,
    display: "flex", alignItems: "center", gap: 12,
  },
  introDot: { width: 8, height: 8, background: "var(--accent)", borderRadius: 4, boxShadow: "0 0 16px var(--accent-glow)" },
  tags: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 },
  tag: {
    fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em",
    padding: "5px 12px", borderRadius: 999,
    border: "1px solid var(--border)", color: "var(--fg-muted)",
    background: "color-mix(in oklab, var(--bg-elev) 50%, transparent)",
    backdropFilter: "blur(6px)",
  },
  buttonRow: { display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" },
  btnPrimary: {
    padding: "13px 22px", borderRadius: 10,
    background: "var(--accent)", color: "white", border: 0,
    fontSize: 13, fontWeight: 600,
    boxShadow: "0 8px 32px var(--accent-glow), 0 0 0 1px color-mix(in oklab, var(--accent-hi) 60%, transparent) inset",
    transition: "all .25s",
  },
  btnGhost: {
    padding: "13px 18px", borderRadius: 10,
    background: "color-mix(in oklab, var(--bg-elev) 60%, transparent)",
    color: "var(--fg-muted)", border: "1px solid var(--border)",
    fontSize: 13, fontWeight: 500,
    backdropFilter: "blur(8px)",
    display: "inline-flex", alignItems: "center", gap: 8,
    transition: "all .25s",
  },
  rightStream: {
    display: "flex", flexDirection: "column", gap: 0,
    fontFamily: "var(--mono)", fontSize: 11,
  },
  streamRow: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 0", borderBottom: "1px solid var(--border)",
    color: "var(--fg-muted)",
  },
  statsRow: {
    display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
    gap: 0,
    paddingTop: 36, marginTop: 56, borderTop: "1px solid var(--border)",
  },
  stat: { padding: "0 32px", borderLeft: "1px solid var(--border)" },
  statFirst: { padding: "0 32px 0 0", borderLeft: 0 },
  statValue: {
    fontFamily: "var(--serif)", fontSize: 56, fontWeight: 500,
    color: "var(--accent-hi)", lineHeight: 1,
    letterSpacing: "-0.02em",
    fontVariationSettings: "'opsz' 96",
  },
  statUnit: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", marginLeft: 6 },
  statDesc: { marginTop: 12, fontSize: 12, color: "var(--fg-dim)", lineHeight: 1.5 },
};

const HomePage = ({ onNav }) => {
  return (
    <div className="page-fade">
      {/* HERO */}
      <section style={homeStyles.hero}>
        <div style={{ width: "100%" }}>
          <div className="reveal" style={homeStyles.intro}>
            <span style={homeStyles.introDot} />
            <span>01 / Identity Profile</span>
            <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--border), transparent)", maxWidth: 200 }} />
          </div>

          <div style={homeStyles.grid}>
            <div>
              <h1 className="reveal d1" style={homeStyles.title}>
                복잡한 시스템을<br/>
                안전하고 <em style={{ fontStyle: "italic", color: "var(--accent-hi)", fontFamily: "var(--serif)" }}>읽기 쉬운</em><br/>
                인터페이스로 만드는<br/>
                <span style={{ color: "var(--fg-muted)", fontSize: "0.6em", fontFamily: "var(--sans)", fontWeight: 300, letterSpacing: "-0.01em" }}>프론트엔드 엔지니어,</span><br/>
                <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)" }}>권경민</span>
                <span style={{ color: "var(--fg-muted)" }}>.</span>
              </h1>

              <div className="reveal d2" style={homeStyles.tags}>
                {["Frontend Engineer", "System UI", "Performance", "Security-minded"].map(t => (
                  <span key={t} style={homeStyles.tag}>{t}</span>
                ))}
              </div>

              <div className="reveal d3" style={homeStyles.buttonRow}>
                <button style={homeStyles.btnPrimary} onClick={() => onNav("projects")}>
                  프로젝트 보기 →
                </button>
                <button style={homeStyles.btnGhost} onClick={() => onNav("resume")}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"/></svg>
                  이력서 (PDF)
                </button>
              </div>
            </div>

            <div className="reveal d4" style={homeStyles.rightStream}>
              {[
                ["01", "LOG STREAM",   "80K/sec"],
                ["02", "WORKER INDEX", "1M rows"],
                ["03", "SECURE LAYER", "0 plain"],
                ["04", "DESIGN TOKEN", "v2.4.1"],
              ].map(([i, l, v]) => (
                <div key={l} style={homeStyles.streamRow}>
                  <span style={{ color: "var(--accent)" }}>{i}</span>
                  <span style={{ flex: 1, padding: "0 16px", letterSpacing: "0.16em" }}>{l}</span>
                  <span style={{ color: "var(--fg)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={homeStyles.statsRow}>
            <div className="reveal d2" style={{ ...homeStyles.stat, ...homeStyles.statFirst }}>
              <div>
                <span style={homeStyles.statValue}>80K</span>
                <span style={homeStyles.statUnit}>logs/sec</span>
              </div>
              <div style={homeStyles.statDesc}>실시간 처리 경험</div>
            </div>
            <div className="reveal d3" style={homeStyles.stat}>
              <div><span style={homeStyles.statValue}>2</span><span style={homeStyles.statUnit}>sec</span></div>
              <div style={homeStyles.statDesc}>1M 로그 검색<br/>Web Worker 최적화</div>
            </div>
            <div className="reveal d4" style={homeStyles.stat}>
              <div><span style={homeStyles.statValue}>0</span></div>
              <div style={homeStyles.statDesc}>Wireshark 평문 노출<br/>RSA/AES 암호화 설계</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS preview */}
      <section style={{ marginTop: 120 }}>
        <div className="marker">
          <span className="num">02</span>
          <span>Selected Work</span>
          <span className="bar" />
          <button onClick={() => onNav("projects")} style={{ background: "none", border: 0, color: "var(--fg-muted)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em" }}>
            ALL →
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {PROJECTS.slice(0, 4).map((p, i) => (
            <div key={p.id}
              onClick={() => onNav("detail", p.id)}
              className="reveal"
              style={{
                animationDelay: `${0.06 * i}s`,
                padding: 28, borderRadius: 14,
                border: "1px solid var(--border)",
                background: "color-mix(in oklab, var(--bg-elev) 60%, transparent)",
                backdropFilter: "blur(12px)",
                cursor: "pointer", transition: "all .35s",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100,
                background: `radial-gradient(circle at top right, ${p.color}33, transparent 70%)`,
                pointerEvents: "none" }} />
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-dim)" }}>
                <span>0{i+1} · {p.year}</span>
                <span style={{ color: p.color }}>●</span>
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, fontWeight: 500, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{p.title}</h3>
              <div style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 18 }}>{p.subtitle}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: "var(--mono)", fontSize: 10, padding: "3px 8px", border: "1px dashed var(--border-hi)", borderRadius: 999, color: "var(--fg-muted)" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS preview */}
      <section style={{ marginTop: 120 }}>
        <div className="marker">
          <span className="num">03</span>
          <span>Skills · Stack</span>
          <span className="bar" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          {SKILLS.map((s, i) => (
            <div key={s.group} className="reveal" style={{
              animationDelay: `${0.05 * i}s`,
              padding: 24, background: "var(--bg-elev)",
            }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14 }}>
                0{i+1} · {s.group}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {s.items.map(it => (
                  <li key={it} style={{ fontSize: 13, padding: "5px 0", color: "var(--fg)", fontFamily: "var(--sans)" }}>
                    <span style={{ color: "var(--fg-dim)", marginRight: 8 }}>·</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About preview / quote */}
      <section style={{ marginTop: 140, marginBottom: 80, textAlign: "center" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--fg-dim)", marginBottom: 28 }}>
          — STATEMENT
        </div>
        <p style={{
          fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 400, lineHeight: 1.25,
          letterSpacing: "-0.01em", maxWidth: 880, margin: "0 auto",
          textWrap: "balance",
        }}>
          좋은 인터페이스는 <em style={{ color: "var(--accent-hi)" }}>복잡한 시스템에 대해</em> 거짓말하지 않는다.
          <br/>
          <span style={{ color: "var(--fg-muted)" }}>
            그저 그것을 <em style={{ color: "var(--fg)" }}>읽을 수 있게</em> 만들 뿐이다.
          </span>
        </p>
        <div style={{ marginTop: 36 }}>
          <button style={homeStyles.btnGhost} onClick={() => onNav("about")}>
            About me →
          </button>
        </div>
      </section>
    </div>
  );
};

window.HomePage = HomePage;
