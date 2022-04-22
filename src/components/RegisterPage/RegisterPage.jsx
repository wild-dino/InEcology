import React from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {NavLink, useNavigate} from "react-router-dom";
import {Form} from "../Form/Form";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/auth-reducer";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            <Form
                title="Register"
                handleClick={handleRegister}
            />
            <div>Есть аккаунт? <NavLink to="/login">Войдите</NavLink></div>
        </div>
    );
};

export default RegisterPage;