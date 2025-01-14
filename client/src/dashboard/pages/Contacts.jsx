import React, { useState, useEffect } from 'react';
import ContactList from '../components/ContactList';
import { contactsData } from '../data/contacts.json';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(contactsData);
    }, []);

    return (
        <div>
            <h1>Contacts</h1>
            <ContactList contacts={contacts} />
        </div>
    );
};

export default Contacts;
