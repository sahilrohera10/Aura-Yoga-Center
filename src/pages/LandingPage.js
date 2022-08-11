import { BackTop } from "antd";
import React from "react";
import AboutUs from "../components/AboutUs";
import Activities from "../components/Activities";
import Footer from "../components/Footer";
import MeetOurFounder from "../components/MeetOurFounder";
import NavBanner from "../components/NavBanner";
import Testimonial from "../components/Testimonial";
import WhyUs from "../components/WhyUs";
import GalleryPage from "./GalleryPage";

export default function LandingPage() {
  return (
    <div>
      <NavBanner />
      <AboutUs />
      <Activities />

      <br />
      <br />
      <br />
      {/* <MeetOurFounder /> */}
      {/* <WhyUs /> */}
      <Testimonial />
      <GalleryPage />
      <Footer />
    </div>
  );
}
