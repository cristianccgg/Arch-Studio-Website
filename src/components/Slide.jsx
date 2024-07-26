import React, { useEffect, useState } from "react";
import arrow from "/public/images/icons/icon-arrow.svg";
import { Link } from "react-router-dom";
import json from "/public/portfolio.json";

export const Slide = () => {
  const [slideImgs, setSlideImgs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSlideImgs(json.slide);
  }, []);

  return (
    <>
      {slideImgs.length > 0 && (
        <div
          key={slideImgs[currentIndex].id}
          className="relative hidden lg:block lg:h-[720px] "
        >
          <div
            style={{ backgroundImage: `url(${slideImgs[currentIndex].image})` }}
            className="flex lg:pl-[190px] bg-cover bg-no-repeat flex-col items-start lg:px-10 lg:py-32  justify-center text-white gap-10 z-20 lg:w-[full] lg:h-[720px]"
          >
            <div className="absolute inset-0 bg-black opacity-25 "></div>
            <div className="flex flex-col gap-3 w-full z-30">
              <h1 className="font-black text-6xl md:text-[96px] lg:w-[540px]">
                {slideImgs[currentIndex].title}
              </h1>
              <p className="lg:text-[18px] md:w-[445px]">
                {slideImgs[currentIndex].description}
              </p>
            </div>
            <Link to="/portfolio" className="z-30">
              <button className="bg-veryDarkBlue py-5 px-10 flex gap-3 items-center">
                <h1>See Our Portfolio</h1>
                <img src={arrow} alt="" />
              </button>
            </Link>
          </div>
          <div className="absolute bottom-0 -left-[80px] flex z-20">
            {slideImgs.map((img, index) => {
              return (
                <div
                  key={img.id}
                  className={` w-[80px] h-[80px] flex items-center justify-center text-[18px] font-bold cursor-pointer ${
                    currentIndex === index
                      ? "bg-veryDarkBlue text-white"
                      : "text-black bg-white"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  0{index + 1}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="lg:hidden relative bg-slide-mobile bg-no-repeat bg-cover h-[560px] lg:h-[720px] py-32 px-10 ">
        {/* Superposición */}
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className=" relative xl:pl-[190px] flex flex-col items-start text-white gap-10 z-20 lg:w-[544px] lg:h-[355px]">
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
    </>
  );
};
