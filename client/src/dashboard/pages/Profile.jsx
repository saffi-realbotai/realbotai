import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import { userProfilesData } from '../data/userProfiles.json';

const ProfilePage = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        setProfile(userProfilesData[0]); // Assuming first profile is logged-in user
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            <Profile profile={profile} />
        </div>
    );
};

export default ProfilePage;
