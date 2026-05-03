import React from "react";
import SectionMarker from "../../../common/SectionMarker";

const contactLinkClass =
  "group flex min-h-[92px] flex-col justify-between border border-(--border-subtle) bg-(--bg-elevated)/72 px-4 py-3 " +
  "transition-all duration-300 hover:-translate-y-0.5 hover:border-(--accent-border) hover:bg-(--bg-elevated) " +
  "[html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.035)]";

const ContactSection: React.FC = () => {
  const email = "lanos5019@ajou.ac.kr";

  const channels = [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      label: "GitHub",
      value: "@km-kwon",
      href: "https://github.com/km-kwon",
    },
    {
      label: "NPM",
      value: "~kwon-kyoungmin",
      href: "https://www.npmjs.com/~kwon-kyoungmin",
    },
    {
      label: "Resume",
      value: "PDF",
      href: `${import.meta.env.BASE_URL}resume.pdf`,
    },
  ];

  return (
    <section id="contact" className="mb-10">
      <SectionMarker number="08" label="Contact" />

      <div className="contact-modern relative overflow-hidden border-y border-(--border-subtle) py-8 md:py-10">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:items-end">
          <div>
            <h2 className="max-w-[620px] text-[26px] font-bold leading-[1.18] tracking-tight text-fg md:text-[34px]">
              다음 인터페이스를
              <br className="hidden sm:block" />
              함께 설계해요.
            </h2>
            <p className="mt-4 max-w-[520px] text-[13px] leading-[1.75] text-fg-muted">
              복잡한 데이터와 상태를 사용자가 믿고 쓸 수 있는 흐름으로 정리합니다.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center justify-between gap-4 border border-(--accent-border) bg-(--accent) px-5 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-(--accent-hover)"
            >
              <span>메일로 바로 이야기하기</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
            <div className="flex items-center justify-between gap-4 border border-(--border-subtle) bg-(--bg-elevated)/56 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-muted">
              <span>Frontend · Product UI</span>
              <span className="text-(--accent)">Open to work</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.label === "Email" ? undefined : "_blank"}
            rel={channel.label === "Email" ? undefined : "noreferrer"}
            className={contactLinkClass}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dimmed">
              {channel.label}
            </span>
            <span className="flex items-end justify-between gap-3">
              <span className="min-w-0 truncate text-[14px] font-medium text-fg">
                {channel.value}
              </span>
              <span className="text-[13px] text-fg-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-(--accent)">
                ↗
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
