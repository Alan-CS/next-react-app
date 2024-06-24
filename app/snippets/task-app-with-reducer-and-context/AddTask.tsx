import {useState} from 'react';
import {useTasksDispatch} from './TasksContext';

export default function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();

    const isButtonDisabled = text.length === 0;
    const className = isButtonDisabled ? 'btn-primary-disabled' : 'btn-primary';

    return (
        <div className="my-2">
            <input className="border-1"
                   placeholder="Add task"
                   value={text}
                   onChange={e => setText(e.target.value)}
            />
            <button className={className}
                    disabled={isButtonDisabled}
                    onClick={() => {
                        setText('');
                        dispatch({
                            type: 'added',
                            id: nextId++,
                            text: text,
                        });
                    }}>Add
            </button>
        </div>
    );
}

let nextId = 3;
