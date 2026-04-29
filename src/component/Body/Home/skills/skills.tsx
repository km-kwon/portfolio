import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SkillTabType } from "./types";
import {
  cardBase,
  sectionHeaderBase,
  sectionTitleClass,
  sectionSubTitleClass,
  tabButtonClass,
} from "../../../../styles/tokens";
import SectionMarker from "../../../common/SectionMarker";
import StackTab from "./stack/StackTab";
import CareerTab from "./career/CareerTab";
import OpenSourceTab from "./opensource/OpenSourceTab";

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillTabType>("career");

  const tabs: { key: SkillTabType; label: string }[] = [
    { key: "career", label: "경력" },
    { key: "opensource", label: "오픈소스" },
    { key: "stack", label: "기술 스택" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "stack":
        return <StackTab />;
      case "career":
        return <CareerTab />;
      case "opensource":
        return <OpenSourceTab />;
      default:
        return <StackTab />;
    }
  };

  return (
    <section id="skills" className="mb-16">
      <SectionMarker number="04" label="Skills" />
      <div className={sectionHeaderBase}>
        <div>
          <h2 className={sectionTitleClass}>경력 &amp; 전문성</h2>
        </div>
        <p className={sectionSubTitleClass}>
          안전하고 견고한 제품을 만들기 위해 사용하는 기술들입니다.
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div className="relative flex gap-2.5 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={[
              tabButtonClass(activeTab === tab.key),
              "relative overflow-hidden",
              activeTab === tab.key
                ? "shadow-[0_0_22px_rgba(32,201,151,0.14)]"
                : "",
            ].join(" ")}
          >
            {activeTab === tab.key && (
              <motion.span
                layoutId="skills-active-scan"
                className="absolute inset-x-2 bottom-1 h-px bg-(--accent)"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      <div className={cardBase}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
