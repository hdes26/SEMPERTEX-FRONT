'use client'
import React from 'react';
import './style.css';
import ProjectCard from '@/components/molecules/ProjectCard/ProjectCard';
import useInitializeProjects from '@/hooks/useInitializeProjects';
import { useAppSelector } from '@/redux/hooks';
import AddProjectCard from '@/components/molecules/AddProjectCard/AddProjectCard';


export const ProjectList = () => {
    const openProjectCard = useAppSelector((state) => state.openProjectCardReducer);

    const projectsFromStore = useAppSelector((state) => state.projectListReducer.projects);

    useInitializeProjects();

    return (
        <div className="project-list">
            {projectsFromStore.map((project) => (
                <ProjectCard key={project.id} id={project.id} name={project.name} />
            ))}
            {openProjectCard.active && (
                <AddProjectCard key={1} />
            )}
        </div>
    );
};

export default ProjectList;