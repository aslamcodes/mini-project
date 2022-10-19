import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBell, AiOutlinePlusCircle } from "react-icons/ai";
const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="flex justify-between p-5 text-white bg-red-800 rounded-sm fixed top-0 left-0 right-0">
      <div className="flex items-row gap-2">
        <div onClick={onMenuClick}>
          <GiHamburgerMenu size={"1.375rem"} />
        </div>
        <div>
          <p className="text-2xl ">Syner</p>
        </div>
      </div>
      <div className="flex items-row gap-2">
        <div onClick={onMenuClick}>
          <AiOutlineBell size={"1.375rem"} />
        </div>
        <div>
          <AiOutlinePlusCircle size={"1.375rem"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
