import React from "react";
import aboutHero from "/public/images/about/mobile/image-hero.jpg";
import { Leaders } from "/src/components/Leaders.jsx";

export const About = () => {
  return (
    <div>
      <div className="max-h-[375px] w-full">
        <img
          className="object-cover max-h-[375px] w-full"
          src={aboutHero}
          alt="about-hero"
        />
      </div>
      <div className="flex flex-col items-start mt-[20px] px-10 gap-5">
        <h1 className="text-4xl font-bold">Your team of professionals</h1>
        <p>
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
        <hr className="border-lightGrey border my-10  w-16" />
        <h1 className="text-4xl font-bold">
          Our <br />
          Heritage
        </h1>
        <p>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>

        <p>
          Our small team of world-class professionals provides input on every
          project.
        </p>
        <div className="mt-[100px]">
          <h1 className="text-4xl font-bold">
            The <br />
            Leaders
          </h1>
          <Leaders />
        </div>
      </div>
    </div>
  );
};
