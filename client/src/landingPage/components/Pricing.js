// Pricing.js - Displays Pricing Plans for RealBotAI

import React from 'react';
import './Pricing.css';
import Button from './Button';

const Pricing = () => {
  return (
    <div className="pricing-section" id="pricing">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p>Ideal for small businesses</p>
          <div className="price">$49/month</div>
          <Button label="Sign Up" />
        </div>
        <div className="pricing-card">
          <h3>Pro Plan</h3>
          <p>For growing teams</p>
          <div className="price">$99/month</div>
          <Button label="Sign Up" />
        </div>
        <div className="pricing-card">
          <h3>Enterprise Plan</h3>
          <p>For large enterprises</p>
          <div className="price">$199/month</div>
          <Button label="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
