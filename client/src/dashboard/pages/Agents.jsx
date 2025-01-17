import React, { useState, useEffect } from 'react';
import AgentList from '../components/AgentList';
import { agentsData } from '../data/agents.json';

const Agents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        setAgents(agentsData);
    }, []);

    return (
        <div>
            <h1>Agents</h1>
            <AgentList agents={agents} />
        </div>
    );
};

export default Agents;
