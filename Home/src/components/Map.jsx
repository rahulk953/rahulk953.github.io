import React from "react";

const Map = () => {
  return (
    <>
      <h1
        className="primaryText"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Venue Location
      </h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.501735122564!2d86.85721547537453!3d23.586332378782753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1723549643835!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{
          border: 0,
          width: "100%",
          height: "450px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Map;
