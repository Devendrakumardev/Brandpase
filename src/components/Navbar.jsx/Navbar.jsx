import React from "react";
import Nike_Logo from "../../assets/Nike-Logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={Nike_Logo} alt="" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="navbutton">login</button>
      </nav>
    </div>
  );
};

export default Navbar;
