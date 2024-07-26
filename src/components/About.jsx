import React from "react";
import aboutHero from "/public/images/about/mobile/image-hero.jpg";
import aboutHeroTablet from "/public/images/about/tablet/image-hero.jpg";
import heritageImg from "/public/images/about/desktop/image-heritage.jpg";
import { Leaders } from "/src/components/Leaders.jsx";

export const About = () => {
  return (
    <div className="relative">
      <div className="hidden md:flex gap-5 text-lightGrey items-center rotate-90 absolute top-3 -left-56">
        <hr className="w-[104px]" />
        <h1 className="tracking-[18px]">ABOUT US</h1>
      </div>
      <div className="max-h-[375px] md:max-h-[720px] w-full relative">
        <img
          className="object-cover max-h-[375px] w-full md:hidden"
          src={aboutHero}
          alt="about-hero"
        />
        <img
          className="hidden md:block md:relative h-[720px] min-w-[573px]"
          src={aboutHeroTablet}
          alt="herotablet"
        />
        <div className=" bg-black opacity-40 absolute inset-0 h-full md:w-[573px]"></div>
        <div className="hidden md:flex flex-col gap-5  lg:w-[600px] bg-white w-[515px] h-[431px] self-end ps-10 md:absolute bottom-0 right-0 xl:left-[482px] lg:right-0 justify-between">
          <h1 className="text-[120px] text-end text-veryLightGrey font-bold w-96  absolute -top-1/2 translate-y-32 lg:left-40 lg:-translate-y-0 lg:text-[250px] left-1/2 -translate-x-1/2">
            About
          </h1>
          <div className="flex flex-col justify-between lg:w-[446px] self-end gap-12 lg:gap-8">
            <hr className="mt-16 w-16 lg:mt-28" />
            <h1 className="text-4xl font-bold w-full md:text-[72px] md:leading-[64px]">
              Your team of <br />
              professionals
            </h1>
            <p className="md:text-xl lg:text-[18px]">
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mt-[20px] px-10 md:px-0 gap-5">
        <div className="flex flex-col gap-5 md:hidden bg-white w-full h-auto ">
          <h1 className="text-4xl font-bold w-full">
            Your team of <br />
            professionals
          </h1>
          <p>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
        <hr className="border-lightGrey border my-10 w-16 lg:mt-20 lg:mb-0" />
        <div className="xl:grid xl:grid-cols-2 w-full xl:justify-between">
          <div className="flex flex-col gap-5 md:justify-between xl:w-[446px]">
            <h1 className="text-4xl font-bold md:text-[72px] md:leading-[64px]">
              Our <br />
              Heritage
            </h1>
            <p className="lg:text-[18px]">
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>
            <p className="lg:text-[18px]">
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>
            <p className="lg:text-[18px]">
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
          <div className="hidden xl:inline-block">
            <img src={heritageImg} alt="heritage-img" />
          </div>
        </div>
        <div className="mt-[100px] xl:flex xl:justify-between w-full">
          <h1 className="text-4xl font-bold md:text-[72px] md:leading-[64px]">
            The <br />
            Leaders
          </h1>
          <Leaders />
        </div>
      </div>
    </div>
  );
};
