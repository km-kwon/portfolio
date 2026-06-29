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
            fontFamily: "var(--serif)", fontSize: "clamp(34px, 4.5vw, 60px)",
            fontWeight: 400, letterSpacing: "-0.02em",
            lineHeight: 1.05, margin: "0 0 28px",
          }}
        >
          Let&apos;s <em style={{ fontStyle: "italic", color: "var(--accent-hi)" }}>build</em>
          <br />
          something <em style={{ fontStyle: "italic", color: "var(--accent)" }}>real</em>.
        </h1>

        <p
          className="reveal d2"
          style={{
            fontSize: 14, color: "var(--fg-muted)",
            maxWidth: 580, marginBottom: 48, lineHeight: 1.65,
          }}
        >
          사용자가 많은 정보를 놓치지 않고 탐색할 수 있는 화면, 오래 버티는 성능 구조, 보안 맥락의 UX에 관심이 있습니다.
          함께 논의할 일이 있다면 연락 주세요.
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
              fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500,
              letterSpacing: "-0.005em",
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
