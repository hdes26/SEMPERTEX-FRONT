import React from 'react';
import './style.css';
import Textarea from '@/components/atoms/Textarea/Textarea';
import { useAppDispatch } from '@/redux/hooks';
import { deactivate } from '@/redux/features/openMemberCardSlice';
import { addMember } from '@/redux/features/memberListSlice';
import { memberService } from '@/services/memberService';


export const AddMemberCard = () => {

    const dispatch = useAppDispatch()

    const handleAddMember = async (value: string) => {
        const createMember = await memberService.createMember({ name: value, email: `${value}@gmail.com` });
        dispatch(addMember(createMember))
        dispatch(deactivate());
    };
    return (
        <div className='add-member-card'>
            <Textarea
                placeholder='Introduce un nombre para este miembro...'
                text=''
                onEnter={(value) => handleAddMember(value)} />
        </div>
    );
};

export default AddMemberCard;