import React, { useCallback } from "react";
import HeroSection from "../component/Body/Home/heroSection/heroSection";
import AboutSection from "../component/Body/Home/about/about";
import SkillsSection from "../component/Body/Home/skills/skills";
import ExperienceSection from "../component/Body/Home/experience/experience";
import ContactSection from "../component/Body/Home/contactSection/contactSections";
import { WorkerLab } from "../component/Body/Home/labs/labs";
import ActivitySection from "../component/Body/Home/activity/activity";
import ProjectsSection from "../component/Body/Home/projects/projects";

const HomePage: React.FC = () => {
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
  );
};

export default HomePage;
