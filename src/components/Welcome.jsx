import React from "react";
import welcomeDesktopImg from "/public/images/home/desktop/image-welcome.jpg";

export const Welcome = () => {
  return (
    <div className="px-10 sm:px-0 flex flex-col gap-5  lg:h-[568px] lg:relative  lg:mt-40">
      <div className="w-full  h-[137] lg:mt-[89px]  hidden sm:block lg:absolute lg:-top-1/2 xl:translate-y-0 lg:translate-y-16  ">
        <h1 className="text-[120px] text-veryLightGrey font-bold w-96 text-left xl:text-[250px] lg:text-[150px]">
          Welcome
        </h1>
      </div>
      <div className="space-y-[22px] sm:-mt-12 lg:flex ">
        <div className="space-y-[22px] lg:flex lg:flex-col lg:absolute xl:right-[540px]  lg:bottom-0 lg:w-[446px] lg:h-[446px]">
          <h1 className="text-4xl font-bold lg:text-[72px] lg:leading-[64px]">
            Welcome to <br />
            Arch Studio
          </h1>
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <img
          className="hidden lg:block absolute right-0 bottom-0 object-cover w-[350px] h-[568px] -z-10"
          src={welcomeDesktopImg}
          alt="welcome-img"
        />
      </div>
    </div>
  );
};
