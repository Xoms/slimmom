import React, {Component} from "react"
import {connect} from "react-redux"
import {authOperations, authActions} from "../../redux/auth"
import globalSelectors from "../../redux/global/globalSelectors"
import Notification from "../shared/Notification/Notification"
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import css from "./LoginForm.module.scss";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('Required')
  .min(9, 'Too Short!'),
});

const LoginForm = (props) => {
  const handleSubmit = (values) => {
    // this.props.login(values)
    // this.setState({name: "", login: "", password: ""})
    console.log(values)
    if (this.props.error) {
      setTimeout(() => {
        this.props.loginError()
      }, 3000)
    }
  }

  return (
    <>
      <Notification error={Boolean(props.error)} message="There is no such account!"></Notification>
      <div className={css.loginPage}>
        <h2 className={css.loginTitle}>Вход</h2>

        <Formik initialValues={{login: "", password: ""}}

         onSubmit={handleSubmit}
         validationSchema={SignupSchema}>

          <Form className={css.loginForm}>
            <label className={css.formLabel}>
              <Field
                className={css.login}
                type="text"
                name="login"
                // value={login}
                // onChange={this.handleChange}
                placeholder="Логин *"
              />
              <ErrorMessage className={css.errorLogin} name="login" component="span"/>
            </label>

            <label className={css.formLabel}>
              <Field
                className={css.password}
                type="password"
                name="password"
                // value={password}
                // onChange={this.handleChange}
                placeholder="Пароль *"
              />
              <ErrorMessage className={css.errorLogin} name="password" component="span"/>
            </label>

            <div className={css.buttons}>
              <button type="submit" className={css.loginBtn}>
                Вход
              </button>
              <button type="submit" className={css.loginBtn}>
                Регистрация
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  error: globalSelectors.getError(state),
})
const mapDispatchToProps = {loginError: authActions.loginError, logIn: authOperations.logIn}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
