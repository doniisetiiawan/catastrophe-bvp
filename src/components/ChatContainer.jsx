import React, { Component } from 'react';
import Header from './header';
import { auth } from '../services/firebase';

class ChatContainer extends Component {
  handleLogout = () => {
    auth.signOut();
  };

  render() {
    return (
      <div id="ChatContainer">
        <Header>
          <button
            type="button"
            className="red"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </Header>
        <h1>Hello from ChatContainer</h1>
      </div>
    );
  }
}

export default ChatContainer;
