"use client"
import './styles.css'

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
                    <blockquote className="mb-4">
                        When you look
                        <span
                            className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative mx-2">
                                <span className="relative text-white">annoyed</span>
                        </span>
                        all the time, people think that you&apos;re busy.
                    </blockquote>

                    {/*The below is done without before and after using a real html element*/}
                    {/*ALAN: Added mx-2 margin*/}
                    <blockquote className="">
                        When you look
                        <span className="relative mx-2">
                    <span className="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
                    <span className="relative text-white">annoyed</span>
                  </span>
                        all the time, people think that you&apos;re busy.
                    </blockquote>
                </div>
            </div>

            <div className="h-48 app-container">
                <a href="">
                    Shades Of Gray Defined in tailwind.config.ts
                </a>
                <div className="app-parent">
                    <div className="flex flex-wrap bg-white">
                        <div className="gray gray100 m-2"></div>
                        <div className="gray bg-gray-200 m-2"></div>
                        <div className="gray bg-gray-300 m-2"></div>
                        <div className="gray bg-gray-400 m-2"></div>
                        <div className="gray bg-gray-500 m-2"></div>
                        <div className="gray bg-gray-600 m-2"></div>
                        <div className="gray bg-gray-700 m-2"></div>
                        <div className="gray bg-gray-800 m-2"></div>
                        <div className="gray bg-gray-900 m-2"></div>
                    </div>
                </div>
            </div>

        </main>
    );
}