import React, { useState, useEffect } from 'react';
import RecordingList from '../components/RecordingList';
import { recordingsData } from '../data/recordings.json';

const Recordings = () => {
    const [recordings, setRecordings] = useState([]);

    useEffect(() => {
        setRecordings(recordingsData);
    }, []);

    return (
        <div>
            <h1>Recordings</h1>
            <RecordingList recordings={recordings} />
        </div>
    );
};

export default Recordings;
