import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import TaskCard from '@/components/molecules/TaskCard/TaskCard';
import Label from '@/components/atoms/Label/Label';

interface TaskListProps {
    name: string;
}
export const TaskList = (props: TaskListProps) => {
    return (
        <div className="task-list">
            <Label text={props.name} />
            <div className='task-container'>
                <TaskCard id={1} name='Tarea de hernan' />
                <TaskCard id={2} name='Tarea de hernan' />
                <TaskCard id={3} name='Tarea de hernan' />
                <TaskCard id={4} name='Tarea de hernan' />
                <TaskCard id={5} name='Tarea de hernan' />
                <TaskCard id={6} name='Tarea de hernan' />
                <TaskCard id={7} name='Tarea de hernan' />
            </div>
        </div>
    );
};
TaskList.propTypes = {
    name: PropTypes.string.isRequired,
};

export default TaskList;