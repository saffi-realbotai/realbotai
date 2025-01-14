import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        // Handle logout logic, e.g., clear session, redirect to login
        window.location.href = '/login';
    };

    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
};

export default LogoutButton;
