// src/component/Body/activity/ActivityItem.tsx
import React from "react";
import type { Activity } from "./types";

interface ActivityItemProps {
  activity: Activity;
  isActive: boolean;
}

const pillClass =
  "text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted";

const typeColors: Record<Activity["type"], string> = {
  "trouble-shooting": "text-red-400 border-red-400/30",
  learning: "text-blue-400 border-blue-400/30",
  achievement: "text-green-400 border-green-400/30",
  "side-project": "text-purple-400 border-purple-400/30",
  activity: "text-yellow-400 border-yellow-400/30",
};

const typeLabels: Record<Activity["type"], string> = {
  "trouble-shooting": "Trouble Shooting",
  learning: "Learning",
  achievement: "Achievement",
  "side-project": "Side Project",
  activity: "Activity",
};

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, isActive }) => {
  return (
    <article className="w-full h-full" aria-hidden={!isActive}>
      <div className="w-full h-full px-5 py-5 md:px-7 md:py-6 flex flex-col justify-evenly">
        <div className="flex w-full flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
          {/* 왼쪽: 메인 정보 */}
          <div className="min-w-0 w-full flex flex-col gap-2">
            {/* 타입 배지 + 기간 */}
            <div className="flex w-full justify-between items-center gap-2">
              <span
                className={`inline-flex items-center text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                  typeColors[activity.type]
                }`}
              >
                {typeLabels[activity.type]}
              </span>

              <span
                className="hidden md:inline-block px-3 py-1 rounded-full
                           border border-(--border-subtle) bg-(--bg-soft)
                           text-[11px] text-fg-muted"
              >
                {activity.period.join(" ~ ")}
              </span>
            </div>

            <h3 className="text-[18px] md:text-[19px] font-semibold text-fg leading-snug">
              {activity.title}
            </h3>

            {/* 서브 타이틀 */}
            <p className="text-[12px] md:text-[13px] text-fg-muted">
              {activity.subTitle}
            </p>

            {/* 메인 내용 리스트 */}
            <div className="text-[13px] text-fg-muted leading-[1.7]">
              <ul className="space-y-1.5">
                {activity.mainContent.map((element, idx) => (
                  <li key={idx} className="flex">
                    <span className="mt-[3px] mr-1 text-[10px]">•</span>
                    <span>{element}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 결과 */}
            {activity.result && (
              <p className="text-[12px] md:text-[13px] text-green-400">
                {activity.result}
              </p>
            )}

            {/* 태그 */}
            <div className="flex flex-wrap gap-1.5">
              {activity.tags.map((tag) => (
                <span key={tag} className={pillClass}>
                  {tag}
                </span>
              ))}
            </div>

            {/* 링크 */}
            {activity.link && (
              <a
                href={activity.link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[12px] text-fg-muted
                           hover:text-fg transition-colors duration-200"
              >
                <span>{activity.link.label}</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ActivityItem;
