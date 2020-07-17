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
      messages: [],
      messagesLoaded: false,
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

    db.ref('messages').on('value', (snapshot) => {
      this.onMessage(snapshot);
      if (!this.state.messagesLoaded) {
        this.setState({ messagesLoaded: true });
      }
    });
  };

  onMessage = (snapshot) => {
    const messages = Object.keys(snapshot.val()).map(
      (key) => {
        const msg = snapshot.val()[key];
        msg.id = key;
        return msg;
      },
    );
    this.setState({ messages });
  };

  handleSubmitMessage = (msg) => {
    // Send to database
    const data = {
      author: this.state.user.email,
      msg,
      timestamp: Date.now(),
      user_id: this.state.user.uid,
    };

    db.ref('messages').push(data);
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
                messagesLoaded={this.state.messagesLoaded}
                onSubmit={this.handleSubmitMessage}
                user={this.state.user}
                messages={this.state.messages}
              />
            )}
          />
          <Route
            path="/users/:id"
            render={({ match }) => (
              <UserContainer
                messages={this.state.messages}
                messagesLoaded={this.state.messagesLoaded}
                userID={match.params.id}
              />
            )}
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
