const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (newText) =>
    ({type: UPDATE_POST_TEXT, newText});

let initialState = {
    newPostText: '',
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
                message: state.newPostText,
                likesCount: 0,
                img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export default profileReducer;