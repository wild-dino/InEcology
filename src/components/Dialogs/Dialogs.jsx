import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Olya Sidorova'},
        {id: 2, name: 'Admin'},
        {id: 3, name: 'Moderator'}]

    let messagesData = [
        {id: 1, message: 'Привет. Как ваши дела?'},
        {id: 2, message: 'Добрый день! Приветствуем вас на нашем эко-сервисе'},
        {id: 3, message: 'Ваша заявка находится в обработке'}
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Olya Sidorova" id="1"/>
                    <DialogItem name="Admin" id="2"/>
                    <DialogItem name="Moderator" id="3"/>
                </div>
                <div className={s.messages}>
                    <Message message="Привет. Как ваши дела?"/>
                    <Message message="Добрый день! Приветствуем вас на нашем эко-сервисе"/>
                    <Message message="Ваша заявка находится в обработке"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;