import React from "react";
import { chipClass } from "../../../../../styles/tokens";

type Level = "core" | "experienced" | "familiar";

interface SkillItem {
  name: string;
  level: Level;
}

interface SkillCategoryProps {
  title: string;
  chipLabel?: string;
  skills: SkillItem[];
}

const levelStyles: Record<Level, string> = {
  core:
    "text-[11px] px-2.5 py-1 rounded-full font-medium " +
    "bg-(--accent-subtle) border border-(--accent-border) text-(--accent)",
  experienced:
    "text-[11px] px-2.5 py-1 rounded-full " +
    "bg-(--bg-soft) border border-(--border-subtle) text-fg " +
    "transition-colors duration-200 hover:border-(--border-hover)",
  familiar:
    "text-[11px] px-2.5 py-1 rounded-full " +
    "bg-(--bg-soft) border border-(--border-subtle) text-fg-muted " +
    "transition-colors duration-200 hover:border-(--border-hover)",
};

const SkillCategoryCard: React.FC<SkillCategoryProps> = ({
  title,
  chipLabel,
  skills,
}) => (
  <div>
    <div className="flex items-center justify-between gap-2 mb-2">
      <h3 className="text-[15px] font-bold">{title}</h3>
      {chipLabel ? <span className={chipClass}>{chipLabel}</span> : <></>}
    </div>
    <div className="flex flex-wrap gap-2 mt-1">
      {skills.map((s) => (
        <span key={s.name} className={levelStyles[s.level]}>
          {s.name}
        </span>
      ))}
    </div>
  </div>
);

const StackTab: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Frontend Core",
      skills: [
        { name: "React.js", level: "core" },
        { name: "TypeScript", level: "core" },
        { name: "TailwindCSS", level: "core" },
        { name: "Zustand", level: "core" },
        { name: "Next.js", level: "experienced" },
        { name: "Electron", level: "experienced" },
        { name: "Node.js", level: "experienced" },
        { name: "Redux", level: "experienced" },
        { name: "ZeroMQ", level: "familiar" },
      ],
    },
    {
      title: "Architecture & Perf",
      skills: [
        { name: "Web Worker", level: "core" },
        { name: "Rendering Optimization", level: "core" },
        { name: "Domain-Driven Design", level: "experienced" },
        { name: "Event Bus / IPC", level: "experienced" },
        { name: "Memory Management", level: "experienced" },
      ],
    },
    {
      title: "Security & Infra",
      skills: [
        { name: "Cyber Security", level: "experienced" },
        { name: "Network Forensics", level: "experienced" },
        { name: "Linux / Shell", level: "experienced" },
        { name: "GitLab / CI", level: "experienced" },
        { name: "Docker", level: "familiar" },
      ],
    },
    {
      title: "AI & Mobile",
      skills: [
        { name: "Python", level: "experienced" },
        { name: "Flutter", level: "familiar" },
        { name: "TensorFlow", level: "familiar" },
        { name: "Firebase", level: "familiar" },
        { name: "OpenCV", level: "familiar" },
      ],
    },
  ];

  return (
    <div className="space-y-3">
      {/* 범례 */}
      <div className="flex items-center gap-3 mb-1 text-[11px] text-fg-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-(--accent)" />
          Core
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-fg" />
          Experienced
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-fg-muted" />
          Familiar
        </span>
      </div>

      {/* 상단 2 컬럼 */}
      <div className="grid gap-3 md:grid-cols-2">
        <SkillCategoryCard {...skillCategories[0]} />
        <SkillCategoryCard {...skillCategories[1]} />
      </div>

      {/* 하단 2 컬럼 */}
      <div className="grid gap-3 md:grid-cols-2">
        <SkillCategoryCard {...skillCategories[2]} />
        <SkillCategoryCard {...skillCategories[3]} />
      </div>
    </div>
  );
};

export default StackTab;
