import React from "react";
import { Link } from "react-router-dom";
import { TIMELINE } from "../data";
import profileImage from "../../assets/profile.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="page-fade">
      <div className="wf-marker">
        <span className="num">04</span><span>About</span><span className="bar" />
      </div>

      <div
        className="about-hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 280px) minmax(0, 1fr)",
          gap: 56, alignItems: "start", marginBottom: 96,
        }}
      >
        <div
          className="reveal about-portrait"
          style={{
            aspectRatio: "1/1.2", borderRadius: 14,
            background: "linear-gradient(135deg, var(--accent-soft), var(--bg-elevated))",
            border: "1px solid var(--border)",
            position: "relative", overflow: "hidden",
          }}
        >
          <img
            src={profileImage}
            alt="권경민 프로필"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              background:
                "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.45) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute", left: 18, bottom: 18,
              fontFamily: "var(--mono)", fontSize: 10,
              color: "rgba(255,255,255,0.78)", letterSpacing: "0.16em",
            }}
          >
            [ PORTRAIT · 2026 ]
          </div>
        </div>

        <div>
          <h1
            className="reveal d1"
            style={{
              fontFamily: "var(--serif)", fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 400, letterSpacing: "-0.015em",
              lineHeight: 1.2, margin: "0 0 24px",
            }}
          >
            화면의 병목은{" "}
            <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>코드와 사용 흐름</em>
            {" "}사이에 있습니다.
          </h1>
          <div
            className="reveal d2 about-copy"
            style={{
              fontSize: 16, lineHeight: 1.75, color: "var(--fg-muted)",
              maxWidth: 620, marginBottom: 28,
            }}
          >
            <p style={{ margin: "0 0 18px" }}>
              프론트엔드 엔지니어 권경민입니다. 대용량 UI, Export, 상태 구조를 다루며 화면의 대기와 회귀 리스크를 줄여왔습니다.
            </p>
            <p style={{ margin: "0 0 18px" }}>
              기술을 고르기 전 병목의 위치를 먼저 봅니다. 반복 로직은 테스트 가능한 모듈로 분리합니다.
            </p>
          </div>
          <div className="reveal d3 about-cta-row" style={{ display: "flex", gap: 12 }}>
            <Link
              to="/contact"
              style={{
                padding: "11px 20px", borderRadius: 10,
                background: "var(--accent)", color: "white",
                fontSize: 13, fontWeight: 600, textDecoration: "none",
              }}
            >
              대화 시작하기 →
            </Link>
            <Link
              to="/blog"
              style={{
                padding: "11px 20px", borderRadius: 10,
                background: "transparent", color: "var(--fg-muted)",
                border: "1px solid var(--border)", fontSize: 13, textDecoration: "none",
              }}
            >
              기술 글 보기
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
            className="reveal about-timeline-row"
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
                fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500,
                color: "var(--accent-hi)", letterSpacing: "-0.01em",
              }}
            >
              {row.y}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--serif)", fontSize: 16, fontWeight: 500,
                  letterSpacing: "-0.005em",
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
              className="about-timeline-org"
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
        <div className="about-values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            ["Flow first", "화면 속도는 사용자가 실제로 기다리는 지점에서 측정합니다."],
            ["State split", "상태는 변경 영향 범위와 렌더링 비용 기준으로 나눕니다."],
            ["Reusable", "반복 로직은 테스트와 배포 기준까지 함께 분리합니다."],
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
                  fontFamily: "var(--serif)", fontSize: 17, fontWeight: 500,
                  marginBottom: 10, letterSpacing: "-0.005em",
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
