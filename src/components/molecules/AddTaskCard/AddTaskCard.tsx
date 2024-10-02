import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Textarea from '@/components/atoms/Textarea/Textarea';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { desactivate } from '@/redux/features/openTaskCardSlice';
import { addTask } from '@/redux/features/taskListSlice';

interface AddTaskCardProps {
    type: 'todo' | 'inprogress' | 'completed';
}
export const AddTaskCard = (props: AddTaskCardProps) => {
    const tasksFromStore = useAppSelector((state) => state.taskListReducer.tasks);

    const dispatch = useAppDispatch()

    const handleAddTask = (value: string) => {
        dispatch(addTask({ id: tasksFromStore.length + 1, name: value, status: props.type }))
        dispatch(desactivate());
    };
    return (
        <div className='add-task-card'>
            <Textarea
                placeholder='Introduce un nombre para esta tarea...'
                text=''
                key={props.type}
                onEnter={(value) => handleAddTask(value)} />
        </div>
    );
};
AddTaskCard.propTypes = {
    type: PropTypes.oneOf(['todo', 'inprogress', 'completed']).isRequired,
};

export default AddTaskCard;