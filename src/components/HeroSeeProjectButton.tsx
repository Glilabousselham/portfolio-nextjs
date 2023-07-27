"use client"
import React from 'react'

export const HeroSeeProjectButton = () => {
    return (
        <button
            onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className='border-2 font-semibold border-blue-500 text-blue-500 px-6 hover:text-white hover:bg-blue-500 transition-all duration-300 py-4 w-fit rounded-full'>SEE MY PROJECTS</button>

    )
}
