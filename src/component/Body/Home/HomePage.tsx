import React, { useCallback, useEffect, useLayoutEffect } from "react";
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
  const getInitialSectionId = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    return window.location.hash.replace("#", "") || params.get("section");
  }, []);

  const scrollToSection = useCallback((id: string, behavior: ScrollBehavior) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerHeight = 64;
    const offset = 20;
    el.scrollIntoView({ block: "start", behavior });
    window.scrollBy({ top: -(headerHeight + offset), behavior });
  }, []);

  const handleScrollTo = useCallback((id: string) => {
    scrollToSection(id, "smooth");
  }, [scrollToSection]);

  useLayoutEffect(() => {
    const id = getInitialSectionId();
    if (!id) return;
    scrollToSection(id, "auto");
  }, [getInitialSectionId, scrollToSection]);

  useEffect(() => {
    const id = getInitialSectionId();
    if (!id) return;

    const timers = [120, 420].map((delay) =>
      window.setTimeout(() => scrollToSection(id, "auto"), delay)
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [getInitialSectionId, scrollToSection]);

  return (
    <main className="home-cinematic max-w-(--content-max-w) mx-auto px-5 pt-[calc(var(--header-height)+20px)] pb-16 text-[14px] text-fg leading-[1.6]">
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
