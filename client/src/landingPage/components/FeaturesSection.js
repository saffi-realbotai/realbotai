import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <h2>Our Features</h2>
      <div className="feature-item">
        <div>
          <h3>AI-Powered Automation</h3>
          <p>Automate your lead management and follow-up process using cutting-edge AI.</p>
        </div>
        <div>
          <h3>Customizable Campaigns</h3>
          <p>Create campaigns tailored to your audience for maximum engagement and results.</p>
        </div>
        <div>
          <h3>Real-Time Analytics</h3>
          <p>Track your progress and optimize your strategies with real-time data and insights.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
