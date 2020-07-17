/* eslint-disable react/no-unused-state */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import LoginContainer from './loginContainer';
import { auth, db } from '../services/firebase';
import ChatContainer from './ChatContainer';
import UserContainer from './UserContainer';
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

  handleSubmitMessage = (msg) => {
    // Send to database
    const data = {
      author: this.state.user.email,
      msg,
      timestamp: Date.now(),
      user_id: this.state.user.uid,
    };

    db.ref('messages/').push(data);
  };

  render() {
    return (
      <div id="container">
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route
            exact
            path="/"
            render={() => (
              <ChatContainer
                onSubmit={this.handleSubmitMessage}
              />
            )}
          />
          <Route
            path="/users/:id"
            component={UserContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
