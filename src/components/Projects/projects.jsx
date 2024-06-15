import { motion } from "framer-motion";
import { ProjCard } from "./ProjectsComp/card";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="text-white my-20 w-4/6 m-auto md:w-full md:p-2"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center"
      >
        <hr className="w-full mx-2" />
        <h1 className="text-6xl font-extrabold md:text-4xl">
          Projects<span className="text-rose-600 text-6xl md:text-4xl">.</span>
        </h1>
      </motion.div>
      <div className="grid grid-cols-2 py-8 lg:grid-cols-1">
        <ProjCard
          project="/public/anime-app.png "
          title="Anime Stream"
          technology="Swiper js — TailwindCSS — Javascript "
          info="A beginner and late bloomer seeking to make an impact in the tech
      industry. Driven by curiosity and desire for technology, I started my
      journey to transition from a Cook into a Frontend Engineer/Frontend
      Developer. As a career changer, I have since acquired a solid
      foundation in Programming through KissMyButton Academy and online
      courses."
        />
        <ProjCard
          project="/public/portfolio.png "
          title="Portfolio"
          technology="Swiper js — TailwindCSS — Javascript "
          info="A beginner and late bloomer seeking to make an impact in the tech
industry. Driven by curiosity and desire for technology, I started my
journey to transition from a Cook into a Frontend Engineer/Frontend
Developer. As a career changer, I have since acquired a solid
foundation in Programming through KissMyButton Academy and online
courses."
        />
        <ProjCard
          project="/public/splitter-tipper.png "
          title="Splitter-Tipper"
          technology="Swiper js — TailwindCSS — Javascript "
          info="A beginner and late bloomer seeking to make an impact in the tech
industry. Driven by curiosity and desire for technology, I started my
journey to transition from a Cook into a Frontend Engineer/Frontend
Developer. As a career changer, I have since acquired a solid
foundation in Programming through KissMyButton Academy and online
courses."
        />
        <ProjCard
          project="/public/weatherapp.png "
          title="Minimalistic Weather App"
          technology="Rest API — TailwindCSS — Javascript "
          info="A beginner and late bloomer seeking to make an impact in the tech
industry. Driven by curiosity and desire for technology, I started my
journey to transition from a Cook into a Frontend Engineer/Frontend
Developer. As a career changer, I have since acquired a solid
foundation in Programming through KissMyButton Academy and online
courses."
        />
      </div>
    </section>
  );
}
