import React from "react";

interface SectionMarkerProps {
  number: string;
  label: string;
}

const SectionMarker: React.FC<SectionMarkerProps> = ({ number, label }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-[11px] font-mono text-fg-dimmed tracking-wider">
      {number}
    </span>
    <span className="h-px w-6 bg-(--border-subtle)" />
    <span className="text-[11px] uppercase tracking-[0.15em] text-(--accent) font-medium">
      {label}
    </span>
  </div>
);

export default SectionMarker;
