

import React from 'react';
import Menu from './menu.js';
import './header.css';
import logo from '../images/dota-2.svg';
export default class Header extends React.Component {

  state = {
    showMenu: true
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className="header-box">
        <div className="header-content">
          <img id="dota2_logo" src={logo} alt="dota2 logo"></img>
          <h1 className="header-title">Hero Tracker</h1>
        </div>
        <div className="menu-button-box">
          <button
            id="menu-button"
            type="button"
            onClick={() => this.toggleMenu()}>Menu</button>
        </div>
        {!this.state.showMenu && <Menu />}
      </div>
    )
  }
}