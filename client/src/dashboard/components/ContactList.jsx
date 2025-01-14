import React, { useState, useEffect } from 'react';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Fetch contacts data from RealBotAI API or local data
        fetch('/data/contacts.json')
            .then(response => response.json())
            .then(data => setContacts(data));
    }, []);

    return (
        <div className="contact-list">
            <h2>Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>{contact.name}</p>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
