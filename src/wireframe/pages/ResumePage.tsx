import React from "react";
import { TIMELINE, SKILLS, PROJECTS } from "../data";
import { careerData } from "../../component/Body/Home/skills/career/careerData";
import { openSourceData } from "../../component/Body/Home/skills/opensource/openSourceData";

const ENGINEERING_QUALITY_ITEMS: { label: string; desc: string }[] = [
  {
    label: "GitHub Actions CI/CD",
    desc: "Push·PR 트리거 기반 빌드/테스트/배포 파이프라인 구축. 릴리스 전 회귀 검증 자동화로 휴먼 에러 차단.",
  },
  {
    label: "Vitest 테스트 커버리지 100%",
    desc: "라이브러리 핵심 로직에 대한 단위/통합 테스트 운영. 커버리지 100% 유지로 리팩토링 안정성 확보.",
  },
];

const ResumePage: React.FC = () => {
  const stats: { v: string; d: string }[] = [
    { v: "3y+",  d: "Frontend Experience" },
    { v: `${PROJECTS.length}`, d: "Shipped Projects" },
    { v: "80K/s", d: "Best Performance" },
    { v: "0",     d: "Wireshark 평문 노출" },
  ];

  return (
    <div className="page-fade">
      <div
        style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "baseline", marginBottom: 8, gap: 16, flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em",
            color: "var(--fg-dim)",
          }}
        >
          CURRICULUM · v2026.05
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "9px 16px", borderRadius: 8,
              background: "var(--accent)", color: "white", border: 0,
              fontSize: 12, fontWeight: 600, textDecoration: "none",
            }}
          >
            ↓ PDF
          </a>
          <button
            style={{
              padding: "9px 16px", borderRadius: 8,
              background: "transparent", color: "var(--fg-muted)",
              border: "1px solid var(--border)", fontSize: 12, cursor: "pointer",
            }}
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
      </div>

      <h1
        className="reveal"
        style={{
          fontFamily: "var(--serif)", fontSize: "clamp(36px, 4.5vw, 64px)",
          fontWeight: 400, letterSpacing: "-0.02em",
          lineHeight: 1.05, margin: "0 0 8px",
        }}
      >
        권경민
      </h1>
      <div className="reveal d1" style={{ fontSize: 14, color: "var(--fg-muted)", marginBottom: 56 }}>
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent-hi)" }}>Frontend</em>
        {" × "}
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent-hi)" }}>System</em>
        {" × "}
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent-hi)" }}>Security</em>
      </div>

      {/* Stats */}
      <div
        className="reveal d2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16, marginBottom: 80,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.d}
            style={{
              padding: 28, borderRadius: 14,
              border: "1px solid var(--border)",
              background: "linear-gradient(135deg, var(--accent-soft), transparent)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--serif)", fontSize: 32, fontWeight: 500,
                color: "var(--accent-hi)", lineHeight: 1, letterSpacing: "-0.015em",
              }}
            >
              {s.v}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)", fontSize: 11,
                color: "var(--fg-muted)", marginTop: 12,
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}
            >
              {s.d}
            </div>
          </div>
        ))}
      </div>

      {/* Career timeline */}
      <div style={{ marginBottom: 80 }}>
        <div className="wf-marker">
          <span className="num">·</span><span>Career timeline</span><span className="bar" />
        </div>
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div
            style={{
              position: "absolute", left: 12, top: 0, bottom: 0,
              width: 2, background: "var(--border)",
            }}
          />
          {TIMELINE.map((t, i) => (
            <div
              key={`${t.y}-${i}`}
              className="reveal"
              style={{ animationDelay: `${0.05 * i}s`, position: "relative", paddingBottom: 32 }}
            >
              <div
                style={{
                  position: "absolute", left: -27, top: 6,
                  width: 16, height: 16, borderRadius: 8,
                  background: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--bg), 0 0 16px var(--accent-glow)",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--mono)", fontSize: 11,
                  color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 4,
                }}
              >
                {t.y}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)", fontSize: 16, fontWeight: 500,
                  letterSpacing: "-0.005em",
                }}
              >
                {t.role}
              </div>
              <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 2 }}>
                {t.org}{t.detail ? ` · ${t.detail}` : ""}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career detail (from careerData) */}
      <div style={{ marginBottom: 80 }}>
        <div className="wf-marker">
          <span className="num">·</span><span>Experience detail</span><span className="bar" />
        </div>
        <div style={{ display: "grid", gap: 32 }}>
          {careerData.map((c) => (
            <div
              key={c.id}
              className="reveal"
              style={{ padding: 32, borderRadius: 14, border: "1px solid var(--border)", background: "var(--bg-elevated)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.005em" }}>
                    {c.position}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 4 }}>
                    {c.company} · {c.department}
                  </div>
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--accent)" }}>
                  {c.period}
                </div>
              </div>
              {c.transition && (
                <div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                  {c.transition}
                </div>
              )}
              <div style={{ display: "grid", gap: 20 }}>
                {c.projects.map((proj) => (
                  <div
                    key={proj.name}
                    style={{
                      padding: 20, borderRadius: 10,
                      border: "1px solid var(--border)", background: "var(--bg-soft)",
                    }}
                  >
                    <div style={{ fontFamily: "var(--serif)", fontSize: 15, fontWeight: 500, marginBottom: 6 }}>
                      {proj.name}
                    </div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em", marginBottom: 8 }}>
                      {proj.role} · {proj.period}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.65, marginBottom: 12 }}>
                      <strong style={{ color: "var(--accent-hi)" }}>{proj.impact}</strong>
                    </div>
                    {proj.achievements && proj.achievements.length > 0 && (
                      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        {proj.achievements.map((a, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: 13, color: "var(--fg-muted)",
                              lineHeight: 1.6, padding: "4px 0",
                              display: "flex", gap: 10,
                            }}
                          >
                            <span style={{ color: "var(--accent)", marginTop: 2 }}>·</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Source & Engineering Quality */}
      <div style={{ marginBottom: 80 }}>
        <div className="wf-marker">
          <span className="num">·</span>
          <span>Open Source &amp; Engineering Quality</span>
          <span className="bar" />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 24,
          }}
        >
          {openSourceData.map((pkg) => (
            <div
              key={pkg.id}
              className="reveal"
              style={{
                padding: 24,
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--bg-elevated)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--accent-hi)",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {pkg.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: "var(--fg-muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  v{pkg.version}
                </div>
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "var(--fg-muted)",
                  lineHeight: 1.65,
                }}
              >
                {pkg.description}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {pkg.techStack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      padding: "3px 8px",
                      borderRadius: 999,
                      border: "1px solid var(--accent-border)",
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
                {pkg.githubUrl && (
                  <a
                    href={pkg.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--fg-muted)",
                      letterSpacing: "0.06em",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--border)",
                      paddingBottom: 2,
                    }}
                  >
                    GITHUB ↗
                  </a>
                )}
                {pkg.npmUrl && (
                  <a
                    href={pkg.npmUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--fg-muted)",
                      letterSpacing: "0.06em",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--border)",
                      paddingBottom: 2,
                    }}
                  >
                    NPM ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {ENGINEERING_QUALITY_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                padding: 20,
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--fg-muted)",
                  lineHeight: 1.65,
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills + Education */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 56, marginBottom: 80 }}>
        <div>
          <div className="wf-marker"><span className="num">·</span><span>Skills</span><span className="bar" /></div>
          {SKILLS.map((s) => (
            <div key={s.group} style={{ padding: "18px 0", borderTop: "1px solid var(--border)" }}>
              <div
                style={{
                  fontFamily: "var(--mono)", fontSize: 10,
                  color: "var(--accent)", letterSpacing: "0.16em",
                  textTransform: "uppercase", marginBottom: 8,
                }}
              >
                {s.group}
              </div>
              <div style={{ fontSize: 14, color: "var(--fg)", lineHeight: 1.6 }}>{s.items.join(" · ")}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="wf-marker"><span className="num">·</span><span>Education &amp; Awards</span><span className="bar" /></div>
          {[
            ["2019 — 2024", "Ajou University", "Computer Engineering · 사이버보안 전공 · B.S."],
            ["2023",        "GDSC Solution Challenge", "Vary Recycle · Google AI 솔루션 챌린지 출품"],
            ["2024",        "교내 캡스톤 디자인",       "모강(SW 강의 비교 플랫폼) — 5위 / 25팀"],
          ].map(([y, t, d]) => (
            <div key={t} style={{ padding: "18px 0", borderTop: "1px solid var(--border)" }}>
              <div
                style={{
                  fontFamily: "var(--mono)", fontSize: 10,
                  color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 6,
                }}
              >
                {y}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)", fontSize: 15, fontWeight: 500,
                  letterSpacing: "-0.005em",
                }}
              >
                {t}
              </div>
              <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 2 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
