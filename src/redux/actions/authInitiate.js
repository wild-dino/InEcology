import {
    loginFail,
    loginStart,
    loginSuccess, logoutFail,
    logoutStart, logoutSuccess,
    registerFail,
    registerStart,
    registerSuccess, setUserPhoto, uploadUserPhotoStart, uploadUserPhotoSuccess
} from '../auth-reducer';
import {auth, storage} from '../../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";

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

export const upload = (file, currentUser) => {
    return async (dispatch) => {
        try {
            const fileRef = ref(storage, currentUser.uid + '.png');
            dispatch(uploadUserPhotoStart());
            const snapshot = await uploadBytes(fileRef, file);
            const photoURL = await getDownloadURL(fileRef);
            updateProfile(currentUser, {photoURL: photoURL});
            dispatch(uploadUserPhotoSuccess());
            window.location.reload();
        }
        catch(error) {
            console.log("error", error);
        }
    }
}

