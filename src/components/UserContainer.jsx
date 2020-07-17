import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

function UserContainer(props) {
  return (
    <div id="UserContainer">
      <Header>
        <Link to="/">
          <button type="button" className="red">
            Back To Chat
          </button>
        </Link>
      </Header>
      <h1>
        Hello from UserContainer for User{' '}
        {props.match.params.id}
      </h1>
    </div>
  );
}

export default UserContainer;

UserContainer.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
