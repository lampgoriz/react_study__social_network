import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer />
        </div>
    );
}

export default Profile;