import React from "react";
import Posts from "./Posts";
import {addPost} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

const mstp = (state) => {
    return {
        state: state.profilePage,
    }
}

const PostsContainer = connect(mstp, {addPost})(Posts)


export default PostsContainer;