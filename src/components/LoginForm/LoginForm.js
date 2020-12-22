import React, {Component} from "react"
import {connect} from "react-redux"
import {authOperations, authActions} from "../../redux/auth"
import globalSelectors from "../../redux/global/globalSelectors"
import css from "./LoginForm.module.scss"

class LoginForm extends Component {
  state = {
    login: "",
    password: "",
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login({...this.state})
    this.setState({name: "", login: "", password: ""})
  }

  render() {
    const {login, password} = this.state
    // if (this.props.error) {
    //   setTimeout(() => {
    //     this.props.loginError()
    //   }, 3000)
    // }
    return (
      <>
        {/* <Notification error={Boolean(this.props.error)} message="There is no such account!"></Notification> */}
        <div className={css.loginPage}>
          <h2 className={css.loginTitle}>Вход</h2>

          <form onSubmit={this.handleSubmit} className={css.loginForm}>
            <label className={css.formLabel}>
              <input
                className={css.login}
                type="text"
                name="login"
                value={login}
                onChange={this.handleChange}
                placeholder="Логин *"
              />
            </label>

            <label className={css.formLabel}>
              <input
                className={css.password}
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Пароль *"
              />
            </label>

            <div className={css.buttons}>
              <button type="submit" className={css.loginBtn}>
                Вход
              </button>
              <button type="submit" className={css.loginBtn}>
                Регистрация
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  error: globalSelectors.getError(state),
})
const mapDispatchToProps = {loginError: authActions.loginError, logIn: authOperations.logIn}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
