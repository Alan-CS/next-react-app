// ALAN: Taken from https://react.dev/learn/referencing-values-with-refs#read-the-latest-state

import { useState, useRef } from 'react';

export default function ReadState() {
    const [text, setText] = useState('');
    const textRef = useRef(text);

    function handleChange(e) {
        setText(e.target.value);
        textRef.current = e.target.value;
    }

    function handleSend() {
        setTimeout(() => {
            alert('Sending: ' + textRef.current);
        }, 3000);
    }

    return (
        <>
            <input
                className="border-1"
                value={text}
                onChange={handleChange}
            />
            <button className="btn-primary"
                onClick={handleSend}>
                Send
            </button>
        </>
    );
}
