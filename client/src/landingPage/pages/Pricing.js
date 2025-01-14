// Pricing.js - Pricing Page for RealBotAI Landing Page

import React from 'react';
import Button from '../components/Button';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h2>Choose Your Plan</h2>
      <div className="pricing-options">
        <div className="pricing-option">
          <h3>Basic Plan</h3>
          <p>$49/month</p>
          <p>For individuals and small businesses</p>
          <Button label="Sign Up" />
        </div>

        <div className="pricing-option">
          <h3>Pro Plan</h3>
          <p>$99/month</p>
          <p>For growing teams and medium-sized businesses</p>
          <Button label="Sign Up" />
        </div>

        <div className="pricing-option">
          <h3>Enterprise Plan</h3>
          <p>$199/month</p>
          <p>For large businesses and enterprises</p>
          <Button label="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
