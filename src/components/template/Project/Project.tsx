import React from 'react';
import './style.css';
import TasksList from '@/components/organism/TasksList/TasksList';

type ProjectProps = {
    id: string;
};

export const Project = ({ id }: ProjectProps) => {

    return (
        <>
            <section className="project-content flex w-full max-h-screen justify-center overflow-y-auto gap-20 p-10">
                <TasksList id={id} />
            </section>
        </>
    );
};

export default Project;