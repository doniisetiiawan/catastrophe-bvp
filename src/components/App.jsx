import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoginContainer from './loginContainer';
import { auth } from '../services/firebase';
import ChatContainer from './ChatContainer';
import './App.css';

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
      } else {
        this.props.history.push('/login');
      }
    });
  };

  render() {
    return (
      <div id="container">
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/" component={ChatContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
