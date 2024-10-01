import React from 'react';
import './style.css';
import Label from '@/components/atoms/Label/Label';

interface ButtonProps {
    text: string;
}
export const AddTask = (props: ButtonProps) => {

    const handleAddTask = ()=>{
    }
    return (
        <button className="add-task" onClick={handleAddTask}>
            <Label text={props.text} />
        </button>
    );
};

export default AddTask;