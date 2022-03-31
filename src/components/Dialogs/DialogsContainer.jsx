import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(addMessageCreator());
    }

    let onSendFormChange = (message) => {
        props.store.dispatch(updateNewMessageTextCreator(message));
    }

    return (
        <Dialogs updateNewMessageText={onSendFormChange} sendMessage={sendMessage} dialogsPage={state}/>
    )
}

export default DialogsContainer;