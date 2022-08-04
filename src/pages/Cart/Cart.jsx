import CartItem from "components/CartItem/CartItem";
import s from "./Cart.module.css";
import emptyCart from "assets/Cart/emptyCard.svg";
import logo from "assets/Icons/logo.svg";
import Button from "components/Button/Button";
import {useSelector} from "react-redux";
import useCount from "hooks/useCount";

const Cart = () => {
    const {cart, totalPrice, totalItems} = useCount();
    let currentBalance = useSelector(state => state.catalog.currentBalance);
    const cartElements = cart.map(item => <CartItem itemData={item} key={item.id}/>);

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

export default Cart;