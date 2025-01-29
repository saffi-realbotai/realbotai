import React from "react";
import "./FirstSection.css"; 
import Fsection from "./assets/images/apointment.png";
import { CheckCircle } from "lucide-react";

const ApointmentSection = () => {
  return (
    <section className="first-section">
      {/* Left Side - Image */}
      <div className="text-container">
        <button className="main-btn"> Appoinement Booking</button>

        <h2>Scale Your Business with Us</h2>
        <p>Unlock growth potential with cutting-edge solutions tailored to your needs.</p>

        {/* Bullet Points List */}
        <ul className="bullet-list">
          <li><CheckCircle className="bullet-icon" /> Convert leads via Inbound or Outbound Calls.</li>
          <li><CheckCircle className="bullet-icon" /> Designed to overcome objections and dive into pain points.</li>
          <li><CheckCircle className="bullet-icon" /> Fully automated follow-up system to ensure maximum CVR.</li>
          <li><CheckCircle className="bullet-icon" /> Qualify and disqualify using your pre-set qualification process.</li>
          <li><CheckCircle className="bullet-icon" /> Never let a lead slip through th</li>

        </ul>

        <button className="free-btn">Build My Free Voice AI Agent</button>
      </div>
    

      {/* Right Side - Text & Button */}
      <div className="image-container">
        <img 
          src={Fsection}
          alt="First Section" 
          className="section-image"
        />
      </div>
    </section>
  );
};

export default ApointmentSection;
