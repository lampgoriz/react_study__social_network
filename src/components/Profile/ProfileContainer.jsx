import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, setCurrentProfileId, updateStatus} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.router.params.userId ? this.props.router.params.userId : this.props.meId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile profileInfo={this.props.profileInfo}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mstp = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        currentProfileId: state.profilePage.currentProfileId,
        meId: state.auth.userId,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mstp,{setCurrentProfileId, getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
