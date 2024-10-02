'use client'
import React from 'react';
import './style.css';
import Label from '@/components/atoms/Label/Label';
import { useAppDispatch } from '@/redux/hooks';
import { active } from '@/redux/features/openProjectCardSlice';

interface AddProjectButtonProps {
    text: string;
}
export const AddProjectButton = (props: AddProjectButtonProps) => {
    const dispatch = useAppDispatch()

    const handleAddProject = () => {
        dispatch(active());
    };
    return (
        <button className="add-project" onClick={handleAddProject}>
            <Label text={props.text} />
        </button>
    );
};

export default AddProjectButton;