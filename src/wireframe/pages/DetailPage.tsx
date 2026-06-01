import React from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data";
import MiniThumb from "../layout/MiniThumb";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const idx = PROJECTS.findIndex((p) => p.id === id);
  const safeIdx = idx >= 0 ? idx : 0;
  const p = PROJECTS[safeIdx];
  const next = PROJECTS[(safeIdx + 1) % PROJECTS.length];

  if (!p) {
    return (
      <div style={{ paddingTop: 80 }}>
        프로젝트 정보를 찾을 수 없습니다.
        <Link to="/projects" style={{ color: "var(--accent)", marginLeft: 8 }}>
          ← 목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page page-fade">
      <Link
        to="/projects"
        style={{
          background: "none", color: "var(--fg-muted)",
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em",
          padding: 0, marginBottom: 28, display: "inline-block", textDecoration: "none",
        }}
      >
        ← /projects
      </Link>

      {/* Cover */}
      <div
        className="reveal project-detail-cover"
        style={{
          position: "relative", height: 480, overflow: "hidden",
          borderRadius: 16, background: "var(--bg-elevated)",
          border: "1px solid var(--border)", marginBottom: 56,
        }}
      >
        {p.banner ? (
          <img
            src={p.banner}
            alt={p.title}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%", objectFit: "cover",
              opacity: 0.58, filter: "saturate(1.16) brightness(1.1) contrast(1.03)",
            }}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0 }}>
            <MiniThumb color={p.color} variant={safeIdx % 4} />
          </div>
        )}
        <div
          style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(135deg, transparent 30%, color-mix(in oklab, var(--bg) 85%, transparent) 100%)`,
          }}
        />
        <div
          className="project-detail-cover-content"
          style={{
            position: "absolute", left: 40, bottom: 40, right: 40,
            display: "flex", justifyContent: "space-between", alignItems: "end", gap: 32,
          }}
        >
          <div className="project-detail-cover-copy">
            <div
              className="project-detail-kicker"
              style={{
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em",
                color: p.color, marginBottom: 12,
              }}
            >
              CASE 0{safeIdx + 1} · {p.year}
            </div>
            <h1
              className="project-detail-title"
              style={{
                fontFamily: "var(--display)", fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 720, letterSpacing: 0, lineHeight: 1.08, margin: 0,
                color: "var(--fg)",
                textShadow: "0 2px 30px rgba(0,0,0,0.72)",
              }}
            >
              {p.title}
            </h1>
            <div className="project-detail-subtitle" style={{ marginTop: 14, fontSize: 14, color: "var(--fg)", maxWidth: 620, lineHeight: 1.55, textShadow: "0 1px 18px rgba(0,0,0,0.65)" }}>
              {p.subtitle ?? p.summary}
            </div>
          </div>
        </div>
      </div>

      {/* Meta strip */}
      <div
        className="reveal d1 project-detail-meta"
        style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 1, background: "var(--border)",
          border: "1px solid var(--border)", borderRadius: 12,
          overflow: "hidden", marginBottom: 64,
        }}
      >
        {[
          ["Role", p.role],
          ["Period", p.period],
          ["Team", p.team],
          ["Stack", p.stack.slice(0, 2).join(" / ")],
        ].map(([k, v]) => (
          <div key={k} className="project-detail-meta-item" style={{ padding: "20px 24px", background: "var(--bg-elevated)" }}>
            <div
              style={{
                fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em",
                color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 8,
              }}
            >
              {k}
            </div>
            <div style={{ fontSize: 14, color: "var(--fg)", lineHeight: 1.4 }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Overview */}
      <div
        className="project-detail-overview"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)",
          gap: 80, marginBottom: 80,
        }}
      >
        <div>
          <h2
            className="reveal project-detail-section-heading"
            style={{
              fontFamily: "var(--sans)", fontSize: 22, fontWeight: 720,
              margin: "0 0 4px", letterSpacing: 0,
            }}
          >
            Problem to Product Flow
          </h2>
          <div style={{ width: 60, height: 1, background: "var(--accent)", marginTop: 16 }} />
        </div>
        <div className="reveal d1 project-detail-copy" style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fg)" }}>
          <p style={{ margin: "0 0 24px" }}>{p.overview ?? p.summary}</p>
          {p.why?.map((w, i) => (
            <div key={i} className="project-detail-why-item" style={{ marginBottom: 24 }}>
              <div className="project-detail-why-label" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 8 }}>
                {String(i + 1).padStart(2, "0")} · {w.title}
              </div>
              <p style={{ margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {(p.problem || p.constraints || p.technicalJudgement || p.contentBridge) && (
        <div className="project-detail-section" style={{ marginBottom: 80 }}>
          <div className="wf-marker">
            <span className="num">·</span>
            <span>Problem · Bottleneck · Decision · Fit</span>
            <span className="bar" />
          </div>
          <div className="project-detail-context-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {p.problem && (
              <ContextCard
                label="Problem"
                title="문제 상황"
                value={p.problem}
                color={p.color}
              />
            )}
            {p.constraints && (
              <ContextCard
                label="Bottleneck"
                title="기술적 병목"
                value={p.constraints}
                color={p.color}
              />
            )}
            {p.technicalJudgement && (
              <ContextCard
                label="Decision"
                title="기술적 판단"
                value={p.technicalJudgement}
                color={p.color}
              />
            )}
            {p.contentBridge && (
              <ContextCard
                label="Content FE Fit"
                title="직무 연결"
                value={p.contentBridge}
                color={p.color}
              />
            )}
          </div>
        </div>
      )}

      {p.implementation && p.implementation.length > 0 && (
        <div className="project-detail-section" style={{ marginBottom: 80 }}>
          <div className="wf-marker">
            <span className="num">·</span>
            <span>Implementation</span>
            <span className="bar" />
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {p.implementation.map((item, i) => (
              <li
                key={item}
                className="reveal project-detail-task-row"
                style={{
                  animationDelay: `${0.04 * i}s`,
                  display: "flex", gap: 16, alignItems: "flex-start",
                  padding: "18px 0", borderTop: "1px solid var(--border)",
                  fontSize: 14, color: "var(--fg)", lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)", fontSize: 11,
                    color: p.color, letterSpacing: "0.12em",
                    flexShrink: 0, marginTop: 4,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Role */}
      {p.roleDetail && (
        <div className="project-detail-section" style={{ marginBottom: 80 }}>
          <div className="wf-marker">
            <span className="num">·</span>
            <span>Role · 기여 범위 ({p.roleDetail.percentage})</span>
            <span className="bar" />
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {p.roleDetail.tasks.map((task, i) => (
              <li
                key={i}
                className="reveal project-detail-task-row"
                style={{
                  animationDelay: `${0.04 * i}s`,
                  display: "flex", gap: 16, alignItems: "flex-start",
                  padding: "18px 0", borderTop: "1px solid var(--border)",
                  fontSize: 14, color: "var(--fg)", lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)", fontSize: 11,
                    color: "var(--accent)", letterSpacing: "0.12em",
                    flexShrink: 0, marginTop: 4,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Troubleshooting */}
      {p.troubleshooting && p.troubleshooting.length > 0 && (
        <div className="project-detail-section" style={{ marginBottom: 80 }}>
          <div className="wf-marker">
            <span className="num">·</span>
            <span>Troubleshooting</span>
            <span className="bar" />
          </div>
          <div style={{ display: "grid", gap: 24 }}>
            {p.troubleshooting.map((ts, i) => (
              <div
                key={i}
                className="reveal project-detail-issue-card"
                style={{
                  animationDelay: `${0.06 * i}s`,
                  padding: 28, borderRadius: 14,
                  border: "1px solid var(--border)", background: "var(--bg-elevated)",
                }}
              >
                <h3
                  style={{
                  fontFamily: "var(--sans)", fontSize: 17, fontWeight: 700,
                    letterSpacing: 0, margin: "0 0 16px",
                  }}
                >
                  {ts.title}
                </h3>
                <DetailRow label="Problem"  value={ts.problem}  color="var(--fg)" />
                <DetailRow label="Cause"    value={ts.cause}    color="var(--fg-muted)" />
                <DetailRow label="Solution" value={ts.solution} color="var(--accent-hi)" />
                <DetailRow label="Learning" value={ts.learning} color="var(--fg-muted)" last />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="project-detail-section" style={{ marginBottom: 100 }}>
        <div className="wf-marker">
          <span className="num">04</span><span>Outcomes</span><span className="bar" />
        </div>
        <div className="project-detail-metrics-grid" style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`, gap: 24, marginBottom: 32 }}>
          {p.metrics.map((m, i) => (
            <div
              key={i}
              className="reveal project-detail-metric-card"
              style={{
                animationDelay: `${0.08 * i}s`,
                padding: 36, borderRadius: 14,
                border: `1px solid ${p.color}33`,
                background: `linear-gradient(135deg, ${p.color}0d, transparent)`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--display)", fontSize: 38, fontWeight: 760,
                  color: p.color, lineHeight: 1, letterSpacing: 0,
                }}
              >
                {m.v}
              </div>
              <div style={{ marginTop: 14, fontSize: 13, color: "var(--fg-muted)" }}>{m.d}</div>
            </div>
          ))}
        </div>
        {p.results && p.results.length > 0 && (
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {p.results.map((r, i) => (
              <li
                key={i}
                className="project-detail-result-row"
                style={{
                  display: "flex", gap: 16, padding: "12px 0",
                  borderTop: "1px solid var(--border)",
                  fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6,
                }}
              >
                <span style={{ color: p.color, marginTop: 6 }}>●</span>
                <span style={{ flex: 1 }}>{r}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tech stack */}
      <div className="reveal project-detail-tech" style={{ marginBottom: 100 }}>
        <div
          style={{
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
            color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 16,
          }}
        >
          Tech stack · why this choice
        </div>
        <div className="project-detail-stack-list" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {p.stack.map((s) => (
            <span
              key={s}
              className="project-detail-stack-chip"
              style={{
                fontFamily: "var(--sans)", fontSize: 12, fontWeight: 650, padding: "8px 14px", borderRadius: 8,
                border: "1px solid var(--border)", color: "var(--fg)", background: "var(--bg-elevated)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
        {p.techDecisions && p.techDecisions.length > 0 && (
          <div className="project-detail-tech-decisions" style={{ marginTop: 32, display: "grid", gap: 12 }}>
            {p.techDecisions.map((td, i) => (
              <div
                key={i}
                className="project-detail-tech-row"
                style={{
                  display: "grid", gridTemplateColumns: "120px 1fr",
                  gap: 24, padding: "12px 0",
                  borderTop: "1px solid var(--border)", alignItems: "baseline",
                }}
              >
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em" }}>
                  {td.tech}
                </div>
                <div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.6 }}>{td.reason}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {p.links.length > 0 && (
        <div className="project-detail-section" style={{ marginBottom: 100 }}>
          <div className="wf-marker">
            <span className="num">·</span>
            <span>Code · README · Package</span>
            <span className="bar" />
          </div>
          <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.65, maxWidth: 680, margin: "0 0 18px" }}>
            코드, 테스트, README에서 구현 구조와 사용 예시를 확인할 수 있습니다.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {p.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "11px 16px",
                  borderRadius: 10,
                  border: `1px solid ${p.color}66`,
                  background: "var(--bg-elevated)",
                  color: "var(--fg)",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {link.label} 보기 →
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Next case */}
      <Link
        to={`/projects/${next.id}`}
        className="project-next-card"
        style={{
          textDecoration: "none", color: "inherit",
          boxShadow: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = next.color;
          e.currentTarget.style.boxShadow = `0 24px 70px ${next.color}22`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="project-next-card-media">
          {next.banner ? (
            <img src={next.banner} alt="" />
          ) : (
            <MiniThumb color={next.color} variant={(safeIdx + 1) % 4} />
          )}
        </div>
        <div
          className="project-next-card-overlay"
          style={{
            background:
              `linear-gradient(90deg, color-mix(in oklab, var(--bg-elevated) 96%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 72%, transparent) 44%, color-mix(in oklab, var(--bg-elevated) 38%, transparent) 100%), radial-gradient(circle at 86% 18%, ${next.color}44, transparent 48%)`,
          }}
        />
        <div className="project-next-card-content">
          <div
            style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em",
              color: "var(--fg-dim)", marginBottom: 8,
            }}
          >
            NEXT CASE →
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>
            {next.subTitle}
          </div>
        </div>
        <div className="project-next-card-arrow" style={{ color: next.color }}>-&gt;</div>
      </Link>
    </div>
  );
};

const DetailRow: React.FC<{ label: string; value: string; color: string; last?: boolean }> = ({
  label, value, color, last,
}) => (
  <div
    className="project-detail-detail-row"
    style={{
      display: "grid", gridTemplateColumns: "100px 1fr", gap: 16,
      padding: "12px 0", borderTop: "1px solid var(--border)",
      borderBottom: last ? "none" : "none",
    }}
  >
    <div className="project-detail-detail-label" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--fg-dim)", textTransform: "uppercase" }}>
      {label}
    </div>
    <div className="project-detail-detail-value" style={{ fontSize: 14, color, lineHeight: 1.65 }}>{value}</div>
  </div>
);

const ContextCard: React.FC<{ label: string; title: string; value: string; color: string }> = ({
  label,
  title,
  value,
  color,
}) => (
  <div
    className="reveal"
    style={{
      padding: 24,
      borderRadius: 14,
      border: "1px solid var(--border)",
      background: "var(--bg-elevated)",
    }}
  >
    <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color, textTransform: "uppercase", marginBottom: 10 }}>
      {label}
    </div>
    <div style={{ fontFamily: "var(--serif)", fontSize: 17, fontWeight: 600, letterSpacing: "-0.005em", marginBottom: 10, color: "var(--fg)" }}>
      {title}
    </div>
    <div style={{ fontSize: 13.5, color: "var(--fg)", lineHeight: 1.7 }}>
      {value}
    </div>
  </div>
);

export default DetailPage;
