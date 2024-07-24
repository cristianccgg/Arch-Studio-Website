import React from "react";
import contactHero from "/public/images/contact/mobile/image-hero.jpg";
import arrow from "/public/images/icons/icon-arrow.svg";
import map from "/public/images/contact/tablet/image-map.png";

export const Contact = () => {
  return (
    <div className="mb-[192px]">
      <div className="max-h-[375px] w-full">
        <img
          className="object-cover max-h-[375px] w-full"
          src={contactHero}
          alt="about-hero"
        />
      </div>
      <div className="flex flex-col items-start mt-[20px] px-10 gap-5">
        <h1 className="text-4xl font-bold">Tell us about your project</h1>
        <p>
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
        <hr className="border-lightGrey border my-10  w-16" />
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">
            Contact <br />
            Details
          </h1>
          <div>
            <p className="font-semibold">Main Office</p>
            <p className="mt-5">Mail: archone@mail.com</p>
            <p>Address: 1892 Chenoweth Drive TN</p>
            <p>Phone: 123-456-3451</p>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="font-semibold">View on Map</h1>
            <img className="filter invert" src={arrow} alt="arrow" />
          </div>
          <div>
            <p className="font-semibold">Office II </p>
            <p className="mt-5">Mail: archtwo@mail.com</p>
            <p>Address: 3399 Wines Lane TX</p>
            <p>Phone: 832-123-4321</p>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="font-semibold">View on Map</h1>
            <img className="filter invert" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <img className="mt-[71px] h-[375px]" src={map} alt="map" />
      <form className="px-10 mt-[73px] flex flex-col gap-8 relative" action="#">
        <h1 className="text-4xl font-bold">
          Connect <br />
          with us
        </h1>
        <input
          className="border-b border-black pl-10 py-3 text-2xl"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <input
          className="border-b border-black pl-10 py-3 text-2xl"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="border-b border-black pl-10 py-3 text-2xl"
          type="text"
          name="message"
          id="message"
          placeholder="Message"
        />
        {/* Botón de envío */}
        <button
          className="bg-veryDarkBlue w-fit p-5 absolute -bottom-16 right-10"
          type="submit"
        >
          <img src={arrow} alt="arrow" />
        </button>
      </form>
    </div>
  );
};
