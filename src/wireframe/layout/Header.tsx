import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

type Theme = "light" | "dark";
type NavIconKind = "profile" | "projects" | "about" | "resume" | "blog" | "lab" | "contact";
type NavItem = { to: string; label: string; icon: NavIconKind };

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const PRIMARY: NavItem[] = [
  { to: "/",         label: "Profile",  icon: "profile" },
  { to: "/projects", label: "Projects", icon: "projects" },
  { to: "/about",    label: "About",    icon: "about" },
  { to: "/resume",   label: "Resume",   icon: "resume" },
];
const SECONDARY: NavItem[] = [
  { to: "/blog", label: "Blog", icon: "blog" },
  { to: "/lab",  label: "Lab",  icon: "lab" },
];

const linkBase: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: 7, whiteSpace: "nowrap",
  background: "none", border: 0, padding: "8px 12px", borderRadius: 8,
  fontSize: 13, fontFamily: "var(--sans)", color: "var(--fg-muted)",
  cursor: "pointer", transition: "all .25s ease",
};
const activeStyle: React.CSSProperties = {
  color: "var(--fg)", background: "var(--bg-soft)",
};

export const WireHeader: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const location = useLocation();
  const isContact = location.pathname === "/contact";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavItems: NavItem[] = [
    ...PRIMARY,
    ...SECONDARY,
    { to: "/contact", label: "Contact", icon: "contact" },
  ];

  return (
    <header
      className="wire-header"
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        height: "var(--header-h)", zIndex: 100,
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        background: "color-mix(in oklab, var(--bg) 75%, transparent)",
        borderBottom: "1px solid color-mix(in oklab, var(--border) 60%, transparent)",
      }}
    >
      <div
        className="wire-header-inner"
        style={{
          maxWidth: "var(--content-max)", margin: "0 auto",
          height: "100%", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
        }}
      >
        <Link
          className="wire-header-brand"
          to="/"
          style={{
            fontFamily: "var(--sans)", fontSize: 13, fontWeight: 700,
            letterSpacing: "0.01em",
            color: "var(--fg-muted)", textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
        >
          Frontend · UX
        </Link>

        <nav className="wire-header-nav" style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 13 }}>
          {PRIMARY.map((it) => (
            <NavLink
              className="wire-header-link"
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              style={({ isActive }) => ({
                ...linkBase,
                ...(isActive ? activeStyle : {}),
                textDecoration: "none",
              })}
            >
              <NavIcon kind={it.icon} />
              <span>{it.label}</span>
            </NavLink>
          ))}
          <span style={{ color: "var(--fg-dim)", margin: "0 4px", opacity: 0.5 }}>·</span>
          {SECONDARY.map((it) => (
            <NavLink
              className="wire-header-link"
              key={it.to}
              to={it.to}
              style={({ isActive }) => ({
                ...linkBase,
                ...(isActive ? activeStyle : {}),
                textDecoration: "none",
              })}
            >
              <NavIcon kind={it.icon} />
              <span>{it.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="wire-header-actions" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 36, height: 36, borderRadius: 9,
              border: "1px solid var(--border)", background: "var(--bg-elevated)",
              color: "var(--fg-muted)", display: "grid", placeItems: "center",
              cursor: "pointer", transition: "all .25s",
            }}
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.4 8.4 0 01-5.91-2.82 8.07 8.07 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.32 10.32 0 00-6.32 10.21 10.48 10.48 0 007.04 8.99c.94.32 1.92.5 2.89.55h.48a10.5 10.5 0 008.47-4.27c.67-.93.49-1.52.32-1.79z" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/>
              </svg>
            )}
          </button>
          <Link
            className="wire-header-contact"
            to="/contact"
            style={{
              padding: "8px 16px", borderRadius: 9,
              border: "1px solid var(--border)",
              background: isContact ? "var(--accent-soft)" : "var(--bg-elevated)",
              color: isContact ? "var(--accent)" : "var(--fg-muted)",
              borderColor: isContact ? "var(--accent)" : "var(--border)",
              fontSize: 13, transition: "all .25s", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 7, whiteSpace: "nowrap",
            }}
          >
            <NavIcon kind="contact" />
            <span>Contact</span>
            <span aria-hidden="true">→</span>
          </Link>
          <button
            className="wire-header-menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="wire-header-mobile-nav" aria-label="Mobile navigation">
          {mobileNavItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              onClick={() => setIsMenuOpen(false)}
              style={({ isActive }) => ({
                ...linkBase,
                ...(isActive ? activeStyle : {}),
                textDecoration: "none",
              })}
            >
              <NavIcon kind={it.icon} />
              <span>{it.label}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

const NavIcon: React.FC<{ kind: NavIconKind; size?: number }> = ({ kind, size = 14 }) => {
  const iconProps: React.SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: { flex: "0 0 auto", opacity: 0.84 },
    "aria-hidden": true,
    focusable: false,
  };

  switch (kind) {
    case "profile":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    case "projects":
      return (
        <svg {...iconProps}>
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h3l2 2h6A2.5 2.5 0 0 1 20 9.5v7A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" />
          <path d="m9 13 2 2-2 2" />
          <path d="m15 13-2 4" />
        </svg>
      );
    case "about":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      );
    case "resume":
      return (
        <svg {...iconProps}>
          <path d="M7 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20z" />
          <path d="M13 3.5v4h4" />
          <path d="M9.5 12h5" />
          <path d="M9.5 16h5" />
        </svg>
      );
    case "blog":
      return (
        <svg {...iconProps}>
          <path d="m4.5 19.5 4.2-1 9.6-9.6a2.1 2.1 0 0 0-3-3l-9.6 9.6z" />
          <path d="m14.7 6.5 2.8 2.8" />
        </svg>
      );
    case "lab":
      return (
        <svg {...iconProps}>
          <path d="M9 3.5h6" />
          <path d="M10 3.5v5.2l-4.8 8.4A2.4 2.4 0 0 0 7.3 20.7h9.4a2.4 2.4 0 0 0 2.1-3.6L14 8.7V3.5" />
          <path d="M8 14h8" />
        </svg>
      );
    case "contact":
      return (
        <svg {...iconProps}>
          <path d="M4 6.5h16v11H4z" />
          <path d="m4 8 8 5.5L20 8" />
        </svg>
      );
    default:
      return null;
  }
};

export default WireHeader;
