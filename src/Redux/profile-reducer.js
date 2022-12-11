// action types
import {ProfileAPI} from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_CURRENT_PROFILE_ID = 'SET_CURRENT_PROFILE_ID';
const SET_STATUS = 'SET_STATUS';


// action creators
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo});
export const setCurrentProfileId = (currentProfileId) => ({type: SET_CURRENT_PROFILE_ID, currentProfileId});
export const setStatus = (status) => ({type: SET_STATUS, status});


// thunk creators
export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId).then(data => {
            dispatch(setProfileInfo(data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if(response.resultCode === 0){
                dispatch(setStatus(status));
            }
        });
    }
}

let initialState = {
    profileInfo: null,
    currentProfileId: 2,
    status: '',
    postsData: [
        {
            id: 10,
            message: 'Mememee',
            likesCount: 12,
            img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
        },
        {
            id: 20,
            message: 'BUSAbu',
            likesCount: 2,
            img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
        },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let length = state.postsData.length;
            let newPost = {
                id: length + 1,
                message: action.newPostText,
                likesCount: 0,
                img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case SET_CURRENT_PROFILE_ID:
            return {
                ...state,
                currentProfileId: action.currentProfileId
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}


export default profileReducer;