import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

export function ProjCard(props) {
  return (
    <div className="max-w-full p-4 flex flex-col items-center">
      <div className="flex-1 rounded-xl px-10 mb-6 pt-6 overflow-hidden bg-[#232323] md:max-w-lg">
        <img
          src={props.project}
          className="rounded-t-lg translate-y-10 transition ease-in 1s hover:translate-y-5 hover:rotate-3 hover:scale-105"
        />
      </div>
      <div className="">
        <div className="flex items-center">
          <h1 className="font-bold text-xl text-nowrap">{props.title}</h1>
          <hr className="border-1 border-white/20 w-full mx-4" />
          <div className="flex gap-2">
            <GitHubIcon />
            <PublicIcon />
          </div>
        </div>
        <p className="text-rose-600">{props.technology}</p>
        <p className="py-6">{props.info}</p>
      </div>
    </div>
  );
}
