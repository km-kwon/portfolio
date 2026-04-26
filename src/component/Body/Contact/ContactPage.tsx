import React, { useState, useCallback } from "react";

/* ── Layout tokens ── */
const pageBg =
  "relative min-h-screen pt-[calc(var(--header-height)+56px)] pb-24 px-5 overflow-hidden";

const bgDecor =
  "pointer-events-none absolute inset-0 " +
  "bg-[radial-gradient(900px_500px_at_20%_10%,rgba(125,211,252,0.16),transparent_60%),radial-gradient(800px_420px_at_80%_30%,rgba(167,139,250,0.14),transparent_60%),radial-gradient(700px_360px_at_50%_85%,rgba(34,197,94,0.10),transparent_60%)] " +
  "[mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]";

const pill =
  "inline-flex items-center rounded-full border border-(--border-subtle) " +
  "bg-(--bg-soft) px-3 py-1 text-[11px] text-fg-muted " +
  "[html[data-theme='light']_&]:bg-[#f5f5fb]";

const labelClass =
  "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted";

/* ── Main Component ── */
const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const EMAIL = "lanos5019@ajou.ac.kr";

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <main className={pageBg}>
      <div className={bgDecor} />

      <div className="max-w-(--content-max-w) mx-auto relative">
        {/* ── Hero ── */}
        <section className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <span className={`${pill} gap-2`}>
              <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
              <span className={labelClass}>Contact</span>
            </span>
          </div>

          <h1 className="text-[34px] md:text-[44px] font-semibold tracking-[-0.02em] mb-4">
            함께 이야기해요
          </h1>

          <p className="text-[15px] md:text-[16px] text-fg-muted leading-relaxed max-w-lg mx-auto">
            프로젝트 제안, 협업, 채용 어떤 주제든 좋습니다.
            <br className="md:block" />
            편하게 연락 주세요.
          </p>
        </section>

        {/* ── Content ── */}
        <div className="max-w-lg mx-auto flex flex-col gap-6">
          {/* 1) Primary — Email */}
          <div className="relative group">
            <a
              href={`mailto:${EMAIL}`}
              className={
                "relative flex items-center gap-4 rounded-2xl px-5 py-4 " +
                "border border-(--border-subtle) bg-(--bg-elevated)/70 backdrop-blur-xl " +
                "shadow-[0_10px_28px_rgba(0,0,0,0.25)] " +
                "transition-all duration-300 ease-out " +
                "hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:border-(--accent)/40 " +
                "[html[data-theme='light']_&]:bg-white/70 " +
                "[html[data-theme='light']_&]:shadow-[0_8px_22px_rgba(0,0,0,0.07)] " +
                "[html[data-theme='light']_&]:hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
              }
            >
              {/* highlight sweep */}
              <div
                className={
                  "pointer-events-none absolute inset-0 rounded-2xl " +
                  "bg-[radial-gradient(600px_160px_at_10%_0%,rgba(255,255,255,0.12),transparent_55%)] " +
                  "[html[data-theme='light']_&]:bg-[radial-gradient(600px_160px_at_10%_0%,rgba(17,24,39,0.04),transparent_55%)]"
                }
              />

              <div
                className="w-11 h-11 rounded-full bg-(--bg-soft) border border-(--border-subtle)
                           flex items-center justify-center shrink-0
                           group-hover:border-(--accent)/40 transition-colors"
              >
                <MailIcon className="w-5 h-5 text-(--accent)" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] uppercase tracking-wider text-fg-muted">
                    Email
                  </span>
                  <span className={pill}>가장 빠른 연락처</span>
                </div>
                <span className="text-[16px] md:text-[18px] font-semibold text-fg truncate block">
                  {EMAIL}
                </span>
              </div>
            </a>

            {/* Copy button — overlaid */}
            <button
              onClick={copyEmail}
              aria-label="이메일 복사"
              className={
                "absolute right-3 top-1/2 -translate-y-1/2 z-10 " +
                "w-9 h-9 rounded-xl border border-(--border-subtle) " +
                "bg-(--bg-soft) flex items-center justify-center cursor-pointer " +
                "transition-all duration-200 ease-out " +
                "hover:border-(--accent)/40 hover:bg-(--bg-elevated) " +
                "active:scale-90"
              }
            >
              {copied ? (
                <CheckIcon className="w-4 h-4 text-(--accent)" />
              ) : (
                <CopyIcon className="w-4 h-4 text-fg-muted" />
              )}
            </button>
          </div>

          {/* Toast */}
          <div
            className={
              "fixed bottom-8 left-1/2 -translate-x-1/2 z-9999 " +
              "px-4 py-2.5 rounded-xl " +
              "bg-(--bg-elevated) border border-(--border-subtle) " +
              "shadow-[0_8px_24px_rgba(0,0,0,0.3)] " +
              "text-[13px] font-medium text-fg " +
              "transition-all duration-300 ease-out " +
              (copied
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none")
            }
          >
            이메일이 복사되었습니다
          </div>

          {/* 2) CTA — Resume Download */}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className={
              "group relative flex items-center justify-center gap-3 " +
              "w-full rounded-2xl px-5 py-4 cursor-pointer " +
              "bg-(--accent) text-white font-semibold text-[15px] " +
              "shadow-[0_6px_20px_rgba(32,201,151,0.3)] " +
              "transition-all duration-300 ease-out " +
              "hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(32,201,151,0.45)] " +
              "active:scale-[0.98]"
            }
          >
            <DownloadIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span>이력서 다운로드</span>
            <span className="text-[12px] opacity-70 ml-1">PDF</span>
          </a>

          {/* 3) Secondary — Icon buttons */}
          <div className="flex items-center justify-center gap-3">
            <SocialButton
              href="tel:010-3465-9425"
              label="Phone"
              icon={<PhoneIcon className="w-[18px] h-[18px]" />}
            />
            <SocialButton
              href="https://github.com/km-kwon"
              label="GitHub"
              external
              icon={<GitHubIcon className="w-[18px] h-[18px]" />}
            />
            <SocialButton
              href="https://www.npmjs.com/~kwon-kyoungmin"
              label="NPM"
              external
              icon={<NpmIcon className="w-[18px] h-[18px]" />}
            />
          </div>

          {/* 4) Footer meta — single line */}
          <p className="text-center text-[12px] text-fg-muted/60 mt-2">
            성남, 대한민국 &middot; 원격 협업 가능 &middot; 평균 응답 24h 이내
          </p>
        </div>
      </div>
    </main>
  );
};

