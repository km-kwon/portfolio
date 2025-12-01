// src/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-[1040px] mx-auto px-5 pb-6 pt-4 border-t border-white/5 flex flex-col gap-2 text-[11px] text-fg-muted sm:flex-row sm:justify-between">
      <span>© {currentYear} Your Name. All rights reserved.</span>
      <span>Built with React · TypeScript · minimal black &amp; white.</span>
    </footer>
  );
};

export default Footer;
