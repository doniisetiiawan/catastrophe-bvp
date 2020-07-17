import React from 'react';
import LoginContainer from './loginContainer';
import './App.css';
import { auth } from '../services/firebase';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  };

  render() {
    return (
      <div id="container">
        <LoginContainer />
      </div>
    );
  }
}

export default App;
