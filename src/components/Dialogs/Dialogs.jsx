import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Formik} from "formik";
import * as yup from "yup";

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

    let addMessage = (newMessageText) => {
        props.addMessage(newMessageText);
    }

    let updateMessageText = (e) => {
        let text = e.currentTarget.value;
        props.updateMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>

            <div>
                {messagesElements}
                <MessagesForm addMessage={addMessage}/>
            </div>
        </div>
    );
}

const MessagesForm = (props) => {
    const validationScheme = yup.object().shape({
        // newMessage: yup.string().required('required field'),
        // password: yup.string().required('required field')
    })

    return (
        <Formik
            initialValues={{
                newMessage: '',
            }}
            validateOnBlur
            onSubmit={(values) => props.addMessage(values.newMessage)}
            validationSchema={validationScheme}
        >
            {({
                  values, handleChange,
                  handleSubmit, dirty
              }) => (
                <div>
                    <p>
                        <input
                            className={s.formInput}
                            type="text"
                            name='newMessage'
                            onChange={handleChange}
                            value={values.newMessage}
                        />
                    </p>
                    <button
                        className={s.login_submit}
                        disabled={!dirty}
                        onClick={handleSubmit}
                        type={'submit'}
                    >Send
                    </button>
                </div>
            )}
        </Formik>
    )
}


export default Dialogs;