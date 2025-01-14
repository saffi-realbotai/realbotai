import React, { useState, useEffect } from 'react';

const WorkspaceList = () => {
    const [workspaces, setWorkspaces] = useState([]);

    useEffect(() => {
        // Fetch workspaces data from RealBotAI API or local data
        fetch('/data/workspaces.json')
            .then(response => response.json())
            .then(data => setWorkspaces(data));
    }, []);

    return (
        <div className="workspace-list">
            <h2>Workspaces</h2>
            <ul>
                {workspaces.map(workspace => (
                    <li key={workspace.id}>
                        <p>{workspace.name}</p>
                        <p>Status: {workspace.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkspaceList;
