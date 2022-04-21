import React from 'react';
import s from "../Preloader/Preloader.module.css";

const Preloader = () => {
    return (
            <div className={s.fetching__element}></div>
    );
};

export default Preloader;
