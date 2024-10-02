import React from 'react';
import './style.css';
import MemberList from '@/components/organism/MemberList/MemberList';
import AddMemberButton from '@/components/molecules/AddMemberButton/AddMemberButton';


export const Member = () => {
    return (
        <section className="member-content flex flex-col w-full h-full">
            <AddMemberButton text=' + Agregar miembro' />
            <MemberList />
        </section>
    );
};

export default Member;