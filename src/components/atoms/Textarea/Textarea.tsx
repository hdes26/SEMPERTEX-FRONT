import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface TextareaProps {
    placeholder: string;
    text?: string;
    onEnter?: (value: string) => void;
}

export const Textarea: React.FC<TextareaProps> = ({ placeholder, text = '', onEnter }) => {
    const [inputValue, setInputValue] = useState<string>(text);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
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
};

export default Textarea;
