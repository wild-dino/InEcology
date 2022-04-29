import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 500);

        count === 0 && navigate('/login');
    }, [count, navigate])

    return (
        <div>
            Redirect in {count}
        </div>
    )
};

export default LoadingToRedirect;