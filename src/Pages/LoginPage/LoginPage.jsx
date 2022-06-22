import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import s from './LoginPage.module.css';
import {useEffect, useState} from 'react';
import {loginInitiate} from 'Redux/actions/authInitiate';
import Button from 'Components/Button/Button';

const LoginPage = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate('/news');
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
        <section className={s.main}>
            <div className={s.image}></div>
            <div className={s.auth}>
                <h2 className={s.authTitle}>Добро пожаловать!</h2>
                <form className={s.authSigning} onSubmit={handleSubmit}>
                    <h3>Войдите</h3>
                    <input
                        type="email"
                        id="inputEmail"
                        className={s.email}
                        placeholder="Электронная почта"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input
                        type="password"
                        id="inputPassword"
                        className={s.password}
                        placeholder="Пароль"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <Button className={'auth'} onClick={handleSubmit} title={'Войти'}>Войти</Button>
                </form>
                <h4>Нет аккаунта? <NavLink to="/register">Зарегестрируйтесь</NavLink></h4>
            </div>
        </section>
    );
};

export default LoginPage;