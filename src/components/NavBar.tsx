"use client"
import React, { useState } from 'react'
import NavBarLinkItem from './NavBarLinkItem'
import { RiMenu4Fill } from "react-icons/ri"
import { MdClose } from "react-icons/md"

import { useEffect, WheelEvent } from 'react'
import { useRouter } from 'next/navigation'

const NavItems = [

    {
        name: "About",
        sectionId: "hero",
    },
    {
        name: "Skills",
        sectionId: "skills",
    },
    {
        name: "Projects",
        sectionId: "projects",
    },
    {
        name: "Contact",
        sectionId: "contact",
    },
    {
        name: "Resume",
        sectionId: "",
    },
]


const NavBar = () => {

    const [show, setShow] = useState(true)



    useEffect(() => {

        let lastScroll = 0

        window.onscroll = (e) => {


            if (window.scrollY > lastScroll) {

                setShow(false);


            } else {


                setShow(true)


            }


            lastScroll = window.scrollY;
        }
    }, [])


    const [menu, setMenu] = useState(false);
    const toggle = () => setMenu(!menu)

    const router = useRouter()

    return (
        <header
            className={`${show ? "mt-0" : "-mt-14"} z-10 
            transition-all duration-300 bg-black
            h-14 flex flex-col justify-center fixed left-0 w-full  px-4`}
        >
            {/*  */}
            <nav className='flex items-center justify-between mx-auto max-w-screen-xl w-full'>
                {/* logo */}
                <div className='text-2xl font-bold text-blue-600' onClick={() => router.push("/")}>BG</div>

                {/* links */}
                <div className='hidden md:flex items-center  justify-between space-x-4'>
                    {NavItems.map(navItem => (
                        <NavBarLinkItem sectionId={navItem.sectionId} key={navItem.name}>{navItem.name}</NavBarLinkItem>
                    ))}
                </div>

                {/* menu button */}
                <RiMenu4Fill
                    onClick={() => toggle()}
                    className="md:hidden text-3xl rounded bg-gradient-to-tr cursor-pointer from-blue-500 to-blue-700 hover:to-blue-600 p-1"
                />




            </nav>
            <div onClick={() => toggle()} className={`
                md:hidden
                fixed top-0 right-0 w-screen h-screen
                flex flex-col items-center justify-center space-y-5
                bg-slate-900 
                ${menu ? "mt-0" : "h-0 -mt-[1000px] opacity-0"}
                        text-2xl
                `}>

                <div className='absolute top-4 right-4'>
                    <MdClose
                        onClick={() => toggle()}
                        className="md:hidden text-4xl rounded bg-gradient-to-tr cursor-pointer from-blue-500 to-blue-700 hover:to-blue-600 p-1"
                    />
                </div>


                {NavItems.map(navItem => (
                    <NavBarLinkItem sectionId={navItem.sectionId} key={navItem.name}>{navItem.name}</NavBarLinkItem>
                ))}
            </div>
        </header>
    )
}

export default NavBar


