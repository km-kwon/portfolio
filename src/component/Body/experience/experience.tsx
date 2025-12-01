// src/ExperienceSection.tsx
import React from "react";

const cardBase =
  "rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] " +
  "transition-transform transition-shadow transition-colors duration-200 ease-out " +
  "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 " +
  "[html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] " +
  "[html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]";

const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5";

const labelClass =
  "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";

const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";
const sectionSubTitleClass =
  "text-[13px] text-fg-muted leading-relaxed";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mb-14">
      <div className={sectionHeaderBase}>
        <div>
          <p className={labelClass}>Experience</p>
          <h2 className={sectionTitleClass}>경험</h2>
        </div>
        <p className={sectionSubTitleClass}>
          프론트엔드/UX 관점에서 의미 있었던 경험 위주로 정리했습니다.
        </p>
      </div>

      <div className={cardBase}>
        <div className="grid gap-2.5">
          {/* Item 1 */}
          <div className="grid gap-2 rounded-2xl bg-(--bg-soft) border border-(--border-subtle) px-3 py-2.5 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)] [html[data-theme='light']_&]:bg-[#f6f6fb]">
            <div>
              <div className="text-[13px] font-medium mb-0.5">
                회사/프로젝트 이름 · Frontend Developer
              </div>
              <div className="text-[11px] text-fg-muted mb-1.5">
                주요 업무: 대시보드 개발, UI 아키텍처 설계, Design System 정리
              </div>
              <p className="text-[12px] text-fg-muted leading-[1.6]">
                대규모 데이터 테이블과 실시간 차트가 혼합된 화면을 성능 저하
                없이 렌더링할 수 있도록 구조를 재설계했습니다. UX 관점에서
                필터링·검색 플로우를 단순화해, 실제 사용자 작업 시간을
                줄였습니다.
              </p>
            </div>
            <div className="text-[11px] text-right text-fg-muted">
              <span className="inline-block px-2 py-1 rounded-full border border-(--border-subtle)">
                2023.01 – 현재
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid gap-2 rounded-2xl bg-(--bg-soft) border border-(--border-subtle) px-3 py-2.5 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)] [html[data-theme='light']_&]:bg-[#f6f6fb]">
            <div>
              <div className="text-[13px] font-medium mb-0.5">
                사이드 프로젝트 · UX 실험
              </div>
              <div className="text-[11px] text-fg-muted mb-1.5">
                마이크로 인터랙션 · 전환 애니메이션 · 스크롤 스토리텔링
              </div>
              <p className="text-[12px] text-fg-muted leading-[1.6]">
                사용자의 행동을 가이드하는 마이크로 카피와 인터랙션을
                실험했습니다. “눈에 안 띄지만 분명히 편한” 흐름을 만드는 것에
                집중했습니다.
              </p>
            </div>
            <div className="text-[11px] text-right text-fg-muted">
              <span className="inline-block px-2 py-1 rounded-full border border-(--border-subtle)">
                2022 – 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
