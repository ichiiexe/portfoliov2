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
          project="anime-app.png"
          title="Anime Stream"
          technology="Swiper js — TailwindCSS — Javascript "
          info="An anime streaming website that leverages the power of Tailwind CSS, 
          Swiper JS, and Consumet API to deliver a captivating viewing experience. 
          With Tailwind CSS, the site boasts a modern and responsive design, ensuring seamless 
          navigation and aesthetic appeal across various devices. Swiper JS enhances the user interface 
          with interactive sliders and smooth transitions, allowing visitors to effortlessly browse 
          through a vast library of anime titles. By integrating Consumet API, the website provides up-to-date information 
          on anime series, episodes, and recommendations, enriching the user experience with personalized content."
        />
        <ProjCard
          project="portfolio.png "
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
          project="splitter-tipper.png"
          title="Splitter-Tipper"
          technology="Swiper js — TailwindCSS — Javascript "
          info="A tip splitter application crafted with the powerful combination of 
          Tailwind CSS and JavaScript, offering a seamless user experience.Users can effortlessly input the total bill amount, 
          specify the number of individuals sharing the bill, and dynamically see the cost breakdown in real-time through interactive JavaScript functionalities. 
          The application also allows users to customize tip percentages or amounts, further enhancing its versatility.  
          This app is created with Tailwind CSS and JavaScript not only to simplify the process of splitting bills but to also provide an engaging and efficient way to manage group expenses."
        />
        <ProjCard
          project="weatherapp.png "
          title="Minimalistic Weather App"
          technology="Rest API — TailwindCSS — Javascript "
          info="A modern weather app designed with a minimalistic approach, utilizing open-mateo's free API to fetch real-time weather data and powered by Tailwind CSS for its clean and responsive interface. This app focuses on providing users with essential weather information in a user-friendly manner, displaying current weather conditions, temperature, humidity, wind speed, and a 5-day forecast in a simple and elegant layout. With a monochromatic color scheme and intuitive icons, the use of Tailwind CSS ensures that the app is not only aesthetically pleasing but also highly functional and accessible across various devices."
        />
      </motion.div>
    </section>
  );
}
