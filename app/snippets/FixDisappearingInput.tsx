import React, { useState } from 'react';

export default function FixDisappearingInput() {
    const [showHint, setShowHint] = useState(false);

    // ALAN: Buggy code because Form component is rendered in different spots
    // and hence loses it's state
    // if (showHint) {
    //     return (
    //         <div>
    //             <p><i>Hint: Your favorite city?</i></p>
    //             <Form />
    //             <button onClick={() => {
    //                 setShowHint(false);
    //             }}>Hide hint</button>
    //         </div>
    //     );
    // }
    // return (
    //     <div>
    //         <Form />
    //         <button onClick={() => {
    //             setShowHint(true);
    //         }}>Show hint</button>
    //     </div>
    // );

    return (
        <div>
            {showHint && (
                <p className="mb-2"><i>Hint: Your favorite city?</i></p>
            )}
            <Form />
            {showHint ? (
                <button
                    className="btn-primary-block mt-2"
                    onClick={() => setShowHint(false)}
                >
                    Hide hint
                </button>
            ) : (
                <button
                    className="btn-primary-block mt-2"
                    onClick={() => setShowHint(true)}
                >
                    Show hint
                </button>
            )}
        </div>
    );
}

function Form() {
    const [text, setText] = useState('');

    return (
        <textarea
            className="border-1"
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
}
