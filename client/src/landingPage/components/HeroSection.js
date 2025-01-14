// HeroSection.js - Hero Section with the main call to action

import React from 'react';
import './HeroSection.css';
import Button from './Button';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to RealBotAI</h1>
      <p>Your AI-powered solution for smarter client acquisition</p>
      <Button label="Get Started" onClick={() => window.location.href = '#signup'} />
    </div>
  );
};

export default HeroSection;
