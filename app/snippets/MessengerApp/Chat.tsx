import React from 'react';
import {EDITED_MESSAGE, EditMessageAction, SendMessageAction, SENT_MESSAGE} from "@/app/snippets/MessengerApp/Actions";
import {Contact} from "@/app/snippets/MessengerApp/MessengerApp";

interface ChatProps {
    contact: Contact;
    message: string;
    dispatch: React.Dispatch<EditMessageAction | SendMessageAction>;
}

export default function Chat({ contact, message, dispatch }: ChatProps) {
    return (
        <section className="flex flex-col ml-4">
            <textarea
                className="border-1 pl-1"
                rows={6}
                value={message}
                placeholder={'Chat to ' + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: EDITED_MESSAGE,
                        message: e.target.value,
                    });
                }}
            />
            <br />
            <button
                className="btn-primary-block"
                onClick={() => {
                    alert(`Sending "${message}" to ${contact.email}`);
                    dispatch({
                        type: SENT_MESSAGE,
                    });
                }}
            >
                Send to {contact.email}
            </button>
        </section>
    );
}
