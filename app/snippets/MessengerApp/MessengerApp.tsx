import React, {useReducer} from 'react';
import ContactList from './ContactList';
import Chat from './Chat';
import {initialState, messengerReducer, State} from './messengerReducer';
import {Action} from "@/app/snippets/MessengerApp/Actions";

export interface Contact {
    id: number;
    name: string;
    email: string;
}

const contacts: Contact[] = [
    {id: 0, name: 'Alice', email: 'alice@mail.com'},
    {id: 1, name: 'Bob', email: 'bob@mail.com'},
    {id: 2, name: 'Taylor', email: 'taylor@mail.com'},
];

export default function MessengerApp() {
    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(messengerReducer, initialState);

    const selectedContact = contacts[state.selectedId];

    return (
        <div className="flex justify-items-start">
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat
                contact={selectedContact}
                message={state.messages[state.selectedId]}
                dispatch={dispatch}
            />
        </div>
    );
}
