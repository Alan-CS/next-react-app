import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface TaskType {
    id: number;
    text: string;
    done: boolean;
}

type Action =
    | { type: 'added'; id: number; text: string }
    | { type: 'changed'; task: TaskType }
    | { type: 'deleted'; id: number };

type TasksContextType = TaskType[];
type TasksDispatchContextType = React.Dispatch<Action>;

const TasksContext = createContext<TasksContextType | undefined>(undefined);
const TasksDispatchContext = createContext<TasksDispatchContextType | undefined>(undefined);

interface TasksProviderProps {
    children: ReactNode;
}

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export function useTasks(): TasksContextType {
    const context = useContext(TasksContext);
    if (context === undefined) {
        throw new Error('useTasks must be used within a TasksProvider');
    }
    return context;
}

export function useTasksDispatch(): TasksDispatchContextType {
    const context = useContext(TasksDispatchContext);
    if (context === undefined) {
        throw new Error('useTasksDispatch must be used within a TasksProvider');
    }
    return context;
}

function tasksReducer(tasks: TaskType[], action: Action): TaskType[] {
    switch (action.type) {
        case 'added': {
            return [...tasks, { id: action.id, text: action.text, done: false }];
        }
        case 'changed': {
            return tasks.map(t => (t.id === action.task.id ? action.task : t));
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw new Error('Unknown action: ' + (action as Action).type);
        }
    }
}

const initialTasks: TaskType[] = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];
