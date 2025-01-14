import React, { useState, useEffect } from 'react';

const RecordingList = () => {
    const [recordings, setRecordings] = useState([]);

    useEffect(() => {
        // Fetch recording data from RealBotAI API or local data
        fetch('/data/recordings.json')
            .then(response => response.json())
            .then(data => setRecordings(data));
    }, []);

    return (
        <div className="recording-list">
            <h2>Recordings</h2>
            <ul>
                {recordings.map(recording => (
                    <li key={recording.id}>
                        <p>{recording.name}</p>
                        <p>{recording.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecordingList;
