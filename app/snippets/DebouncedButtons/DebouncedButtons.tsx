// ALAN: Taken from https://react.dev/learn/referencing-values-with-refs#fix-debouncing

// let timeoutID; //This will not work since external id will be shared by all buttons
import { useRef, ReactNode, MouseEvent } from 'react';

interface DebouncedButtonProps {
    onClick: () => void;
    children: ReactNode;
}

function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
    const timeoutRef = useRef<number | null>(null);

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault(); // Prevent default action if needed

        // clearTimeout(timeoutID); // Will not work
        // timeoutID = setTimeout(() => { // Will not work
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            onClick();
        }, 1000);
    }

    return (
        <button className="btn-primary-block mb-2" onClick={handleClick}>
            {children}
        </button>
    );
}

export default function DebouncedButtons() {
    return (
        <>
            <DebouncedButton onClick={() => alert('Spaceship launched!')}>
                Launch the spaceship
            </DebouncedButton>
            <DebouncedButton onClick={() => alert('Soup boiled!')}>
                Boil the soup
            </DebouncedButton>
            <DebouncedButton onClick={() => alert('Lullaby sung!')}>
                Sing a lullaby
            </DebouncedButton>
        </>
    );
}
