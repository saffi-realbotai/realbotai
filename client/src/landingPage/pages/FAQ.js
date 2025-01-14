// FAQ.js - FAQ Page for RealBotAI Landing Page

import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What is RealBotAI?</h3>
        <p>RealBotAI is an AI-powered CRM system designed to help real estate professionals acquire clients efficiently and manage leads effectively.</p>
      </div>

      <div className="faq-item">
        <h3>How does RealBotAI work?</h3>
        <p>Our AI system automates client acquisition, lead qualification, and follow-ups, saving you time and maximizing results.</p>
      </div>

      <div className="faq-item">
        <h3>Can I try RealBotAI before purchasing?</h3>
        <p>Yes! We offer a free trial to help you experience the benefits before committing to a subscription plan.</p>
      </div>
      
      <div className="faq-item">
        <h3>How do I get started?</h3>
        <p>Simply sign up on our website, and our team will assist you in getting set up with our system tailored to your needs.</p>
      </div>
    </div>
  );
};

export default FAQ;
