import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data";
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
        <span>Selected Work · 2022 — 2025</span>
        <span className="bar" />
        <span style={{ fontFamily: "var(--mono)", fontSize: 11 }}>
          {visible.length} / {PROJECTS.length}
        </span>
      </div>

      <h1
        className="reveal"
        style={{
          fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.2vw, 44px)",
          fontWeight: 400, letterSpacing: "-0.015em",
          margin: "0 0 12px", lineHeight: 1.15,
        }}
      >
        <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>Selected</em> projects,
        <br />
        <span style={{ color: "var(--fg-muted)" }}>measurable outcomes.</span>
      </h1>
      <p
        className="reveal d1"
        style={{ fontSize: 15, color: "var(--fg-muted)", maxWidth: 540, lineHeight: 1.65, marginBottom: 48 }}
      >
        복잡한 데이터를 다루는 UI, 성능 최적화, 보안 기반 설계를 중심으로 선별한 프로젝트입니다.
        각 카드는 문제 정의, 역할, 결과를 케이스 스터디 형식으로 보여줍니다.
      </p>

      <div className="reveal d2" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em",
              padding: "7px 14px", borderRadius: 999,
              border: filter === t ? "1px solid var(--accent)" : "1px solid var(--border)",
              background: filter === t ? "var(--accent-soft)" : "transparent",
              color: filter === t ? "var(--accent-hi)" : "var(--fg-muted)",
              transition: "all .25s", cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

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
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--fg-dim)" }}>
            {String(index + 1).padStart(2, "0")} / {project.year}
          </span>
          <span
            style={{
              fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em",
              color: `color-mix(in oklab, ${project.color} 60%, var(--fg))`,
              padding: "4px 10px",
              background: "color-mix(in oklab, var(--bg-elevated) 92%, transparent)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: `1px solid color-mix(in oklab, ${project.color} 55%, var(--fg))`,
              borderRadius: 999, textTransform: "uppercase",
            }}
          >
            {project.visualTags[0]}
          </span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500,
              margin: "0 0 6px", letterSpacing: "-0.01em", lineHeight: 1.2,
            }}
          >
            {project.subTitle}
          </h3>
          <div style={{ fontSize: 12, color: "var(--fg-muted)", marginBottom: 12, lineHeight: 1.4 }}>
            {project.subtitle ?? project.summary.slice(0, 60) + "…"}
          </div>
          <div
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontFamily: "var(--mono)", fontSize: 11,
              color: hover ? project.color : "var(--fg-muted)", transition: "color .3s",
            }}
          >
            Case study →
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
