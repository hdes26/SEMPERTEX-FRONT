import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Label from '@/components/atoms/Label/Label';
import Link from 'next/link';


interface MemberCardProps {
    id: string | number;
    name: string;
}
export const MemberCard = (props: MemberCardProps) => {
    return (
        <Link className='member-card' href={`member/${props.id}`}>
            <div>
                <Label text={props.name}/>
            </div>
        </Link>


    );
};

MemberCard.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
};

export default MemberCard;