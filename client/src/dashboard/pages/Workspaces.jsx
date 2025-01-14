import React, { useState, useEffect } from 'react';
import WorkspaceList from '../components/WorkspaceList';
import { workspacesData } from '../data/workspaces.json';

const Workspaces = () => {
    const [workspaces, setWorkspaces] = useState([]);

    useEffect(() => {
        setWorkspaces(workspacesData);
    }, []);

    return (
        <div>
            <h1>Workspaces</h1>
            <WorkspaceList workspaces={workspaces} />
        </div>
    );
};

export default Workspaces;
