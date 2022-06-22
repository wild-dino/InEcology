import React from 'react';
import {TailSpin} from "react-loader-spinner";
import s from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={s.loader}>
            <TailSpin color="#ffc338" height={80} width={80} />
        </div>
    );
};

export default Preloader;
