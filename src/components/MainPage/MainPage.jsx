import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from "../../hooks/use-auth";

const MainPage = () => {
    const {isAuth} = useAuth();

    return isAuth ? (
            <div>
                <h2>Добро пожаловать!</h2>
            </div>
        )
        :
        (
            <Navigate to="/login"/>
        )
};

export default MainPage;