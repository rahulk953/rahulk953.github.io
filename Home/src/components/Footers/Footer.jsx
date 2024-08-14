import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img
          src="./logoo.png"
          alt="logoo"
          width={200}
          style={{ marginBottom: "1rem" }}
        />
        <p style={{ marginBottom: "1.4rem" }}>
          Discover a world of comfort, luxury, and adventure as you explore our
          curated selection of hotels, making every moment of your getaway truly
          extraordinary.
        </p>
        <button className="button">
          <a href="https://wa.link/at5ion">Book Now</a>
        </button>
      </div>
      <div className="footer-section">
        <h3 style={{ marginBottom: "1rem" }}>Quick Links</h3>
        <ul>
          <li>Browse Destinations</li>
          <li>Special Offers & Packages</li>
          <li>Room Types & Amenities</li>
          <li>Customer Reviews & Ratings</li>
          <li>Travel Tips & Guides</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 style={{ marginBottom: "1rem" }}>Our Services</h3>
        <ul>
          <li>Concierge Assistance</li>
          <li>Flexible Booking Options</li>
          <li>Airport Transfers</li>
          <li>Wellness & Recreation</li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3 style={{ marginBottom: "1rem" }}>Contact Us</h3>
        <p>
          Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
          723136
        </p>
        <br />
        <p>Email: kghosh009@gmail.com</p>
        <br />
        <p>Phone: +91 9007062810</p>
        <div className="social-icons">
          <i className="fa fa-facebook">
            <a href="https://www.facebook.com/watch/?v=1380103232635384">
              <img src="./facebook.png" alt="facebook" />
            </a>
          </i>
          <i className="fa fa-twitter">
            <a href="https://x.com/">
              <img src="./twitter.png" alt="twitter" />
            </a>
          </i>
          <i className="fa fa-youtube">
            <a href="https://www.youtube.com/watch?v=d9x1EjsXwjo/">
              <img src="./youtube.png" alt="youtube" />
            </a>
          </i>
          <i className="fa fa-instagram">
            <a href="https://www.instagram.com/kingsukhguesthouse/">
              <img src="./insta.png" alt="instagram" />
            </a>
          </i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
