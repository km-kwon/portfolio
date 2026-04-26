// src/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-(--content-max-w) mx-auto px-5 pb-8 pt-6 border-t border-(--border-subtle) flex flex-col gap-3 text-[12px] text-fg-dimmed sm:flex-row sm:justify-between sm:items-center">
      <div className="flex items-center gap-3">
        <span>&copy; {currentYear} Kwon-KyoungMin All rights reserved.</span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-(--accent-border) bg-(--accent-subtle) text-[11px] text-(--accent) font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse" />
          Open to Work
        </span>
      </div>
      <span>Built with React &middot; TypeScript &middot; Tailwind CSS</span>
    </footer>
  );
};

export default Footer;
