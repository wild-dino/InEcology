import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={`${s.dialog} ${s.active}`}>
                        <NavLink to="/dialogs/1"> Olya Sidorova </NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">Admin</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">Moderator</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Привет. Как ваши дела?</div>
                    <div className={s.message}>Добрый день! Приветствуем вас на нашем эко-сервисе</div>
                    <div className={s.message}>Ваша заявка находится в обработке</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;