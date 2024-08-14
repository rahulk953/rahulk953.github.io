import React from "react";
import "../css/Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left-side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Make Yourself At Home <br />
              In Our Guest House
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Simple-Unique-Friendly</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={80} end={100} />
                <span>+</span>
              </span>
              <span className="secondaryText">Bookings Completed</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={120} end={150} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
          </div>
        </div>
        {/* right-side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero.jpg" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
