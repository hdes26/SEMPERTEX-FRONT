import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import TaskCard from '@/components/molecules/TaskCard/TaskCard';
import Label from '@/components/atoms/Label/Label';
import AddTask from '@/components/molecules/AddTask/AddTask';

interface TaskListProps {
    name: string;
    type: 'todo' | 'inprogress' | 'completed';
}
export const TaskList = (props: TaskListProps) => {

    return (
        <div className="task-list">
            <Label text={props.name}/>
            <div className='task-container'>
                <TaskCard id={1} name='Tarea de hernan' status='inprogress' />
                <TaskCard id={2} name='Tarea de hernan' status='inprogress' />
                <TaskCard id={3} name='Tarea de hernan' status='inprogress' />
                <TaskCard id={4} name='Tarea de hernan' status='inprogress' />
                <TaskCard id={5} name='Tarea de hernan' status='inprogress' />
                <TaskCard id={6} name='Tarea de hernan' status='inprogress' />
                <TaskCard id={7} name='Tarea de hernan' status='todo' />
            </div>
            <AddTask text='Agregar tarea'/>
        </div>
    );
};
TaskList.propTypes = {
    name: PropTypes.string.isRequired,
};

export default TaskList;