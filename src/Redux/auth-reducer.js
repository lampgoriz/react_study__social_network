import {AuthAPI} from "../API/api";

// action types
const SET_USER_DATA = 'SET_USER_DATA';


// action creators
export const setAuthUserData = (userId, email, login, isAuth = false) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});


// thunk creators
export const authMe = () => (dispatch) => {
    AuthAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const LogIn = (email, password, rememberMe, setStatus) => (dispatch) => {
    AuthAPI.logIn(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authMe());
        }
        else {
            setStatus(response.data.messages);
        }
    });
}

export const LogOut = () => (dispatch) => {
    AuthAPI.logOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null,null,null,false));
        }
    });
}


const initialState = {
    isAuth: false,
    login: null,
    userId: null,
    email: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}


export default authReducer;