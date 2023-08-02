
import React from 'react'
import ProjectImagesSlider from "@/components/ProjectImagesSlider";
import Link from 'next/link';
import { projects } from '@/data/projects';

interface ProjectPageProps {
    params: {
        projectid: number
    }
}

const ProjectPage = async (props: ProjectPageProps) => {

    const projectid = props.params.projectid




    const project = projects.find((p: any) => {
        return +p.id === +projectid
    });

    if (!project) {
        throw new Error("Project not found")
    }

    return (
        <div className='pt-16 px-4 '>
            <div className='grid md:grid-cols-2 gap-6'>

                {/* images */}
                <div className='h-fit select-none w-full bg-black'>
                    <ProjectImagesSlider items={project.images} />
                </div>
                <div className='mt-0'>
                    <div className='font-semibold text-xl text-blue-500'>
                        {project.title}
                    </div>
                    <div className='flex gap-2 mt-1'>
                        <Link href={project.demo} target='_blank' className='bg-gradient-to-tr from-blue-500 hover:to-blue-600 to-blue-700 rounded  px-2'>demo</Link>
                        <Link href={project.source} target='_blank' className='bg-gradient-to-tr from-blue-500 hover:to-blue-600 to-blue-700 rounded  px-2'>source</Link>
                    </div>

                    <div className='font-medium text-md mb-2 mt-6'>Technologies:</div>

                    <div className='flex flex-wrap whitespace-break-spaces gap-3 text-sm underline text-blue-300'>
                        {project.techs.map((tech: string) => {
                            return (
                                <div key={tech}>{tech}</div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectPage