import React from "react";
import {addMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

const mstp = (state) => {
    return {
        state: state.dialogsPage,
    }
}

export default compose(
    connect(mstp, {addMessage}),
    withAuthRedirect,
)(Dialogs);