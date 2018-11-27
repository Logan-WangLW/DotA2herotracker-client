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
    if (this.props.user) {
      return (
        <nav className="nav-menu">
          <p id="home-button"><Link to={'/'}>Login/Register</Link></p>
          <p id="heroes-button"><Link to={'/heroes'}> Heroes </Link> </p>
          <p id="my-favorites-button"><Link to={'/favorites'}>My Favorites</Link></p>
          <p id="logout-button" onClick={() => this.logOut()}><Link to={'/'}>Sign Out</Link></p>
        </nav>
      )
    }
    return (
      <nav className="nav-menu">
        <p id="home-button"><Link to={'/'}>Login/Register</Link></p>
        <p id="heroes-button"><Link to={'/heroes'}> Heroes </Link> </p>
        <p id="my-favorites-button"><Link to={'/favorites'}>My Favorites</Link></p>
      </nav>
    )
  }
}
const mapStateToProps = state => ({
  user: state.auth.currentUser
})

export default connect(mapStateToProps)(Menu)