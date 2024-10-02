import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Label from '@/components/atoms/Label/Label';
import Image from '@/components/atoms/Image/Image';
import align from '@/assets/align.png';


interface TaskCardProps {
    id: string | number;
    name: string;
    status: 'todo' | 'inprogress' | 'completed';
}
export const TaskCard = (props: TaskCardProps) => {
    const labelColors = {
        todo: "#59ff00",
        inprogress: "#ec8b15",
        completed: "#f01111",
    };

    const labelColor = props.status ? labelColors[props.status] : "#FFFFFF";
    return (
        <div className='task-card'>
            <span style={{backgroundColor: labelColor, height:'5px', minWidth: '30%', maxWidth: '30%'}} ></span>
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
    status: PropTypes.oneOf(['todo', 'inprogress', 'completed']).isRequired,
};
export default TaskCard;