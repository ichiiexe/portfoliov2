import { motion, inView } from "framer-motion";

export default function NavAside() {
  inView();
  return (
    <motion.aside
      variants={{
        left: { opacity: 0, x: -20 },
        pop: { opacity: 1, x: 0 },
      }}
      initial="left"
      animate="pop"
      transition={{ duration: 0.6 }}
      className="min-h-dvh bg-[#080808] flex flex-col items-center sticky top-0 left-0"
    >
      <div className="w-12 h-12 bg-[#111] font-extrabold rounded-md text-rose-600 my-4 flex justify-center items-center ">
        <h1 className="select-none ">
          &lt; <span className="text-white">/</span> &gt;
        </h1>
      </div>
      <nav className="flex flex-col my-2  text-white text-lg">
        <motion.a
          variants={{
            left: { opacity: 0, x: -20 },
            pop: { opacity: 1, x: 0 },
          }}
          initial="left"
          animate="pop"
          transition={{ duration: 0.2, delay: 0.4 }}
          href="#about"
          className="text-white/50 menuLink opacity-70"
        >
          About
        </motion.a>
        <motion.a
          variants={{
            left: { opacity: 0, x: -20 },
            pop: { opacity: 1, x: 0 },
          }}
          initial="left"
          animate="pop"
          transition={{ duration: 0.2, delay: 0.6 }}
          href="#projects"
          className=" text-white/50 menuLink opacity-70"
        >
          Projects
        </motion.a>
        <motion.a
          variants={{
            left: { opacity: 0, x: -20 },
            pop: { opacity: 1, x: 0 },
          }}
          initial="left"
          animate="pop"
          transition={{ duration: 0.2, delay: 0.8 }}
          href="#contact"
          className="text-white/50 menuLink "
        >
          Contact
        </motion.a>
      </nav>
    </motion.aside>
  );
}

// black = #080808
// gray = #111
// light = #232323
