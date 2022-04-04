import React from 'react';
import s from "./PlantItem.module.css";
import logo from "../../../assets/Icons/logo.svg"
import cart from "../../../assets/Icons/cart.svg"

const PlantItem = (props) => {
    return (
        <div className={s.plantItem}>
            <div className={s.plantImage}>
                <img src={require(`./../../../assets/Catalog/${props.image}`)}/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.elements}>
                <div className={s.icon}><img src={logo}/></div>
                <div className={s.cost}>{props.cost}</div>
                <button className={s.btn}><img src={cart}/></button>
            </div>

        </div>
    );
};

export default PlantItem;