/* ── Social Icon Button with tooltip ── */
const SocialButton: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}> = ({ href, label, icon, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    aria-label={label}
    className={
      "group/social relative w-12 h-12 rounded-2xl " +
      "border border-(--border-subtle) bg-(--bg-elevated)/70 backdrop-blur-xl " +
      "flex items-center justify-center cursor-pointer " +
      "text-fg-muted " +
      "transition-all duration-300 ease-out " +
      "hover:-translate-y-1 hover:text-fg hover:border-(--accent)/35 " +
      "hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] " +
      "[html[data-theme='light']_&]:bg-white/70 " +
      "[html[data-theme='light']_&]:hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
    }
  >
    {icon}
    {/* Tooltip */}
    <span
      className={
        "absolute -bottom-8 left-1/2 -translate-x-1/2 " +
        "px-2.5 py-1 rounded-lg " +
        "bg-(--bg-elevated) border border-(--border-subtle) " +
        "text-[11px] text-fg-muted whitespace-nowrap " +
        "opacity-0 translate-y-1 pointer-events-none " +
        "group-hover/social:opacity-100 group-hover/social:translate-y-0 " +
        "transition-all duration-200 ease-out"
      }
    >
      {label}
    </span>
  </a>
);

/* ── Icons ── */
const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "w-4 h-4"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l9 6 9-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
);

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "w-4 h-4"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect
      x="9"
      y="9"
      width="13"
      height="13"
      rx="2"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
    />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "w-4 h-4"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "w-4 h-4"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12 4v12m0 0l-4-4m4 4l4-4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"
    />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "w-4 h-4"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "w-4 h-4"}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.6-1.6-1.5-2-1.5-2-1.2-.9.1-.9.1-.9 1.3.1 2 .9 2 .9 1.2 2.1 3.1 1.5 3.9 1.1.1-.9.5-1.5.8-1.9-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.7-2.8 5.8-5.5 6.1.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z" />
  </svg>
);

const NpmIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "w-4 h-4"}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8 16V8l8 8V8"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ContactPage;
