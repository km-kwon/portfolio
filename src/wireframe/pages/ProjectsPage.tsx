import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, PROFESSIONAL_PROJECTS, INDEPENDENT_PROJECTS } from "../data";
import MiniThumb from "../layout/MiniThumb";

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const allTags = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.visualTags)))],
    []
  );
  const visible = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.visualTags.includes(filter));

  return (
    <div className="page-fade">
      <div className="wf-marker">
        <span className="num">02</span>
        <span>Selected Work · 2022 — 2026</span>
        <span className="bar" />
        <span style={{ fontFamily: "var(--sans)", fontSize: 11, fontWeight: 650 }}>
          {visible.length} / {PROJECTS.length}
        </span>
      </div>

      <h1
        className="reveal"
        style={{
          fontFamily: "var(--display)", fontSize: "clamp(28px, 3.2vw, 44px)",
          fontWeight: 720, letterSpacing: 0,
          margin: "0 0 12px", lineHeight: 1.15,
        }}
      >
        <em style={{ color: "var(--accent-hi)", fontStyle: "normal" }}>Content-flow</em> cases,
        <br />
        <span style={{ color: "var(--fg-muted)" }}>from problem to interface.</span>
      </h1>
      <p
        className="reveal d1"
        style={{ fontSize: 15, color: "var(--fg-muted)", maxWidth: 570, lineHeight: 1.65, marginBottom: 48 }}
      >
        카드에서는 결과를, 상세에서는 문제와 구현 판단을 확인할 수 있습니다.
      </p>

      <div className="reveal d2" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              fontFamily: "var(--sans)", fontSize: 12, fontWeight: 650, letterSpacing: 0,
              padding: "8px 14px", borderRadius: 8,
              border: filter === t ? "1px solid var(--accent)" : "1px solid var(--border)",
              background: filter === t ? "var(--accent-soft)" : "color-mix(in oklab, var(--bg-elevated) 55%, transparent)",
              color: filter === t ? "var(--fg)" : "var(--fg-muted)",
              transition: "all .25s", cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {filter === "All" ? (
        <div style={{ display: "grid", gap: 72 }}>
          <ProjectSection
            title="Professional Case Studies"
            intro="성능, Export, 상태 구조처럼 실무에서 측정한 개선만 모았습니다."
            projects={PROFESSIONAL_PROJECTS}
            startIndex={0}
          />
          <ProjectSection
            title="Independent Projects"
            intro="기술 선택의 이유와 다음 프로젝트로 이어진 기준만 남겼습니다."
            projects={INDEPENDENT_PROJECTS}
            startIndex={PROFESSIONAL_PROJECTS.length}
          />
        </div>
      ) : (
        <div className="project-list-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {visible.map((p, i) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="reveal"
              style={{ animationDelay: `${0.05 * i}s`, textDecoration: "none", color: "inherit" }}
            >
              <ProjectCard project={p} index={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

interface ProjectCardProps {
  project: typeof PROJECTS[number];
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [hover, setHover] = useState(false);
  const variant = index % 4;
  return (
    <div
      className="project-gallery-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", aspectRatio: "1 / 1.18",
        borderRadius: 18, overflow: "hidden",
        border: hover ? "1px solid var(--accent)" : "1px solid var(--border)",
        background: "color-mix(in oklab, var(--bg-elevated) 88%, transparent)",
        cursor: "pointer", transition: "all .4s cubic-bezier(.22,.61,.36,1)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? `0 24px 60px ${project.color}33` : "0 0 0 transparent",
      }}
    >
      <div className="project-gallery-frame" />
      <div className="project-card-scanline" />
      <div style={{ position: "absolute", inset: 0, transition: "opacity .4s" }}>
        {project.banner ? (
          <img
            src={project.banner}
            alt=""
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              opacity: hover ? 1 : 0.78,
              transition: "opacity .4s, transform .6s cubic-bezier(.22,.61,.36,1), filter .4s",
              transform: hover ? "scale(1.04)" : "scale(1)",
              filter: hover ? "saturate(1.18) brightness(1.04)" : "saturate(1) brightness(0.98)",
            }}
          />
        ) : (
          <div style={{ opacity: hover ? 1 : 0.7, transition: "opacity .4s" }}>
            <MiniThumb color={project.color} variant={variant} />
          </div>
        )}
      </div>
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          transition: "background .4s ease",
          background: project.banner
            ? hover
              ? `linear-gradient(to bottom, transparent 0%, transparent 55%, color-mix(in oklab, var(--bg-elevated) 55%, transparent) 78%, var(--bg-elevated) 100%)`
              : `linear-gradient(to bottom, color-mix(in oklab, var(--bg-elevated) 25%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 55%, transparent) 55%, var(--bg-elevated) 95%)`
            : "linear-gradient(to bottom, transparent 0%, transparent 30%, var(--bg-elevated) 95%)",
        }}
      />
      {project.banner && (
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(circle at top right, ${project.color}33, transparent 60%)`,
          }}
        />
      )}
      <div
        style={{
          position: "absolute", inset: 0, padding: 22,
          display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <span style={{ fontFamily: "var(--sans)", fontSize: 11, fontWeight: 650, letterSpacing: 0, color: "var(--fg-dim)" }}>
            {String(index + 1).padStart(2, "0")} / {project.year}
          </span>
          <span
            style={{
              fontFamily: "var(--sans)", fontSize: 12, fontWeight: 700,
              letterSpacing: 0,
              color: "var(--fg)",
              padding: "6px 11px",
              background: `linear-gradient(135deg, ${project.color}33, color-mix(in oklab, var(--bg-elevated) 88%, transparent))`,
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: `1px solid ${project.color}99`,
              borderRadius: 8,
              boxShadow: `0 0 0 1px ${project.color}22 inset`,
            }}
          >
            {project.visualTags[0]}
          </span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: "var(--sans)", fontSize: 18, fontWeight: 700,
              margin: "0 0 6px", letterSpacing: 0, lineHeight: 1.22,
            }}
          >
            {project.subTitle}
          </h3>
          <div
            style={{
              fontSize: 12,
              color: "var(--fg-muted)",
              marginBottom: 12,
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.summary}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
            {project.metrics.slice(0, 2).map((m) => (
              <span
                key={`${m.v}-${m.d}`}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 12,
                  fontWeight: 650,
                  lineHeight: 1.2,
                  padding: "6px 10px",
                  borderRadius: 8,
                  color: "var(--fg)",
                  background: `linear-gradient(135deg, ${project.color}26, color-mix(in oklab, var(--bg-elevated) 86%, transparent))`,
                  border: `1px solid ${project.color}99`,
                  boxShadow: `0 0 0 1px ${project.color}22 inset`,
                }}
              >
                {m.v} · {m.d}
              </span>
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
};

interface ProjectSectionProps {
  title: string;
  intro: string;
  projects: typeof PROJECTS;
  startIndex: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  intro,
  projects,
  startIndex,
}) => (
  <section>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 16,
        marginBottom: 12,
      }}
    >
      <h2
        style={{
          fontFamily: "var(--serif)",
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-dim)", letterSpacing: "0.12em" }}>
        {projects.length} CASES
      </span>
    </div>
    <p style={{ fontSize: 14, color: "var(--fg-muted)", maxWidth: 680, lineHeight: 1.65, margin: "0 0 24px" }}>
      {intro}
    </p>
    <div className="project-list-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
      {projects.map((p, i) => (
        <Link
          key={p.id}
          to={`/projects/${p.id}`}
          className="reveal"
          style={{ animationDelay: `${0.05 * i}s`, textDecoration: "none", color: "inherit" }}
        >
          <ProjectCard project={p} index={startIndex + i} />
        </Link>
      ))}
    </div>
  </section>
);

export default ProjectsPage;
