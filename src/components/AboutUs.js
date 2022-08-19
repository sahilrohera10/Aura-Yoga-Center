import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{ background: "lightGray" }}
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1
            style={{ color: "#351B58" }}
            className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4"
          >
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Aura yoga center, Shalimar Bagh is a well being centre with an aim
            of spreading the Teaching and practice of an authentic and ancient
            system of yoga thereby promoting health, well being, freedom from
            stress and more balanced and visionary individual.{" "}
          </p>{" "}
          <p className="font-normal text-base leading-6 text-gray-600 ">
            We have daily yoga classes, special courses, annual programmes and
            retreats, yoga teacher training courses, zumba, individual and group
            meditation sessions, yoga counseling and consultation, dance and
            yoga classes for children and teenagers; Catering to the needs of
            all age groups.
          </p>
          <button
            style={{ background: "#A139B4", width: "300px", marginTop: "30px" }}
            className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg "
          >
            Read More
          </button>
        </div>
        <div className="w-full lg:w-8/12  ">
          <iframe
            className="aboutvd"
            src="newAuraVd.mp4"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
