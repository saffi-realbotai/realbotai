import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AgentDetails = () => {
    const { id } = useParams();
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        // Fetch agent details from the API or local data
        fetch(`/data/agents/${id}.json`)
            .then(response => response.json())
            .then(data => setAgent(data));
    }, [id]);

    return (
        <div className="agent-details">
            {agent ? (
                <>
                    <h2>{agent.name}</h2>
                    <p>Email: {agent.email}</p>
                    <p>Role: {agent.role}</p>
                    <p>Status: {agent.status}</p>
                    <p>AI Engagement: {agent.aiEngagement}</p>
                </>
            ) : (
                <p>Loading agent details...</p>
            )}
        </div>
    );
};

export default AgentDetails;
