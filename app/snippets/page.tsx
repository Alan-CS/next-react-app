"use client"

import {TWBeforeAfter} from "@/app/snippets/tw-before-after";
import Scoreboard from "@/app/snippets/updating-objects-in-state";
import Canvas from "./drag-box"
import Link from "next/link";
import TaskApp from "@/app/snippets/todo-app/ToDoApp";

export default async function Page() {

    return (
        <main className="min-h-screen">
            <div className="flex w-full place-items-center">
                <div className="grow text-lg text-center bg-blue-100 mb-4 p-4 hover:bg-blue-200">
                    <Link href={'/'}>
                        Go Back Home
                    </Link>
                </div>
            </div>

            <div className="h-48 mx-8">
                <h2 className="h2">
                    <a href="https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after">
                        Usage of before and after pseudoelements in Tailwind
                    </a>
                </h2>
                <TWBeforeAfter/>
            </div>

            <div className="h-48 app-container">
                <h2 className="h2">
                    <a href="https://react.dev/learn/updating-objects-in-state#fix-incorrect-state-updates">
                        React Docs Scorecard App
                    </a>
                </h2>
                <Scoreboard/>
            </div>

            {/*ALAN: Give this a height of h-96 otherwise content below it will overlap*/}
            <div className="h-96 app-container">
                <h2 className="h2">
                    <a href="https://react.dev/learn/updating-objects-in-state#find-and-fix-the-mutation">
                        React Docs draggable box on a static background
                    </a>
                </h2>
                <Canvas/>
            </div>

            <div className="h-96 app-container">
                <h2 className="h2">
                    <a href="https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-immer">
                        React Docs ToDo App using Immer
                    </a>
                </h2>
                <TaskApp/>
            </div>

        </main>
    );
}