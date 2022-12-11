import React from "react";
import s from './NewPost.module.css'
import {Formik} from "formik";
import * as yup from "yup";

const NewPost = (props) => {

    let addPost = (newPostText) => {
        props.addPost(newPostText);
    }

    let updatePostText = (e) => {
        let text = e.currentTarget.value;
        props.updatePostText(text);
    }


    return (
        <div className={s.newPost}>
            <PostForm addPost={addPost}/>

            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder={'Wright a message...'}*/}
            {/*    onChange={updatePostText}*/}
            {/*    value={props.newPostText}*/}
            {/*/>*/}
            {/*<input type="button" value={'Add'} onClick={addPost}/>*/}
        </div>
    );
}

const PostForm = (props) => {

    return (
        <Formik
            initialValues={{
                newPostText: '',
            }}
            onSubmit={(values)=> props.addPost(values.newPostText)}
        >
            {({
                  values, handleChange,
                  handleSubmit, dirty
              }) => (
                <div>
                    <input
                        type="text"
                        name='newPostText'
                        placeholder={'Wright a message...'}
                        onChange={handleChange}
                        value={values.newPostText}
                    />
                    <button
                        disabled={!dirty}
                        onClick={handleSubmit}
                        type={'submit'}
                    >
                        Add post
                    </button>
                </div>
            )}
        </Formik>
    )
}

export default NewPost;