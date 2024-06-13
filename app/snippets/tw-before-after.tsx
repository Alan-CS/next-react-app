export function TWBeforeAfter() {
    return (
        <>

        {/*ALAN: https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after*/}
        {/*ALAN: Added mx-2 margin*/}
        <blockquote className="mb-4">
            When you look
            <span
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative mx-2">
                      <span className="relative text-white">annoyed</span>
                  </span>
            all the time, people think that you're busy.
        </blockquote>

        {/*The below is done without before and after using a real html element*/}
        {/*ALAN: Added mx-2 margin*/}
        <blockquote className="">
            When you look
            <span className="relative mx-2">
                    <span className="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
                    <span className="relative text-white">annoyed</span>
                  </span>
            all the time, people think that you're busy.
        </blockquote>

        </>
    )
}

