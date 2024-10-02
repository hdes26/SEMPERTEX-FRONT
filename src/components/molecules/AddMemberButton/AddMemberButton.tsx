'use client'
import React from 'react';
import './style.css';
import Label from '@/components/atoms/Label/Label';
import { useAppDispatch } from '@/redux/hooks';
import { active } from '@/redux/features/openMemberCardSlice';

interface AddMemberButtonProps {
    text: string;
}
export const AddMemberButton = (props: AddMemberButtonProps) => {
    const dispatch = useAppDispatch()

    const handleAddMember = () => {
        dispatch(active());
    };
    return (
        <button className="add-member" onClick={handleAddMember}>
            <Label text={props.text} />
        </button>
    );
};

export default AddMemberButton;