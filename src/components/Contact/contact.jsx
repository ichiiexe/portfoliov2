import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactSection() {
  return (
    <section className="max-w-screen-xl text-white flex flex-col m-auto px-40 py-16">
      <div className="flex items-center">
        <h1 className="text-6xl font-extrabold">
          Contact<span className="text-rose-600 text-6xl">.</span>
        </h1>
        <hr className="w-full mx-2" />
      </div>
      <div className="flex flex-col ">
        <div class="m-auto ">
          <h1 class="text-5xl font-bold tracking-widest my-8">
            LET'S<span className="text-rose-600 text-6xl">.</span>GET
            <span className="text-rose-600 text-6xl">.</span>IN
            <span className="text-rose-600 text-6xl">.</span>TOUCH
          </h1>
        </div>
        <div className="flex-1 py-8 pr-8 text-lg text-center">
          <p>
            Whether you are starting a project, have business inquiries or just
            want to say hi, my inbox is always open so feel free to reach out
            and I will get back to you as soon as possible. Lets Connect!
          </p>
          <div className="flex justify-center items-center gap-2 my-10 ">
            <p className="text-rose-600 font-semibold">Lets Connect!</p>
            <TrendingFlatIcon className="text-rose-600" />

            <GitHubIcon />

            <LinkedInIcon />

            <InstagramIcon />

            <EmailIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
