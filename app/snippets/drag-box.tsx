// Taken from: https://react.dev/learn/updating-objects-in-state#find-and-fix-the-mutation

import {useState} from 'react';
import {useImmer} from "use-immer";

// import Background from './Background.js';
// import Box from './Box.js';

const initialPosition = {
    x: 0,
    y: 0
};

export default function Canvas() {
    const [shape, setShape] = useImmer({
        color: 'orange',
        position: initialPosition
    });

    // Buggy code causes the background to move
    // function handleMove(dx, dy) {
    //     shape.position.x += dx;
    //     shape.position.y += dy;
    // }

    // Correct way using setShape
    // function handleMove(dx, dy) {
    //     setShape({
    //             ...shape,
    //             position: {
    //                 x: shape.position.x + dx,
    //                 y: shape.position.y + dy
    //             }
    //         }
    //     )
    // }

    // Same function as above but using immer
    function handleMove(dx, dy) {
        setShape(
            draft => {
                draft.position.x += dx;
                draft.position.y += dy;
            }
        )
    }

    function handleColorChange(e) {
        setShape(
            draft => {
                draft.color = e.target.value
            }
        )
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background
                position={initialPosition}
            />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

// Code for Box

function Box({
                 children,
                 color,
                 position,
                 onMove
             }) {

    const [
        lastCoordinates,
        setLastCoordinates
    ] = useState(null);

    function handlePointerDown(e) {
        // console.log(`handlePointerDown called. x=${e.clientX} y=${e.clientY}`);
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });
    }

    // ALAN: Pointer position is from the body element and not from the parent div
    function handlePointerMove(e) {
        // console.log(`handlePointerMove called. x=${e.clientX} y=${e.clientY}`);
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    function handlePointerUp(e) {
        // console.log(`handlePointerUp called. x=${e.clientX} y=${e.clientY}`);
        setLastCoordinates(null);
    }

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                width: 100,
                height: 100,
                cursor: 'grab',
                backgroundColor: color,
                position: 'absolute',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
            }}
        >{children}</div>
    );
}


// Code for Background
function Background({
                        position
                    }) {
    return (
        <div style={{
            position: 'absolute',
            transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`,
            width: 250,
            height: 250,
            backgroundColor: 'rgba(200, 200, 0, 0.2)',
        }}/>
    );
};

