import AboutSection from "../components/About/about";
import ContactSection from "../components/Contact/contact";
import { LayOut } from "../components/Layout/layout";
import HeroSection from "../components/Hero/Hero";
import ProjectsSection from "../components/Projects/projects";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Root() {
  return (
    <div className="bg-[#111] ">
      <LayOut>
        <motion.div>
          <HeroSection />
        </motion.div>
        <motion.div>
          <AboutSection />
        </motion.div>
        <motion.div>
          <ProjectsSection />
        </motion.div>
        <motion.div>
          <ContactSection />
        </motion.div>
      </LayOut>
    </div>
  );
}
