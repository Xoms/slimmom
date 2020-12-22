import React, {Component} from 'react';
import './RegistrationForm.scss';

class RegistrationForm extends Component {

    render () {
        return (
            <form className="registration-form">
                <h1>РЕГИСТРАЦИЯ</h1>
                <div className="registration-inputs">
                    <input placeholder="Имя *" name="name" type="text"/>
                    <input placeholder="Логин *" name="login" type="text"/>
                    <input placeholder="Пароль *" name="password" type="password"/>
                </div>
                <div className="registration-buttons">
                    <button>Вход</button>
                    <button type="submit">Регистрация</button>
                </div>
            </form>
        )
    }

};

export default RegistrationForm;