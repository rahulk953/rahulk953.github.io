import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Rooms.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Rooms = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <p className="orangeText" style={{ marginBottom: "0.5rem" }}>
            Our Living Room
          </p>
          <h1 className="primaryText">
            The Most Memorable Rest <br /> Time Starts Here.
          </h1>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <h5>
                    Starting from <span>Rs.</span> <span>{card.price}</span>
                  </h5>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
                <button className="button">
                  <a href="https://wa.link/at5ion">Book Now</a>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Rooms;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
