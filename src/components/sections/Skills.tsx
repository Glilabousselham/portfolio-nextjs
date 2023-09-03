import React from 'react'

import { FaLaravel, FaNodeJs, FaReact, FaBootstrap, FaDocker, FaPhp, FaPython, FaJs, FaCss3, FaSass, FaGit } from "react-icons/fa"
import { SiTailwindcss, SiExpress, SiNestjs, SiMongodb } from "react-icons/si"
import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb"
import SectionTitle from '../SectionTitle';

const skillsArray = [
    {
        icon: <FaLaravel />,
        name: "Laravel"
    },
    {
        icon: <FaNodeJs />,
        name: "Nodejs"
    },
    {
        icon: <FaReact />,
        name: "Reactjs"
    },
    {
        icon: <TbBrandNextjs />,
        name: "Nextjs"
    },
    {
        icon: < FaBootstrap />,
        name: "Bootstrap"
    },
    {
        icon: <SiTailwindcss />,
        name: "Tailwindcss"
    },
    {
        icon: <SiExpress />,
        name: "Expressjs"
    },
    {
        icon: <SiNestjs />,
        name: "Nestjs"
    },
    {
        icon: <FaDocker />,
        name: "Docker"
    },
    {
        icon: <FaPhp />,
        name: "Php"
    },
    {
        icon: <FaPython />,
        name: "Python"
    },
    {
        icon: <FaJs />,
        name: "Js"
    },
    {
        icon: <FaCss3 />,
        name: "Css"
    },
    {
        icon: <FaSass />,
        name: "Saas"
    },
    {
        icon: <TbBrandMysql />,
        name: "Mysql"
    },
    {
        icon: <SiMongodb />,
        name: "Mongodb"
    },
    {
        icon: <FaGit />,
        name: "Git"
    },

];

const Skills = () => {

    return (
        <div id="skills" className={`pb-11 px-4`}>

            <SectionTitle>Skills</SectionTitle>


            <div className={` 
                    grid grid-cols-3 gap-5
                    sm:grid-cols-4
                    md:grid-cols-6
                    lg:grid-cols-7
                    xl:grid-cols-8


                `}>

                {skillsArray.map((skill, index) => (
                    <div key={index} className='bg-black text-blue-300 rounded flex gap-1 flex-col items-center p-2 py-3'>
                        <div className='text-5xl'>{skill.icon}</div>
                        <div className='font-bold'>{skill.name}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skills