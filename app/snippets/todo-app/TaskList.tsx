import {useState} from 'react';

export default function TaskList({
                                     todos,
                                     onChangeTodo,
                                     onDeleteTodo
                                 }) {
    return (
        <ul>
            {todos.map(todo => (
                <li className="mb-2" key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({todo, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input className="border-1"
                    value={todo.title}
                    onChange={e => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        });
                    }}/>
                <button className="btn-primary" onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <button className="btn-primary" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label >
            <input className="mr-2"
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    });
                }}
            />
            {todoContent}
            <button className="btn-primary" onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    );
}