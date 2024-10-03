'use client'
import React from 'react';
import './style.css';
import TasksList from '@/components/organism/TasksList/TasksList';
import { useAppSelector } from '@/redux/hooks';
import UpdateTaskModal from '@/components/organism/UpdateTaskModal/UpdateTaskModal';
import useInitializeTasks from '@/hooks/useInitializeTasks';
type ProjectProps = {
    id: string;
};

export const Project = ({ id }: ProjectProps) => {
    const openUpdateCardModal = useAppSelector(state => state.openUpdateCardModalReducer);

    useInitializeTasks(id);

    return (
        <>
            <section className="project-content flex w-full max-h-screen justify-center overflow-y-auto gap-20 p-10">
                <TasksList id={id} />
                {openUpdateCardModal.active && (
                    <UpdateTaskModal taskId={openUpdateCardModal.id} name={openUpdateCardModal.name} status={openUpdateCardModal.status}  />
                )}
            </section>
        </>
    );
};

export default Project;
