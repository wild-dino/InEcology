import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const items = [
    {href: "/news", text: 'Новости'},
    {href: "/InEcology", text: 'Мой профиль'},
    {href: "/catalog", text: 'Каталог'},
    {href: "/blog", text: 'Блог'},
    {href: "/collection-points", text: 'Пункты приема'},
    {href: "/dialogs/*", text: 'Сообщения'},
    {href: "/cart", text: 'Корзина'},
];

const Navbar = () => {
    return (
        <>
            <nav className={s.nav}>
                {items.map(link => {
                    return (
                        <div key={link.text} className={s.link}>
                            <NavLink className={(navData) => navData.isActive ? s.active : ''}
                                     to={link.href}>{link.text}</NavLink>
                        </div>
                    )
                })}
            </nav>
        </>
    )
}

export default Navbar;
