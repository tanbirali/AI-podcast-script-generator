import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="container  h-10 fixed mx-auto  px-10 top-0 bg-[#FFFFFF0D]
     backdrop-blur-md w-full flex items-center justify-center py-4 z-50"
    >
      <div className="flex items-center justify-center gap-4">
        <NavLink to="/" className={`text-2xl font-black `}>
          AI Podcast
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
