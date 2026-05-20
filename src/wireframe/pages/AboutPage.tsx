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
            시스템의 복잡도를{" "}
            <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>읽기 쉬운 인터페이스</em>
            로 정리합니다.
          </h1>
          <div
            className="reveal d2"
            style={{
              fontSize: 16, lineHeight: 1.75, color: "var(--fg-muted)",
              maxWidth: 620, marginBottom: 28,
            }}
          >
            <p style={{ margin: "0 0 18px" }}>
              저는 사이버보안 전공을 바탕으로 시스템의 복잡도를 인터페이스로 정리하는
              프론트엔드 엔지니어 권경민입니다. 차량 로그 분석기, 보안 통신 도구, AI
              시뮬레이션 환경처럼 신뢰성과 성능이 중요한 도메인에서 데이터를 다루는 UI를
              만들어 왔습니다.
            </p>
            <p style={{ margin: "0 0 18px" }}>
              초당 8만 건 이상의 차량 로그를 UI 멈춤 없이 시각화하고, 100만 라인 이상의
              로그를 빠르게 탐색하는 도구를 만들며 성능과 보안이 사용자 경험의 일부라는
              기준을 세웠습니다. 지금은 CARLA 기반 자율주행 시뮬레이션과 AI 모델 검증
              환경으로 경험을 확장하고 있습니다.
            </p>
            <p style={{ margin: 0 }}>
              구현한 내용을 팀이 다시 읽고 확장할 수 있도록 문서와 글로 남기는 일에도
              관심이 많습니다.
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
              연락하기 →
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
            ["Evidence in UI", "인터페이스가 보여주는 수치와 상태는 실제 동작을 설명해야 한다고 생각합니다. 80K logs/sec처럼 큰 수치일수록 측정 기준과 재현 가능한 흐름을 함께 남깁니다."],
            ["Performance as UX", "성능과 보안은 별도의 체크리스트가 아니라 사용자가 느끼는 신뢰감입니다. Web Worker 분리, 가상 스크롤, RSA/AES 설계를 그런 관점에서 선택했습니다."],
            ["Readable systems", "코드, 문서, 화면은 결국 다시 읽히기 위해 존재합니다. 도메인 단위로 구조를 정리하고 구현 의도를 문장으로 남기는 일을 중요하게 봅니다."],
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
