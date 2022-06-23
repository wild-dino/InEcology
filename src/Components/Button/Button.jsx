import React from 'react';
import  './Button.css';

const Button = ({className= '', name= '', title= '', onClick, type, disabled}) => {
    const onButtonClick = () => {
        if(onClick){
            onClick(name);
        }
    }

    return (
        <div>
            <button disabled={disabled} type={type} onClick={onButtonClick} className={`btn ${className}`}>{title}</button>
        </div>
    );
};

export default Button;