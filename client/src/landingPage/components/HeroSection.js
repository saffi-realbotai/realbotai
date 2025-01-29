import React from "react";
import "./HeroSection.css";
import AudioButton from "./Button"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 >Welcome to RealBotAI</h1>
      <p>Automate your real estate client acquisition with AI-powered technology</p>
      <AudioButton />
    </section>
  );
};

export default HeroSection;
