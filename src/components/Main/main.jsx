import SendIcon from "@mui/icons-material/Send";
export default function HeroSection() {
  return (
    <section className="w-full text-white flex flex-col items-center py-28">
      <div className="p-20 relative z-0">
        <h1 className="font-extrabold tracking-wide text-6xl flex">
          Geetings,
          <div className="animate-hand text-6xl max-w-20">👋</div>
        </h1>

        <h1 className="pl-8 font-extrabold tracking-wide text-7xl">
          I'm Jefferson<span className="text-rose-600 text-6xl">.</span>
        </h1>
        <h1 className="font-extrabold tracking-wide text-5xl">
          I'm a
          <span className="text-rose-600 italic underline pl-4">
            FrontEnd Developer
          </span>
        </h1>
        <img
          src="/public/unnamed.jpg"
          className="border absolute -left-28 top-0 animate-blob -z-50"
        />
      </div>
      <div className="px-20 flex flex-col max-w-screen-lg">
        <p className="text-lg text-left">
          A beginner and late bloomer seeking to make an impact in the tech
          industry. Driven by curiosity and desire for technology, I started my
          journey to transition from a Cook into a Frontend Engineer/Frontend
          Developer. As a career changer, I have since acquired a solid
          foundation in Programming through KissMyButton Academy and online
          courses.
        </p>
        <button className="flex gap-2 justify-center border border-rose-600 m-5 py-2 px-4 place-self-end">
          Contact Me
          <SendIcon />
        </button>
      </div>
    </section>
  );
}
