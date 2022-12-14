import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";

let mstp = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login'/>
            return <Component {...this.props}/>
        }
    }
    let connectedAuthRedirectComponent = connect(mstp)(RedirectComponent);
    return connectedAuthRedirectComponent;
}

export default connect(mstp, {})(withAuthRedirect);