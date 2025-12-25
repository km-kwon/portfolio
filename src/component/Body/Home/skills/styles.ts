export const cardBase =
  "rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] " +
  "transition-transform transition-shadow transition-colors duration-200 ease-out " +
  "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 " +
  "[html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] " +
  "[html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]";

export const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5";

export const labelClass = "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";

export const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";
export const sectionSubTitleClass = "text-[13px] text-fg-muted leading-relaxed";

export const chipClass =
  "text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-fg-muted";

export const pillClass =
  "text-[11px] px-2.5 py-1.5 rounded-full bg-[var(--bg-soft)] border border-[var(--border-subtle)] text-fg-muted";

export const tabButtonClass = (isActive: boolean) =>
  `px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 border ${
    isActive
      ? "bg-[var(--bg-soft)] text-fg border-[var(--border-subtle)]"
      : "text-fg-muted hover:text-fg hover:bg-[var(--bg-soft)]/50 border-transparent"
  }`;
