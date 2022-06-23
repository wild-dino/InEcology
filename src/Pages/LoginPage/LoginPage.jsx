import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import s from './LoginPage.module.css';
import {useEffect} from 'react';
import {loginInitiate} from 'Redux/actions/authInitiate';
import Button from 'Components/Button/Button';
import {useFormik} from "formik";
import InputForm from "Components/InputForm/InputForm";

const LoginPage = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();
    const {
        values,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit
    });

    useEffect(() => {
        if (currentUser) {
            navigate('/news');
        }
    }, [currentUser, navigate]);

    function onSubmit() {
        dispatch(loginInitiate(values.email, values.password));
    };

    return (
        <section className={s.main}>
            <div className={s.image}></div>
            <div className={s.auth}>
                <h2 className={s.authTitle}>Добро пожаловать!</h2>
                <form className={s.authSigning} onSubmit={handleSubmit}>
                    <h3>Войдите</h3>
                    <InputForm
                        type="text"
                        autoComplete="off"
                        id="email"
                        className="formControl"
                        placeholder="Электронная почта"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    <InputForm
                        type="password"
                        autoComplete="off"
                        id="password"
                        className="formControl"
                        placeholder="Электронная почта"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                    />
                    <Button disabled={isSubmitting}  type="submit" className='auth' onClick={handleSubmit} title={'Войти'}>Войти</Button>
                </form>
                <h4>Нет аккаунта? <NavLink to="/register">Зарегестрируйтесь</NavLink></h4>
            </div>
        </section>
    );
};

export default LoginPage;