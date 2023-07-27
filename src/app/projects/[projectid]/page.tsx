import { NextPage } from 'next';
import React from 'react'

interface ProjectPageProps {
    params: {
        projectid: number
    }
}

const ProjectPage = async (props: ProjectPageProps) => {

    const projectid = props.params.projectid



    const projects = await fetch(process.env.APP_URL + "/data/projects.json").then(res => res.json());

    const project = projects.find((p: any) => {
        return +p.id === +projectid
    });

    if (!project) {
        throw new Error('project not found');
    }

    return (
        <div className='pt-14'>project name :{project.title}</div>
    )
}

export default ProjectPage