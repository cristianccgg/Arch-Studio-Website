import React from "react";
import arrow from "/public/images/icons/icon-arrow.svg";

export const Small = () => {
  return (
    <div className="relative mt-[73px] px-10 bg-small-mobile h-[560px] w-full flex items-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="text-white z-20 flex flex-col gap-8">
        <h1 className="text-5xl font-bold">
          Small team,
          <br />
          big ideas
        </h1>
        <button className="bg-black px-10 py-4 flex gap-4 w-fit">
          <h1>About Us</h1>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
