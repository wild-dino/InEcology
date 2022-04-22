import React, {useState, useEffect} from "react";
import s from './Header.module.css';
import logo from './../../assets/Icons/InEcology.svg';
import cartIcon from './../../assets/Icons/cart.svg';
import {connect, useDispatch} from 'react-redux';
import {NavLink, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";
import {removeUser} from "../../redux/auth-reducer";

const Header = ({cart}) => {
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(0);
    const {isAuth} = useAuth();
    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/login`;
        navigate(path);
    }

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        setCartCount(count);
    }, [cart, cartCount])

    return (
        <header className={s.header}>
            <img className={s.logo} src={logo}/>
            <div className={isAuth ? s.avatar : s.displayNone}>
                {
                    <img
                        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                        alt=""/>

                }
            </div>
            <div className={isAuth ? s.cart : s.displayNone}>
                <NavLink to="/cart"> <img src={cartIcon}/></NavLink>
                <div className={s.count}>{cartCount}</div>
            </div>
            <button onClick={() => isAuth ? dispatch(removeUser()) : routeChange()}>
                {
                    isAuth ?
                        "Выйти"
                        :
                        "Войти"
                }
            </button>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.catalog.cart
    }
};

export default connect(mapStateToProps)(Header);
