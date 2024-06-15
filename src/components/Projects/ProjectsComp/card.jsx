import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

export function ProjCard(props) {
  <div className="w-full p-4">
    <div className="w-full h-60 rounded-xl px-10 pt-20 mb-6 bg-[#232323] ">
      <img src={props.project} className="w-full h-full rounded-t-lg" />
    </div>
    <div>
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
  </div>;
}
