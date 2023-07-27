"use client"
import React from "react";
import styles from "./NavBarLinkItem.module.css";

type ComponentPropsType = {
    children: React.ReactNode
    sectionId: string;
}


const NavBarLinkItem = ({ sectionId, children }: ComponentPropsType) => {


    return (
        <div onClick={() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
        }} className={`${styles.navbarLinkItem} text-blue-300 hover:text-blue-500 md:text-lg font-light`}>
            <div>{children}</div>
            {/* animated underline */}
            <span className='bg-blue-600'></span>
        </div>
    )
}

export default NavBarLinkItem