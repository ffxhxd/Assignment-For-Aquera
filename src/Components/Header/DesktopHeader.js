import React from "react";
import { Link } from "react-router-dom";
import { GiSpaceship } from "react-icons/gi";

const DesktopHeader = () => {
  return (
    <div className="flex items-center justify-between px-12 pt-4 pb-3 bg-amber-300">
      <Link to="/">
        <div className="flex gap-2 items-center justify-center">
          <GiSpaceship size={44} />
        </div>
      </Link>
      <div>
        <ul className="flex items-center font-bold gap-6 text-[#29233b] text-sm tracking-wider">
          <li className="hover:border-b border-black cursor-pointer">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:border-b border-black cursor-pointer">
            <Link to="/explore">EXPLORE</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopHeader;
