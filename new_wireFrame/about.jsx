// ABOUT · Option A — Photo + timeline

const AboutPage = ({ onNav }) => {
  return (
    <div className="page-fade">
      <div className="marker">
        <span className="num">04</span><span>About</span><span className="bar" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(220px, 280px) minmax(0, 1fr)", gap: 56, alignItems: "start", marginBottom: 96 }}>
        <div className="reveal" style={{
          aspectRatio: "1/1.2", borderRadius: 14,
          background: `linear-gradient(135deg, var(--accent-soft), var(--bg-elev))`,
          border: "1px solid var(--border)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <div style={{
              fontFamily: "var(--serif)", fontSize: 96, fontWeight: 500,
              color: "var(--accent-hi)", opacity: 0.7,
              letterSpacing: "-0.04em",
            }}>K</div>
          </div>
          <div style={{ position: "absolute", left: 18, bottom: 18, fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-dim)", letterSpacing: "0.16em" }}>
            [ PORTRAIT · 2026 ]
          </div>
        </div>

        <div>
          <h1 className="reveal d1" style={{
            fontFamily: "var(--serif)", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 400,
            letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 28px",
          }}>
            안녕하세요, <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>권경민</em>입니다.
          </h1>
          <div className="reveal d2" style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fg-muted)", maxWidth: 620, marginBottom: 28 }}>
            <p style={{ margin: "0 0 18px" }}>
              저는 6년차 프론트엔드 엔지니어입니다. 시스템 UI, 성능, 보안 — 이 세 가지 축에서 일해 왔어요.
            </p>
            <p style={{ margin: "0 0 18px" }}>
              제가 가장 좋아하는 순간은 <em style={{ color: "var(--fg)", fontStyle: "italic" }}>"이게 가능하다고요?"</em> 라고 묻는 동료를 보는 때입니다.
              불가능해 보이는 인터페이스를 가능하게 만드는 일을 좋아합니다.
            </p>
            <p style={{ margin: 0 }}>
              요즘은 WebGL과 컴파일러 내부 동작에 관심이 많고, 글을 자주 씁니다.
            </p>
          </div>
          <div className="reveal d3" style={{ display: "flex", gap: 12 }}>
            <button onClick={() => onNav("contact")} style={{
              padding: "11px 20px", borderRadius: 10,
              background: "var(--accent)", color: "white", border: 0,
              fontSize: 13, fontWeight: 600,
            }}>같이 일하기 →</button>
            <button onClick={() => onNav("blog")} style={{
              padding: "11px 20px", borderRadius: 10,
              background: "transparent", color: "var(--fg-muted)",
              border: "1px solid var(--border)", fontSize: 13,
            }}>글 읽기</button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ marginBottom: 100 }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 32 }}>
          — Timeline
        </div>
        {TIMELINE.map((row, i) => (
          <div key={row.y} className="reveal" style={{
            animationDelay: `${0.06 * i}s`,
            display: "grid", gridTemplateColumns: "100px 1fr 200px",
            gap: 32, padding: "28px 0",
            borderTop: "1px solid var(--border)",
            alignItems: "baseline",
          }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 32, fontWeight: 500, color: "var(--accent-hi)", letterSpacing: "-0.01em" }}>
              {row.y}
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>
              {row.role}
            </div>
            <div style={{ fontSize: 13, color: "var(--fg-muted)", textAlign: "right", fontFamily: "var(--mono)", letterSpacing: "0.06em" }}>
              {row.org}
            </div>
          </div>
        ))}
      </div>

      {/* Values strip */}
      <div style={{ marginBottom: 80 }}>
        <div className="marker">
          <span className="num">·</span><span>What I care about</span><span className="bar" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            ["Truth in UI", "복잡한 시스템에 대해 거짓말하지 않는 인터페이스."],
            ["Engineered craft", "성능과 보안은 디자인의 일부다."],
            ["Plain language", "코드도, 글도, 인터페이스도 — 읽히는 게 우선."],
          ].map(([t, d], i) => (
            <div key={t} className="reveal" style={{
              animationDelay: `${0.08 * i}s`,
              padding: 28, borderRadius: 14,
              border: "1px solid var(--border)",
              background: "var(--bg-elev)",
            }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500, marginBottom: 10, letterSpacing: "-0.01em" }}>
                <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>{t}</em>
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-muted)" }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.AboutPage = AboutPage;
