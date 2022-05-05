import {
    loginFail,
    loginStart,
    loginSuccess, logoutFail,
    logoutStart, logoutSuccess,
    registerFail,
    registerStart,
    registerSuccess
} from '../auth-reducer';
import {auth} from '../../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";

export const authInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart);
        createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
            updateProfile(auth.currentUser, {
                displayName: displayName
            }).then (() => {
                dispatch(registerSuccess(user))
            })
        }).catch((error) => dispatch(registerFail(error.message)))
    };
};

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user));
            })
            .catch((error) => dispatch(loginFail(error.message)));
    };
};

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        signOut(auth)
            .then((response) => dispatch(logoutSuccess()))
            .catch((error) => dispatch(logoutFail(error.message)));
    };
};

