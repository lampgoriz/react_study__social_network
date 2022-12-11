import React from "react";
import {connect} from "react-redux";
import {authMe, LogOut} from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} LogOut={this.props.LogOut}/>
    }
}

const mstp = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mstp, {authMe, LogOut})(HeaderContainer);