import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

type Theme = "light" | "dark";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const PRIMARY = [
  { to: "/",         label: "Profile" },
  { to: "/projects", label: "Projects" },
  { to: "/about",    label: "About" },
  { to: "/resume",   label: "Resume" },
];
const SECONDARY = [
  { to: "/blog", label: "Blog" },
  { to: "/lab",  label: "Lab" },
];

const linkBase: React.CSSProperties = {
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

  return (
    <header
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
        style={{
          maxWidth: "var(--content-max)", margin: "0 auto",
          height: "100%", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "var(--mono)", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--fg-muted)", textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
        >
          FRONTEND · UX
        </Link>

        <nav style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 13 }}>
          {PRIMARY.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              style={({ isActive }) => ({
                ...linkBase,
                ...(isActive ? activeStyle : {}),
                textDecoration: "none",
              })}
            >
              {it.label}
            </NavLink>
          ))}
          <span style={{ color: "var(--fg-dim)", margin: "0 4px", opacity: 0.5 }}>·</span>
          {SECONDARY.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              style={({ isActive }) => ({
                ...linkBase,
                ...(isActive ? activeStyle : {}),
                textDecoration: "none",
              })}
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
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
            to="/contact"
            style={{
              padding: "8px 16px", borderRadius: 9,
              border: "1px solid var(--border)",
              background: isContact ? "var(--accent-soft)" : "var(--bg-elevated)",
              color: isContact ? "var(--accent)" : "var(--fg-muted)",
              borderColor: isContact ? "var(--accent)" : "var(--border)",
              fontSize: 13, transition: "all .25s", textDecoration: "none",
            }}
          >
            Contact →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default WireHeader;
