"use client"
import React from "react";
import styles from "./NavBarLinkItem.module.css";
import { useRouter } from "next/navigation";

type ComponentPropsType = {
    children: React.ReactNode
    sectionId: string;
}


const NavBarLinkItem = ({ sectionId, children }: ComponentPropsType) => {
    const router = useRouter()

    return (
        <div onClick={() => {
            if (window.location.pathname.replace(/^\/|\/$/, "") !== "") {
                router.push("/#" + sectionId);
            }
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
        }
        } className={`${styles.navbarLinkItem} text-blue-300 hover:text-blue-500 md:text-xl font-light`}>
            <div>{children}</div>
            {/* animated underline */}
            <span className='bg-blue-600'></span>
        </div>
    )
}

export default NavBarLinkItem