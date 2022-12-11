import React from "react";
import s from './Login.module.css'
import {Formik} from "formik";
import * as yup from 'yup';
import {connect} from "react-redux";
import {LogIn, LogOut} from "../../Redux/auth-reducer";
import {Navigate} from "react-router";

const Login = (props) => {
    const validationScheme = yup.object().shape({
        email: yup.string().required('required field'),
        password: yup.string().required('required field')
    })

    if (props.isAuth) return <Navigate to='/profile/*'/>

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                validateOnBlur
                onSubmit={(values, {setSubmitting, setStatus}) => {
                    props.LogIn(values.email, values.password, values.rememberMe, setStatus);
                    setSubmitting(false);
                }}
                validationSchema={validationScheme}
            >
                {({
                      values, errors,
                      touched, handleChange,
                      handleBlur, isValid,
                      handleSubmit, dirty, status, isSubmitting
                  }) => (
                    <form>
                        <div>
                            <p>
                                <label htmlFor="email">Email</label>
                                <input
                                    className={s.formInput}
                                    type="text"
                                    name='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </p>
                            {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
                            <p>
                                <label htmlFor="password">Password</label>
                                <input
                                    className={s.formInput}
                                    type="password"
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </p>
                            {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
                            <p>
                                <label htmlFor="password">Remember Me</label>
                                <input
                                    className={s.formInput}
                                    type="checkbox"
                                    name='rememberMe'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.rememberMe}
                                />
                            </p>
                            <button
                                className={s.login_submit}
                                disabled={!isValid && !dirty || isSubmitting}
                                onClick={handleSubmit}
                                type={'submit'}
                            >Log in
                            </button>
                            {status && <div className={s.error}>{status}</div>}
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

const mstp = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mstp, {LogIn, LogOut})(Login);
