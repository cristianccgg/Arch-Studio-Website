import React from "react";
import logo from "/public/images/icons/logo.svg";
import arrow from "/public/images/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-veryLightGrey xl:bg-transparent p-0 relative mt-[140px] xl:w-[1110px] xl:mx-auto h-[450px] sm:h-[120px] flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full">
      <div className="bg-black sm:hidden h-[120px] w-[120px] flex items-center justify-center absolute top-[-60px]">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[58px] h-[58px] filter invert brightness-0"
          />
        </Link>
      </div>
      <div className="xl:bg-veryLightGrey flex flex-col sm:flex-row items-center gap-8 sm:gap-0 xl:w-[984px] text-nowrap sm:w-full sm:justify-between lg:relative">
        <div className="bg-black h-[120px] w-[120px] sm:flex items-center justify-center hidden ">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[58px] h-[58px] filter invert brightness-0 "
            />
          </Link>
        </div>
        <Link to={"/portfolio"}>
          <h1 className="text-2xl font-bold sm:font-light sm:text-xl">
            Portfolio
          </h1>
        </Link>
        <Link to={"/about"}>
          <h1 className="text-2xl font-bold sm:font-light sm:text-xl">
            About Us
          </h1>
        </Link>
        <Link to={"/contact"}>
          <h1 className="text-2xl font-bold sm:font-light sm:text-xl">
            Contact
          </h1>
        </Link>
        <Link
          to="/portfolio"
          className="bg-black xl:absolute xl:-right-32 text-white py-5 px-10 w-fit text-nowrap text-2xl sm:text-xl flex items-center justify-center gap-5"
        >
          <h1>See Our Portfolio</h1>
          <img src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};
