import s from "./SendForm.module.css";
import React from "react";

const sendForm = (props) => {
    let newMessageElement = React.createRef()
    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert('димка')
    }

    return(
        <div className={s.sendForm}>
            <textarea ref={newMessageElement} name="message" cols="2" rows="2" placeholder="Написать собеседнику"></textarea>
            <button onClick={addMessage} className={s.btn}>Отправить</button>
        </div>
    )
}

export default sendForm;