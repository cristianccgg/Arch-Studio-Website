import React, { useState } from "react";
import logo from "/public/images/icons/logo.svg";
import hambIcon from "/public/images/icons/icon-hamburger.svg";
import closeIcon from "/public/images/icons/icon-close.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="flex sm:w-[504px] gap-20 sm:gap-[94px] items-center sm:mt-[56px] sm:justify-start justify-between sm:px-0 p-[32px] relative">
      <Link to="/">
        <img
          className="w-[96px] object-cover md:w-auto"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="hidden sm:block">
        <div className="flex gap-[61px] font-bold text-[18px]">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about" className="text-nowrap">
            About Us
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="sm:hidden z-30">
        <img
          onClick={toggleMenu}
          src={openMenu ? closeIcon : hambIcon}
          alt="icon-hamburger"
        />
        {openMenu && (
          <div className="absolute bg-veryLightGrey w-3/4 mt-10 right-0 p-8 items-start flex flex-col gap-5 font-black text-[18px]">
            <Link to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
            <Link to="/about" className="text-nowrap" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
