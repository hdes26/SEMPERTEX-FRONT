import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Label from '@/components/atoms/Label/Label';


interface MemberCardProps {
    id: string | number;
    name: string;
}
export const MemberCard = (props: MemberCardProps) => {
    return (
        <div className='member-card'>
            <Label text={props.name} />
        </div>
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