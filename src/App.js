import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingInfo from './components/landing-info';
import { connect } from 'react-redux';
import Favorites from './components/favorites';
import HeroesList from './components/heroes-list';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={LandingInfo} />
          <Route exact path='/heroes' component={HeroesList} />
          <Route exact path='/favorites' component={Favorites} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
})

export default connect(mapStateToProps)(App);