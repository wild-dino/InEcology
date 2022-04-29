import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import s from "./LoginPage.module.css";
import {useEffect, useState} from "react";
import {loginInitiate} from "../../redux/actions/authInitiate";
import Button from "../Button/Button";

const LoginPage = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate('/main');
        }
    }, [currentUser, navigate]);


    const dispatch = useDispatch();
    const {email, password} = state;

    const handleSubmit = () => {
        if (!email || ![password]) {
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({email: '', password: ''});
    };

    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    };

    return (
        <div className={s.authSection}>
            <h2 className={s.title}>Добро пожаловать!</h2>
            <form className={s.formSignin} onSubmit={handleSubmit}>
                <h3>Войдите</h3>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    required
                />
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control2"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                />
                <Button className={'auth'} onClick={handleSubmit} title={'Войти'}>Войти</Button>
            </form>
            <div>Нет аккаунта? <NavLink to="/register">Зарегестрируйтесь</NavLink></div>
        </div>
    );
};

export default LoginPage;