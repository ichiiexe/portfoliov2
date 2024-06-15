import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    error: {
      main: "#dc2626",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

export default function NavTop() {
  return (
    <nav className="h-20 mx-6 flex justify-between sticky top-0 z-50 backdrop-blur-sm shadow-sm">
      <ul className="text-gray-500/90 flex items-center gap-4 ">
        <li>
          <GitHubIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
      </ul>
      <div className="flex items-center">
        <button className="border-rose-600 py-2 px-4 border rounded-sm text-white">
          Resume
        </button>
      </div>
    </nav>
  );
}

// <nav className="h-12 w-full py-10 px-8 flex justify-between items-center sticky top-0 backdrop-blur-sm">
//       <ul className="flex mx-16 pl-4 gap-4 text-gray-500/90">
//         <li>
//           <GitHubIcon />
//         </li>
//         <li>
//           <LinkedInIcon />
//         </li>
//         <li>
//           <InstagramIcon />
//         </li>
//       </ul>
//       <button className="border-rose-600 border py-2 px-4 rounded-sm text-white">
//         Resume
//       </button>
//     </nav>
