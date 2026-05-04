// PROJECT DETAIL · Option B — Full-bleed cover

const DetailPage = ({ projectId, onNav }) => {
  const p = PROJECTS.find(x => x.id === projectId) || PROJECTS[0];
  const idx = PROJECTS.indexOf(p);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <div className="page-fade">
      <button onClick={() => onNav("projects")} style={{
        background: "none", border: 0, color: "var(--fg-muted)",
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em",
        padding: 0, marginBottom: 28,
      }}>← /projects</button>

      {/* Full-bleed cover */}
      <div className="reveal" style={{
        position: "relative",
        height: 480, overflow: "hidden", borderRadius: 16,
        background: "var(--bg-elev)",
        border: "1px solid var(--border)",
        marginBottom: 56,
      }}>
        {/* 3D mini scene */}
        <div style={{ position: "absolute", inset: 0 }}>
          <MiniThumb color={p.color} variant={idx % 4} active />
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, transparent 30%, color-mix(in oklab, var(--bg) 85%, transparent) 100%)`,
        }} />
        <div style={{
          position: "absolute", left: 40, bottom: 40, right: 40,
          display: "flex", justifyContent: "space-between", alignItems: "end", gap: 32,
        }}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", color: p.color, marginBottom: 12 }}>
              CASE 0{idx + 1} · {p.year}
            </div>
            <h1 style={{
              fontFamily: "var(--serif)", fontSize: "clamp(48px, 6vw, 92px)", fontWeight: 400,
              letterSpacing: "-0.02em", lineHeight: 0.98, margin: 0,
            }}>{p.title}</h1>
            <div style={{ marginTop: 16, fontSize: 16, color: "var(--fg-muted)", maxWidth: 520 }}>
              {p.subtitle}
            </div>
          </div>
        </div>
      </div>

      {/* Meta strip */}
      <div className="reveal d1" style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1,
        background: "var(--border)", border: "1px solid var(--border)",
        borderRadius: 12, overflow: "hidden", marginBottom: 64,
      }}>
        {[
          ["Role", p.role],
          ["Year", p.year],
          ["Stack", p.stack.slice(0, 2).join(" / ")],
          ["Status", "Shipped"],
        ].map(([k, v]) => (
          <div key={k} style={{ padding: "20px 24px", background: "var(--bg-elev)" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 8 }}>{k}</div>
            <div style={{ fontSize: 14, color: "var(--fg)" }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: 80, marginBottom: 80 }}>
        <div>
          <h2 className="reveal" style={{ fontFamily: "var(--serif)", fontSize: 36, fontWeight: 500, margin: "0 0 4px", letterSpacing: "-0.01em" }}>
            왜 이 프로젝트인가
          </h2>
          <div style={{ width: 60, height: 1, background: "var(--accent)", marginTop: 16 }} />
        </div>
        <div className="reveal d1" style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fg-muted)" }}>
          <p style={{ margin: "0 0 24px" }}>
            {p.summary}
          </p>
          <p style={{ margin: "0 0 24px" }}>
            기존 시스템은 메인 스레드에서 모든 파싱과 검색을 처리해 1만 라인만 넘어도 UI가 얼어붙었습니다.
            우리는 이 문제를 단순한 "최적화"가 아니라 <em style={{ color: "var(--fg)", fontStyle: "italic" }}>아키텍처 차원에서 다시 그려야 한다</em>고 봤습니다.
          </p>
          <p style={{ margin: 0 }}>
            데이터 파이프라인을 Web Worker로 분리하고, 메인 스레드는 오직 렌더링만 책임지도록 — 그러자 1M 라인이 들어와도 60fps가 유지됐습니다.
          </p>
        </div>
      </div>

      {/* Inline media */}
      <div className="reveal" style={{
        height: 360, marginBottom: 80,
        borderRadius: 14, border: "1px solid var(--border)",
        background: "var(--bg-elev)", position: "relative", overflow: "hidden",
        display: "grid", placeItems: "center",
      }}>
        <MiniThumb color={p.color} variant={(idx + 1) % 4} />
        <div style={{ position: "relative", fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-dim)", letterSpacing: "0.16em" }}>
          [ DEMO · {p.title.toUpperCase()} ]
        </div>
      </div>

      {/* Results */}
      <div style={{ marginBottom: 100 }}>
        <div className="marker">
          <span className="num">04</span><span>Result</span><span className="bar" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${p.metrics.length}, 1fr)`, gap: 24 }}>
          {p.metrics.map((m, i) => (
            <div key={i} className="reveal" style={{
              animationDelay: `${0.08 * i}s`,
              padding: 36, borderRadius: 14,
              border: `1px solid ${p.color}33`,
              background: `linear-gradient(135deg, ${p.color}0d, transparent)`,
            }}>
              <div style={{
                fontFamily: "var(--serif)", fontSize: 80, fontWeight: 500, color: p.color,
                lineHeight: 1, letterSpacing: "-0.03em",
              }}>{m.v}</div>
              <div style={{ marginTop: 14, fontSize: 13, color: "var(--fg-muted)" }}>{m.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack chips */}
      <div className="reveal" style={{ marginBottom: 100 }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 16 }}>
          Tech stack
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {p.stack.map(s => (
            <span key={s} style={{
              fontFamily: "var(--mono)", fontSize: 12, padding: "8px 14px", borderRadius: 8,
              border: "1px solid var(--border)", color: "var(--fg)", background: "var(--bg-elev)",
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Next project */}
      <div onClick={() => onNav("detail", next.id)} style={{
        padding: "44px 48px", borderRadius: 16,
        border: "1px solid var(--border)", background: "var(--bg-elev)",
        cursor: "pointer", transition: "all .35s",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = next.color; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
      >
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--fg-dim)", marginBottom: 8 }}>
            NEXT CASE →
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.01em" }}>
            {next.title}
          </div>
        </div>
        <div style={{ fontSize: 32, color: next.color }}>→</div>
      </div>
    </div>
  );
};

window.DetailPage = DetailPage;
