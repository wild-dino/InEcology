import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        let cleanupFunction = false;
        const interval = setInterval(() => {
            if(!cleanupFunction) {
                setCount((currentCount) => --currentCount);
            }
        }, 500);

        count === 0 && navigate('/login');
        return () => cleanupFunction = true;
    }, [count, navigate])

    return (
        <div>
            Redirect in {count}
        </div>
    )
};

export default LoadingToRedirect;