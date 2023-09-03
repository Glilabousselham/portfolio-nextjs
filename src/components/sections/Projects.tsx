import React from 'react'

import SectionTitle from '../SectionTitle';
import Link from 'next/link';
import { projects } from '@/data/projects';
import style from './Projects.module.css'



const Projects = async () => {






    return (
        <>
            <div id='projects' className={`${style.projects} py-[100px] flex flex-col items-center pb-5 px-4`}>

                <SectionTitle>Projects</SectionTitle>
                <div className={`
                    justify-center
                    grid gap-5

                    grid-cols-1 

                    md:grid-cols-2

                    lg:grid-cols-3
                `}>
                    {projects.map((p: any) => <ProjectItem key={p.id} item={p} />)}
                </div>
            </div>
        </>
    )
}

export default Projects


function ProjectItem({ item }: { item: any }) {
    return (

        <Link href={"/projects/" + item.id} className={`
                    bg-gradient-to-tr from-[#190a23] to-[#221b33]
                    w-full rounded shadow-md 
                    p-3 py-6 flex flex-col gap-2 hover:scale-[1.01] cursor-pointer transition-all duration-200
                `}>
            <div className='flex justify-between'>
                <div className='font-semibold text-md'>{item.title}</div>

            </div>
            {/* images */}

            <img className='w-full h-[300px] bg-black object-contain' src={item.images[0]} alt="p" />

            {/* techs */}

            <div className='text-sm font-medium'>Technologies :</div>
            <div className='flex gap-2 flex-wrap text-sm'>
                {item.techs.map((t: string, i: number) => (
                    <div className='underline' key={i}>{t}</div>
                ))}
            </div>
        </Link >


    )
}
