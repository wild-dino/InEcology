import {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import s from './Register.module.css';
import {authInitiate} from '../../redux/actions/authInitiate';
import Button from '../Button/Button';

const RegisterPage = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser) {
            navigate('/news');
        }
    }, [currentUser, navigate]);

    const dispatch = useDispatch();

    const {email, password, displayName, passwordConfirm} = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(authInitiate(email, password, displayName));
        setState({email: '', displayName: '', password: '', passwordConfirm: ''});
    }
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }

    return (
        <section className={s.main}>
            <div className={s.mainImage}></div>
            <div className={s.mainRegister}>
                <h2>Регистрация</h2>
                <form className={s.formSigning} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="displayName"
                        className={s.formControlName}
                        placeholder="Имя Фамилия"
                        name="displayName"
                        onChange={handleChange}
                        value={displayName}
                        required
                    />
                    <input
                        type="email"
                        id="inputEmail"
                        className={s.formControlEmail}
                        placeholder="Электронная почта"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input
                        type="password"
                        id="inputPassword"
                        className={s.formControlPassword}
                        placeholder="Пароль"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <input
                        type="password"
                        id="inputPasswordConfirm"
                        className={s.formControlPassword}
                        placeholder="Повторите пароль"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={passwordConfirm}
                        required
                    />
                    <Button className='auth' onClick={handleSubmit} title='Регистрация'/>
                </form>
                <h4><NavLink to="/login"> Назад </NavLink></h4>
            </div>
        </section>
    );
};

export default RegisterPage;