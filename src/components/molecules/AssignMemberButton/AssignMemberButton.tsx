import React from 'react';
import './style.css';
import { useAppDispatch } from '@/redux/hooks';
import Label from '@/components/atoms/Label/Label';
import { active } from '@/redux/features/showMembersToAssignSlice';

interface AssignMemberButtonProps {
    text: string;
}
export const AssignMemberButton = (props: AssignMemberButtonProps) => {

    const dispatch = useAppDispatch()

    const handleAssignMember = () => {
        dispatch(active());
    };
    return (
        <button className="assign-member-btn" onClick={handleAssignMember}>
            <Label text={props.text} />
        </button>
    );
};

export default AssignMemberButton;