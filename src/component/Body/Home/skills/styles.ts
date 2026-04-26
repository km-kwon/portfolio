/**
 * 재사용 스타일 토큰 — 디자인 시스템 v2
 *
 * 카드: surface bg + 1px border, 다크 그림자 X, 라이트만 미세 shadow
 * hover: translateY(-2px) + border-color accent/30% (300ms)
 * radius: 16px
 */

/* ── Card ── */
export const cardBase =
  "rounded-[16px] border border-(--border-subtle) bg-(--bg-elevated) p-6 " +
  "transition-all duration-300 ease-out " +
  "hover:-translate-y-0.5 hover:border-(--accent-border) " +
  "[html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)] " +
  "[html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]";

/* ── Section Header ── */
export const sectionHeaderBase =
  "flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-8";

/* ── Label (섹션 상단 카테고리) ── */
export const labelClass =
  "text-[12px] uppercase tracking-[0.12em] text-(--accent) font-medium mb-1";

/* ── Title / Subtitle ── */
export const sectionTitleClass =
  "text-[22px] font-bold tracking-tight text-fg";

export const sectionSubTitleClass =
  "text-[14px] text-fg-muted leading-relaxed";

/* ── Chip (작은 뱃지) ── */
export const chipClass =
  "text-[11px] px-2.5 py-1 rounded-full border border-(--accent-border) text-(--accent) bg-(--accent-subtle)";

/* ── Pill (태그) ── */
export const pillClass =
  "text-[11px] px-2.5 py-1 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted " +
  "transition-colors duration-200 hover:border-(--border-hover)";

/* ── Tab Button ── */
export const tabButtonClass = (isActive: boolean) =>
  `px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 border cursor-pointer ${
    isActive
      ? "bg-(--accent-subtle) text-(--accent) border-(--accent-border)"
      : "text-fg-muted border-transparent hover:text-fg hover:bg-(--bg-soft)"
  }`;
