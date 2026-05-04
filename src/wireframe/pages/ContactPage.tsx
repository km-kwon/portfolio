import React from "react";
import { SOCIAL_LINKS } from "../data";

const ContactPage: React.FC = () => {
  return (
    <div
      className="page-fade"
      style={{
        minHeight: "calc(100vh - var(--header-h) - 120px)",
        display: "flex", alignItems: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          className="reveal"
          style={{
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em",
            color: "var(--fg-dim)", marginBottom: 36,
            display: "flex", alignItems: "center", gap: 12,
          }}
        >
          <span
            style={{
              width: 8, height: 8, borderRadius: 4,
              background: "var(--accent)", boxShadow: "0 0 16px var(--accent-glow)",
            }}
          />
          06 / END OF SCENE
        </div>

        <h1
          className="reveal d1"
          style={{
            fontFamily: "var(--serif)", fontSize: "clamp(64px, 9vw, 140px)",
            fontWeight: 400, letterSpacing: "-0.03em",
            lineHeight: 0.95, margin: "0 0 32px",
          }}
        >
          Let&apos;s <em style={{ fontStyle: "italic", color: "var(--accent-hi)" }}>build</em>
          <br />
          something <em style={{ fontStyle: "italic", color: "var(--accent)" }}>real</em>.
        </h1>

        <p
          className="reveal d2"
          style={{
            fontSize: 18, color: "var(--fg-muted)",
            maxWidth: 580, marginBottom: 56, lineHeight: 1.6,
          }}
        >
          시스템 UI / 성능 / 보안 — 도메인은 다양해도 좋습니다. 풀타임 합류, 외주
          협업, 기술 멘토링까지 환영합니다. 24시간 안에 답장드립니다.
        </p>

        <a
          href="mailto:lanos0609@gmail.com"
          className="reveal d3"
          style={{
            display: "inline-block", padding: "28px 36px", borderRadius: 16,
            border: "1px solid var(--accent)",
            background: "linear-gradient(135deg, var(--accent-soft), transparent)",
            marginBottom: 40, cursor: "pointer", transition: "all .3s",
            textDecoration: "none", color: "inherit",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <div
            style={{
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
              color: "var(--fg-dim)", marginBottom: 8,
            }}
          >
            EMAIL ↗
          </div>
          <div
            style={{
              fontFamily: "var(--serif)", fontSize: 32, fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            lanos0609@gmail.com
          </div>
        </a>

        <div className="reveal d4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                padding: "14px 20px", borderRadius: 10,
                border: "1px solid var(--border)", background: "var(--bg-elevated)",
                fontSize: 13, color: "var(--fg-muted)",
                display: "inline-flex", alignItems: "center", gap: 10,
                transition: "all .25s", textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <span style={{ color: "var(--accent)" }}>↗</span>
              <span style={{ fontFamily: "var(--mono)" }}>{s.label}</span>
              <span style={{ color: "var(--fg-dim)", fontSize: 11 }}>{s.host}</span>
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: 100, paddingTop: 32, borderTop: "1px solid var(--border)",
            display: "flex", justifyContent: "space-between",
            fontFamily: "var(--mono)", fontSize: 11,
            color: "var(--fg-dim)", letterSpacing: "0.06em",
          }}
        >
          <span>SEOUL · KST · UTC+9</span>
          <span>v2026.05 · Updated May 4</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
