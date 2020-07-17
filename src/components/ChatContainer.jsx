import React, { Component } from 'react';
import Header from './header';
import { auth } from '../services/firebase';

class ChatContainer extends Component {
  handleLogout = () => {
    auth.signOut();
  };

  render() {
    return (
      <div id="ChatContainer" className="inner-container">
        <Header>
          <button
            type="button"
            className="red"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </Header>
        <div id="chat-input">
          <textarea placeholder="Add your message..." />
          <button type="button">
            <svg viewBox="0 0 24 24">
              <path
                fill="#424242"
                d="M2,21L23,12L2,3V10L17,12L2,14V21Z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default ChatContainer;
