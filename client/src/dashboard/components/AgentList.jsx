import React, { useState, useEffect } from 'react';

const AgentList = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        // Fetch agents data from RealBotAI API or local data
        fetch('/data/agents.json')
            .then(response => response.json())
            .then(data => setAgents(data));
    }, []);

    return (
        <div className="agent-list">
            <h2>List of Agents</h2>
            <ul>
                {agents.map(agent => (
                    <li key={agent.id}>
                        <p>{agent.name}</p>
                        <p>{agent.email}</p>
                        <p>{agent.role}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AgentList;
