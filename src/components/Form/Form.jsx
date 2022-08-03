import {useState} from 'react';
import Button from 'src/components/Button/Button';
import s from './Form.module.css';

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className={s.form}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Электронная почта"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль"
            />
            <Button title={title} className={'auth'}  onClick = {() => handleClick(email,pass)}/>
        </div>
    );
};

export {Form};