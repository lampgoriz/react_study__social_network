import React from "react";
import s from './ProfileInfo.module.css'
import {setStatus} from "../../../Redux/profile-reducer";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        currentStatus: this.props.status
    }

    _activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    _deactivateEditMode = (e) => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.currentStatus);
    }

    _updateStatus(e) {
        setStatus({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className={s.profileStatus}>
                {this.state.editMode
                    ? <input autoFocus onChange={this._updateStatus} onBlur={this._deactivateEditMode} type="text"
                             value={this.state.status}/>
                    : <p onDoubleClick={this._activateEditMode} className={s.aboutMe}>{this.props.status || '-----'}</p>
                }
            </div>
        );
    }
}

export default ProfileStatus;