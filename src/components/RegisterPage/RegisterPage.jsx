import React from 'react';
import {NavLink} from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <h2>Register</h2>
            <div>Есть аккаунт? <NavLink to="/login">Войдите</NavLink></div>
        </div>
    );
};

export default RegisterPage;