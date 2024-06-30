import React, { ChangeEvent } from 'react';
import { useImmer } from "use-immer";

// Import Background and Box components
import Background from './Background';
import Box from './Box';

interface Position {
    x: number;
    y: number;
}

const initialPositionBackground: Position = {
    x: 0,
    y: 0
};

const initialPositionBox: Position = {
    x: 0,
    y: -250
};

export default function Canvas() {
    const [shape, setShape] = useImmer({
        color: 'orange',
        position: initialPositionBox
    });

    // Function to handle box movement
    function handleMove(dx: number, dy: number) {
        setShape(draft => {
            const newX = draft.position.x + dx;
            const newY = draft.position.y + dy;
            if (newX < initialPositionBox.x || newX > initialPositionBox.x + 150 || newY < -250 || newY > -100) {
                return;
            }
            draft.position.x = newX;
            draft.position.y = newY;
        });
    }

    // Function to handle color change
    function handleColorChange(e: ChangeEvent<HTMLSelectElement>) {
        setShape(draft => {
            draft.color = e.target.value;
        });
    }

    return (
        <>
            <select className="mb-4" value={shape.color} onChange={handleColorChange}>
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPositionBackground} />
            <Box color={shape.color} position={shape.position} onMove={handleMove}>
                Drag me!
            </Box>
        </>
    );
}
