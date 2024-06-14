"use client"

import {TWBeforeAfter} from "@/app/snippets/tw-before-after";
import Scoreboard from "@/app/snippets/updating-objects-in-state";
import Canvas from "./drag-box"
import Link from "next/link";
import TaskApp from "@/app/snippets/todo-app/ToDoApp";

export default async function Page() {

    return (
        <main className="min-h-screen px-10">
            <div className="flex w-full place-items-center p-8">
                <div className="grow text-xl text-center bg-gray-300 mb-4 p-4 rounded-xl hover:bg-lime-100">
                    <Link href={'/'}>
                        Go Back Home
                    </Link>
                </div>
            </div>

            <div className="app-container">
                <h1>Usage of before and after in Tailwind CSS</h1>
                <TWBeforeAfter/>
            </div>

            <div className="h-48 app-container">
                <h1>React Docs Update Objects In State</h1>
                <div>
                    <Scoreboard/>
                </div>
            </div>

            {/*ALAN: Give this a height of h-96 otherwise content below it will overlap*/}
            <div className="h-96 app-container">
                <h1>React Docs Update Objects In State</h1>
                <div className="relative">
                    <Canvas/>
                </div>
            </div>

            <div className="h-96 app-container">
                <h1>React Docs ToDo App</h1>
                <div>
                    <TaskApp/>
                </div>
            </div>

        </main>
    );
}