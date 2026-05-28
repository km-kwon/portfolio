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
            복잡한 데이터 흐름과 사용자 작업 흐름 사이의{" "}
            <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>병목</em>
            을 찾습니다.
          </h1>
          <div
            className="reveal d2 about-copy"
            style={{
              fontSize: 16, lineHeight: 1.75, color: "var(--fg-muted)",
              maxWidth: 620, marginBottom: 28,
            }}
          >
            <p style={{ margin: "0 0 18px" }}>
              저는 복잡한 데이터 흐름을 사용자가 판단하기 쉬운 인터페이스로 정리하는
              프론트엔드 엔지니어 권경민입니다. 차량 로그 분석 도구에서 초당 80,000건
              로그를 UI 멈춤 없이 시각화했고, 100만 행 CSV Export를 3초 안에 처리하며
              메모리 사용량을 60% 줄였습니다.
            </p>
            <p style={{ margin: "0 0 18px" }}>
              단순히 빠르게 만드는 것보다, 사용자가 분석 맥락을 잃지 않고 다음 판단으로
              넘어가게 만드는 구조를 중요하게 봅니다. Global State를 Local State와
              도메인 단위 구조로 재정리해 리렌더링을 줄였고, 반복되는 로직은 npm 패키지와
              테스트 가능한 모듈로 분리했습니다.
            </p>
            <p style={{ margin: 0 }}>
              기술을 도입할 때는 먼저 "굳이 이 방식이 맞나?"를 묻습니다. 성능, 유지보수성,
              테스트 가능성, 그리고 실제 사용자가 헤매지 않는 흐름을 함께 봅니다.
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
            ["Workflow first", "성능 수치가 좋아져도 사용자가 다음 판단으로 넘어가지 못하면 개선이 부족하다고 봅니다. 분석 흐름, 패널 배치, Export 실패 리스크까지 작업 단위로 봅니다."],
            ["State boundaries", "모든 상태를 전역으로 올리지 않습니다. 변경 영향 범위와 리렌더링 비용을 기준으로 Local State, Domain State, Store의 경계를 나눕니다."],
            ["Reusable proof", "반복되는 로직은 사내 유틸에만 두지 않고 테스트 가능한 모듈로 분리합니다. npm 패키지와 CI/CD는 그런 기준을 검증한 결과입니다."],
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
