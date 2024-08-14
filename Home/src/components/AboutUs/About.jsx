import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./About.jpg" alt="About" />
          </div>
        </div>
        {/* right side*/}
        <div className="v-right">
          <p className="orangeText" style={{ marginBottom: "1.2rem" }}>
            About Us
          </p>
          <h2 className="primaryText">The Best Holidays Start Here</h2>
          <p className="secondaryText" style={{ margin: "20px 0px" }}>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
          <h4>
            <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </a>
          </h4>
          <h4 style={{ color: "black" }}>
            <a href="tel:+919007062180"> Contact us: +91 9007062180 </a>
          </h4>

          <button className="button mts">
            <a href="https://wa.link/at5ion">Book Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
