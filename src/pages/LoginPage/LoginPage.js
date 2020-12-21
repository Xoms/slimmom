import React, {Component} from "react"
import {connect} from "react-redux"
import {authOperations, authSelectors} from "../../redux/auth"
import getError from "../../redux/global/globalSelectors"
import css from "./LoginPage.module.scss"

class LoginPage extends Component {
  state = {
    login: "",
    password: "",
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onLogin({...this.state})
    this.setState({name: "", login: "", password: ""})
  }

  render() {
    const {login, password} = this.state
    return (
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

          <button type="submit" className={css.loginBtn}>
            Вход
          </button>
          <button type="submit" className={css.loginBtn}>
            Регистрация
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // error: authSelectors.getError(state),
})
const mapDispatchToProps = {logIn: authOperations.logIn}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
