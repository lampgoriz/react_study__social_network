import React from "react";
import s from './NewPost.module.css'
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../Redux/profile-reducer";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let updatePostText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(text))
    }


    return (
        <div className={s.newPost}>
            <input ref={newPostElement}
                   type="text"
                   placeholder={'Wright a message...'}
                   onChange={updatePostText}
                   value={props.newPostText}
            />
            <input type="button" value={'Add'} onClick={addPost}/>
        </div>
    );
}

export default NewPost;