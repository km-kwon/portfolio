import React from "react";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const labelClass = "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";

// 반복되는 카드 UI를 위한 재사용 컴포넌트
const InfoCard = ({ title, value }: { title: string; value: string }) => (
  <div className="rounded-2xl bg-black/40 border border-white/5 p-2.5 [html[data-theme='light']_&]:bg-[#f6f6fb] [html[data-theme='light']_&]:border-[#e2e2ee]">
    <div className="text-[11px] text-fg-muted mb-1">{title}</div>
    <div className="text-[13px] font-medium">{value}</div>
  </div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => {
  return (
    <section
      id="top"
      className="grid gap-7 mb-14 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)]"
    >
      {/* HERO LEFT */}
      <div>
        <p className={labelClass}>Identity Profile</p>
        <h1 className="text-[clamp(28px,4vw,34px)] font-semibold leading-tight mb-3">
          '최고'를 위해
          <br />
          '최악'을 대비하는,
          <br />
          '안전한 혁신가' 권경민입니다.
        </h1>
        <p className="text-[14px] text-fg-muted leading-[1.7] max-w-[520px] mb-6">
          단순 기능 구현을 것을 넘어, 사용자에게 전달될 가치(Value)와 그 과정의
          안전(Safety)을 동시에 설계합니다.
          <br />
          사이버보안을 전공하며 기른 <strong>'비판적 사고'</strong>와{" "}
          <strong>'리스크 관리'</strong> 역량을 프론트엔드 개발에 녹여내고
          있습니다.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Safety First",
            "Risk Management",
            "Team Ownership",
            "Frontend Core",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1.5 rounded-full border border-[var(--border-subtle)] text-fg-muted bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="text-[13px] px-4.5 py-2.5 rounded-full border border-[var(--accent)]
                       bg-[var(--accent)] text-black font-medium shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                       hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)] hover:opacity-95 hover:-translate-y-px
                       transition-all duration-150 ease-out
                       [html[data-theme='light']_&]:text-white
                       [html[data-theme='light']_&]:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                       [html[data-theme='light']_&]:hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)]
                       cursor-pointer
                       "
            onClick={() => onScrollTo("skills")}
          >
            <strong>경력 바로가기 </strong>
          </button>
          <button
            className="inline-flex items-center gap-1.5 text-[13px] text-fg-muted
                       hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out cursor-pointer"
            onClick={() => onScrollTo("about")}
          >
            <span>소개 더 보기</span>
            <span className="text-[14px] translate-y-px">↳</span>
          </button>
        </div>
      </div>

      {/* HERO RIGHT */}
      <aside
        className="rounded-3xl border border-[var(--border-subtle)]
                   bg-[radial-gradient(circle_at_top_left,#262633_0,#0b0b0d_50%)]
                   shadow-[0_18px_40px_rgba(0,0,0,0.35)]
                   flex flex-col gap-3.5 text-[13px] p-4.5
                   [html[data-theme='light']_&]:bg-[linear-gradient(135deg,#ffffff,#f3f3f8)]
                   [html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.1)]"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[16px] font-semibold">Kwon Kyung-Min</div>
            <div className="text-[12px] text-fg-muted">
              Frontend Engineer · Security Researcher
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[rgba(0,255,128,0.35)] text-[11px] uppercase tracking-[0.16em]">
            <span className="w-[7px] h-[7px] rounded-full bg-[rgba(0,255,153,0.8)] shadow-[0_0_8px_rgba(0,255,153,0.7)] animate-pulse" />
            <span>Building Stable Products</span>
          </div>
        </div>

        {/* 우측 정보 카드들 (세로 배치 flex-col) */}
        <div className="flex flex-col gap-2.5">
          <InfoCard title="Focus" value="Risk Mgmt, Safety, UI Arch" />
          <InfoCard title="Strength" value="Critical Thinking, Stability" />
          <InfoCard title="Based in" value="Seongnam, KR (KST)" />
        </div>

        <p className="text-[11px] text-fg-muted mt-1 leading-relaxed">
          최근에는 차량 데이터 시각화 성능 개선, Web Worker를 활용한 렌더링
          최적화, 그리고 팀의 심리적 안전지대를 만드는 일에 집중하고 있습니다.
        </p>
      </aside>
    </section>
  );
};

export default HeroSection;
