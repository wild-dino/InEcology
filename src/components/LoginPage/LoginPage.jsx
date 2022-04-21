import React from 'react';
import {NavLink} from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <h2>LOGIN</h2>
            <div>или <NavLink to="/register">Зарегестрируйтесь</NavLink></div>
        </div>
    );
};

export default LoginPage;