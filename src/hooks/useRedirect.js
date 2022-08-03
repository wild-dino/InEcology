import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const useRedirect = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 500);

        count === 0 && navigate('/login');
        return () => clearInterval(interval)
    }, [count, navigate])

    return count;
}

export default useRedirect;