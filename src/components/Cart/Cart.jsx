import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem/CartItem";
import s from "./Cart.module.css";
import emptyCart from "./../../assets/Cart/emptyCard.svg";
import logo from "./../../assets/Icons/logo.svg";
import Button from "../Button/Button";

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
            <div className={s.items}>
                {(cart.length === 0) ?
                    <div className={s.emptyCart}>В корзине пусто :(<img src={emptyCart}/></div> : cartElements}
            </div>
            <div className={s.summary}>
                <div className={s.card}>
                    <h4 className={s.title}>Итог</h4>
                    <div className={s.price}>
                        <div>Всего: {totalItems}</div>
                        <div>{(totalPrice > currentBalance) ? "Недостаточно средств :(" :
                            <div className={s.totalPrice}>{totalPrice}<img src={logo}/></div>}</div>
                    </div>
                    <Button className={(totalPrice > currentBalance) ? 'btnDisplayNone' : 'orange'} name={cart}
                            title={'Оформить'}/>
                </div>
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