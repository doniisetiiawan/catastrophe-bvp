import PropTypes from 'prop-types';
import React from 'react';
import icon from '../assets/icon.png';

export default function Header(props) {
  return (
    <div id="Header">
      <img src={icon} alt="logo" />
      <h1>Chatastrophe</h1>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.element,
};

Header.defaultProps = {
  children: null,
};
