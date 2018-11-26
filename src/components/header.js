import React from 'react';
import Menu from './menu.js';
import './header.css';
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
          <img id="dota2_logo" src="https://image.flaticon.com/icons/svg/588/588267.svg" alt="dota2 logo"></img>
          <h1 id="header-title">Hero Tracker</h1>
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