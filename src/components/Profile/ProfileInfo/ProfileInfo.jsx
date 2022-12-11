import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div>
                <img src={props.profileInfo.photos.large} alt=""/>
                <p className={s.name}>{props.profileInfo.fullName}</p>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    );
}

export default ProfileInfo;