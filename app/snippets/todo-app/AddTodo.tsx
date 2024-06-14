import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('');
    return (
        <div className="mb-2">
            <input className="border-1"
                placeholder="Add todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button className="btn-primary"  onClick={() => {
                setTitle('');
                onAddTodo(title);
            }}>Add</button>
        </div>
    )
}
