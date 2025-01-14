// DashboardLayout.js - Main layout for the RealBotAI dashboard

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DASHBOARD_SECTIONS } from './utils/constants';
import { getData } from './utils/api';
import './dashboard.css'; // Ensure to add custom styles

const DashboardLayout = () => {
  const [activeSection, setActiveSection] = useState(DASHBOARD_SECTIONS.USERS);
  const [data, setData] = useState(null);

  // Fetch data when the component mounts
  React.useEffect(() => {
    async function fetchData() {
      const response = await getData('/dashboard/data');
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3 className="sidebar-header">RealBotAI Dashboard</h3>
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => setActiveSection(DASHBOARD_SECTIONS.USERS)}>
              <Link to="#">Users</Link>
            </li>
            <li onClick={() => setActiveSection(DASHBOARD_SECTIONS.CAMPAIGNS)}>
              <Link to="#">Campaigns</Link>
            </li>
            <li onClick={() => setActiveSection(DASHBOARD_SECTIONS.AGENTS)}>
              <Link to="#">Agents</Link>
            </li>
            <li onClick={() => setActiveSection(DASHBOARD_SECTIONS.BILLING)}>
              <Link to="#">Billing</Link>
            </li>
            <li onClick={() => setActiveSection(DASHBOARD_SECTIONS.SETTINGS)}>
              <Link to="#">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <h2 className="section-header">{activeSection}</h2>
        {data ? (
          <div className="section-content">
            {/* Render data dynamically based on active section */}
            {JSON.stringify(data)}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
