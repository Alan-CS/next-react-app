// ALAN: Taken from https://react.dev/learn/referencing-values-with-refs#fix-debouncing

// let timeoutID; //This will not work since external id will be shared by all buttons
import {useRef} from 'react';

function DebouncedButton({ onClick, children }) {
    const timeoutRef = useRef(null);

    return (
        <button className="btn-primary-block mb-2" onClick={() => {

            // clearTimeout(timeoutID); // Will not work
            // timeoutID = setTimeout(() => { // Will not work

            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                onClick();
            }, 1000);
        }}>
            {children}
        </button>
    );
}

export default function DebouncedButtons() {
    return (
        <>
            <DebouncedButton
                onClick={() => alert('Spaceship launched!')}
            >
                Launch the spaceship
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Soup boiled!')}
            >
                Boil the soup
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Lullaby sung!')}
            >
                Sing a lullaby
            </DebouncedButton>
        </>
    )
}
