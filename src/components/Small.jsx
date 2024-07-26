import React from "react";
import arrow from "/public/images/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

export const Small = () => {
  return (
    <div className="relative mt-[73px] px-10 bg-small-mobile md:bg-small-desktop bg-cover bg-no-repeat h-[560px] w-full flex items-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="text-white z-20 flex flex-col gap-8 xl:pl-[190px]">
        <h1 className="text-5xl font-bold md:text-[72px]">
          Small team,
          <br />
          big ideas
        </h1>
        <Link
          to={"/about"}
          className="bg-black px-10 py-4 flex gap-4 w-fit hover:bg-darkGrey"
        >
          <h1>About Us</h1>
          <img src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};
