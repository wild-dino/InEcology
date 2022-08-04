import React, {useEffect, useState} from 'react';
import s from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {removeFromCart, adjustQty} from "redux/catalog-reducer";
import icon from "assets/Icons/logo.svg"
import Button from "components/Button/Button";

const CartItem = ({itemData}) => {
    const [input, setInput] = useState(itemData.qty);
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustQty(itemData.id, e.target.value));
    }

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <div className={s.cartItem}>
            <div className={s.cartItemImage}><img src={require(`assets/Catalog/${itemData.image}`)}/></div>
            <div className={s.flexContainer}>
                <div className={s.cartItemDetails}>
                    <p className={s.cartItemTitle}>{itemData.name}</p>
                    <div className={s.cartItemCost}><p>{itemData.cost}</p><img src={icon}/></div>
                </div>
                <div className={s.cartItemActions}>
                    <div className={s.cartItemQty}>
                        <label htmlFor="qty">Количество</label>
                        <input className={s.qty} onChange={onChangeHandler} min="1" type="number" id="qty" name="qty"
                               value={itemData.qty}/>
                    </div>
                    <Button onClick={() => handleRemove(itemData.id)} className={'deleteItemBtn'} title={'Удалить'}/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;