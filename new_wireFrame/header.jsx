// Header — sticky top nav matching existing site

const Header = ({ page, onNav, onTheme, theme }) => {
  const items = [
    { id: "home",     label: "Profile" },
    { id: "projects", label: "Projects" },
    { id: "about",    label: "About" },
    { id: "resume",   label: "Resume" },
  ];
  const links = [
    { id: "blog",  label: "Blog" },
    { id: "lab",   label: "Lab" },
  ];

  return (
    <header className="site-header">
      <div className="inner">
        <a className="logo" onClick={() => onNav("home")} style={{ cursor: "pointer" }}>
          FRONTEND · UX
        </a>
        <nav className="navlinks">
          {items.map((it) => (
            <button key={it.id}
              className={page === it.id ? "active" : ""}
              onClick={() => onNav(it.id)}>
              {it.label}
            </button>
          ))}
          <span className="sep">·</span>
          {links.map((it) => (
            <button key={it.id}
              className={page === it.id ? "active" : ""}
              onClick={() => onNav(it.id)}>
              {it.label}
            </button>
          ))}
        </nav>
        <div className="header-right">
          <button className="icon-btn" onClick={onTheme} aria-label="Toggle theme">
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.4 8.4 0 01-5.91-2.82 8.07 8.07 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.32 10.32 0 00-6.32 10.21 10.48 10.48 0 007.04 8.99c.94.32 1.92.5 2.89.55h.48a10.5 10.5 0 008.47-4.27c.67-.93.49-1.52.32-1.79z" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/></svg>
            )}
          </button>
          <button
            className="contact-btn"
            onClick={() => onNav("contact")}
            style={page === "contact" ? { color: "var(--accent)", borderColor: "var(--accent)", background: "var(--accent-soft)" } : {}}>
            Contact →
          </button>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
