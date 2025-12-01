import React from "react";

const cardBase =
  "rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] " +
  "transition-transform transition-shadow transition-colors duration-200 ease-out " +
  "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 " +
  "[html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] " +
  "[html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]";

const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5";

const labelClass = "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";

const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";
const sectionSubTitleClass = "text-[13px] text-fg-muted leading-relaxed";

const chipClass =
  "text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-fg-muted";

const pillClass =
  "text-[11px] px-2.5 py-1.5 rounded-full bg-[var(--bg-soft)] border border-[var(--border-subtle)] text-fg-muted";

// 분리된 스킬 카테고리 컴포넌트
interface SkillCategoryProps {
  title: string;
  chipLabel?: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
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

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="mb-14">
      <div className={sectionHeaderBase}>
        <div>
          <p className={labelClass}>Skills</p>
          <h2 className={sectionTitleClass}>기술 스택 &amp; 전문성</h2>
        </div>
        <p className={sectionSubTitleClass}>
          안전하고 견고한 제품을 만들기 위해 사용하는 기술들입니다.
        </p>
      </div>

      <div className={cardBase}>
        {/* 상단 2 컬럼: 핵심 역량 */}
        <div className="grid gap-3 md:grid-cols-2">
          <SkillCategory
            title="Frontend Core"
            // chipLabel="Production"
            skills={[
              "React.js",
              "Next.js",
              "TypeScript",
              "TailwindCSS",
              "Electron",
              "Node.js",
              "Zustand",
              "Redux",
              "ZeroMQ",
            ]}
          />

          <SkillCategory
            title="Architecture & Perf"
            // chipLabel="Specialist"
            skills={[
              "Domain-Driven Design",
              "Web Worker",
              "Event Bus / IPC",
              "Rendering Optimization",
              "Memory Management",
            ]}
          />
        </div>

        {/* 간격 */}
        <div className="h-3" />

        {/* 하단 2 컬럼: 배경 지식 */}
        <div className="grid gap-3 md:grid-cols-2">
          <SkillCategory
            title="Security & Infra"
            // chipLabel="Major"
            skills={[
              "Cyber Security",
              "Network Forensics",
              "Docker",
              "Linux / Shell",
              "GitLab / CI",
            ]}
          />

          <SkillCategory
            title="AI & Mobile"
            // chipLabel="Experience"
            skills={["Flutter", "Python", "TensorFlow", "Firebase", "OpenCV"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
