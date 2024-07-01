import React, { useState } from 'react';

interface AddTodoProps {
    onAddTodo: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');

    const handleAddTodo = () => {
        onAddTodo(title);
        setTitle('');
    };

    return (
        <div className="mb-2">
            <input
                className="border-1"
                placeholder="Add todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn-primary" onClick={handleAddTodo}>
                Add
            </button>
        </div>
    );
};

export default AddTodo;
