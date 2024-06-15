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
            <div className="mb-2">
                <label>
                    Score: <b>{player.score}</b>
                    {' '}
                </label>
                <button className="btn-primary" onClick={handlePlusClick}>
                    +1
                </button>
            </div>

            <label className="block mb-2">
                First name:
                <input className="ml-2"
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label className="block mb-2">
                Last name:
                <input className="ml-2"
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}
