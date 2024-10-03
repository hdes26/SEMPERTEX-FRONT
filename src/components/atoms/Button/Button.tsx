import React from 'react';
import './style.css';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className="button" onClick={props.onClick}>{props.text}</button>
    );
};

export default Button;