import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header />
            <Sidebar />
            <main>
                <h1>Welcome to Your Dashboard</h1>
                {/* Add dashboard overview or statistics */}
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
