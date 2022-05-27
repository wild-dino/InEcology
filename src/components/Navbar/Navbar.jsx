import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.link}>
                <NavLink to="/news" className={(navData) => navData.isActive ? s.active : ''}>Новости</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/" className={(navData) => navData.isActive ? s.active : ''}>Мой профиль</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/catalog" className={(navData) => navData.isActive ? s.active : ''}>Каталог</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/blog" className={(navData) => navData.isActive ? s.active : ''}>Блог</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/collection-points" className={(navData) => navData.isActive ? s.active : ''}>Пункты приема</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/dialogs/*" className={(navData) => navData.isActive ? s.active : ''}>Сообщения</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/cart" className={(navData) => navData.isActive ? s.active : ''}>Корзина</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
