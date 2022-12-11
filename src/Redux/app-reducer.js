
// action types
const SET_INITIALIZED = 'SET_INITIALIZED';


// action creators
export const setInitialized = () => ({type: SET_INITIALIZED});


// thunk creators
export const authMe = () => (dispatch) => {
    AuthAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}


const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}


export default appReducer;