import React from 'react'
import { GoDotFill } from 'react-icons/go'

function AnimatedReadMore() {
    return (
        <>
            <p className="flex uppercase text-sm items-center gap-1 group mt-4">
                <GoDotFill className="text-[#ffde8b] transition-all duration-500 ease-in-out transform group-hover:translate-x-2 group-hover:opacity-0" />
                <span className="transition-all duration-500 ease-in-out group-hover:translate-x-2">Read More</span>
                <GoDotFill className="hidden text-[#ffde8b] transition-all duration-500 ease-in-out transform group-hover:inline group-hover:translate-x-2 group-hover:opacity-100" />
            </p>
        </>
    )
}

export default AnimatedReadMore
