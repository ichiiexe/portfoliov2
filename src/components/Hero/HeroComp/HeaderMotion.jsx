import { motion } from "framer-motion";

export function HeaderMotion() {
  return (
    <div className="m-auto">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-2 font-extrabold tracking-wide text-6xl flex overflow-hidden md:text-4xl"
      >
        Greetings,
        <motion.div className="animate-hand text-6xl max-w-20 md:text-4xl">
          👋
        </motion.div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.8 }}
        className="pl-8 py-2 font-extrabold tracking-wide text-7xl text-nowrap md:text-5xl"
      >
        I'm Jefferson
        <span className="text-rose-600 text-6xl md:text-4xl">.</span>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 2 }}
        className="font-extrabold tracking-wide text-5xl text-nowrap md:text-2xl"
      >
        I'm a<span className="text-rose-600 pl-4 ">FrontEnd Developer</span>
      </motion.div>
    </div>
  );
}
