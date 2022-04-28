import {NavLink, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {Form} from "../Form/Form";
import {setUser} from "../../redux/auth-reducer";
import s from "./LoginPage.module.css";
import {useState} from "react";

const LoginPage = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const {email, password} = state;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser(user.email, user.accessToken, user.uid));
                navigate('/main');
            })
            .catch(console.error)
    }

    const handleSubmit = () => {
    }
    const handleChange = () => {
    }

    return (
        <div>
            <h2 className={s.title}>Добро пожаловать!</h2>
            {/*<Form*/}
            {/*    title="Войти"*/}
            {/*    handleClick={handleLogin}*/}
            {/*/>*/}
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
                    name="email"
                    onChange={handleChange}
                    value={password}
                    required
                />
                <button className={s.btn} type="submit">Войти</button>
            </form>
            <div>Нет аккаунта? <NavLink to="/register">Зарегестрируйтесь</NavLink></div>
        </div>
    );
};

export default LoginPage;