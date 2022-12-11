import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData
        .map(d =>
            <Dialog
                name={d.name} id={d.id} key={d.id}
                img={d.img}
            />);

    let messagesElements = props.state.messagesData
        .map(m =>
            <Message
                message={m.message} id={m.id} key={m.id}

            />);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateMessageText = () => {
        let text = newMessage.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <input onChange={updateMessageText}
                       type="text"
                       ref={newMessage}
                       value={props.state.newMessageText}
                       placeholder={'Wright a message...'}
                />
                <input type="button"
                       onClick={addMessage}
                       value={'Send'}
                />
            </div>
        </div>
    );
}

export default Dialogs;