import React from "react";
import { Link } from "react-router-dom";
import { TIMELINE } from "../data";

const AboutPage: React.FC = () => {
  return (
    <div className="page-fade">
      <div className="wf-marker">
        <span className="num">04</span><span>About</span><span className="bar" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 280px) minmax(0, 1fr)",
          gap: 56, alignItems: "start", marginBottom: 96,
        }}
      >
        <div
          className="reveal"
          style={{
            aspectRatio: "1/1.2", borderRadius: 14,
            background: "linear-gradient(135deg, var(--accent-soft), var(--bg-elevated))",
            border: "1px solid var(--border)",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <div
              style={{
                fontFamily: "var(--serif)", fontSize: 96, fontWeight: 500,
                color: "var(--accent-hi)", opacity: 0.7, letterSpacing: "-0.04em",
              }}
            >
              K
            </div>
          </div>
          <div
            style={{
              position: "absolute", left: 18, bottom: 18,
              fontFamily: "var(--mono)", fontSize: 10,
              color: "var(--fg-dim)", letterSpacing: "0.16em",
            }}
          >
            [ PORTRAIT · 2026 ]
          </div>
        </div>

        <div>
          <h1
            className="reveal d1"
            style={{
              fontFamily: "var(--serif)", fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 400, letterSpacing: "-0.02em",
              lineHeight: 1.05, margin: "0 0 28px",
            }}
          >
            안녕하세요,{" "}
            <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>권경민</em>
            입니다.
          </h1>
          <div
            className="reveal d2"
            style={{
              fontSize: 16, lineHeight: 1.75, color: "var(--fg-muted)",
              maxWidth: 620, marginBottom: 28,
            }}
          >
            <p style={{ margin: "0 0 18px" }}>
              저는 사이버보안 전공의 시각으로 시스템과 인터페이스를 설계하는 프론트엔드
              엔지니어입니다. 차량용 로그 분석기, 보안 통신 채팅, AI 시뮬레이션 — 도메인은
              달라도 모든 작업의 중심은 <em style={{ color: "var(--fg)", fontStyle: "italic" }}>"읽을 수 있는 시스템"</em>입니다.
            </p>
            <p style={{ margin: "0 0 18px" }}>
              초당 8만 건 이상의 차량 로그를 UI Freezing 없이 실시간 시각화하고, 100만
              라인을 2초 안에 검색하는 도구를 만들면서 — 성능과 보안은 디자인의 일부라는
              생각이 단단해졌습니다. 지금은 자율주행 시뮬레이션 도메인으로 영역을 확장하고
              있습니다.
            </p>
            <p style={{ margin: 0 }}>
              평소엔 글을 자주 씁니다. 기술이 도구가 아니라 <em style={{ color: "var(--fg)", fontStyle: "italic" }}>언어</em>가 되도록.
            </p>
          </div>
          <div className="reveal d3" style={{ display: "flex", gap: 12 }}>
            <Link
              to="/contact"
              style={{
                padding: "11px 20px", borderRadius: 10,
                background: "var(--accent)", color: "white",
                fontSize: 13, fontWeight: 600, textDecoration: "none",
              }}
            >
              같이 일하기 →
            </Link>
            <Link
              to="/blog"
              style={{
                padding: "11px 20px", borderRadius: 10,
                background: "transparent", color: "var(--fg-muted)",
                border: "1px solid var(--border)", fontSize: 13, textDecoration: "none",
              }}
            >
              글 읽기
            </Link>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ marginBottom: 100 }}>
        <div
          style={{
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em",
            color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 32,
          }}
        >
          — Timeline
        </div>
        {TIMELINE.map((row, i) => (
          <div
            key={`${row.y}-${row.role}`}
            className="reveal"
            style={{
              animationDelay: `${0.06 * i}s`,
              display: "grid",
              gridTemplateColumns: "100px 1fr 240px",
              gap: 32, padding: "28px 0",
              borderTop: "1px solid var(--border)",
              alignItems: "baseline",
            }}
          >
            <div
              style={{
                fontFamily: "var(--serif)", fontSize: 32, fontWeight: 500,
                color: "var(--accent-hi)", letterSpacing: "-0.01em",
              }}
            >
              {row.y}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                {row.role}
              </div>
              {row.detail && (
                <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 4 }}>
                  {row.detail}
                </div>
              )}
            </div>
            <div
              style={{
                fontSize: 13, color: "var(--fg-muted)", textAlign: "right",
                fontFamily: "var(--mono)", letterSpacing: "0.06em",
              }}
            >
              {row.org}
            </div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div style={{ marginBottom: 80 }}>
        <div className="wf-marker">
          <span className="num">·</span><span>What I care about</span><span className="bar" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            ["Truth in UI", "복잡한 시스템에 대해 거짓말하지 않는 인터페이스를 만듭니다. 80K logs/sec를 60fps로 유지한다고 말하려면, 진짜로 그래야 합니다."],
            ["Engineered craft", "성능과 보안은 디자인의 일부입니다. 평문 0건을 만들기 위한 RSA/AES 하이브리드 설계도, Web Worker 분리도 — 결국 사용자가 느끼는 견고함입니다."],
            ["Plain language", "코드도, 글도, 인터페이스도 — 읽히는 게 우선입니다. DDD 기반 도메인 슬라이스로 코드베이스를 30% 경량화한 이유도 같습니다."],
          ].map(([t, d], i) => (
            <div
              key={t}
              className="reveal"
              style={{
                animationDelay: `${0.08 * i}s`,
                padding: 28, borderRadius: 14,
                border: "1px solid var(--border)", background: "var(--bg-elevated)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500,
                  marginBottom: 10, letterSpacing: "-0.01em",
                }}
              >
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

export default AboutPage;
