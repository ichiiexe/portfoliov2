import { HeaderMotion } from "./HeroComp/HeaderMotion";
import { InfoMotion } from "./HeroComp/InfoMotion";

export default function HeroSection() {
  return (
    <section className="text-white w-4/5 m-auto flex flex-col justify-center items-center">
      <div className="relative flex py-14 z-0 lg:flex-col lg:items-center">
        <img
          src="/public/unnamed.jpg"
          className="max-w-[290px] max-h-[290px] border animate-blob -z-50 select-none "
        />
        <HeaderMotion />
      </div>
      <div className="py-4 max-w-4xl lg:p-2">
        <InfoMotion />
      </div>
    </section>
  );
}

{
  // w-full text-white flex flex-col items-center py-28 selection:bg-rose-500 selection:text-black
  /* <div className="p-20 relative z-0">
        <h1 className="font-extrabold tracking-wide text-6xl flex">
          Greetings,
          <motion.div className="animate-hand text-6xl max-w-20">👋</motion.div>
        </h1>

        <h1 className="pl-8 font-extrabold tracking-wide text-7xl">
          I'm Jefferson<span className="text-rose-600 text-6xl">.</span>
        </h1>
        <h1 className="font-extrabold tracking-wide text-5xl">
          I'm a<span className="text-rose-600 pl-4 ">FrontEnd Developer</span>
        </h1>
        <img
          src="/public/unnamed.jpg"
          className="border absolute -left-28 top-0 animate-blob -z-50 select-none"
        />
      </div>
      <div className="px-20 flex flex-col max-w-screen-lg overflow-hidden">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-left">
            A beginner and late bloomer seeking to make an impact in the tech
            industry. Driven by curiosity and desire for technology, I started
            my journey to transition from a Cook into a Frontend
            Engineer/Frontend Developer. As a career changer, I have since
            acquired a solid foundation in Programming through KissMyButton
            Academy and online courses.
          </p>
          <button className="flex gap-2 justify-center border border-rose-600 m-5 py-2 px-4 place-self-end">
            Contact Me
            <SendIcon />
          </button>
        </motion.div>
      </div> */
}
