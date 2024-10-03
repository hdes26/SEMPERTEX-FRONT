import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Textarea from '@/components/atoms/Textarea/Textarea';
import { useAppDispatch } from '@/redux/hooks';
import { deactivate } from '@/redux/features/openTaskCardSlice';
import { addTask } from '@/redux/features/taskListSlice';
import { taskService } from '@/services/taskService';

interface AddTaskCardProps {
    type: 'pendiente' | 'en_progreso' | 'completada';
    projectId: string;
}
export const AddTaskCard = (props: AddTaskCardProps) => {

    const dispatch = useAppDispatch()

    const handleAddTask = async (value: string) => {        
        const createTask = await taskService.createTask({ name: value, status: props.type, deadline: new Date(), projectId: props.projectId });
        dispatch(addTask(createTask))
        dispatch(deactivate());
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
    type: PropTypes.oneOf(['pendiente', 'en_progreso', 'completada']).isRequired,
    projectId: PropTypes.string.isRequired
};

export default AddTaskCard;