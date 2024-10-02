import React from 'react';
import './style.css';
import Textarea from '@/components/atoms/Textarea/Textarea';
import { useAppDispatch } from '@/redux/hooks';
import { desactivate } from '@/redux/features/openProjectCardSlice';
import { projectService } from '@/services/projectService';
import { addProject } from '@/redux/features/projectListSlice';


export const AddProjectCard = () => {

    const dispatch = useAppDispatch()

    const handleAddTask = async (value: string) => {
        const createProject = await projectService.createProject({ name: value });
        dispatch(addProject(createProject))
        dispatch(desactivate());
    };
    return (
        <div className='add-project-card'>
            <Textarea
                placeholder='Introduce un nombre para este proyecto...'
                text=''
                onEnter={(value) => handleAddTask(value)} />
        </div>
    );
};

export default AddProjectCard;