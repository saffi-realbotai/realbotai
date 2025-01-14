// Header.js - Header Component for the Landing Page

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="header-logo">RealBotAI</a>
      <nav className="header-nav">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
