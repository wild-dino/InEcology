import React from 'react';
import s from "./PlantItem.module.css";
import logo from "Assets/Icons/logo.svg"
import cart from "Assets/Icons/cart.svg"

const PlantItem = ({id, image, name, cost, onAddToCart}) => {

    return (
        <div className={s.plantItem}>
            <div className={s.plantImage}>
                <img src={require(`Assets/Catalog/${image}`)}/>
            </div>
            <div className={s.name}>
                {name}
            </div>
            <div className={s.elements}>
                <div className={s.cost}>{cost}</div>
                <div className={s.icon}><img src={logo}/></div>
                <button onClick={() => onAddToCart(id)} className={s.btn}><img src={cart}/></button>
            </div>
        </div>
    );
};

export default PlantItem;
