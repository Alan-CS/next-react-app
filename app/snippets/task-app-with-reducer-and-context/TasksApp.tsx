// ALAN: Taken from https://react.dev/learn/passing-data-deeply-with-context

import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TasksContext';

const TaskApp: React.FC = () => {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}

export default TaskApp;
