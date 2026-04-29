import React, { useCallback } from "react";
import { motion } from "framer-motion";
import HeroSection from "./heroSection/heroSection";
import ImmersiveShowcase from "./immersive/ImmersiveShowcase";
import AboutSection from "./about/about";
import SkillsSection from "./skills/skills";
import BlogSection from "./experience/experience";
import ContactSection from "./contactSection/contactSections";
import { WorkerLab } from "./labs/labs";
import ActivitySection from "./activity/activity";
import ProjectsSection from "./projects/projects";

const revealTransition = {
  duration: 0.62,
  ease: [0.22, 0.61, 0.36, 1],
} as const;

const RevealBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 34, scale: 0.985 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.16 }}
    transition={revealTransition}
  >
    {children}
  </motion.div>
);

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
    <main className="max-w-(--content-max-w) mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16 text-[14px] text-fg leading-[1.6]">
      {/* HERO */}
      <HeroSection onScrollTo={handleScrollTo} />

      {/* IMMERSIVE 3D SHOWCASE */}
      <ImmersiveShowcase onScrollTo={handleScrollTo} />

      {/* PROJECTS */}
      <RevealBlock>
        <ProjectsSection />
      </RevealBlock>

      {/* SKILLS */}
      <RevealBlock>
        <SkillsSection />
      </RevealBlock>

      {/* ABOUT */}
      <RevealBlock>
        <AboutSection />
      </RevealBlock>

      {/* ACTIVITY */}
      <RevealBlock>
        <ActivitySection />
      </RevealBlock>

      {/* LABS */}
      <RevealBlock>
        <WorkerLab />
      </RevealBlock>

      {/* BLOG */}
      <RevealBlock>
        <BlogSection />
      </RevealBlock>

      {/* CONTACT */}
      <RevealBlock>
        <ContactSection />
      </RevealBlock>
    </main>
  );
};

export default HomePage;
