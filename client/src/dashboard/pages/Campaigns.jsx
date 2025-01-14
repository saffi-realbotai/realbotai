import React, { useState, useEffect } from 'react';
import CampaignList from '../components/CampaignList';
import { campaignsData } from '../data/campaigns.json';

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        setCampaigns(campaignsData);
    }, []);

    return (
        <div>
            <h1>Campaigns</h1>
            <CampaignList campaigns={campaigns} />
        </div>
    );
};

export default Campaigns;
