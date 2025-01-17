import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li><Link to="/agents">Agents</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/campaigns">Campaigns</Link></li>
                <li><Link to="/recordings">Recordings</Link></li>
                <li><Link to="/workspaces">Workspaces</Link></li>
                <li><Link to="/integrations">Integrations</Link></li>
                <li><Link to="/affiliate">Affiliate Program</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
