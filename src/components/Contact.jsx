import React, { useState } from "react";
import contactHero from "/public/images/contact/mobile/image-hero.jpg";
import contactHeroTablet from "/public/images/contact/tablet/image-hero.jpg";
import arrow from "/public/images/icons/icon-arrow.svg";
import map from "/public/images/contact/tablet/image-map.png";
import mapDesktop from "/public/images/contact/desktop/image-map.png";

export const Contact = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Cannot be empty";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Cannot be empty";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
    }
  };

  return (
    <div className="relative mb-[192px]">
      <div className="hidden md:flex gap-5 text-lightGrey items-center rotate-90 absolute -top-2 -left-56">
        <hr className="w-[104px]" />
        <h1 className="tracking-[18px]">CONTACT</h1>
      </div>
      <div className="max-h-[375px] sm:max-h-[720px] w-full relative">
        <img
          className="object-cover max-h-[375px] w-full md:hidden"
          src={contactHero}
          alt="about-hero"
        />
        <img
          className="hidden md:block md:relative h-[720px]"
          src={contactHeroTablet}
          alt="herotablet"
        />
        <div className="hidden md:flex flex-col gap-5 lg:w-[600px] bg-white w-[515px] h-[431px] self-end ps-10 md:absolute bottom-0 right-0 xl:left-[482px] lg:right-0 justify-between">
          <h1 className="text-[120px] text-end text-veryLightGrey font-bold w-96 absolute -top-1/2 translate-y-32 xl:left-40 xl:-translate-y-0 xl:text-[250px] lg:left-80 left-1/2 xl:-translate-x-full md:-translate-x-1/2">
            Contact
          </h1>
          <div className="flex flex-col justify-between lg:w-[446px] self-end gap-12 lg:gap-8">
            <hr className="mt-16 w-16 lg:mt-28" />
            <h1 className="text-4xl font-bold w-full md:text-[72px] md:leading-[64px]">
              Tell us about <br />
              your project
            </h1>
            <p className="md:text-xl">
              We’d love to hear more about your project. Please, leave a message
              below or give us a call. We have two offices, one in Texas and one
              in Tennessee. If you find yourself nearby, come say hello!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start mt-[20px] px-10 md:px-0 gap-5">
        <div className="flex flex-col gap-5 md:hidden bg-white w-full h-auto ">
          <h1 className="text-4xl font-bold w-full">
            Tell us about <br />
            your project
          </h1>
          <p>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
        <hr className="border-lightGrey border my-10 w-16" />
        <div className="flex flex-col gap-8 md:w-full">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:justify-between md:w-full">
            <h1 className="text-4xl font-bold lg:text-[72px] leading-[64px]">
              Contact <br />
              Details
            </h1>
            <div className="text-[18px] flex flex-col gap-3">
              <p className="font-semibold">Main Office</p>
              <p className="mt-5">Mail: archone@mail.com</p>
              <p>Address: 1892 Chenoweth Drive TN</p>
              <p>Phone: 123-456-3451</p>
              <div className="flex gap-3 items-center text-[18px]">
                <h1 className="font-semibold">View on Map</h1>
                <img className="filter invert" src={arrow} alt="arrow" />
              </div>
            </div>

            <div className="text-[18px] flex flex-col gap-3">
              <p className="font-semibold">Office II </p>
              <p className="mt-5">Mail: archtwo@mail.com</p>
              <p>Address: 3399 Wines Lane TX</p>
              <p>Phone: 832-123-4321</p>
              <div className="flex gap-3 items-center">
                <h1 className="font-semibold">View on Map</h1>
                <img className="filter invert" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contenedor para el mapa */}
      <div className="relative mt-16">
        <img
          className="lg:hidden absolute inset-0 w-full h-[375px] object-cover"
          src={map}
          alt="map"
        />
        <img
          className="hidden lg:block absolute inset-0 w-full h-[560px] object-cover"
          src={mapDesktop}
          alt="map"
        />
      </div>
      <form
        className="px-10 mt-[500px] lg:mt-[700px] flex flex-col gap-8 relative lg:grid lg:grid-cols-3 lg:px-0 lg:gap-32"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold xl:text-[72px] lg:text-[52px] lg:leading-[64px] lg:col-span-1">
          Connect <br />
          with us
        </h1>
        <div className="flex flex-col gap-8 lg:col-span-2">
          <div className="w-full relative">
            <input
              className={`border-b pl-10 py-3 text-2xl w-full ${
                errors.name
                  ? "border-red-500 placeholder-red-500"
                  : "border-black"
              }`}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-red-500 text-nowrap absolute right-0 top-1/2 -translate-y-1/2">
                {errors.name}
              </div>
            )}
          </div>

          <div className="w-full relative">
            <input
              className={`border-b pl-10 py-3 text-2xl w-full ${
                errors.email
                  ? "border-red-500 placeholder-red-500"
                  : "border-black"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500 text-nowrap absolute right-0 top-1/2 -translate-y-1/2">
                {errors.email}
              </div>
            )}
          </div>
          <div className="w-full relative">
            <input
              className={`border-b pl-10 py-3 text-2xl w-full ${
                errors.message
                  ? "border-red-500 placeholder-red-500"
                  : "border-black"
              }`}
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <div className="text-red-500 text-nowrap absolute right-0 top-1/2 -translate-y-1/2">
                {errors.message}
              </div>
            )}
          </div>
          {/* Botón de envío */}
          <button
            className="bg-veryDarkBlue w-fit p-5 absolute -bottom-16 right-10 xl:right-0"
            type="submit"
          >
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </form>
    </div>
  );
};
