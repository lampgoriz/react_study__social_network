import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <Posts postsData={props.profilePage.postsData}
                   newPostText={props.profilePage.newPostText}
                   dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;