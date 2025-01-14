// Contact.js - Contact Page for RealBotAI Landing Page

import React from 'react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Have questions or want to get started? Reach out to us!</p>
      
      <form className="contact-form">
        <div>
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div>
          <label for="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label for="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <Button label="Submit" onClick={() => alert('Message sent!')} />
      </form>
    </div>
  );
};

export default Contact;
