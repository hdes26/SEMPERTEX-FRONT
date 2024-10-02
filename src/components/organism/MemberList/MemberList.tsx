'use client'
import React from 'react';
import './style.css';
import { useAppSelector } from '@/redux/hooks';
import MemberCard from '@/components/molecules/MemberCard/MemberCard';
import useInitializeMembers from '@/hooks/useInitializeMembers';
import AddMemberCard from '@/components/molecules/AddMemberCard/AddMemberCard';


export const MemberList = () => {
    const openMemberCard = useAppSelector((state) => state.openMemberCardReducer);

    const membersFromStore = useAppSelector((state) => state.memberListReducer.members);

    useInitializeMembers();

    return (
        <div className="member-list">
            {membersFromStore.map((project) => (
                <MemberCard key={project.id} id={project.id} name={project.name} />
            ))}
            {openMemberCard.active && (
                <AddMemberCard key={1} />
            )}
        </div>
    );
};

export default MemberList;