import { motion } from "framer-motion";
import TechStack from "./AboutComp/techstack";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="text-white w-4/6 m-auto pt-20 md:w-full md:p-2"
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
        <h1 className="text-6xl font-extrabold md:text-4xl">
          About<span className="text-rose-600 text-6xl md:text-4xl">.</span>
        </h1>
        <hr className="w-full mx-2" />
      </motion.div>
      <div className="flex gap-8 md:flex-col">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex-1 py-8 md:py-4"
        >
          <p className="py-4 md:text-md">
            I begun my journey on June, 2023, learning basic Front-End languages
            by myself, on October 2023 – driven by passion and desire for
            creating clean and minimalistic websites, enrolled and begun my
            education in KissMyButton Academy. I design clean, minimal, and
            responsive websites not only to look great but to also provide a
            seamless user experience.
          </p>
          <p className="py-4 md:text-md">
            I begun my journey on June, 2023, learning basic Front-End languages
            by myself, on October 2023 – driven by passion and desire for
            creating clean and minimalistic websites, enrolled and begun my
            education in KissMyButton Academy. I design clean, minimal, and
            responsive websites not only to look great but to also provide a
            seamless user experience.
            <br />I begun my journey on June, 2023, learning basic Front-End
            languages by myself, on October 2023 – driven by passion and desire
            for creating clean and minimalistic websites, enrolled and begun my
            education in KissMyButton Academy. I design clean, minimal, and
            responsive websites not only to look great but to also provide a
            seamless user experience.
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-1/3 md:w-full"
        >
          <TechStack />
        </motion.div>
      </div>
    </section>
  );

  // return (
  //   <section className="max-w-screen-xl text-white flex flex-col m-auto px-40 py-16">
  // <div className="flex items-center">
  //   <h1 className="text-6xl font-extrabold">
  //     About<span className="text-rose-600 text-6xl">.</span>
  //   </h1>
  //   <hr className="w-full mx-2" />
  // </div>

  //   </section>
  // );
}
