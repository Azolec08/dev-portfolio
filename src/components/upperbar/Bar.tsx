import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLink, socialMed } from "@/shared/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <GiHamburgerMenu className="text-xl" />
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader className="mt-4">
          {navLink.map((links) => {
            return (
              <div
                className="flex items-center gap-x-3 cursor-pointer py-2 hover:bg-gray-100
              hover:text-black transition-all
              "
              >
                <span className="text-2xl">{links.icons}</span>
                <span className="text-sm">{links.title}</span>
              </div>
            );
          })}
          <div className="flex gap-x-4">
            {socialMed.map((social, index) => {
              return (
                <SheetTitle key={index} className="flex">
                  <Link to={social.path}>
                    <span className="text-2xl">{social.icons}</span>
                  </Link>
                </SheetTitle>
              );
            })}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
