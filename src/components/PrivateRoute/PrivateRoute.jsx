import React from 'react';
import {useSelector} from "react-redux";
import LoadingToRedirect from "../LoadingToRedirect/LoadingToRedirect";
import {useNavigate,Navigate} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.user);

    return currentUser? children : <LoadingToRedirect/>;
};

export default PrivateRoute;