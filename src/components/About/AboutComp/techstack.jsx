export default function TechStack() {
  const stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Reactjs",
    "Nextjs",
    "Vite",
    "REST API",
    "Git",
    "Github",
    "Nodejs",
    "Figma",
    "Material UI",
    "Bootstrap",
  ];

  return (
    <div className="py-8 md:py-0">
      <h1>Techstack</h1>
      <div className="flex flex-wrap gap-2">
        {stack.map(function (stack, i) {
          return (
            <button
              className="text-xs p-1 px-2 border border-rose-600 rounded-sm"
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
