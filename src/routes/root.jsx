import AboutSection from "../components/About/about";
import ContactSection from "../components/Contact/contact";
import { LayOut } from "../components/Layout/layout";
import HeroSection from "../components/Hero/Hero";
import ProjectsSection from "../components/Projects/projects";

export default function Root() {
  return (
    <div className="bg-[#111] ">
      <LayOut>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </LayOut>
    </div>
  );
}
