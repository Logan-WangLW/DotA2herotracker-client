

import React from 'react';
import Menu from './menu.js';
import './header.css';
import logo from '../images/dota-2.svg';
export default class Header extends React.Component {



  render() {
    return (
      <div className="header-box">
        <div className="header-content">
          <img id="dota2_logo" src={logo} alt="dota2 logo"></img>
          <h1 className="header-title">Dota 2 Hero Tracker</h1>
        </div>

        <Menu />
      </div>
    )
  }
}