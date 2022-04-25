const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

let initialState = {
    loading: false,
    currentUser: null,
    error: null,
    email: null,
    token: null,
    id: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                id: action.payload.id,
                name: action.payload.name
            }
        case REMOVE_USER:
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

export const setUser = (email, token, id, name) => ({type: SET_USER, payload: {email: email, token: token, id: id, name: name}});
export const removeUser = () => ({type: REMOVE_USER});

export default AuthReducer;