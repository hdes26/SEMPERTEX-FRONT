import React from 'react';
import './style.css';
import ProjectCard from '@/components/molecules/ProjectCard/ProjectCard';


export const ProjectList = () => {
    return (
        <div className="project-list">
            <ProjectCard id={1} name="Proyecto Hernan" />
            <ProjectCard id={2} name="Proyecto Escorcia" />
        </div>
    );
};

export default ProjectList;