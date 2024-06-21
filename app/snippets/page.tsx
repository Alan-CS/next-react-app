"use client"

import {TWBeforeAfter} from "@/app/snippets/tw-before-after";
import Scoreboard from "@/app/snippets/updating-objects-in-state";
import Canvas from "./drag-box"
// import Link from "next/link";
import TaskApp from "@/app/snippets/todo-app/ToDoApp";
import FixDisappearingInput from "@/app/snippets/FixDisappearingInput";
import ContactList from "@/app/snippets/FixMisplacedStateInList";

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
                <div>
                    <TWBeforeAfter/>
                </div>
            </div>

            <div className="h-48 app-container">
                <a href="https://react.dev/learn/updating-objects-in-state#fix-incorrect-state-updates">
                    React Docs Scorecard App
                </a>
                <div>
                    <Scoreboard/>
                </div>
            </div>

            {/*ALAN: Give this a height of h-96 otherwise content below it will overlap*/}
            <div className="h-70 app-container">
                <a href="https://react.dev/learn/updating-objects-in-state#find-and-fix-the-mutation">
                    React Docs draggable box on a static background
                </a>
                <div className="">
                    <Canvas/>
                </div>
            </div>

            <div className="h-70 app-container">
                <a href="https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-immer">
                    React Docs ToDo App using Immer
                </a>
                <div>
                    <TaskApp/>
                </div>
            </div>

            <div className="h-70 app-container">
                <a href="https://react.dev/learn/preserving-and-resetting-state#fix-disappearing-input-text">
                    Fix disappearing input text
                </a>
                <div className="">
                    <FixDisappearingInput/>
                </div>
            </div>

            <div className="h-70 app-container">
                <a href="https://react.dev/learn/preserving-and-resetting-state#fix-misplaced-state-in-the-list">
                    Fix misplaced state in the list
                </a>
                <div className="">
                    <ContactList/>
                </div>
            </div>

        </main>
    );
}