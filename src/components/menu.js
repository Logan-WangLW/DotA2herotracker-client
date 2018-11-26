import React from 'react';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth.js';
import { clearAuthToken } from '../local-storage.js';
import { connect } from 'react-redux';
import './menu.css';

export class Menu extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <nav className="nav-menu">
        <p><Link to={'/'}>Home</Link></p>
        <p><Link to={'/heroes'}> Heroes </Link> </p>
        <p><Link to={'/favorites'}>My Favorites</Link></p>

        <button
          onClick={() => this.logOut()}>sign out</button>
      </nav>
    )

  }
}

export default connect()(Menu)