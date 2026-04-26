import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import {
  sectionHeaderBase,
  sectionTitleClass,
  sectionSubTitleClass,
} from "../../../../styles/tokens";
import { experiments } from "../../Lab/experiments";
import ExperimentCard from "../../Lab/ExperimentCard";
import SectionMarker from "../../../common/SectionMarker";

// 모듈 로드 시 한 번만 랜덤 선택 (페이지 새로고침마다 변경)
const shuffled = [...experiments].sort(() => Math.random() - 0.5);
const preview = shuffled.slice(0, 2);

export const WorkerLab: React.FC = () => {

  return (
    <section id="lab" className="mb-20">
      <SectionMarker number="06" label="Lab" />
      <div className={sectionHeaderBase}>
        <div>
          <h2 className={sectionTitleClass}>프론트엔드 실험실</h2>
        </div>
        <p className={sectionSubTitleClass}>
          성능 최적화 기법을 라이브 데모로 직접 체험해 보세요.
        </p>
      </div>

      <div className="grid gap-5">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-40 rounded-xl border border-(--border-subtle) bg-(--bg-elevated)">
              <span className="h-4 w-4 rounded-full border-2 border-(--accent) border-t-transparent animate-spin" />
            </div>
          }
        >
          {preview.map((exp) => (
            <ExperimentCard key={exp.id} experiment={exp} />
          ))}
        </Suspense>
      </div>

      {/* CTA to full lab page */}
      {experiments.length > 2 && (
        <div className="mt-6 text-center">
          <Link
            to="/lab"
            className={
              "inline-flex items-center gap-2 text-[13px] px-5 py-2.5 rounded-lg " +
              "border border-(--border-subtle) bg-(--bg-elevated) " +
              "text-fg-muted font-medium " +
              "hover:border-(--accent)/40 hover:text-fg " +
              "transition-all duration-300 ease-out"
            }
          >
            전체 실험 보기
            <span className="text-[11px] opacity-60">
              ({experiments.length}개)
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
};
