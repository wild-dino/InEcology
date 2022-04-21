import React from 'react';
import {Navigate} from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <Navigate to="/login"/>
        </div>
    );
};

export default MainPage;