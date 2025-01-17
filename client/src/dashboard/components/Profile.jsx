import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Agent',
        aiStats: 'Active AI Integration',
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Save profile updates to RealBotAI API
        console.log('Profile updated', profile);
    };

    return (
        <div className="profile">
            <h2>Profile</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={profile.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profile.email} onChange={handleChange} />
                </label>
                <label>
                    Role:
                    <input type="text" name="role" value={profile.role} onChange={handleChange} />
                </label>
                <label>
                    AI Stats:
                    <input type="text" name="aiStats" value={profile.aiStats} onChange={handleChange} />
                </label>
                <button type="button" onClick={handleSave}>Save Changes</button>
            </form>
        </div>
    );
};

export default Profile;
