import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="flex items-center gap-2 p-5 text-white bg-red-800 rounded-sm fixed top-0 left-0 right-0">
      <div onClick={onMenuClick}>
        <GiHamburgerMenu size={"1.375rem"} />
      </div>
      <div>
        <p className="text-2xl ">Syner</p>
      </div>
    </nav>
  );
};

export default Navbar;
