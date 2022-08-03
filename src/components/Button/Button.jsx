import React from 'react';
import  './Button.css';

const Button = ({className, title, onClick, type, disabled}) => {
    return (
        <div>
            <button disabled={disabled} type={type} onClick={onClick} className={`btn ${className}`}>{title}</button>
        </div>
    );
};

export default Button;