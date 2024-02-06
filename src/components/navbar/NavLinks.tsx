import { navLink } from "@/shared/constants";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex items-center gap-x-8 ">
      {navLink.map((data) => {
        return (
          <div key={data.title}>
            <Link
              to={data.path}
              className="text-md flex items-center gap-x-1 hover:text-blue-600 transition-all
              
              "
            >
              <span className="text-xl text-violet-700">{data.icons}</span>
              <h2 className="text-sm">{data.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
