import React, { Component } from 'react';
import Firebase from 'firebase';
import Header from './header';
import config from '../services/config';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', error: '' };
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    }
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: '' });
    if (this.state.email && this.state.password) {
      this.login();
    } else {
      this.setState({
        error: 'Please fill in both fields.',
      });
    }
  };

  login = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(
        this.state.email,
        this.state.password,
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          this.signup();
        } else {
          this.setState({ error: 'Error logging in.' });
        }
      });
  };

  signup = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(
        this.state.email,
        this.state.password,
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: 'Error signing up.' });
      });
  };

  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <Header />
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
          <p className="error">{this.state.error}</p>
          <button className="red light" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
