// Main app — router state, theme, scroll trail, Tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark"
}/*EDITMODE-END*/;

const PAGES = [
  { id: "home",     label: "Profile",  num: "01" },
  { id: "projects", label: "Projects", num: "02" },
  { id: "detail",   label: "Case",     num: "03" },
  { id: "about",    label: "About",    num: "04" },
  { id: "blog",     label: "Writing",  num: "06" },
  { id: "resume",   label: "Resume",   num: "05" },
  { id: "contact",  label: "Contact",  num: "07" },
  { id: "lab",      label: "Lab",      num: "08" },
];

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState("home");
  const [projectId, setProjectId] = React.useState(PROJECTS[0].id);
  const [scrollY, setScrollY] = React.useState(0);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const mainRef = React.useRef(null);

  React.useEffect(() => {
    document.body.setAttribute("data-theme", tweaks.theme);
  }, [tweaks.theme]);

  // Track scroll
  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse parallax — normalized -0.5..0.5
  React.useEffect(() => {
    const onMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const navigate = (id, opt) => {
    setPage(id);
    if (id === "detail" && opt) setProjectId(opt);
  };

  const renderPage = () => {
    switch (page) {
      case "home":     return <HomePage onNav={navigate} />;
      case "projects": return <ProjectsPage onNav={navigate} />;
      case "detail":   return <DetailPage projectId={projectId} onNav={navigate} />;
      case "about":    return <AboutPage onNav={navigate} />;
      case "contact":  return <ContactPage onNav={navigate} />;
      case "resume":   return <ResumePage onNav={navigate} />;
      case "blog":     return <BlogPage onNav={navigate} />;
      case "lab":      return <LabPage onNav={navigate} />;
      default:         return <HomePage onNav={navigate} />;
    }
  };

  return (
    <>
      <World page={page} scrollY={scrollY} mouse={mouse} onPlanetClick={(id) => navigate(id)} />
      <Header
        page={page}
        onNav={navigate}
        theme={tweaks.theme}
        onTheme={() => setTweak("theme", tweaks.theme === "dark" ? "light" : "dark")}
      />

      {/* Section trail (left rail) — hide on detail to avoid collision with full-bleed cover */}
      <div className="trail" style={{ display: page === "detail" ? "none" : undefined }}>
        {PAGES.map((p) => (
          <div key={p.id}
            className={"stop" + (page === p.id ? " on" : "")}
            onClick={() => navigate(p.id)}>
            {p.num}
            <span className="tip">{p.label}</span>
          </div>
        ))}
      </div>

      <main ref={mainRef} key={page}>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer style={{
        position: "relative", zIndex: 2,
        maxWidth: "var(--content-max)", margin: "0 auto",
        padding: "60px 24px 40px",
        borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-dim)",
        letterSpacing: "0.06em", flexWrap: "wrap", gap: 16,
      }}>
        <div>© 2026 KM-KWON · BUILT WITH REACT + R3F</div>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("contact"); }}>CONTACT</a>
          <a href="#" onClick={(e) => e.preventDefault()}>GITHUB ↗</a>
          <span>v2026.05</span>
        </div>
      </footer>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Appearance">
          <TweakRadio
            label="Theme"
            value={tweaks.theme}
            onChange={(v) => setTweak("theme", v)}
            options={[
              { value: "dark",  label: "Dark" },
              { value: "light", label: "Light" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
