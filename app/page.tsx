import Header from "@/app/components/Header";

export default function Home() {
  return (
      <>
            <Header/>
            <main className="flex flex-col min-h-screen w-full items-center">

      {/*ALAN: Implementing the gradiant using before and after elements is similar to the following : https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after*/}
        <div className="flex flex-col w-full place-items-center align-top">

            <p className="w-1/2 my-16">
                An App that has been created to host various learning apps and code snippets from the react docs or
                from other sources
                such as Tailwind CSS etc. A developer interested in React centered technologies can use it as a
                learning and experimentation tool.
            </p>

            <a className="aButton" href={'/snippets'}> Click here to view sample React apps </a>

            <a className="aButton" href={'/css'}> Click here to view sample Tailwind samples </a>

        </div>

    </main>
      </>
  );
}
