import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">

      {/*ALAN: Implementing the gradiant using before and after elements is similar to the following : https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after*/}
        <div
            className="flex flex-col place-items-center lg:w-1/2 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <h1 className="text-2xl font-extrabold text-blue-600"> A Sample NextJS based Learning Tool </h1>
            <p className="my-10">
                An App that has been created to host various learning apps and code snippets from the react docs or from other sources
                such as Tailwind CSS etc. A developer interested in React centered technologies can use it as a learning and experimentation tool.
            </p>

            <p className="flex justify-items-start md:justify-center bg-gradient-to-b from-zinc-200 px-4 py-2 backdrop-blur-2xl rounded-xl border-1 bg-gray-500 hover:bg-gray-400 text-blue-600">
                <Link href={'/snippets'}> Click here to view sample apps </Link>
            </p>

        </div>

    </main>
  );
}
