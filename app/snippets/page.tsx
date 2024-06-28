"use client"

import {TWBeforeAfter} from "@/app/snippets/tw-before-after";
import Scoreboard from "@/app/snippets/updating-objects-in-state";
import Canvas from "./drag-box"
// import Link from "next/link";
import ToDoApp from "@/app/snippets/todo-app/ToDoApp";
import FixDisappearingInput from "@/app/snippets/FixDisappearingInput";
import ContactList from "@/app/snippets/FixMisplacedStateInList";
import Messenger from "@/app/snippets/MessengerApp/MessengerApp";
import ProfilePage from "@/app/snippets/ProfilePageApp/ProfilePageApp";
import TaskApp from "@/app/snippets/task-app-with-reducer-and-context/TasksApp";
import Clock from "@/app/snippets/Clock/ClockApp";
import DebouncedButtons from "@/app/snippets/DebouncedButtons";
import ReadState from "@/app/ReadingState";
import ScrollingImages from "@/app/snippets/ScrollingImages/ScrollingImages";
import ScrollingImagesFlushSync from "@/app/snippets/ScrollingImages/ScrollingImagesFlushSync";

export default function Page() {

    return (
        <main className="min-h-screen flex flex-col items-center">

            <a className="group" href={'/'}>
                <div className="group flex w-full place-items-center -mb-10">
                    <div
                        className="grow text-sm text-center bg-blue-400 p-4 hover:bg-blue-300 bg-gradient-to-b from-zinc-200 italic">
                        <span className="text-md"> Go Back Home </span>
                    </div>
                </div>
            </a>

            <div className="h-48 app-container">
                <a href="https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after">
                    Usage of before and after pseudoelements in Tailwind
                </a>
                <div className="app-parent">
                    <TWBeforeAfter/>
                </div>
            </div>

            <div className="h-48 app-container">
                <a href="https://react.dev/learn/updating-objects-in-state#fix-incorrect-state-updates">
                    React Docs Scorecard App
                </a>
                <div className="app-parent">
                    <Scoreboard/>
                </div>
            </div>

            {/*ALAN: Give this a height of h-96 otherwise content below it will overlap*/}
            <div className="app-container">
                <a href="https://react.dev/learn/updating-objects-in-state#find-and-fix-the-mutation">
                    React Docs draggable box on a static background
                </a>
                <div className="app-parent">
                    <Canvas/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-immer">
                    React Docs ToDo App using Immer
                </a>
                <div className="app-parent">
                    <ToDoApp/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/preserving-and-resetting-state#fix-disappearing-input-text">
                    Fix disappearing input text
                </a>
                <div className="app-parent">
                    <FixDisappearingInput/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/preserving-and-resetting-state#fix-misplaced-state-in-the-list">
                    Fix misplaced state in the list
                </a>
                <div className="app-parent">
                    <ContactList/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/extracting-state-logic-into-a-reducer#restore-input-values-when-switching-between-tabs">
                    React Docs Messenger App
                </a>
                <div className="app-parent">
                    <Messenger/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/passing-data-deeply-with-context">
                    React Docs Context based Profile Page App
                </a>
                <div className="app-parent">
                    <ProfilePage/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/scaling-up-with-reducer-and-context">
                    React Docs Tasks App With Reducer And Context
                </a>
                <div className="app-parent">
                    <TaskApp/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/referencing-values-with-refs">
                    React Docs Clock App
                </a>
                <div className="app-parent">
                    <Clock/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/referencing-values-with-refs#fix-debouncing">
                    React Docs Debounced Buttons
                </a>
                <div className="app-parent">
                    <DebouncedButtons/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/referencing-values-with-refs#read-the-latest-state">
                    React Docs Reading State asychronously
                </a>
                <div className="app-parent">
                    <ReadState/>
                </div>
            </div>

            {/*Get hydration message that html should not be inside body at random when page is refreshed after putting below code. But console shows error in the updating-objects-in-state.tsx that div is inside label however there is no such nesting. Also, per SOF, hydration messages are usually because of improper jsx nesting.*/}
            <div className="app-container">
                <a href="https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback">
                    React Docs Scrolling Images With Multiple Buttons
                </a>
                <div className="app-parent">
                    <ScrollingImages/>
                </div>
            </div>

            <div className="app-container">
                <a href="https://react.dev/learn/manipulating-the-dom-with-refs#scrolling-an-image-carousel">
                    React Docs Scrolling Images With Multiple Buttons Using FlushSync
                </a>
                <div className="app-parent">
                    <ScrollingImagesFlushSync/>
                </div>
            </div>

        </main>
    );
}