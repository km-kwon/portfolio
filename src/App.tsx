import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Link } from "react-router-dom";

import "./App.css";
import Analytics from "./analytics/Analytics";
import ScrollToTop from "./component/common/ScrollToTop";
import BlogDetailPage from "./component/Body/Blog/BlogDetailPage";
import LabPage from "./component/Body/Lab/LabPage";

import WireHeader from "./wireframe/layout/Header";
import World from "./wireframe/layout/World";
import Trail from "./wireframe/layout/Trail";

import HomePage from "./wireframe/pages/HomePage";
import ProjectsPage from "./wireframe/pages/ProjectsPage";
import DetailPage from "./wireframe/pages/DetailPage";
import AboutPage from "./wireframe/pages/AboutPage";
import ResumePage from "./wireframe/pages/ResumePage";
import BlogPage from "./wireframe/pages/BlogPage";
import ContactPage from "./wireframe/pages/ContactPage";

type Theme = "light" | "dark";
type StageKey =
  | "home"
  | "projects"
  | "detail"
  | "about"
  | "contact"
  | "resume"
  | "blog"
  | "blogDetail"
  | "lab";

const pathToStage = (pathname: string): StageKey => {
  if (pathname === "/")                   return "home";
  if (pathname.startsWith("/projects/"))  return "detail";
  if (pathname.startsWith("/projects"))   return "projects";
  if (pathname.startsWith("/about"))      return "about";
  if (pathname.startsWith("/resume"))     return "resume";
  if (pathname.startsWith("/blog/"))      return "blogDetail";
  if (pathname.startsWith("/blog"))       return "blog";
  if (pathname.startsWith("/contact"))    return "contact";
  if (pathname.startsWith("/lab"))        return "lab";
  return "home";
};

const Shell: React.FC<{ theme: Theme; onToggleTheme: () => void }> = ({ theme, onToggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const stage = pathToStage(location.pathname);
  const isLabRoute = location.pathname.startsWith("/lab");
  const isHomeRoute = stage === "home";
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handlePlanetClick = useCallback((target: StageKey) => {
    navigate(target === "home" ? "/" : `/${target}`);
  }, [navigate]);

  return (
    <>
      <Analytics />
      <ScrollToTop />
      <World
        page={stage}
        scrollY={scrollY}
        mouse={mouse}
        onPlanetClick={handlePlanetClick}
      />
      <WireHeader theme={theme} onToggleTheme={onToggleTheme} />
      <Trail />

      <main
        className={`app-shell-main${isLabRoute ? " app-shell-main-lab" : ""}${isHomeRoute ? " app-shell-main-home" : ""}`}
        style={{
          position: "relative", zIndex: 2,
          maxWidth: isLabRoute ? "none" : "var(--content-max)",
          margin: "0 auto",
          padding: isLabRoute ? "0 0 80px" : "calc(var(--header-h) + 32px) 24px 80px",
        }}
      >
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/projects"       element={<ProjectsPage />} />
          <Route path="/projects/:id"   element={<DetailPage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/resume"         element={<ResumePage />} />
          <Route path="/blog"           element={<BlogPage />} />
          <Route path="/blog/:slug"     element={<BlogDetailPage />} />
          <Route path="/contact"        element={<ContactPage />} />
          <Route path="/lab"            element={<LabPage />} />
        </Routes>
      </main>

      <footer
        className="app-shell-footer"
        style={{
          position: "relative", zIndex: 2,
          maxWidth: "var(--content-max)", margin: "0 auto",
          padding: "60px 24px 40px",
          borderTop: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-dim)",
          letterSpacing: "0.06em", flexWrap: "wrap", gap: 16,
        }}
      >
        <div>© {new Date().getFullYear()} KM-KWON · BUILT WITH REACT + R3F</div>
        <div style={{ display: "flex", gap: 16 }}>
          <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>CONTACT</Link>
          <a href="https://github.com/km-kwon" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>GITHUB ↗</a>
          <span>v2026.05</span>
        </div>
      </footer>
    </>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    try {
      const stored = localStorage.getItem("portfolio-theme") as Theme | null;
      return stored || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <BrowserRouter basename={basename === "" ? undefined : basename}>
      <Shell theme={theme} onToggleTheme={toggleTheme} />
    </BrowserRouter>
  );
};

export default App;
