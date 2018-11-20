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
      <div>
        <div>
          <img className="dota2_logo" src="https://image.flaticon.com/icons/svg/588/588267.svg"></img>
          <h1 className="title">Hero Tracker</h1>
        </div>
        <div>
          <button
            type="button"
            onClick={() => this.toggleMenu()}>Menu</button>
        </div>
        {!this.state.showMenu && <Menu />}
      </div>
    )
  }
}