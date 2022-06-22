import React from 'react';
import s from "./PlantItem.module.css";
import logo from "Assets/Icons/logo.svg"
import cart from "Assets/Icons/cart.svg"
import {connect} from "react-redux";
import {addToCartAC} from "Redux/catalog-reducer";


const PlantItem = (props) => {

    let onAddToCart = () => {
        props.addToCartAC(props.id)
    }

    return (
        <div className={s.plantItem}>
            <div className={s.plantImage}>
                <img src={require(`Assets/Catalog/${props.image}`)}/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.elements}>
                <div className={s.cost}>{props.cost}</div>
                <div className={s.icon}><img src={logo}/></div>
                <button onClick={onAddToCart} className={s.btn}><img src={cart}/></button>
            </div>
        </div>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        addToCartAC: (id) => dispatch(addToCartAC(id))
    }
}

export default connect(null, mapDispatchToProps)(PlantItem);
