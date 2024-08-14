import React from "react";
import "../css/Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 850) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logoo.png" alt="logo" width={170} />
        </Link>
        {/**menu */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/Rooms">Rooms</NavLink>
            <NavLink to="/Gallery">Gallery</NavLink>
            <NavLink to="/Contact">Contact</NavLink>

            <button className="button">
              <a href="https://wa.link/at5ion">Book Now</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
