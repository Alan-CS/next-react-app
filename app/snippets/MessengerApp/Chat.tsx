import {useState} from 'react';

export default function Chat({contact, message, dispatch}) {
    return (
        <section className="flex flex-col ml-4">
      <textarea
          className="border-1 pl-1"
          rows={6}
          value={message}
          placeholder={'Chat to ' + contact.name}
          onChange={(e) => {
              dispatch({
                  type: 'edited_message',
                  message: e.target.value,
              });
          }}
      />
            <br/>
            <button
                className="btn-primary-block"
                onClick={() => {
                    alert(`Sending "${message}" to ${contact.email}`);
                    dispatch({
                        type: 'sent_message',
                    });
                }}>
                Send to {contact.email}
            </button>
        </section>
    );
}
