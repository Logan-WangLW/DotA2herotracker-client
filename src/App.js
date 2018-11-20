import React from 'react';
import Header from './components/header.js';
import HeroesList from './components/heroes-list.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LandingPage from './components/landing.js';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <HeroesList />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
})

export default connect(mapStateToProps)(App);