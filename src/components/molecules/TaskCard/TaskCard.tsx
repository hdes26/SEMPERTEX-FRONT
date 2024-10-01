import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Label from '@/components/atoms/Label/Label';
import Image from '@/components/atoms/Image/Image';
import align from '@/assets/align.png';


interface TaskCardProps {
    id: string | number;
    name: string;
}
export const TaskCard = (props: TaskCardProps) => {
    return (
        <div className='task-card'>
            <span></span>
            <Label text={props.name} />
            <Image src={align} alt='logo' height={18} width={18} />
        </div>
    );
};

TaskCard.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
};

export default TaskCard;