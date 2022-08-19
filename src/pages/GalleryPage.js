import React, { useState } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import Gallery from "react-grid-gallery";
import "./Gallery.css";

export default function GalleryPage() {
  const [show, setShow] = useState(false);

  const IMAGES = [
    {
      src: "galleryPic1.jpeg",
      thumbnail: "galleryPic1.jpeg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      //   isSelected: true,
      //   caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "galleryPic2.jpeg",
      thumbnail: "galleryPic2.jpeg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      //   tags: [
      //     { value: "Ocean", title: "Ocean" },
      //     { value: "People", title: "People" },
      //   ],
      //   caption: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "galleryPic3.jpeg",
      thumbnail: "galleryPic3.jpeg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "galleryPic4.jpeg",
      thumbnail: "galleryPic4.jpeg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      //   isSelected: true,
      //   caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "galleryPic5.jpeg",
      thumbnail: "galleryPic5.jpeg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      //   tags: [
      //     { value: "Ocean", title: "Ocean" },
      //     { value: "People", title: "People" },
      //   ],
      //   caption: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "galleryPic6.jpeg",
      thumbnail: "galleryPic6.jpeg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "galleryPic7.jpeg",
      thumbnail: "galleryPic7.jpeg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      //   isSelected: true,
      //   caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "galleryPic8.jpeg",
      thumbnail: "galleryPic8.jpeg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      //   tags: [
      //     { value: "Ocean", title: "Ocean" },
      //     { value: "People", title: "People" },
      //   ],
      //   caption: "Boats (Jeshu John - designerspics.com)",
    },

    // {
    //   src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //   thumbnail:
    //     "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 212,
    // },
    // {
    //   src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    //   thumbnail:
    //     "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 174,
    //   //   isSelected: true,
    //   //   caption: "After Rain (Jeshu John - designerspics.com)",
    // },
    // {
    //   src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //   thumbnail:
    //     "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 212,

    // },

    // {
    //   src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //   thumbnail:
    //     "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 212,
    // },
  ];

  return (
    <>
      <nav className="w-full ">
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
          <div className="md:w-1/2 xl:w-1/3" style={{ marginRight: "40px" }}>
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
          <div className=" flex items-center " style={{ zIndex: "100" }}>
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

      <div
        style={{
          // background: "#E8E0D5",
          // marginTop: "-21px",
          height: "1000px",
          paddingTop: "45px",
          zIndex: 0,
        }}
      >
        <Gallery images={IMAGES} />

        <br />
      </div>
    </>
  );
}
