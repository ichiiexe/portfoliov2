import { ProjCard } from "./ProjectsComp/card";

export default function ProjectsSection() {
  return (
    <section className="max-w-screen-xl text-white flex flex-col m-auto px-40 py-16">
      <div className="flex items-center">
        <hr className="w-full mx-2" />
        <h1 className="text-6xl font-extrabold">
          Projects<span className="text-rose-600 text-6xl">.</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 py-8 ">
        <ProjCard
          project="/public/anime-app.png "
          title="Anime Stream"
          technology="Swiper js — TailwindCSS — Javascript "
          info="A beginner and late bloomer seeking to make an impact in the tech
          industry. Driven by curiosity and desire for technology, I started my
          journey to transition from a Cook into a Frontend Engineer/Frontend
          Developer. As a career changer, I have since acquired a solid
          foundation in Programming through KissMyButton Academy and online
          courses."
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
          project="/public/anime-app.png "
          title="Portfolio"
          technology="Swiper js — TailwindCSS — Javascript "
          info="A beginner and late bloomer seeking to make an impact in the tech
          industry. Driven by curiosity and desire for technology, I started my
          journey to transition from a Cook into a Frontend Engineer/Frontend
          Developer. As a career changer, I have since acquired a solid
          foundation in Programming through KissMyButton Academy and online
          courses."
        />
      </div>
    </section>
  );
}
