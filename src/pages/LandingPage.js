import React from "react";
import AboutUs from "../components/AboutUs";
import Activities from "../components/Activities";
import Footer from "../components/Footer";
import NavBanner from "../components/NavBanner";
import Store from "../components/Store";
import Testimonial from "../components/Testimonial";

export default function LandingPage() {
  return (
    <div>
      <div style={{ width: "90%", margin: "auto" }}>
        <NavBanner />
      </div>

      <div>
        <AboutUs />
      </div>

      <div style={{ width: "90%", margin: "auto" }}>
        <Activities />
      </div>

      <br />
      <br />
      <br />

      <div style={{ width: "90%", margin: "auto" }}>
        <Store />
      </div>
      <Testimonial />
      {/* <GalleryPage /> */}
      <Footer />
    </div>
  );
}
