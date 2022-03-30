const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT_CREATOR = 'UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR';

export const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: 10, message: state.newMessageText};
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT_CREATOR:
            state.newMessageText = action.newMessage;
            return state;
        default: return state;
    }
}

export const addMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT_CREATOR, newMessage: message});
export default dialogsReducer;