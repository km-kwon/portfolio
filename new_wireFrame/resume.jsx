// RESUME · Option B — Visual stats + timeline

const ResumePage = ({ onNav }) => {
  return (
    <div className="page-fade">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, gap: 16, flexWrap: "wrap" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--fg-dim)" }}>
          CURRICULUM · v2026.05
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{
            padding: "9px 16px", borderRadius: 8,
            background: "var(--accent)", color: "white", border: 0,
            fontSize: 12, fontWeight: 600,
          }}>↓ PDF</button>
          <button style={{
            padding: "9px 16px", borderRadius: 8,
            background: "transparent", color: "var(--fg-muted)",
            border: "1px solid var(--border)", fontSize: 12,
          }}>Notion</button>
          <button style={{
            padding: "9px 16px", borderRadius: 8,
            background: "transparent", color: "var(--fg-muted)",
            border: "1px solid var(--border)", fontSize: 12,
          }}>Print</button>
        </div>
      </div>

      <h1 className="reveal" style={{
        fontFamily: "var(--serif)", fontSize: "clamp(64px, 9vw, 132px)", fontWeight: 400,
        letterSpacing: "-0.03em", lineHeight: 0.92, margin: "0 0 8px",
      }}>권경민</h1>
      <div className="reveal d1" style={{ fontSize: 17, color: "var(--fg-muted)", marginBottom: 56 }}>
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent-hi)" }}>Frontend</em>
        {" × "}
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent-hi)" }}>System</em>
        {" × "}
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent-hi)" }}>Security</em>
      </div>

      {/* Stats row */}
      <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 80 }}>
        {[
          ["6y",  "Experience"],
          ["12",  "Projects"],
          ["3",   "Companies"],
          ["80K/sec", "Best perf"],
        ].map(([v, d]) => (
          <div key={d} style={{
            padding: 28, borderRadius: 14,
            border: "1px solid var(--border)",
            background: `linear-gradient(135deg, var(--accent-soft), transparent)`,
          }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 56, fontWeight: 500, color: "var(--accent-hi)", lineHeight: 1, letterSpacing: "-0.02em" }}>{v}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-muted)", marginTop: 12, letterSpacing: "0.06em", textTransform: "uppercase" }}>{d}</div>
          </div>
        ))}
      </div>

      {/* Career timeline visual */}
      <div style={{ marginBottom: 80 }}>
        <div className="marker">
          <span className="num">·</span><span>Career timeline</span><span className="bar" />
        </div>
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div style={{ position: "absolute", left: 12, top: 0, bottom: 0, width: 2, background: "var(--border)" }} />
          {TIMELINE.map((t, i) => (
            <div key={t.y} className="reveal" style={{ animationDelay: `${0.05 * i}s`, position: "relative", paddingBottom: 32 }}>
              <div style={{
                position: "absolute", left: -27, top: 6,
                width: 16, height: 16, borderRadius: 8,
                background: "var(--accent)",
                boxShadow: "0 0 0 4px var(--bg), 0 0 16px var(--accent-glow)",
              }} />
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 4 }}>{t.y}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>{t.role}</div>
              <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 2 }}>{t.org}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills + Education side by side */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginBottom: 80 }}>
        <div>
          <div className="marker"><span className="num">·</span><span>Skills</span><span className="bar" /></div>
          {SKILLS.map((s, i) => (
            <div key={s.group} style={{ padding: "18px 0", borderTop: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>{s.group}</div>
              <div style={{ fontSize: 14, color: "var(--fg)" }}>{s.items.join(" · ")}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="marker"><span className="num">·</span><span>Education & Awards</span><span className="bar" /></div>
          {[
            ["2020 — 2024", "Ajou University", "Computer Engineering · B.S."],
            ["2023", "GDSC Solution Challenge", "Top 100 Global · vary-recycle"],
            ["2022", "Hackathon Winner", "Mobile Sec Co. · 1st place"],
          ].map(([y, t, d], i) => (
            <div key={i} style={{ padding: "18px 0", borderTop: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 6 }}>{y}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 2 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.ResumePage = ResumePage;
