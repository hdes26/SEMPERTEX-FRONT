'use client'
import React from 'react';
import './style.css';
import TaskList from '@/components/molecules/TaskList/TaskList';
import useInitializeTasks from '@/hooks/useInitializeTasks';

type ProjectProps = {
    id: string;
};

export const TasksList = ({ id }: ProjectProps) => {

    useInitializeTasks(id);
    return (
        <>
            <TaskList name="Pendiente" type="pendiente" key={1} projectId={id} />
            <TaskList name="En progreso" type="en_progreso" key={2} projectId={id} />
            <TaskList name="Completado" type="completada" key={3} projectId={id} />
        </>
    );
};

export default TasksList;