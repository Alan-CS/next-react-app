"use client"

import {TWBeforeAfter} from "@/app/snippets/tw-before-after";
import Scoreboard from "@/app/snippets/updating-objects-in-state";
import Canvas from "./drag-box"
import Link from "next/link";

export default async function Page() {

    return (
        <main className="min-h-screen">
            <div className="flex w-full place-items-center p-8">
                <div className="grow text-xl text-center bg-gray-300 mb-4 p-4 rounded-xl hover:bg-lime-100">
                    <Link href={'/'}>
                        Go Back Home
                    </Link>
                </div>
            </div>

            <div className="p-2">
                <h1 className="text-2xl text-center mb-4">Usage of before and after in TW</h1>
                <TWBeforeAfter/>
            </div>

            <div className="p-2 mt-4 border-t-2 border-t-red-700">
                <h1 className="text-2xl text-center mb-4">Update Objects In State</h1>
                <div>
                    <Scoreboard/>
                </div>
            </div>

            <div className="p-2 mt-4 border-t-2 border-t-red-700">
                <h1 className="text-2xl text-center mb-4">React Docs Update Objects In State</h1>
                <div className="relative">
                    <Canvas/>
                </div>
            </div>

        </main>
    );
}