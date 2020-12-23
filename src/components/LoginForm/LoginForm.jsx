import React from "react"
import {connect} from "react-redux"
import {authOperations, authActions} from "../../redux/auth"
import globalSelectors from "../../redux/global/globalSelectors"
import Notification from "../shared/Notification/Notification"
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import Button from "../shared/Button"
import css from "./LoginForm.module.scss"

const SignupSchema = Yup.object().shape({
  email: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  password: Yup.string().required("Required").min(8, "Too Short!"),
})

const LoginForm = (props) => {
  const handleClick = () => {
    props.history.push("/register")
  }
  const handleSubmit = (values) => {
    props.login(values)
  }
  console.log(props.test);
  if (props.error) {
    setTimeout(() => {
      props.clearError()
    }, 3000)
  }
  return (
    <>
      <Notification error={Boolean(props.error)} message="There is no such account!"></Notification>
      <div className={css.loginPage}>
        <h2 className={css.loginTitle}>Вход</h2>

        <Formik initialValues={{email: "", password: ""}} onSubmit={handleSubmit} validationSchema={SignupSchema}>
          <Form className={css.loginForm}>
            <label className={css.formLabel}>
              <Field className={css.login} type="email" name="email" placeholder="Логин *" />
              <ErrorMessage className={css.validField} name="email" component="span" />
            </label>

            <label className={css.formLabel}>
              <Field className={css.password} type="password" name="password" placeholder="Пароль *" />
              <ErrorMessage className={css.validField} name="password" component="span" />
            </label>

            <div className={css.buttons}>
              <Button type="submit"> Вход </Button>
              <Button className="secondary-button" clickHandler={handleClick}>
                Регистрация
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  error: globalSelectors.getError(state),
  test: state
})
const mapDispatchToProps = {
  loginError: authActions.loginError,
  clearError: authActions.clearError,
  login: authOperations.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
