import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img
                src="https://www.androidauthority.com/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg"
                alt="Profile background image" className={s.profileBg}/>
            <div >
                PROFILE INFO
            </div>

        </div>
    );
}

export default ProfileInfo;