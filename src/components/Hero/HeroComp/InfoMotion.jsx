import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

export function InfoMotion() {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 2 }}
        className=""
      >
        <p className="px-8 text-lg text-left md:text-md md:px-2 sm:text-sm">
          A beginner and late bloomer seeking to make an impact in the tech
          industry. Driven by curiosity and desire for technology, I started my
          journey to transition from a Cook into a Frontend Engineer/Frontend
          Developer. As a career changer, I have since acquired a solid
          foundation in Programming through KissMyButton Academy and online
          courses.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        <button className="flex gap-2 justify-center border border-rose-600 m-5 py-2 px-4">
          Contact Me
          <SendIcon />
        </button>
      </motion.div>
    </>
  );
}
