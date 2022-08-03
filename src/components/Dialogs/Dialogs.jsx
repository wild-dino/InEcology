import s from './Dialogs.module.css';
import DialogItem from "src/components/Dialogs/DialogItem/DialogItem";
import Message from "src/components/Dialogs/Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let newMessageText = state.newMessageText;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>);
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let sendMessage = () => {
        props.sendMessage();
    }

    let onSendFormChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <div className={s.sendForm}>
                    <textarea onChange={onSendFormChange} placeholder="Написать сообщение..." name="message" cols="2" rows="2" value={newMessageText}/>
                    <button onClick={sendMessage} className={s.btn}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;