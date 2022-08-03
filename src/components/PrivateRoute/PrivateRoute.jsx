import React from 'react';
import {useSelector} from "react-redux";
import LoadingToRedirect from "src/components/LoadingToRedirect/LoadingToRedirect";

const PrivateRoute = ({children}) => {
    const {currentUser} = useSelector((state) => state.user);
    return currentUser? children : <LoadingToRedirect/>;
};

export default PrivateRoute;