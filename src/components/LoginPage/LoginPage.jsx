import {NavLink,  useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {Form} from "../Form/Form";
import {setUser} from "../../redux/auth-reducer";
import s from "./LoginPage.module.css";

const LoginPage = () => {
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

    return (
        <div>
            <h2 className={s.title}>Добро пожаловать!</h2>
            <Form
                title="Войти"
                handleClick={handleLogin}
            />
            <div>или <NavLink to="/register">Зарегестрируйтесь</NavLink></div>
        </div>
    );
};

export default LoginPage;