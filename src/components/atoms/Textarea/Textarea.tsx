import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface TextareaProps {
    placeholder: string;
    text?: string;
    onEnter?: (value: string) => void;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Asegúrate de que onChange esté aquí
}

export const Textarea: React.FC<TextareaProps> = ({ placeholder, text = '', onEnter, onChange }) => {
    const [inputValue, setInputValue] = useState<string>(text);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
        if (onChange) {
            onChange(event); // Llama a onChange si está definido
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (onEnter) {
                onEnter(inputValue);
            }
        }
    }

    return (
        <textarea
            placeholder={placeholder}
            className="textarea"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
};

Textarea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string,
    onEnter: PropTypes.func,
    onChange: PropTypes.func, // Agrega onChange a las PropTypes
};

export default Textarea;
