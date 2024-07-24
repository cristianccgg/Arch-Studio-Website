import React from "react";
import logo from "/public/images/icons/logo.svg";
import arrow from "/public/images/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-veryLightGrey p-4 relative mt-[140px] h-[450px] flex flex-col items-center justify-center">
      <div className="bg-black h-[120px] w-[120px] flex items-center justify-center absolute top-[-60px]">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[58px] h-[58px] filter invert brightness-0"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-8 ">
        <Link to={"/portfolio"}>
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </Link>
        <Link to={"/about"}>
          <h1 className="text-2xl font-bold">About Us</h1>
        </Link>
        <Link to={"/contact"}>
          <h1 className="text-2xl font-bold">Contact</h1>
        </Link>
        <Link
          to="/portfolio"
          className="bg-black text-white py-5  px-10 w-fit text-2xl flex items-center justify-center gap-5"
        >
          <h1>See Our Portfolio</h1>
          <img src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};
