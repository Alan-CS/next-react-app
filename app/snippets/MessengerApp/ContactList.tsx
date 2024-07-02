import React from 'react';
import {Contact} from "@/app/snippets/MessengerApp/MessengerApp";
import {CHANGED_SELECTION, ChangeSelectionAction} from "@/app/snippets/MessengerApp/Actions";

interface ContactListProps {
    contacts: Contact[];
    selectedId: number;
    // dispatch: React.Dispatch<{ type: string; contactId: number }>;
    dispatch: React.Dispatch<ChangeSelectionAction>;
}

export default function ContactList({ contacts, selectedId, dispatch }: ContactListProps) {
    return (
        <section>
            <ul>
                {contacts.map((contact) => (
                    <li
                        className="bg-gray-200 hover:bg-gray-300 px-6 py-1 rounded-sm border-1 cursor-pointer"
                        key={contact.id}
                        onClick={() => {
                            dispatch({
                                type: CHANGED_SELECTION,
                                contactId: contact.id,
                            });
                        }}
                    >
                        {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}