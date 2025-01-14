// Home.js - Home Page for RealBotAI Landing Page

import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Pricing from './Pricing';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesSection />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
