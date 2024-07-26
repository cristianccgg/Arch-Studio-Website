import React from "react";
import arrow from "/public/images/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

export const Slide = () => {
  return (
    <div className="relative bg-slide-mobile bg-no-repeat bg-cover h-[560px] py-32 px-10 ">
      {/* Superposición */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      <div className="relative xl:pl-[190px] flex flex-col items-start text-white gap-10 z-20 lg:w-[544px] lg:h-[355px]">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="font-black text-6xl md:text-[96px]">
            Project Paramour
          </h1>
          <p className="lg:text-[18px] md:w-[445px]">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
        </div>
        <Link to="/portfolio">
          <button className="bg-veryDarkBlue py-5 px-10 flex gap-3 items-center">
            <h1>See Our Portfolio</h1>
            <img src={arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};
