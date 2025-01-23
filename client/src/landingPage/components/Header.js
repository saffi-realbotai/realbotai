import React from "react";
import "./Header.css";
import logo from "./assets/images/whitelogo.png"; // Replace with your actual logo

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" style={{width: "150px" ,height: "50px"}} />
      </div>
      <div className="navbar-right">
        <button className="book-call-btn">Book a Call</button>
      </div>
    </header>
  );
};

export default Header;
