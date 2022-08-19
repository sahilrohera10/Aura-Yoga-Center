import React, { useState } from "react";
import { Link } from "react-router-dom";
function NavBanner() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        style={{ paddingRight: "40px", paddingLeft: "20px" }}
        className="lg:px-6 xl:px-0"
      >
        <div className="container mx-auto relative z-20">
          <nav className="w-full absolute">
            <div className="hidden lg:flex w-full f-f-p justify-between items-center py-6 relative">
              <div style={{ display: "flex" }}>
                {" "}
                <img
                  src="AuraLogo.png"
                  style={{ width: "70px", height: "70px" }}
                  alt=""
                />
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "550",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  Aura Yoga Center
                </p>{" "}
              </div>
              <div className="md:w-1/2 xl:w-1/3">
                <ul className="flex justify-between w-full items-center text-gray-600">
                  <li className=" pb-1">
                    <Link to="/" href>
                      Home
                    </Link>
                  </li>
                  <li className="border-b-4 border-transparent pb-1">
                    <Link to="/aboutUs">About Us</Link>
                  </li>
                  <li className="border-b-4 border-transparent pb-1">
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  {/* <li className="border-b-4 border-transparent pb-1">
                    <a href>Blog</a>
                  </li> */}
                  <li className="border-b-4 border-transparent pb-1">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className="lg:hidden">
            <div className="flex py-6 justify-between items-center px-4">
              <div style={{ display: "flex" }}>
                <img
                  src="AuraLogo.png"
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    marginLeft: "-20px",
                    marginTop: "-8px",
                  }}
                />
                <p className="navHead">Aura Yoga Center</p>{" "}
              </div>
              <div className=" flex items-center">
                {show && (
                  <ul
                    id="list"
                    className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16"
                  >
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <Link to="/">
                        <span className="ml-2 font-bold">Home</span>
                      </Link>
                    </li>
                    <li
                      className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center"
                      onclick="dropdownHandler(this)"
                    >
                      <Link to="/aboutUs">
                        <span className="ml-2 font-bold">About Us</span>
                      </Link>
                    </li>
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                      <Link to="/gallery">
                        <span className="ml-2 font-bold">Gallery</span>
                      </Link>
                    </li>
                    {/* <li
                      className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center"
                      onclick="dropdownHandler(this)"
                    >
                      <a href="javascript:void(0)">
                        <span className="ml-2 font-bold">Blog</span>
                      </a>
                    </li> */}
                    <li
                      className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center"
                      onclick="dropdownHandler(this)"
                    >
                      <Link to="/contact">
                        <span className="ml-2 font-bold">Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                )}
                <div className="xl:hidden" onClick={() => setShow(!show)}>
                  {show ? (
                    <div id="close" className=" close-m-menu">
                      <svg
                        aria-label="Close"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  ) : (
                    <svg
                      id="open"
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      className="show-m-menu icon icon-tabler icon-tabler-menu"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="mx-auto container relative z-0 px-4 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
              <h1
                className="text-3xl lg:text-5xl xl:text-7xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color"
                style={{ color: "#351B58" }}
              >
                ONE STEP SOLUTION <br /> TO ALL YOUR <br /> PROBLEMS
              </h1>
              <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">
                Just Fall Into Yoga
              </h2>
              <div className="w-full flex justify-center md:block">
                <button
                  style={{ background: "#A139B4" }}
                  className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
              {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
              <img
                style={{
                  height: "600px",
                  borderRadius: "150px",
                  width: "700px",
                  objectFit: "contain",
                  //   marginLeft: "100px",
                }}
                className="md:absolute md:w-1/2 md:-ml-28"
                src="imaging1.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBanner;
