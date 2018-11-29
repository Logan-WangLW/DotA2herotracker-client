import React from 'react';
import Header from './components/header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import LandingInfo from './components/landing-info';
import { connect } from 'react-redux';
import Favorites from './components/favorites';
import HeroesList from './components/heroes-list';
import MoreInfo from './components/more-info';

class Home extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path='/' component={LandingInfo} />
          <Route exact path='/heroes' component={HeroesList} />
          <Route exact path='/favorites' render={(props) => {
            return this.props.authToken ? (<Favorites {...props} />) : (<Redirect to="/" />)
          }}
          />
          <Route exact path='/moreinfo/:heroId' component={MoreInfo} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
})

export default connect(mapStateToProps)(Home);