import {useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import s from './Register.module.css';
import {authInitiate} from 'Redux/actions/authInitiate';
import Button from 'Components/Button/Button';
import {useFormik} from "formik";
import {userSchema} from "Validations/UserValidation";
import InputForm from "Components/InputForm/InputForm";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();
    const {
        values,
        isSubmitting,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            displayName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema: userSchema,
        onSubmit
    });

    useEffect(() => {
        if (currentUser) {
            navigate('/news');
        }
    }, [currentUser, navigate]);

    function onSubmit() {
        dispatch(authInitiate(values.email, values.password, values.displayName));
        console.log("submitted")
    }

    return (
        <section className={s.main}>
            <div className={s.mainImage}></div>
            <div className={s.mainRegister}>
                <h2>Регистрация</h2>
                <form className={s.formSigning} onSubmit={handleSubmit}>
                    <InputForm
                        type="text"
                        autoComplete="off"
                        id="displayName"
                        className="formControl"
                        placeholder="Имя Фамилия"
                        name="displayName"
                        onChange={handleChange}
                        value={values.displayName}
                        onBlur={handleBlur}
                    />
                    {errors.displayName && touched.displayName && <p className={s.error}>{errors.displayName}</p>}
                    <InputForm
                        type="email"
                        autoComplete="off"
                        id="inputEmail"
                        className={errors.email && touched.displayName ? "inputError" : "formControl"}
                        placeholder="Электронная почта"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <p className={s.error}>{errors.email}</p>}
                    <InputForm
                        type="password"
                        autoComplete="off"
                        id="inputPassword"
                        className={errors.password && touched.displayName ? "inputError" : "formControl"}
                        placeholder="Пароль"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && <p className={s.error}>{errors.password}</p>}
                    <InputForm
                        type="password"
                        autoComplete="off"
                        id="inputPasswordConfirm"
                        className={errors.passwordConfirm && touched.displayName ? "inputError" : "formControl"}
                        placeholder="Повторите пароль"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={values.passwordConfirm}
                        onBlur={handleBlur}
                    />
                    {errors.passwordConfirm && touched.passwordConfirm &&
                        <p className={s.error}>{errors.passwordConfirm}</p>}
                    <Button type="submit" className='auth' title='Регистрация'
                            onClick={handleSubmit}/>
                </form>
                <h4><NavLink to="/login">Назад</NavLink></h4>
            </div>
        </section>
    );
};

export default RegisterPage;