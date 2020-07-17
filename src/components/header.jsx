import React from 'react';
import icon from '../assets/icon.png';

export default function Header() {
  return (
    <div id="Header">
      <img src={icon} alt="logo" />
      <h1>Chatastrophe</h1>
    </div>
  );
}
