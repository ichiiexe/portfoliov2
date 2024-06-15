export default function TechStack() {
  const stack = [
    "HTML",
    "CSS",
    "REST API",
    "Material UI",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "Reactjs",
    "Nextjs",
    "Git",
    "Github",
    "Nodejs",
    "Figma",
    "Vite",
  ];

  return (
    <div className="py-8 md:py-0">
      <h1>Techstack</h1>
      <div className="flex flex-wrap gap-2">
        {stack.map(function (stack, i) {
          return (
            <button
              className="text-xs tracking-wider p-1 px-2 border border-rose-600 rounded-sm transition 1s ease-in hover:bg-rose-600 hover:text-black hover:scale-125"
              key={i}
            >
              {stack}
            </button>
          );
        })}
      </div>
    </div>
  );
}
