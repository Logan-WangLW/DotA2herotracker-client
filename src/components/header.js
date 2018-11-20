import React from 'react';
import Menu from './menu.js';

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
          <h1>DotA2 Hero Tracker</h1>
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