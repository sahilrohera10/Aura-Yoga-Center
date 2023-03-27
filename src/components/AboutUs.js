import React from "react";
import { Text } from "@chakra-ui/react";
import "./About.css";

const AboutUs = () => {
  return (
    <>
      <svg
        style={{ marginTop: "-160px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#EEDBF1"
          fill-opacity="1"
          d="M0,0L48,37.3C96,75,192,149,288,186.7C384,224,480,224,576,213.3C672,203,768,181,864,149.3C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div style={{ background: "#EEDBF1", width: "100%" }}>
        <div
          style={{ width: "90%", margin: "auto", height: "70vh" }}
          className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
        >
          <div
            style={{ marginTop: "-100px" }}
            className="flex flex-col lg:flex-row justify-evenly gap-8"
          >
            <img
              className="vert-move"
              style={{ width: "30vw" }}
              src="abt-img-2.png"
              alt=""
            />
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              {/* <h1
                style={{
                  color: "white",
                  marginTop: "20px",
                  textAlign: "center",
                }}
                className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4"
              >
                About Us
              </h1> */}
              <Text
                style={{ textAlign: "center" }}
                bgGradient="linear(to-l, #00000087, #0d0d0d)"
                bgClip="text"
                fontSize="4xl"
                fontWeight="extrabold"
              >
                About Us
              </Text>
              <p
                style={{
                  color: "rgb(70 70 70)",
                  fontSize: "17px",
                  marginTop: "10px",
                }}
                className="font-normal text-base leading-6 text-gray-600 "
              >
                Aura yog centre, Shalimar Bagh is a well being centre with an
                aim of spreading the Teaching and practice of an authentic and
                ancient system of yoga thereby promoting health, well being,
                freedom from stress and more balanced and visionary individual.{" "}
              </p>{" "}
              <br />
              <p
                style={{ color: "rgb(70 70 70)", fontSize: "17px" }}
                className="font-normal text-base leading-6 text-gray-600 "
              >
                We have daily yoga classes, special courses, annual programmes
                and retreats, yoga teacher training courses, zumba, individual
                and group meditation sessions, yoga counseling and consultation,
                dance and yoga classes for children and teenagers; Catering to
                the needs of all age groups.
              </p>
              <button
                style={{
                  background: "#A139B4",
                  width: "300px",
                  marginTop: "70px",
                  // alignItem: "center",
                  margin: "auto",
                }}
                className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg "
              >
                Read More
              </button>
            </div>
          </div>

          {/* <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md"></div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
