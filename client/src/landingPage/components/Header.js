import React from "react";
import "./Header.css";
import logo from "./assets/images/logo.svg"; // Replace with your actual logo

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <button className="book-call-btn">Book a Call</button>
      </div>
    </header>
  );
};

export default Header;
