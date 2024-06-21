// Taken from: https://react.dev/learn/preserving-and-resetting-state#fix-misplaced-state-in-the-list
import { useState } from 'react';

export default function ContactList() {
    const [reverse, setReverse] = useState(false);

    const displayedContacts = [...contacts];
    if (reverse) {
        displayedContacts.reverse();
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    value={reverse}
                    onChange={e => {
                        setReverse(e.target.checked)
                    }}
                />{' '}
                Show in reverse order
            </label>
            <ul>
                {displayedContacts.map((contact, i) =>
                    // Using the contact ID as a key instead of the index fixes the issue
                    <li className="mt-2" key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                )}
            </ul>
        </>
    );
}

const contacts = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

function Contact({ contact }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <p className="mt-4"><b>{contact.name}</b></p>
            {expanded &&
                <p className="mt-2"><i>{contact.email}</i></p>
            }
            <button className="btn-primary-block mt-3" onClick={() => {
                setExpanded(!expanded);
            }}>
                {expanded ? 'Hide' : 'Show'} email
            </button>
        </>
    );
}
