import React from 'react';
import s from './CartItem.module.css';

const CartItem = ({itemData}) => {
    return (
        <div className={s.cartItem}>
            <img
                className={s.cartItem__image}
                src={require(`./../../../assets/Catalog/${itemData.image}`)}
            />
            <div className={s.cartItem__details}>
                <p className={s.cartItem__title}>{itemData.name}</p>
                <p className={s.cartItem__cost}>{itemData.cost}</p>
            </div>
            <div className={s.cartItem__actions}>
                <div className={s.cartItem__qty}>
                    <label htmlFor="qty">Qty</label>
                    <input min="1" type="number" id="qty" name="qty" value={itemData.qty}/>
                </div>
                <button className={s.actions__deleteItemBtn}>
                    delete
                </button>
            </div>
        </div>
    );
};

export default CartItem;