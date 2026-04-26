import React from "react";
import SectionMarker from "../../../common/SectionMarker";

interface Value {
  title: string;
  subtitle: string;
  badge: string;
  summary: string;
  example: string;
}

const VALUES: Value[] = [
  {
    title: "Safe Innovation",
    subtitle: "안전한 혁신",
    badge: "CORE",
    summary: "기능 이전에 최악의 시나리오를 먼저 방어합니다. 화려함보다 견고함.",
    example: "메모리 누수 방지 로직 설계 후 기능 착수",
  },
  {
    title: "Team Safety",
    subtitle: "심리적 안전지대",
    badge: "MINDSET",
    summary: "'나'보다 '팀'의 이익을 먼저. 동료가 안심하고 등을 맡길 수 있는 신뢰 구축.",
    example: "Race Condition 끝까지 추적해 해결",
  },
  {
    title: "Controlled Risk",
    subtitle: "통제된 리스크",
    badge: "PRACTICE",
    summary: "Risk Management 사고방식을 개발에 적용. 통제 가능한 범위 안에서의 과감한 기술 도전.",
    example: "VTDM DDD 도입으로 의존성 단계적 분리",
  },
  {
    title: "Root Cause First",
    subtitle: "근본 원인 우선",
    badge: "HABIT",
    summary: "문제 발생 시 즉각적인 원인 분석. 표면 해결이 아닌 근본까지 파고듭니다.",
    example: "Log Consistency 이슈 → Race Condition 발견",
  },
];

const ValueCard: React.FC<{ value: Value }> = ({ value }) => (
  <div
    className="group rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) p-5
               transition-all duration-300 ease-out
               hover:-translate-y-0.5 hover:border-(--accent-border)
               [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]
               [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
  >
    <div className="flex items-center justify-between gap-2 mb-2">
      <div>
        <h3 className="text-[15px] font-bold text-fg tracking-tight">{value.title}</h3>
        <p className="text-[11px] text-fg-dimmed mt-0.5">{value.subtitle}</p>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded font-mono tracking-wider border border-(--accent-border) text-(--accent) bg-(--accent-subtle)">
        {value.badge}
      </span>
    </div>

    <p className="text-[13px] text-fg-muted leading-[1.65] mt-3">{value.summary}</p>

    <div className="mt-4 pt-3 border-t border-(--border-subtle)/60">
      <p className="text-[11px] font-mono text-fg-dimmed leading-relaxed">
        <span className="text-(--accent)/70">→</span> {value.example}
      </p>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="mb-20">
      <SectionMarker number="02" label="Values" />

      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-8">
        <h2 className="text-[22px] font-bold tracking-tight text-fg">개발자로서의 가치관</h2>
        <p className="text-[13px] text-fg-muted leading-relaxed max-w-md">
          최고의 성과를 지향하되, 최악의 상황을 먼저 대비하는 '안전한 혁신'을 추구합니다.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {VALUES.map((v) => (
          <ValueCard key={v.title} value={v} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
