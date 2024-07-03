// Taken from: https://react.dev/learn/synchronizing-with-effects#fix-fetching-inside-an-effect

import { useState, useEffect } from 'react';
import { fetchBio } from './Api';

export default function BioPage() {
    const [person, setPerson] = useState<string>('Alice');
    const [bio, setBio] = useState<string | null>(null);

    useEffect(() => {

        // To ignore previous api call to fix bug
        let ignore = false;
        setBio(null);
        fetchBio(person).then(result => {
            if (!ignore) {
                setBio(result);
            }
        });

        // Fixes the bug
        return () => {
            ignore = true;
        }
    }, [person]);

    return (
        <>
            <select value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <hr className="border-b-2 border-gray-400 my-4" />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    );
}