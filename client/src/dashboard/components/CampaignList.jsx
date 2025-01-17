import React, { useState, useEffect } from 'react';

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        // Fetch campaign data from RealBotAI API or local data
        fetch('/data/campaigns.json')
            .then(response => response.json())
            .then(data => setCampaigns(data));
    }, []);

    return (
        <div className="campaign-list">
            <h2>Campaigns</h2>
            <ul>
                {campaigns.map(campaign => (
                    <li key={campaign.id}>
                        <p>{campaign.name}</p>
                        <p>Status: {campaign.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CampaignList;
