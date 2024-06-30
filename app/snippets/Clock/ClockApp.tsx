// ALAN: Taken from https://react.dev/learn/referencing-values-with-refs

import { useRef, useState, useEffect } from 'react';
import './styles.css';

export default function Clock() {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [now, setNow] = useState<number | null>(null);

    // ALAN: using "let intervalId;" here instead of ref and trying to set it in
    // handleStart and use it in handleStop will not work as react will tear down
    // things when component is re-rendered on changing state/props and as best
    // practice you should only use variables(e.g. fullName to concat first and last)
    // that are stored in state only during the render cycle
    const intervalRef = useRef<number | null>(null);

    function handleStart() {
        const currentTime = Date.now();
        setStartTime(currentTime);
        setNow(currentTime);

        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = window.setInterval(() => {
            setNow(Date.now());
        }, 200);
    }

    function handleStop() {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    let secondsPassed = 0;
    if (startTime !== null && now !== null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
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
    );
}
