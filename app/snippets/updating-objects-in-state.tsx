import {useState} from 'react';

// https://react.dev/learn/updating-objects-in-state

export default function Scoreboard() {
    const [player, setPlayer] = useState({
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

    function handleFirstNameChange(e) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        setPlayer({
            ...player,
            lastName: e.target.value
        });
    }

    // ALAN: The entire label acts as a button if you nest the button inside the label.
    // So I put it outside the label to fix the issue.

    return (
        <>
            <label className="mx-4">
                Score: <b>{player.score}</b>
                {' '}
            </label>
            <button className="inline-block w-10 bg-gray-300 border-r-2 hover:bg-lime-100" onClick={handlePlusClick}>
                +1
            </button>

            <label className="block m-4">
                First name:
                <input
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label className="block m-4">
                Last name:
                <input
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}
