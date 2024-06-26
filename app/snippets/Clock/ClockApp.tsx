// ALAN: Taken from https://react.dev/learn/referencing-values-with-refs

import {useRef, useState} from 'react';
import './styles.css'

export default function Clock() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    // ALAN: using "let intervalId;" here instead of ref and trying to set it in
    // handleStart and use it in handleStop will not work as react will tear down
    // things when component is re-rendered on changing state/props and as best
    // practice you should only use variables(e.g. fullName to concat first and last)
    // that are stored in state only during the render cycle
    let intervalRef = useRef(null);

    function handleStart() {
        // Start counting.
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            // Update the current time every 10ms.
            setNow(Date.now());
        }, 200);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <fieldset className="fieldset">
                <legend>Stopwatch</legend>
                <h5 className="font-bold pl-4 mb-4">Time passed: {secondsPassed.toFixed(3)}</h5>
                <button className="btn-primary" onClick={handleStart}>
                    Start Stopwatch
                </button>
                <button className="btn-primary" onClick={handleStop}>
                    Stop Stopwatch
                </button>
            </fieldset>
        </>
    );
}
