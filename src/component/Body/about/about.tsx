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

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="mb-14">
      <div className={sectionHeaderBase}>
        <div>
          <p className={labelClass}>About</p>
          <h2 className={sectionTitleClass}>개발자로서의 가치관</h2>
        </div>
        <p className={sectionSubTitleClass}>
          최고의 성과를 지향하되, 최악의 상황을 먼저 대비하는 '안전한 혁신'을
          추구합니다.
        </p>
      </div>

      <div className="grid gap-4.5 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
        {/* Card 1: 직업관 & 철학 */}
        <div className={cardBase}>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-[15px] font-bold">
              가치관: 안전한 혁신 (Safe Innovation)
            </h3>
          </div>
          <div className="text-[13px] text-fg-muted leading-[1.7]">
            <p>
              새로운 기술로 사람들에게 가치를 주는 것을 좋아하지만, 그 과정에서
              <strong> "누군가 피해를 보지 않도록" </strong>하는 것을 더
              중요하게 생각합니다.
              <br />
              <br />
              보안을 전공하며 익힌 <strong>Risk Management</strong> 사고방식을
              개발에 적용하여, 화려한 기능 이전에 발생할 수 있는 최악의
              시나리오를 먼저 방어합니다.
            </p>
            <ul className="mt-3 pl-4 list-disc space-y-1">
              <li>사용자 피해 방지를 최우선으로 하는 설계</li>
              <li>통제 가능한 리스크 안에서의 과감한 기술 도전</li>
              <li>보안적/비판적 사고를 통한 견고한 아키텍처 구축</li>
            </ul>
          </div>
        </div>

        {/* Card 2: 태도 & 팀워크 */}
        <div className={cardBase}>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-[15px] font-bold">일하는 태도</h3>
            <span className={chipClass}>Mindset</span>
          </div>
          <div className="text-[13px] text-fg-muted leading-[1.7]">
            <p className="mb-2">
              <strong>"팀의 심리적 안전지대"</strong>가 되고자 합니다.
            </p>
            <ul className="mt-1.5 pl-4 list-disc space-y-1">
              <li>'나'보다 '우리(Team)'의 이익을 먼저 고려</li>
              <li>문제가 생기면 외부 탓보다 해결책과 내 안의 원인 분석</li>
              <li>끝까지 파고드는 집요함 (Log Consistency 해결 경험)</li>
              <li>동료가 안심하고 등을 맡길 수 있는 신뢰 구축</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
