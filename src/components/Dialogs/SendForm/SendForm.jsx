import s from "./SendForm.module.css";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

const sendForm = (props) => {
    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onSendFormChange = () => {
        let message = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(message));
    }

    return(
        <div className={s.sendForm}>
            <textarea onChange={onSendFormChange} ref={newMessageElement} name="message" cols="2" rows="2" value={props.newMessageText}/>
            <button onClick={addMessage} className={s.btn}>Отправить</button>
        </div>
    )
}

export default sendForm;