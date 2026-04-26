// src/Header.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Theme = "light" | "dark";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  onNavClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onNavClick,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: string; label: string }[] = [
    { id: "top", label: "Profile" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        onNavClick(id);
      }, 100);
    } else {
      onNavClick(id);
    }
  };

  // 모바일 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinkBase =
    "px-3 py-1.5 rounded-lg text-[13px] font-medium border border-transparent cursor-pointer " +
    "transition-all duration-300 ease-out hover:text-fg hover:bg-(--bg-soft)";

  const navLinkActive = "text-fg bg-(--bg-soft)";
  const navLinkInactive = "text-fg-muted";

  return (
    <>
      <header className="fixed inset-x-0 top-0 h-(--header-height) z-20 border-b border-(--border-subtle)">
        <div className="max-w-(--content-max-w) mx-auto h-full px-5 flex items-center justify-between gap-4">
          {/* LEFT - 로고 (홈 링크 역할) */}
          <Link
            to="/"
            className="tracking-[0.08em] uppercase text-[13px] font-medium text-fg-muted hover:text-(--accent) transition-colors duration-300 cursor-pointer"
          >
            Frontend · UX
          </Link>

          {/* CENTER NAV - Home 제거, 섹션들 + Blog */}
          <nav className="hidden md:flex items-center gap-1 text-[13px]">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                className={`${navLinkBase} ${navLinkInactive}`}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </button>
            ))}

            {/* 구분자 */}
            <span className="text-fg-muted/40 mx-1">·</span>

            <Link
              to="/lab"
              className={`${navLinkBase} ${location.pathname === "/lab" ? navLinkActive : navLinkInactive
                }`}
            >
              Lab
            </Link>
            <Link
              to="/blog"
              className={`${navLinkBase} ${location.pathname === "/blog" ? navLinkActive : navLinkInactive
                }`}
            >
              Blog
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* 햄버거 메뉴 버튼 (모바일) */}
            <button
              className="md:hidden w-9 h-9 rounded-lg border border-(--border-subtle) bg-(--bg-elevated)
                         flex items-center justify-center cursor-pointer
                         transition-all duration-300 ease-out
                         hover:bg-(--bg-soft) hover:border-(--border-hover)"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            {/* 테마 토글 */}
            <button
              className="w-9 h-9 rounded-lg border border-(--border-subtle) bg-(--bg-elevated)
                         flex items-center justify-center cursor-pointer
                         transition-all duration-300 ease-out
                         hover:bg-(--bg-soft) hover:border-(--border-hover)"
              aria-label="Toggle theme"
              onClick={onToggleTheme}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <Link
              to="/contact"
              className={`hidden sm:inline-flex text-[13px] px-4 py-2 rounded-lg border
                         transition-all duration-300 ease-out
                         ${location.pathname === "/contact"
                  ? "text-(--accent) border-(--accent-border) bg-(--accent-subtle)"
                  : "text-fg-muted border-(--border-subtle) bg-(--bg-elevated) hover:bg-(--bg-soft) hover:border-(--border-hover)"}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-9998"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 모바일 슬라이드 메뉴 */}
      <div
        className={[
          "md:hidden fixed top-0 right-0 bottom-0 w-[280px] z-9999",
          "bg-(--bg-elevated)",
          "border-l border-(--border-subtle)",
          "transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <nav className="flex flex-col p-6 pt-[calc(var(--header-height)+16px)] gap-1">
          {/* 모바일에서도 Home 제거 - 섹션들만 표시 */}
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              className="px-4 py-3 rounded-lg text-[14px] text-fg-muted border border-transparent text-left
                         transition-all duration-200 ease-out
                         hover:bg-(--bg-soft) hover:text-fg"
              onClick={() => handleNavClick(id)}
            >
              {label}
            </button>
          ))}

          <div className="my-2 border-t border-(--border-subtle)" />

          <Link
            to="/lab"
            className={[
              "px-4 py-3 rounded-lg text-[14px] border border-transparent",
              "transition-all duration-200 ease-out",
              "hover:bg-(--bg-soft)",
              location.pathname === "/lab"
                ? "text-fg bg-(--bg-soft)"
                : "text-fg-muted",
            ].join(" ")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Lab
          </Link>
          <Link
            to="/blog"
            className={[
              "px-4 py-3 rounded-lg text-[14px] border border-transparent",
              "transition-all duration-200 ease-out",
              "hover:bg-(--bg-soft)",
              location.pathname === "/blog"
                ? "text-fg bg-(--bg-soft)"
                : "text-fg-muted",
            ].join(" ")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          <div className="mt-4 pt-4 border-t border-(--border-subtle)">
            <Link
              to="/contact"
              className="block w-full text-center text-[14px] px-4 py-3 rounded-lg border border-(--border-subtle)
                         bg-(--bg-soft) hover:border-(--border-hover)
                         transition-all duration-200 ease-out text-fg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

/** 아이콘들 */
const SunIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM6.34 6.34a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41l-.7.7Zm12.02 12.02a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7ZM6.34 17.66l-.7.7a1 1 0 1 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41Zm12.02-12.02-.7.7a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
    />
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

const HamburgerIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Header;