import React from "react";
import "./Services.css";
import { TbHours24 } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";
const Services = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./service.jpg" alt="Services" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart c-left">
          <p className="orangeText center" style={{ marginBottom: "1.2rem" }}>
            Our Services
          </p>
          <div className="flexColStart contactModes">
            {/** first row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <img
                      src="https://img.icons8.com/?size=100&id=fiJBCEhvIMyT&format=png&color=000000"
                      alt=""
                      style={{ height: "3rem" }}
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">High Class Security</span>
                  </div>
                </div>
              </div>
              {/**second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <TbHours24 size={40} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">24 Hours Room Service</span>
                  </div>
                </div>
              </div>
            </div>

            {/** second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoRestaurant size={40} color="#5588ff" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Restaurants</span>
                  </div>
                </div>
              </div>
              {/**second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <img
                      src="https://img.icons8.com/?size=100&id=114253&format=png&color=000000"
                      alt=""
                      style={{ height: "3.4rem" }}
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Tourist Guide Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
