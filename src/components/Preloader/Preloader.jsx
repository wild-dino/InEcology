import React from 'react';
import {BallTriangle, Grid, Oval, Rings} from "react-loader-spinner";
import s from "../Preloader/Preloader.module.css";

const Preloader = () => {
    return (
        <div className={s.loader}>
            <Grid color="#ffc338" height={80} width={80} />
        </div>
    );
};

export default Preloader;
