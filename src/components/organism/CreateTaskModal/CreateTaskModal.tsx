import React from 'react';
import './style.css';

interface CreateTaskModalProps {
    text: string;
}
export const CreateTaskModal = (props: CreateTaskModalProps) => {
    return (
        <div className="create-task-modal">
            <div className='create-task-modal-content'></div>
        </div>
    );
};

export default CreateTaskModal;