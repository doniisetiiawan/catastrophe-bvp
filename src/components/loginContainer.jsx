import React, { Component } from 'react';
import icon from '../assets/icon.png';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <div id="Header">
          <img src={icon} alt="logo" />
          <h1>Chatastrophe</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Sign in or sign up by entering your email and
            password.
          </p>
          <input
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
            placeholder="Your email"
          />
          <input
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            placeholder="Your password"
          />
          <button className="red light" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
