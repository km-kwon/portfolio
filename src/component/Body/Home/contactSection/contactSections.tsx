// src/ContactSection.tsx
import React from "react";
import SectionMarker from "../../../common/SectionMarker";

const cardBase =
  "rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] " +
  "transition-transform transition-shadow transition-colors duration-200 ease-out " +
  "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 " +
  "[html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] " +
  "[html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]";

const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5";

const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";
const sectionSubTitleClass =
  "text-[13px] text-fg-muted leading-relaxed";

const ContactSection: React.FC = () => {
  const email = "lanos5019@ajou.ac.kr";

  return (
    <section id="contact" className="mb-10">
      <SectionMarker number="08" label="Contact" />
      <div className={sectionHeaderBase}>
        <div>
          <h2 className={sectionTitleClass}>함께 이야기해요</h2>
        </div>
        <p className={sectionSubTitleClass}>
          프론트엔드 포지션, 협업, 프로젝트 제안 모두 이메일로 편하게 연락 주세요.
        </p>
      </div>

      <div className="grid gap-4.5 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
        {/* 왼쪽 소개 카드 */}
        <div
          className={`${cardBase} text-[14px] text-fg-muted leading-[1.7]`}
        >
          <p>
            새 제품을 기획 중이거나, 기존 서비스를 재설계하고 싶다면
            <strong> “무엇을 해결하고 싶은지” </strong>를 함께 정리하는 단계부터
            도울 수 있습니다.
          </p>
          <p className="mt-3">
            아래 채널 중 편한 방법으로 연락 주시면
            <br />
            가능한 한 빠르게 답변드리겠습니다.
          </p>
        </div>

        {/* 오른쪽 채널 카드 */}
        <div className={cardBase}>
          <div className="grid gap-2">
            <div className="flex items-center justify-between gap-3 rounded-full px-3.5 py-2 border border-(--border-subtle) bg-(--bg-soft) [html[data-theme='light']_&]:bg-[#f5f5fb]">
              <span className="text-[12px] text-fg-muted">
                Email
              </span>
              <a
                href={`mailto:${email}`}
                className="text-[13px] font-medium truncate"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-full px-3.5 py-2 border border-(--border-subtle) bg-(--bg-soft) [html[data-theme='light']_&]:bg-[#f5f5fb]">
              <span className="text-[12px] text-fg-muted">
                GitHub
              </span>
              <a
                href="https://github.com/km-kwon"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-medium truncate"
              >
                @km-kwon
              </a>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-full px-3.5 py-2 border border-(--border-subtle) bg-(--bg-soft) [html[data-theme='light']_&]:bg-[#f5f5fb]">
              <span className="text-[12px] text-fg-muted">
                NPM
              </span>
              <a
                href="https://www.npmjs.com/~kwon-kyoungmin"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-medium truncate"
              >
                ~kwon-kyoungmin
              </a>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-full px-3.5 py-2 border border-(--border-subtle) bg-(--bg-soft) [html[data-theme='light']_&]:bg-[#f5f5fb]">
              <span className="text-[12px] text-fg-muted">
                Resume
              </span>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-medium truncate"
              >
                PDF 다운로드
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
