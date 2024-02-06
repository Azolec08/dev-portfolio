import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { MdHome } from "react-icons/md";

// Define a dummy type for MdHome

export const navLink = [
  {
    title: "Home",
    path: "/",
    icons: <MdHome />,
  },
  {
    title: "Skills",
    path: "/skills",
    icons: <GiPencilBrush />,
  },
  {
    title: "Portfolio",
    path: "/projects",
    icons: <GoProjectSymlink />,
  },
  {
    title: "Contact",
    path: "/projects",
    icons: <GoProjectSymlink />,
  },
];

export const socialMed = [
  {
    icons: <FaFacebook />,
    path: "https://web.facebook.com/markangelo.celozaiii",
  },
  {
    icons: <BiLogoGmail />,
    path: "",
  },

  {
    icons: <FaGithub />,
    path: "https://github.com/Azolec08",
  },
];
