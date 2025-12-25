import React from "react";
import type { SkillCategory } from "../types";
import { chipClass, pillClass } from "../styles";

interface SkillCategoryProps {
  title: string;
  chipLabel?: string;
  skills: string[];
}

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
        <span key={s} className={pillClass}>
          {s}
        </span>
      ))}
    </div>
  </div>
);

const StackTab: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Core",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Electron",
        "Node.js",
        "Zustand",
        "Redux",
        "ZeroMQ",
      ],
    },
    {
      title: "Architecture & Perf",
      skills: [
        "Domain-Driven Design",
        "Web Worker",
        "Event Bus / IPC",
        "Rendering Optimization",
        "Memory Management",
      ],
    },
    {
      title: "Security & Infra",
      skills: [
        "Cyber Security",
        "Network Forensics",
        "Docker",
        "Linux / Shell",
        "GitLab / CI",
      ],
    },
    {
      title: "AI & Mobile",
      skills: ["Flutter", "Python", "TensorFlow", "Firebase", "OpenCV"],
    },
  ];

  return (
    <div className="space-y-3">
      {/* 상단 2 컬럼: 핵심 역량 */}
      <div className="grid gap-3 md:grid-cols-2">
        <SkillCategoryCard {...skillCategories[0]} />
        <SkillCategoryCard {...skillCategories[1]} />
      </div>

      {/* 하단 2 컬럼: 배경 지식 */}
      <div className="grid gap-3 md:grid-cols-2">
        <SkillCategoryCard {...skillCategories[2]} />
        <SkillCategoryCard {...skillCategories[3]} />
      </div>
    </div>
  );
};

export default StackTab;
