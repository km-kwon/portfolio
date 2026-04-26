import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../types";
import { contentItem } from "./variants";

/* ── Task 파싱: "행동: 결과" 구조 분리 ── */
function parseTask(task: string): { action: string; detail?: string } {
  const colonIdx = task.indexOf(":");
  if (colonIdx !== -1 && colonIdx < 60) {
    return {
      action: task.slice(0, colonIdx).trim(),
      detail: task.slice(colonIdx + 1).trim(),
    };
  }
  const arrowIdx = task.indexOf("→");
  if (arrowIdx !== -1) {
    return {
      action: task.slice(0, arrowIdx).trim(),
      detail: task.slice(arrowIdx + 1).trim(),
    };
  }
  return { action: task };
}

/* ── Role Section ── */
interface RoleSectionProps {
  role: NonNullable<Project["role"]>;
}

export const RoleSection: React.FC<RoleSectionProps> = ({ role }) => {
  const [showAll, setShowAll] = useState(false);

  const percentValue = parseInt(role.percentage) || 0;
  const VISIBLE_COUNT = 3;
  const tasks = role.tasks;
  const visibleTasks = showAll ? tasks : tasks.slice(0, VISIBLE_COUNT);
  const hasMore = tasks.length > VISIBLE_COUNT;

  const isIndividual = percentValue === 100;
  const barLabel = isIndividual ? "Individual Project" : role.percentage;

  return (
    <motion.section variants={contentItem}>
      <h4 className="text-fg font-semibold text-base mb-4">👩🏻‍💻 수행 역할</h4>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-sm font-medium text-fg">{barLabel}</span>
          <span className="text-lg font-bold text-(--accent)">
            {percentValue}%
          </span>
        </div>
        <div className="h-2.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-(--accent)"
            initial={{ width: 0 }}
            animate={{ width: `${percentValue}%` }}
            transition={{
              duration: 1,
              ease: [0.22, 0.61, 0.36, 1],
              delay: 0.2,
            }}
          />
        </div>
      </div>

      {/* Tasks */}
      <div className="space-y-2.5">
        {visibleTasks.map((task, idx) => {
          const { action, detail } = parseTask(task);
          return (
            <div
              key={idx}
              className="flex gap-2.5 p-3 rounded-lg bg-(--bg) border border-(--border-subtle) text-xs"
            >
              <span className="text-(--accent) mt-px shrink-0">✓</span>
              <div>
                <span className="font-medium text-fg">{action}</span>
                {detail && (
                  <p className="text-fg-muted mt-0.5 leading-relaxed">
                    → {detail}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More */}
      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-xs text-(--accent) hover:text-(--accent-hover) transition-colors cursor-pointer"
        >
          {showAll ? "접기" : `+${tasks.length - VISIBLE_COUNT}개 더보기`}
        </button>
      )}
    </motion.section>
  );
};
