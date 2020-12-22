import React, {Component} from 'react';
import Button from '../shared/Button/Button';
import ops from '../../redux/auth/authOperations';
import {connect} from 'react-redux';
import './RegistrationForm.scss';

class RegistrationForm extends Component {
    state = {
        email: '',
        password: '',
        username: '',
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value})
    };

    handleClick = () => {
        this.props.history.push('/login')
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.register(({...this.state}));
        this.setState({
            email: '',
            password: '',
            username: '',
        });
        this.props.history.push('/login');
    };

    render () {
        return (
            <form onSubmit={this.handleSubmit} className="registration-form">
                <h1>РЕГИСТРАЦИЯ</h1>
                <div className="registration-inputs">
                    <input onChange={this.handleChange} value={this.state.username} placeholder="Имя *" name="username" type="text"/>
                    <input onChange={this.handleChange} value={this.state.email} placeholder="E-mail *" name="email" type="text"/>
                    <input onChange={this.handleChange} value={this.state.password} placeholder="Пароль *" name="password" type="password"/>
                </div>
                <div className="registration-buttons">
                    <Button clickHandler={this.handleClick} marker="secondary" text="Вход"/>
                    <Button marker="primary" text="Регистрация"/>
                </div>
            </form>
        )
    }

};

const mapDispatchToProps = {
    register: ops.register,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);