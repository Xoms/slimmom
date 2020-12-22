import React, {Component} from 'react';
import Button from '../shared/Button/Button';
import ops from '../../redux/auth/authOperations';
import {connect} from 'react-redux';
import './RegistrationForm.scss';
import Notification from "../shared/Notification/Notification";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required!"),
    email: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required!"),
    password: Yup.string().required("Required!").min(8, "Too short!"),
});

class RegistrationForm extends Component {
    
    handleClick = () => {
        this.props.history.push('/login')
    };

    handleSubmit = (values) => {
        this.props.register(values)
    };

    render () {
        return (
<<<<<<< HEAD

            <>
                <Formik initialValues={{email: "", password: "", username: ""}} onSubmit={this.handleSubmit} validationSchema={RegisterSchema}>
                <Form className="registration-form">
                    <h1>РЕГИСТРАЦИЯ</h1>
                    <div className="registration-inputs">
                        <label className="formLabel">
                            <Field className="input" type="text" name="username" placeholder="Имя *"/>
                            <ErrorMessage className='validField' name="username" component="span" />
                        </label>
                        <label className="formLabel">
                            <Field className="input" type="email" name="email" placeholder="E-mail *"/>
                            <ErrorMessage className='validField' name="email" component="span" />
                        </label>
                        <label className="formLabel">
                            <Field className="input" type="password" name="password" placeholder="Пароль *"/>
                            <ErrorMessage className='validField' name="password" component="span" />
                        </label>
                    </div>
                    <div className="registration-buttons">
                        <Button clickHandler={this.handleClick} marker="secondary" text="Вход"/>
                        <Button marker="primary" text="Регистрация"/>
                    </div>
                </Form>
                </Formik>
            </>
        )
    }

};

const mapDispatchToProps = {
    register: ops.register,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);