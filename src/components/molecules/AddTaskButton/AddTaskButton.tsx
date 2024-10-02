'use client'
import React from 'react';
import './style.css';
import Label from '@/components/atoms/Label/Label';
import { useAppDispatch } from '@/redux/hooks';
import { active } from '@/redux/features/openTaskCardSlice';

interface AddTaskButtonProps {
    text: string;
    type: string
}
export const AddTaskButton = (props: AddTaskButtonProps) => {
    const dispatch = useAppDispatch()

    const handleAddTask = () => {
        dispatch(active(props.type));
    };
    return (
        <button className="add-task" onClick={handleAddTask}>
            <Label text={props.text} />
        </button>
    );
};

export default AddTaskButton;