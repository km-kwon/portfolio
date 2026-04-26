import React from "react";
import { motion } from "framer-motion";
import { contentItem } from "./variants";

/* ── Result 분류 유틸 ── */
function classifyResult(text: string): {
  icon: string;
  accentClass: string;
  bgClass: string;
  borderClass: string;
} {
  if (/수상|금상|최우수|은상|대상|장려|1위|2위|3위/.test(text)) {
    return {
      icon: "🏆",
      accentClass: "text-yellow-400",
      bgClass: "bg-yellow-500/5",
      borderClass: "border-yellow-500/15",
    };
  }
  if (/Top\s*\d|순위|위\b/i.test(text)) {
    return {
      icon: "🎯",
      accentClass: "text-yellow-400",
      bgClass: "bg-yellow-500/5",
      borderClass: "border-yellow-500/15",
    };
  }
  if (/%|정확도|점|달성|건|명|확보|성공|완료/.test(text)) {
    return {
      icon: "📊",
      accentClass: "text-emerald-400",
      bgClass: "bg-emerald-500/5",
      borderClass: "border-emerald-500/15",
    };
  }
  return {
    icon: "✨",
    accentClass: "text-(--accent)",
    bgClass: "bg-(--bg-soft)",
    borderClass: "border-(--border-subtle)",
  };
}

/* ── 숫자 추출 (날짜 패턴 제외, 의미 있는 지표만) ── */
function extractNumber(text: string): string | null {
  const cleaned = text
    .replace(/\b20\d{2}(학년도|년도|년)?\b/g, "")
    .replace(/\d{1,2}월/g, "")
    .replace(/\d{1,2}일/g, "");

  // 1순위: 의미 있는 단위 접미사가 붙은 숫자 (위, %, 명, 건, 점, 개)
  const withSuffix = cleaned.match(/(\d[\d,.]*\+?[%점건명위개])/);
  if (withSuffix) return withSuffix[1];

  // 2순위: 단위 없지만 두 자릿수 이상인 숫자 (단독 한 자리는 무의미할 확률 높음)
  const standalone = cleaned.match(/(\d{2,}[\d,.]*\+?)/);
  return standalone ? standalone[1] : null;
}

/* ── Results Section ── */
interface ResultsSectionProps {
  results: string[];
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
  return (
    <motion.section variants={contentItem}>
      <h4 className="text-fg font-semibold text-base mb-4">✨ 성과</h4>

      <div
        className={`grid gap-3 ${
          results.length === 1
            ? "grid-cols-1"
            : results.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {results.map((result, idx) => {
          const { icon, accentClass, bgClass, borderClass } =
            classifyResult(result);
          const number = extractNumber(result);

          return (
            <div
              key={idx}
              className={`flex flex-col p-4 rounded-xl border ${bgClass} ${borderClass}`}
            >
              <span className="text-lg mb-1">{icon}</span>
              {number && (
                <span className={`text-xl font-bold mb-1 ${accentClass}`}>
                  {number}
                </span>
              )}
              <span className="text-xs text-fg-muted leading-relaxed">
                {result}
              </span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
