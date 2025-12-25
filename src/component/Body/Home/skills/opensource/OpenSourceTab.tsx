import React from "react";
import type { OpenSourcePackage } from "../types";
import { pillClass, chipClass } from "../styles";
import { openSourceData } from "./openSourceData";

interface PackageCardProps {
  pkg: OpenSourcePackage;
}

const GitHubIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const NpmIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
  </svg>
);

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="bg-[var(--bg-soft)] rounded-lg p-4 border border-[var(--border-subtle)] hover:border-white/20 transition-colors">
      {/* 패키지 헤더 */}

      <div className="mb-3 w-full ">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-[15px] font-bold font-mono">{pkg.name}</h3>
            <span className={chipClass}>v{pkg.version}</span>
            {pkg.downloads && (
              <span className="text-[11px] text-fg-muted">
                📦 {pkg.downloads}
              </span>
            )}
          </div>
          {/* 링크 */}
          <div className="flex gap-3 text-[12px]">
            {pkg.githubUrl && (
              <a
                href={pkg.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1.5 text-fg-muted hover:text-fg transition-colors"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            )}
            {pkg.npmUrl && (
              <a
                href={pkg.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1.5 text-fg-muted hover:text-fg transition-colors"
              >
                <NpmIcon />
                <span>NPM</span>
              </a>
            )}
          </div>
        </div>
        <p className="text-[13px] text-fg-muted leading-relaxed">
          {pkg.description}
        </p>
      </div>

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-1.5">
        {pkg.techStack.map((tech) => (
          <span key={tech} className={pillClass}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const OpenSourceTab: React.FC = () => {
  return (
    <div className="grid gap-3 md:grid-cols-1">
      {openSourceData.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
};

export default OpenSourceTab;
