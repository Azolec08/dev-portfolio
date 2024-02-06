import { ModeToggle } from "@/mode-toogle";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetDemo } from "../upperbar/Bar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="w-full min-h-[70px] flex justify-between ">
      <div className="flex items-center px-2">
        <Link to="/">
          <Button className="font-bold text-md">Portfolio</Button>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <NavLinks />
      </div>

      <div className="flex gap-x-3 px-2 items-center">
        <ModeToggle />
        <span className="lg:hidden">
          <SheetDemo />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
