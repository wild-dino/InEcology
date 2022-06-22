const REGISTER_START = 'REGISTER_START';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const LOGOUT_START = 'LOGOUT_START';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'LOGOUT_FAIL';

const SET_USER = 'SET_USER';

const UPLOAD_USER_PHOTO_START = 'UPLOAD_USER_PHOTO_START';
const UPLOAD_USER_PHOTO_SUCCESS = 'UPLOAD_USER_PHOTO_SUCCESS';
const SET_USER_PHOTO = 'SET_USER_PHOTO';



let initialState = {
    loading: false,
    currentUser: null,
    error: null,
    userPhoto: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
        case LOGIN_START:
        case LOGOUT_START:
        case UPLOAD_USER_PHOTO_START:
            return {
                ...state,
                loading: true
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case SET_USER:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            debugger
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.payload
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export const registerStart = () => ({type: REGISTER_START});
export const registerSuccess = (user) => ({type: REGISTER_SUCCESS, payload: user});
export const registerFail = (error) => ({type: REGISTER_FAIL, payload: error});

export const loginStart = () => ({type: LOGIN_START});
export const loginSuccess = (user) => ({type: LOGIN_SUCCESS, payload: user});
export const loginFail = (error) => ({type: LOGIN_FAIL, payload: error});

export const logoutStart = () => ({type: LOGOUT_START});
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS});
export const logoutFail = (error) => ({type: LOGOUT_FAIL, payload: error});

export const setUser = (user) => ({type: SET_USER, payload: user});

export const uploadUserPhotoStart = () => ({type: UPLOAD_USER_PHOTO_START});
export const uploadUserPhotoSuccess = () => ({type: UPLOAD_USER_PHOTO_SUCCESS});
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, payload: photo});

export default AuthReducer;