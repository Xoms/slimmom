import React, {Component} from "react"
import {connect} from "react-redux"
import {authOperations, authSelectors} from "../../redux/auth"
import authActions from "../../redux/auth"

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
      <div>
        <h1>Вход</h1>

        <form onSubmit={this.handleSubmit} className="loginForm">
          <label className="loginLabel">
          Логин *
            <input type="text" name="login" value={login} onChange={this.handleChange} />
          </label>

          <label className="loginForm">
          Пароль *
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: authSelectors.getErrorMessage(state),
})
const mapDispatchToProps = {logIn: authOperations.logIn } 

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
