import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext';

export default function TaskList() {
    const tasks = useTasks();
    return (
        <ul>
            {tasks.map(task => (
                <li className="mb-2" key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input className="border-1"
                    value={task.text}
                    onChange={e => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value
                            }
                        });
                    }} />
                <button className="btn-primary" onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button className="btn-primary" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input className="mr-2"
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked
                        }
                    });
                }}
            />
            {taskContent}
            <button className="btn-primary" onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                });
            }}>
                Delete
            </button>
        </label>
    );
}
