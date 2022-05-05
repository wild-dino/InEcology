import React, {useState, useEffect} from "react";
import s from './Header.module.css';
import logo from './../../assets/Icons/InEcology.svg';
import cartIcon from './../../assets/Icons/cart.svg';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from "react-router-dom";
import Button from "../Button/Button";
import {logoutInitiate} from "../../redux/actions/authInitiate";
import avatar from './../../assets/Profile/avatar.jpg';

const Header = () => {
    const currentUser = useSelector(state => state.user);
    const cart = useSelector(state => state.catalog.cart);
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(0);
    let navigate = useNavigate();
    const profilePhoto = '';

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        setCartCount(count);
    }, [cart, cartCount])

    const handleAuth = () => {
        if(currentUser) {
            dispatch(logoutInitiate());
            navigate('/login');
        }
    };

    return (
        <header className={s.header}>
            <ul className={s.headerNav}>
                <li className={s.item}><img className={s.logo} src={logo}/></li>
                <li className={s.item}>
                    <div className={currentUser? s.avatar : s.displayNone}>
                        {
                            <img
                                src={currentUser.photoURL}
                                alt=""/>
                        }
                    </div>
                    <div className={ currentUser? s.cart : s.displayNone}>
                        <NavLink to="/cart"> <img src={cartIcon}/></NavLink>
                        <div className={s.count}>{cartCount}</div>
                    </div>
                    <Button onClick={handleAuth}
                        title={"Выйти"}
                        className={ currentUser? 'auth' : 'btnDisplayNone'} />
                </li>
            </ul>
        </header>
    );
};

export default Header;
