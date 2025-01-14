import React, { useState, useEffect } from 'react';

const Billing = () => {
    const [billingInfo, setBillingInfo] = useState(null);

    useEffect(() => {
        // Fetch billing information from RealBotAI API or local data
        fetch('/data/billing.json')
            .then(response => response.json())
            .then(data => setBillingInfo(data));
    }, []);

    return (
        <div className="billing">
            {billingInfo ? (
                <>
                    <h2>Billing Details</h2>
                    <p>Subscription Plan: {billingInfo.plan}</p>
                    <p>Amount: ${billingInfo.amount}</p>
                    <p>Next Payment Date: {billingInfo.nextPaymentDate}</p>
                </>
            ) : (
                <p>Loading billing details...</p>
            )}
        </div>
    );
};

export default Billing;
