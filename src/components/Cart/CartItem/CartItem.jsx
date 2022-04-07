import React, {useState} from 'react';
import s from './CartItem.module.css';
import {connect} from 'react-redux';
import {removeFromCart, adjustQty} from "../../../redux/catalog-reducer";

const CartItem = ({itemData, removeFromCart, adjustQty}) => {
    const [input, setInput] = useState(itemData.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(itemData.id, e.target.value)
    }

    return (
        <div className={s.cartItem}>
            <img
                className={s.cartItem__image}
                src={require(`./../../../assets/Catalog/${itemData.image}`)}
            />
            <div className={s.flexContainer}>
                <div className={s.cartItem__details}>
                    <p className={s.cartItem__title}>{itemData.name}</p>
                    <p className={s.cartItem__cost}>{itemData.cost}</p>
                </div>
                <div className={s.cartItem__actions}>
                    <div className={s.cartItem__qty}>
                        <label htmlFor="qty">Количество</label>
                        <input onChange={onChangeHandler} min="1" type="number" id="qty" name="qty"
                               value={itemData.qty}/>
                    </div>
                    <button onClick={() => removeFromCart(itemData.id)} className={s.actions__deleteItemBtn}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);