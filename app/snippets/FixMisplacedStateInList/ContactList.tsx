// Taken from: https://react.dev/learn/preserving-and-resetting-state#fix-misplaced-state-in-the-list
import React, { useState, ChangeEvent } from 'react';

interface ContactType {
    id: number;
    name: string;
    email: string;
}

const contacts: ContactType[] = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

export default function ContactList() {
    const [reverse, setReverse] = useState(false);

    const displayedContacts = [...contacts];
    if (reverse) {
        displayedContacts.reverse();
    }

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setReverse(e.target.checked);
    };

    // Not using a key will cause incorrect contact to be expanded on reversing list
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={reverse}
                    onChange={handleCheckboxChange}
                />{' '}
                Show in reverse order
            </label>
            <ul>
                {displayedContacts.map((contact) => (
                    <li className="mt-2" key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>
        </>
    );
}

interface ContactProps {
    contact: ContactType;
}

function Contact({ contact }: ContactProps) {
    const [expanded, setExpanded] = useState(false);

    const handleButtonClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <p className="mt-4"><b>{contact.name}</b></p>
            {expanded && (
                <p className="mt-2"><i>{contact.email}</i></p>
            )}
            <button className="btn-primary-block mt-3" onClick={handleButtonClick}>
                {expanded ? 'Hide' : 'Show'} email
            </button>
        </>
    );
}
