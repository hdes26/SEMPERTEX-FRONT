'use client';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import TaskCard from '@/components/molecules/TaskCard/TaskCard';
import Label from '@/components/atoms/Label/Label';
import AddTaskButton from '@/components/molecules/AddTaskButton/AddTaskButton';
import { useAppSelector } from '@/redux/hooks';
import AddTaskCard from '@/components/molecules/AddTaskCard/AddTaskCard';

interface TaskListProps {
    name: string;
    type: 'todo' | 'inprogress' | 'completed';
}

export const TaskList = (props: TaskListProps) => {
    const openTaskCard = useAppSelector((state) => state.openTaskCardReducer);
    const tasksFromStore = useAppSelector((state) => state.taskListReducer.tasks);

    const taskListClass = `task-list ${props.type}`;

    return (
        <div className={taskListClass}>
            <Label text={props.name} />
            <div className='task-container'>
                {tasksFromStore.filter(task => task.status === props.type).map((task) => (
                    <TaskCard key={task.id} id={task.id} name={task.name} status={task.status} />
                ))}
                {openTaskCard.active && props.type === openTaskCard.listType && (
                    <AddTaskCard type={props.type} />
                )}
            </div>

            <AddTaskButton text=' + Agregar tarea' type={props.type} />
        </div>
    );
};

TaskList.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['todo', 'inprogress', 'completed']).isRequired,
};

export default TaskList;
