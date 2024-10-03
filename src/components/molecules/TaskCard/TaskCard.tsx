import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Label from '@/components/atoms/Label/Label';
import Image from '@/components/atoms/Image/Image';
import align from '@/assets/align.png';
import { useAppDispatch } from '@/redux/hooks';
import { active } from '@/redux/features/openUpdateTaskModalSlice';


interface TaskCardProps {
    id: string;
    name: string;
    status: 'pendiente' | 'en_progreso' | 'completada';
}
export const TaskCard = (props: TaskCardProps) => {
    const dispatch = useAppDispatch()

    const labelColors = {
        pendiente: "#59ff00",
        en_progreso: "#ec8b15",
        completada: "#f01111",
    };

    const labelColor = props.status ? labelColors[props.status] : "#FFFFFF";


    const handleOpenUpdateTaskModal = () => {
        dispatch(active({ id: props.id, name: props.name, status: props.status }));
    };

    return (
        <div className='task-card' onClick={handleOpenUpdateTaskModal}>
            <span style={{ backgroundColor: labelColor, height: '5px', minWidth: '30%', maxWidth: '30%' }} ></span>
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
    status: PropTypes.oneOf(['pendiente', 'en_progreso', 'completada']).isRequired,
};
export default TaskCard;