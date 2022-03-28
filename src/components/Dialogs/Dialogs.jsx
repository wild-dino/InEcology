import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendForm from "./SendForm/SendForm";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}
                                                                  avatar={d.avatar}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message} key={m.id}/>);
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <SendForm/>
            </div>
        </div>
    )
}

export default Dialogs;