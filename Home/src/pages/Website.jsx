import React from "react";
import About from "../components/AboutUs/About";
import Contact from "../components/ContactUs/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Rooms from "../components/Residencies/Rooms";
import Map from "../components/Map";
import Gallery from "../components/Gallery/Gallery";
import Services from "../components/Services/Services";
import Footer from "../components/Footers/Footer";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Contact />
      <Map />
    </div>
  );
};

export default Website;
