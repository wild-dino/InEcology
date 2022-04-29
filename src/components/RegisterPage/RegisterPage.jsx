import React, {useEffect, useState} from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {NavLink, useNavigate} from "react-router-dom";
import {Form} from "../Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../redux/auth-reducer";
import s from "../LoginPage/LoginPage.module.css";
import {authInitiate} from "../../redux/actions/authInitiate";
import Button from "../Button/Button";

const RegisterPage = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser) {
            navigate('/main');
        }
    }, [currentUser, navigate]);


    const dispatch = useDispatch();

    const {email, password, displayName, passwordConfirm} = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(authInitiate(email, password, displayName));
        setState({email: '', displayName: '', password: '', passwordConfirm: ''});
    }
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <form className={s.formSignin} onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="displayName"
                    className="form-control"
                    placeholder="Имя Фамилия"
                    name="displayName"
                    onChange={handleChange}
                    value={displayName}
                    required
                />
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Электронная почта"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    required
                />
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control2"
                    placeholder="Пароль"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                />
                <input
                    type="password"
                    id="inputPasswordConfirm"
                    className="form-control2"
                    placeholder="Повторите пароль"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={passwordConfirm}
                    required
                />
                <Button className='auth' onClick={handleSubmit} title='Регистрация' />
            </form>
            <div><NavLink to="/login"> Назад </NavLink></div>
        </div>
    );
};

export default RegisterPage;