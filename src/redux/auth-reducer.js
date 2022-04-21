const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

let initialState = {
    email: null,
    token: null,
    id: null,
    isLogin: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUser:
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                id: action.payload.id
            }
        case removeUser:
            return {
                ...state,
                email: null,
                token: null,
                id: null
            }
        default:
            return state;
    }
};

export const setUser = (email, token, id) => ({type: SET_USER, payload: {email: email, token: token, id: id}});
export const removeUser = () => ({type: REMOVE_USER});

export default AuthReducer;