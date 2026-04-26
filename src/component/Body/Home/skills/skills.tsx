import React, { useState } from "react";
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
    <section id="skills" className="mb-20">
      <SectionMarker number="03" label="Skills" />
      <div className={sectionHeaderBase}>
        <div>
          <h2 className={sectionTitleClass}>경력 &amp; 전문성</h2>
        </div>
        <p className={sectionSubTitleClass}>
          안전하고 견고한 제품을 만들기 위해 사용하는 기술들입니다.
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex gap-2.5 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={tabButtonClass(activeTab === tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      <div className={cardBase}>{renderTabContent()}</div>
    </section>
  );
};

export default SkillsSection;
