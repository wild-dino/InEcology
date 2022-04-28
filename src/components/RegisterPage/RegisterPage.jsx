import React, {useState} from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {NavLink, useNavigate} from "react-router-dom";
import {Form} from "../Form/Form";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/auth-reducer";
import s from "../LoginPage/LoginPage.module.css";

const RegisterPage = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const {email, password, displayName, passwordConfirm} = state;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
    }
    const handleChange = () => {
    }

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser(user.email, user.accessToken, user.uid));
                navigate('/main');
            })
            .catch(console.error)
    }

    return (
        <div>
            <h2>Регистрация</h2>
            {/*<Form*/}
            {/*    title="Register"*/}
            {/*    handleClick={handleRegister}*/}
            {/*/>*/}
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
                <button className={s.btn} type="submit">Регистрация</button>
            </form>
            <div><NavLink to="/login"> Назад </NavLink></div>
        </div>
    );
};

export default RegisterPage;