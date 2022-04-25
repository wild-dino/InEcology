import React from 'react';
import  './Button.css';

const Button = ({className= '', name= '', title= '', onClick}) => {
    const onButtonClick = () => {
        if(onClick){
            onClick(name);
        }
    }

    return (
        <div>
            <button onClick={onButtonClick} className={`btn ${className}`}>{title}</button>
        </div>
    );
};

export default Button;