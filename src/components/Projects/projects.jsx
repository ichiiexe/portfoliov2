import { motion, useAnimation, useInView } from "framer-motion";
import { ProjCard } from "./ProjectsComp/card";
import { useEffect, useRef } from "react";
/* Add to Project
<button
className="text-xs tracking-wider p-1 px-2 border border-rose-600 rounded-sm transition 1s ease-in hover:bg-rose-600 hover:text-black hover:scale-125"
key={i}
>{stack}</button> */

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const showMe = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      showMe.start("visible");
    }
  }, [isInView]);
  return (
    <section
      id="projects"
      className="text-white w-4/6 pt-20 m-auto md:w-full md:p-2"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        ref={ref}
        animate={showMe}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center"
      >
        <hr className="w-full mx-2" />
        <h1 className="text-6xl font-extrabold md:text-4xl">
          Projects<span className="text-rose-600 text-6xl md:text-4xl">.</span>
        </h1>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        ref={ref}
        animate={showMe}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-2 py-8 lg:grid-cols-1"
      >
        <ProjCard
          project="/public/anime-app.png "
          title="Anime Stream"
          technology="Swiper js — TailwindCSS — Javascript "
          info="A Personal Website for streaming Anime, uses Consumet API, the same API 
          that many different Anime Websites use to stream Anime, "
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
      </motion.div>
    </section>
  );
}
