import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from './header';
import { auth } from '../services/firebase';

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMessage: '',
    };
  }

  handleLogout = () => {
    auth.signOut();
  };

  handleInputChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.newMessage);
    this.setState({ newMessage: '' });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit();
    }
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
        <div id="message-container" />
        <div id="chat-input">
          <textarea
            placeholder="Add your message..."
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            value={this.state.newMessage}
          />
          <button
            onClick={this.handleSubmit}
            type="button"
          >
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

ChatContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
