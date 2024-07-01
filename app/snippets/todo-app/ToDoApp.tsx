import React from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export interface Todo {
    id: number;
    title: string;
    done: boolean;
}

let nextId = 3;
const initialTodos: Todo[] = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

const ToDoApp: React.FC = () => {
    const [todos, setTodos] = useImmer<Todo[]>(initialTodos);

    const handleAddTodo = (title: string) => {
        setTodos(draft => {
            draft.push({
                id: nextId++,
                title: title,
                done: false
            });
        });
    };

    const handleChangeTodo = (nextTodo: Todo) => {
        setTodos(draft => {
            const todo = draft.find(t => t.id === nextTodo.id);
            if (todo) {
                todo.title = nextTodo.title;
                todo.done = nextTodo.done;
            }
        });
    };

    const handleDeleteTodo = (todoId: number) => {
        setTodos(draft => {
            const index = draft.findIndex(t => t.id === todoId);
            if (index !== -1) {
                draft.splice(index, 1);
            }
        });
    };

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
};

export default ToDoApp;
