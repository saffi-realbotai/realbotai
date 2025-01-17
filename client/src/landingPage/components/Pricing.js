import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p>$49/month</p>
        </div>
        <div className="pricing-card">
          <h3>Pro Plan</h3>
          <p>$99/month</p>
        </div>
        <div className="pricing-card">
          <h3>Enterprise Plan</h3>
          <p>$199/month</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
