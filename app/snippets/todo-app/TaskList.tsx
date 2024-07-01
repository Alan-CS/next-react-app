import React, { useState } from 'react';
import {Todo} from "@/app/snippets/todo-app/ToDoApp";

interface TaskProps {
    todo: Todo;
    onChange: (updatedTodo: Todo) => void;
    onDelete: (id: number) => void;
}

interface TaskListProps {
    todos: Todo[];
    onChangeTodo: (updatedTodo: Todo) => void;
    onDeleteTodo: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ todos, onChangeTodo, onDeleteTodo }) => {
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
};

const Task: React.FC<TaskProps> = ({ todo, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <input
                    className="border-1"
                    value={todo.title}
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        });
                    }}
                />
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
        <label>
            <input
                className="mr-2"
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
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
};

export default TaskList;
