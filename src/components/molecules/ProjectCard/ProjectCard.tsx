import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Label from '@/components/atoms/Label/Label';
import Link from 'next/link';


interface ProjectCardProps {
    id: string | number;
    name: string;
}
export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Link className='project-card' href={`project/${props.id}`}>
            <div>
                <Label text={props.name}/>
            </div>
        </Link>


    );
};

ProjectCard.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
};

export default ProjectCard;