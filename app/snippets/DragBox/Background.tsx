import React from 'react';

interface BackgroundProps {
    position: {
        x: number;
        y: number;
    };
}

export default function Background({ position }: BackgroundProps) {
    return (
        <div
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                width: 250,
                height: 250,
                backgroundColor: 'rgba(200, 200, 0, 0.2)',
            }}
        />
    );
}
