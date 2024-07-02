// https://react.dev/learn/updating-objects-in-state

import React, { useState, ChangeEvent } from 'react';

interface Player {
    firstName: string;
    lastName: string;
    score: number;
}

export default function Scoreboard() {
    const [player, setPlayer] = useState<Player>({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        setPlayer({
            ...player,
            score: player.score + 1,
        });
    }

    function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
        setPlayer({
            ...player,
            lastName: e.target.value,
        });
    }

    return (
        <>
            <div className="mb-2">
                <label>
                    Score: <b>{player.score}</b>
                </label>
                <button className="btn-primary" onClick={handlePlusClick}>
                    +1
                </button>
            </div>

            <label className="block mb-2">
                First name:
                <input
                    className="ml-2"
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label className="block mb-2">
                Last name:
                <input
                    className="ml-2"
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}
