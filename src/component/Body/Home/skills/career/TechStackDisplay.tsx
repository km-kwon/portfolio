import React from "react";
import type { TechStack } from "../types";
import { pillClass } from "../styles";

interface TechStackDisplayProps {
  techStack: TechStack;
}

const TechStackDisplay: React.FC<TechStackDisplayProps> = ({ techStack }) => {
  return (
    <div className="space-y-2">
      <div className="text-[12px] font-semibold">기술 스택</div>
      <div className="space-y-1.5">
        {techStack.languages && techStack.languages.length > 0 && (
          <div className="flex gap-2 items-center">
            <span className="text-[11px] text-fg-muted min-w-[80px] text-center">
              언어/프레임워크
            </span>
            <div className="flex flex-wrap gap-1">
              {techStack.languages.map((tech) => (
                <span key={tech} className={pillClass}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {techStack.libs && techStack.libs.length > 0 && (
          <div className="flex gap-2 items-center">
            <span className="text-[11px] text-fg-muted min-w-[80px] text-center">
              라이브러리
            </span>
            <div className="flex flex-wrap gap-1">
              {techStack.libs.map((tech) => (
                <span key={tech} className={pillClass}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {techStack.patterns && techStack.patterns.length > 0 && (
          <div className="flex gap-2 items-center">
            <span className="text-[11px] text-fg-muted min-w-[80px] text-center">
              패턴/기법
            </span>
            <div className="flex flex-wrap gap-1">
              {techStack.patterns.map((tech) => (
                <span key={tech} className={pillClass}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStackDisplay;
