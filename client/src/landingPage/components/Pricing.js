import React from "react";
import "./Pricing.css";
import { CheckCircle } from "lucide-react"; // Importing an icon from lucide-react

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$49/month",
    features: [
      "1 AI Voice Agent",
      "10,000 contacts",
      "400 minutes (talk time)",
      "24/7 Support",
    ],
    btnClass: "pricing-btn1",
  },
  {
    name: "Pro Plan",
    price: "$99/month",
    features: [
      "10 AI Voice Agents",
      "Unlimited contacts",
      "1,200 minutes (talk time)",
      "24/7 Support",
      "10 Sub-accounts",
      "Automated Live Transfer",
      "Sync Notes with CRM",
    ],
    btnClass: "pricing-btn2",
  },
  {
    name: "Enterprise Plan",
    price: "$199/month",
    features: ["Custom AI Voice Agents", "Enterprise-level support"],
    btnClass: "pricing-btn3",
  },
];

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h2>Choose the Perfect plan to scale up your agency</h2>
      <p>Unlock Your Full Potential With Flexible Pricing</p>
      <button className="pricing-btn">View Pricing</button>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <p>{plan.name}</p>
            <h3>{plan.price}</h3>
            <hr />
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <CheckCircle className="icon" /> {feature}
                </li>
              ))}
            </ul>
            <button className={plan.btnClass}>Start 3 Days <p>Free Trial</p> </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
