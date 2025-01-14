import React from 'react';
import './App.css';
import Header from './landingPage/components/Header';
import HeroSection from './landingPage/components/HeroSection';
import FeaturesSection from './landingPage/components/FeaturesSection';
import Pricing from './landingPage/components/Pricing';
import Footer from './landingPage/components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
