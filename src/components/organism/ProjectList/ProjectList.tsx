import React from 'react';
import './style.css';
import ProjectCard from '@/components/molecules/ProjectCard/ProjectCard';


export const ProjectList = () => {
    return (
        <div className="flex flex-wrap w-full h-min main-content p-10 gap-x-5 gap-y-5 justify-start items-start">
            <ProjectCard id={1} name="Proyecto Hernan" />
            <ProjectCard id={2} name="Proyecto Escorcia" />
        </div>
    );
};

export default ProjectList;