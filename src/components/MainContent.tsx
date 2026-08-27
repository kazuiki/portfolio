"use client";

import { Hero } from "./Hero";
import { TechMarquee } from "./TechMarquee";
import { ProjectsSection } from "./ProjectsSection";
import { ExperienceSection } from "./ExperienceSection";
import { StackSection } from "./StackSection";
import { CertificationsSection } from "./CertificationsSection";
import { EducationSection } from "./EducationSection";

export function MainContent() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <section id="projects" className="pt-[80px]">
        <ProjectsSection />
      </section>
      <section id="experience" className="pt-[80px]">
        <ExperienceSection />
      </section>
      <section id="stack" className="pt-8">
        <StackSection />
      </section>
      <section id="certifications" className="pt-[80px]">
        <CertificationsSection />
      </section>
      <section id="education" className="pt-[80px]">
        <EducationSection />
      </section>
    </>
  );
}
