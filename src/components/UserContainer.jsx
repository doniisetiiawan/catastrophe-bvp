import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import icon from '../assets/icon.png';

class UserContainer extends React.Component {
  renderedUserEmail = false;

  getAuthor = (author) => {
    if (!this.renderedUserEmail) {
      this.renderedUserEmail = true;
      return <p className="author">{author}</p>;
    }
  };

  render() {
    return (
      <div id="UserContainer" className="inner-container">
        <Header>
          <Link to="/">
            <button type="button" className="red">
              Back To Chat
            </button>
          </Link>
        </Header>
        {this.props.messagesLoaded ? (
          <div id="message-container">
            {this.props.messages.map((msg) => {
              if (msg.user_id === this.props.userID) {
                return (
                  <div key={msg.id} className="message">
                    {this.getAuthor(msg.author)}
                    <p>{msg.msg}</p>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <div id="loading-container">
            <img src={icon} alt="logo" id="loader" />
          </div>
        )}
      </div>
    );
  }
}

export default UserContainer;

UserContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  messagesLoaded: PropTypes.bool.isRequired,
  userID: PropTypes.string.isRequired,
};

UserContainer.defaultProps = {
  messages: [],
};
