import React from "react";

interface SectionMarkerProps {
  number: string;
  label: string;
}

const SectionMarker: React.FC<SectionMarkerProps> = ({ number, label }) => (
  <div className="flex items-center gap-3 mb-4" aria-label={label}>
    <span className="text-[10px] font-mono text-fg-dimmed tracking-wider">
      {number}
    </span>
    <span className="h-px w-10 bg-(--border-subtle)" />
  </div>
);

export default SectionMarker;
