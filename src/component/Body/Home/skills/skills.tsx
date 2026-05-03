import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SkillTabType } from "./types";
import {
  cardBase,
  sectionHeaderBase,
  sectionTitleClass,
  tabButtonClass,
} from "../../../../styles/tokens";
import SectionMarker from "../../../common/SectionMarker";
import StackTab from "./stack/StackTab";
import CareerTab from "./career/CareerTab";
import OpenSourceTab from "./opensource/OpenSourceTab";

const orbitNodes = [
  {
    id: "react",
    label: "React",
    title: "Product UI Core",
    desc: "상태, 렌더링, 컴포넌트 경계를 제품 흐름에 맞춰 설계합니다.",
    meta: "UI Architecture",
    angle: -84,
    radius: 42,
  },
  {
    id: "typescript",
    label: "TS",
    title: "Typed Interface",
    desc: "데이터 계약과 컴포넌트 API를 타입으로 고정해 변경 비용을 줄입니다.",
    meta: "Type Safety",
    angle: -18,
    radius: 47,
  },
  {
    id: "performance",
    label: "Perf",
    title: "Rendering & Worker",
    desc: "대용량 로그와 검색 흐름을 UI thread와 분리해 체감 성능을 지킵니다.",
    meta: "80K logs/sec",
    angle: 42,
    radius: 44,
  },
  {
    id: "security",
    label: "Sec",
    title: "Security-minded UI",
    desc: "네트워크/암호화 관점으로 데이터 흐름과 실패 시나리오를 먼저 의심합니다.",
    meta: "Secure Flow",
    angle: 112,
    radius: 48,
  },
  {
    id: "three",
    label: "3D",
    title: "Spatial Interaction",
    desc: "3D와 모션을 장식이 아니라 정보 구조를 설명하는 인터랙션으로 사용합니다.",
    meta: "R3F / Motion",
    angle: 184,
    radius: 43,
  },
  {
    id: "systems",
    label: "DDD",
    title: "System Boundary",
    desc: "도메인 단위로 책임을 나누고 이벤트/상태 흐름을 추적 가능한 구조로 만듭니다.",
    meta: "Domain Design",
    angle: 248,
    radius: 46,
  },
] as const;

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillTabType>("career");
  const [activeNodeId, setActiveNodeId] = useState<(typeof orbitNodes)[number]["id"]>("react");
  const activeNode =
    orbitNodes.find((node) => node.id === activeNodeId) ?? orbitNodes[0];

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
      <SectionMarker number="03" label="Skills" />
      <div className={sectionHeaderBase}>
        <div>
          <h2 className={sectionTitleClass}>경력 &amp; 전문성</h2>
        </div>
      </div>

      <div className="skill-orbit-system mb-6 grid gap-6 lg:grid-cols-[minmax(360px,0.92fr)_minmax(280px,0.58fr)] lg:items-center">
        <div className="skill-orbit-stage" aria-label="기술 스택 오비트 시스템">
          <div className="skill-orbit-ring skill-orbit-ring-outer" />
          <div className="skill-orbit-ring skill-orbit-ring-inner" />
          <div className="skill-orbit-core">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent)">
              Core
            </span>
            <strong className="mt-1 text-[18px] leading-tight text-fg">
              Frontend
              <br />
              System
            </strong>
          </div>

          {orbitNodes.map((node, index) => {
            const isActive = node.id === activeNode.id;
            const radians = (node.angle * Math.PI) / 180;
            const nodeX = 50 + Math.cos(radians) * node.radius;
            const nodeY = 50 + Math.sin(radians) * node.radius * 0.72;
            return (
              <button
                key={node.id}
                type="button"
                className={[
                  "skill-orbit-node",
                  isActive ? "skill-orbit-node-active" : "",
                ].join(" ")}
                style={
                  {
                    "--node-x": `${nodeX}%`,
                    "--node-y": `${nodeY}%`,
                    "--orbit-delay": `${index * -0.8}s`,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setActiveNodeId(node.id)}
                onFocus={() => setActiveNodeId(node.id)}
                onClick={() => setActiveNodeId(node.id)}
                aria-pressed={isActive}
              >
                <span>{node.label}</span>
              </button>
            );
          })}
        </div>

        <div className="skill-orbit-panel">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent)">
            Selected Layer
          </div>
          <h3 className="mt-3 text-[24px] font-bold leading-tight text-fg">
            {activeNode.title}
          </h3>
          <p className="mt-3 text-[13px] leading-[1.75] text-fg-muted">
            {activeNode.desc}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-(--border-subtle) pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-muted">
            <span>{activeNode.meta}</span>
            <span>{orbitNodes.findIndex((node) => node.id === activeNode.id) + 1} / {orbitNodes.length}</span>
          </div>
        </div>
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
