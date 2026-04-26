import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../types";
import { contentItem } from "./variants";

/* ── Chevron Icon ── */
const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="4 6 8 10 12 6" />
  </svg>
);

/* ── Troubleshooting Section ── */
interface TroubleshootingSectionProps {
  items: NonNullable<Project["troubleshooting"]>;
}

export const TroubleshootingSection: React.FC<TroubleshootingSectionProps> = ({
  items,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <motion.section variants={contentItem}>
      <h4 className="text-fg font-semibold text-base mb-4">🚨 트러블 슈팅</h4>

      <div className="space-y-3">
        {items.map((ts, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={[
                "rounded-xl border overflow-hidden transition-colors duration-300",
                isOpen
                  ? "border-(--accent-border) bg-(--bg-soft)"
                  : "border-(--border-subtle) bg-(--bg)",
              ].join(" ")}
            >
              {/* Header — always visible */}
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center gap-3 p-4 text-left cursor-pointer group"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/10 text-red-400 text-xs font-bold shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-medium text-sm text-fg">
                  {ts.title}
                </span>
                <span className="text-fg-muted group-hover:text-fg transition-colors">
                  <ChevronIcon open={isOpen} />
                </span>
              </button>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: {
                        duration: 0.3,
                        ease: [0.22, 0.61, 0.36, 1],
                      },
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-3">
                      {/* Before → After */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* BEFORE */}
                        <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                          <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-2">
                            Before — 문제 & 원인
                          </div>
                          <p className="text-xs text-fg-muted leading-relaxed mb-1.5">
                            <span className="font-medium text-red-400/80">
                              문제:
                            </span>{" "}
                            {ts.problem}
                          </p>
                          <p className="text-xs text-fg-muted leading-relaxed">
                            <span className="font-medium text-red-400/80">
                              원인:
                            </span>{" "}
                            {ts.cause}
                          </p>
                        </div>

                        {/* AFTER */}
                        <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                          <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
                            After — 해결
                          </div>
                          <p className="text-xs text-fg-muted leading-relaxed">
                            {ts.solution}
                          </p>
                        </div>
                      </div>

                      {/* Learning */}
                      <div className="p-3 rounded-lg bg-(--bg-elevated) border border-(--border-subtle)">
                        <div className="text-[10px] font-bold text-(--accent) uppercase tracking-wider mb-1.5">
                          📚 Learned
                        </div>
                        <p className="text-xs text-fg-muted leading-relaxed">
                          {ts.learning}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
