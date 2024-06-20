import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export function ContactMotion() {
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
    <>
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
        <h1 className="text-6xl font-extrabold md:text-4xl">
          Contact<span className="text-rose-600 text-6xl md:text-4xl">.</span>
        </h1>
        <hr className="w-full mx-2" />
      </motion.div>
      <div className="flex flex-col ">
        <div className="m-auto ">
          <h1 className="text-5xl font-bold tracking-widest my-8 md:text-3xl ">
            LET'S
            <span className="text-rose-600 text-6xl md:text-4xl">.</span>
            GET
            <span className="text-rose-600 text-6xl md:text-4xl">.</span>IN
            <span className="text-rose-600 text-6xl md:text-4xl">.</span>TOUCH
          </h1>
        </div>
        <div className="flex-1 py-8 pr-8 text-lg text-center md:text-sm">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            ref={ref}
            animate={showMe}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              Whether you are starting a project, have business inquiries or
              just want to say hi, my inbox is always open so feel free to reach
              out and I will get back to you as soon as possible.
            </p>
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
            className="flex justify-center items-center gap-2 my-10 "
          >
            <p className="text-rose-600 font-semibold">Lets Connect!</p>
            <TrendingFlatIcon className="text-rose-600" />
            <GitHubIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <EmailIcon />
          </motion.div>
        </div>
      </div>
    </>
  );
}
