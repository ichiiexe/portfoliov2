import AboutSection from "../components/About/about";
import ContactSection from "../components/Contact/contact";
import NavAside from "../components/Layout/nav";
import NavTop from "../components/Layout/navtop";
import HeroSection from "../components/Main/main";
import ProjectsSection from "../components/Projects/projects";

export default function Root() {
  return (
    <div className="h-vh bg-[#111]">
      <NavTop />
      <NavAside />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
