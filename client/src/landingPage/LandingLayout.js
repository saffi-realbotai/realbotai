// src/landingPage/LandingLayout.js
import React from "react";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LogosSlider from "./components/LogosSlider";
import FirstSection from "./components/FirstSection";
import ApoinementSection from "./components/apointment"
import Button from './components/Button';  // Import the Button component with TapToTalk functionality

const LandingLayout = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

  {/* TapToTalk Button */}
  {/* <Button />   */}
  {/* Place the Button component here for the TapToTalk functionality */}
  <LogosSlider />
      {/* Features Section */}
      <FeaturesSection />
     
     <FirstSection />
     <ApoinementSection />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer Section */}
      <Footer />

    
    </div>
  );
};

export default LandingLayout;
