import React from "react";
import arrow from "/public/images/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

export const Featured = () => {
  return (
    <div className="mt-[73px] px-10 sm:px-0">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">Featured</h1>
        <Link
          to="/portfolio"
          className="bg-veryDarkBlue hidden p-4 font-bold text-2xl sm:flex items-center text-white gap-4 hover:bg-darkGrey"
        >
          <h1>See all</h1>
          <img src={arrow} alt="arrow" />
        </Link>
      </div>

      <div className="gap-[24px] flex flex-col mt-[48px] text-white lg:grid lg:grid-cols-3">
        <div className="bg-sol-mobile lg:bg-sol-desktop hue-rotate-30 bg-no-repeat bg-cover h-[311px] lg:h-[560px] sm:h-[240px] relative content-end">
          {/* Superposición */}
          <div className="absolute inset-0 bg-green-950 bg-opacity-40 z-10"></div>

          {/* Contenido */}
          <div className="relative z-20 w-[200px] p-[24px]">
            <h1 className="text-4xl text-nowrap font-bold">Project Del Sol</h1>
            <Link to="/portfolio">
              <p className="text-2xl text-nowrap">View All Projects</p>
            </Link>
          </div>
        </div>
        <div className="bg-228b-mobile lg:bg-228b-desktop bg-no-repeat bg-cover h-[311px] lg:h-[560px] sm:h-[240px] content-end relative">
          {/* Superposición */}
          <div className="absolute inset-0 bg-blue-950 bg-opacity-20 z-10"></div>
          {/* Contenido */}
          <div className="relative z-20 w-[200px] p-[24px]">
            <h1 className="text-4xl text-nowrap font-bold">228B Tower</h1>
            <Link to="/portfolio">
              <p className="text-2xl text-nowrap">View All Projects</p>
            </Link>
          </div>
        </div>
        <div className="bg-prototype lg:bg-prototype-desktop bg-no-repeat hue-rotate-30 bg-cover h-[311px] lg:h-[560px] sm:h-[240px] content-end relative">
          {/* Superposición */}
          <div className="absolute inset-0 bg-green-950 bg-opacity-40 z-10"></div>
          {/* Contenido */}
          <div className="relative z-20 w-[200px] p-[24px]">
            <h1 className="text-4xl text-nowrap font-bold">Le Prototype</h1>
            <Link to="/portfolio">
              <p className="text-2xl text-nowrap">View All Projects</p>
            </Link>
          </div>
        </div>
        <Link
          to="/portfolio"
          className="bg-veryDarkBlue sm:hidden py-4 font-bold text-2xl flex items-center justify-center gap-4 hover:bg-darkGrey"
        >
          <h1>See all</h1>
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};
