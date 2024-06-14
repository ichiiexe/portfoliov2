import TechStack from "./AboutComp/techstack";
export default function AboutSection() {
  return (
    <section className="max-w-screen-xl text-white flex flex-col m-auto px-40 py-16">
      <div className="flex items-center">
        <h1 className="text-6xl font-extrabold">
          About<span className="text-rose-600 text-6xl">.</span>
        </h1>
        <hr className="w-full mx-2" />
      </div>
      <div className="flex ">
        <div className="flex-1 py-8 pr-8">
          <p className="py-4">
            I begun my journey on June, 2023, learning basic Front-End languages
            by myself, on October 2023 – driven by passion and desire for
            creating clean and minimalistic websites, enrolled and begun my
            education in KissMyButton Academy. I design clean, minimal, and
            responsive websites not only to look great but to also provide a
            seamless user experience.
          </p>
          <p className="py-4">
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
        </div>
        <TechStack />
      </div>
    </section>
  );
}
