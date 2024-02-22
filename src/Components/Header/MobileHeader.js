import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { GiSpaceship } from "react-icons/gi";

const MobileHeader = ({ toggle, handleToggle }) => {
  return (
    <div className="flex items-center justify-between pt-7 pb-3 mb-6 px-3 bg-amber-300">
      <Link to="/">
        <div className="flex gap-2 items-center justify-center">
          <GiSpaceship size={40} />
        </div>
      </Link>
      <div onClick={handleToggle}>
        {toggle ? <IoClose size={33} /> : <HiMenuAlt3 size={33} />}
      </div>
      {toggle && (
        <div className="absolute top-20 right-0 p-10 bg-slate-900 h-62 z-10 flex items-center rounded-l">
          <ul className="flex flex-col items-center font-bold gap-10 text-white text-sm tracking-wider">
            <li
              onClick={handleToggle}
              className="hover:border-b border-black cursor-pointer"
            >
              <Link to="/">HOME</Link>
            </li>
            <li
              onClick={handleToggle}
              className="hover:border-b border-black cursor-pointer"
            >
              <Link to="/explore">EXPLORE</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
