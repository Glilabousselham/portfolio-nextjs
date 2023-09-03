import React from 'react'
import { HeroSeeProjectButton } from '../HeroSeeProjectButton'

const About = () => {
    return (
        <div className='px-4'>
            <div id='about' className={`py-[130px] `}>

                <div className='flex flex-col gap-5 md:w-[70%]'>

                    <div className='text-slate-500 text-xl font-bold'>Hi, my name is</div>
                    <div className={`
                        text-blue-600 font-bold
                        text-4xl 
                        md:text-6xl 
                        flex flex-col
                    `}>
                        <span>Bousselham glila.</span>
                        <span>Fullstack Web developer</span>
                    </div>
                    <p className='text-lg font-light text-slate-400 italic'>I{"'"}m a web Full Stack developer with expertise in React, Tailwind CSS, Laravel, and Node.js. With 3 years of experience, I{"'"}m passionate about crafting dynamic and user-friendly web applications that deliver exceptional user experiences</p>

                    < HeroSeeProjectButton />
                </div>

            </div>
        </div >
    )
}

export default About