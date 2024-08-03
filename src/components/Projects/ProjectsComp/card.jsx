import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

export function ProjCard(props) {
  return (
    <div className="max-w-full p-4 flex flex-col items-center">
      <a
        className="max-h-64 rounded-xl px-10 mb-6 pt-6 overflow-hidden cursor-pointer bg-[#232323] md:max-w-lg"
        target="_blank"
        href={props.link}
      >
        <img
          src={props.project}
          className="rounded-t-lg translate-y-10 transition ease-in 1s hover:translate-y-5 hover:rotate-3 hover:scale-105"
        />
      </a>
      <div className="">
        <div className="flex items-center">
          <h1 className="font-bold text-xl text-nowrap">{props.title}</h1>
          <hr className="border-1 border-white/20 w-full mx-4" />
          <div className="flex gap-2">
            <a
              className="hover:text-rose-600 transition 1.2s ease-in"
              target="_blank"
              href={props.ghlink}
            >
              <GitHubIcon />
            </a>
            <a
              className="hover:text-rose-600 transition 1.2s ease-in"
              target="_blank"
              href={props.link}
            >
              <PublicIcon />
            </a>
          </div>
        </div>
        <p className="text-rose-600">{props.technology}</p>
        <p className="py-6">{props.info}</p>
      </div>
    </div>
  );
}
