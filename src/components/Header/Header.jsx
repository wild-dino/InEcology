import {useState, useEffect} from "react";
import s from './Header.module.css';
import logo from './../../assets/Icons/InEcology.svg';
import cartIcon from './../../assets/Icons/cart.svg';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";

const Header = ({cart}) => {
    const [cartCount, setCartCount] = useState(0);
    const isLogin = false;

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
            <div className={s.avatar}>
                {
                    isLogin ?
                        <img
                            src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                            alt=""/>
                        :
                        <div></div>
                }
            </div>
            <div className={s.cart}>
                <NavLink to="/cart"> <img src={cartIcon}/></NavLink>
                <div className={s.count}>{cartCount}</div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.catalog.cart
    }
};

export default connect(mapStateToProps)(Header);
