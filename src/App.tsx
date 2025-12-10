import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header/header";
import HeroSection from "./component/Body/heroSection/heroSection";
import AboutSection from "./component/Body/about/about";
import SkillsSection from "./component/Body/skills/skills";
import ProjectsSection from "./component/Body/projects/projects";
import ExperienceSection from "./component/Body/experience/experience";
import ContactSection from "./component/Body/contactSection/contactSections";
import Footer from "./component/Footer/footer";
import { WorkerLab } from "./component/Body/labs/labs";
import ActivitySection from "./component/Body/activity/activity";

type Theme = "light" | "dark";

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    try {
      const stored = localStorage.getItem("portfolio-theme") as Theme | null;
      // localStorage에 저장된 값이 있으면 그걸 사용, 없으면 무조건 dark
      return stored || "dark";
    } catch {
      return "dark";
    }
  });

  // ✅ theme 변경 시에만 DOM + localStorage 동기화
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 64; // --header-height 값
      const offset = 20; // 추가 여백
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      {/* 헤더 */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavClick={handleScrollTo}
      />

      {/* 메인 컨테이너 */}
      <main className="max-w-[1040px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16 text-sm text-fg">
        {/* HERO */}
        <HeroSection onScrollTo={handleScrollTo} />

        {/* ABOUT */}
        <AboutSection />

        {/* SKILLS */}
        <SkillsSection />

        {/* ACTIVITY */}
        <ActivitySection />

        {/* PROJECTS */}
        <ProjectsSection />

        {/* LABS */}
        <WorkerLab />

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* CONTACT */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
