import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem/CartItem";
import s from "./Cart.module.css";
import emptyCart from "./../../assets/Cart/emptyCard.svg"

const Cart = ({cart, currentBalance}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItem] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.cost;
        })

        setTotalPrice(price);
        setTotalItem(items)
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItem])

    const cartElements = cart.map(item => <CartItem itemData={item} key={item.id}/>)
    return (
        <div className={s.cart}>
            <div className={s.cart__items}>
                {(cart.length === 0)? <div className={s.emptyCart}>В корзине пусто :(<img src={emptyCart}/></div> : cartElements}
            </div>
            <div className={s.cart__summary}>
                <h4 className={s.summary__title}>Итог</h4>
                <div className={s.summary__price}>
                    <div>Всего: {totalItems}</div>
                    <div>{(totalPrice > currentBalance)? "Недостаточно средств :(" :  totalPrice }</div>
                </div>
                <button className={(totalPrice > currentBalance)? s.btnDisplayNone : s.summary__btn}>Оформить</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.catalog.cart,
        currentBalance: state.catalog.currentBalance
    }
}


export default connect(mapStateToProps)(Cart);