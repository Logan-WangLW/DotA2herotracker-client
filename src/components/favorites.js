import React from 'react';
import { connect } from 'react-redux';
import { fetchFavorites, deleteFavoriteToUser, fetchFavoritesMatchups } from '../actions/favorites';
import { fetchHeroes } from '../actions/heroes';

import './favorites.css';

export class Favorites extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchFavorites());
    this.props.dispatch(fetchHeroes());
  }

  getMatchups(id) {
    this.props.dispatch(fetchFavoritesMatchups(id))
  }
  render() {

    let favorites;
    let matchupHero;
    let bestAgainst;
    let worstAgainst;
    const username = this.props.user ? this.props.user.username : '';
    const heroesArray = [...this.props.heroes.agi, ...this.props.heroes.str, ...this.props.heroes.int]

    //best against
    if (heroesArray.length > 0) {
      bestAgainst = this.props.userFavorites.map((fav) => {
        let hero = heroesArray.find(hero => hero.id === Number(fav.heroes));
        console.log('fav.heroes', fav.heroes);
        return (
          <img className="best-against-img" src={`https://api.opendota.com${hero.img}`} alt={hero.localizedname} />
        )
      })
    }
    //worst against
    // worstAgainst = this.props.userFavorites.map
    if (heroesArray.length > 0) {
      //favorites
      favorites = this.props.userFavorites.map((fav) => {
        let hero = heroesArray.find(hero => hero.id === Number(fav.heroes));
        // matchupHero = hero.id;
        return (
          <li key={fav.id}>
            <div className="favorite-hero">
              <img className="favorite-hero-img" src={`https://api.opendota.com${hero.img}`} alt={hero.localizedname} />
              <button id="delete-favorite-button" onClick={() => this.props.dispatch(deleteFavoriteToUser(fav.id))}>Remove</button>
              <p>Best against:</p>
              <p>Worst against:</p>
            </div>
          </li>
        )
      })
    }



    return (
      <div className="favorites-box">
        <h1> {`${username}'s Favorites `}</h1>
        <p>Add heroes by going to the heroes list!</p>
        {heroesArray.length > 0 &&
          <ul className="favorite-heroes-list">
            <div className="user-favorites">{favorites}</div>
          </ul>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  userFavorites: state.favorites.userFavorites,
  authToken: state.auth.authToken,
  heroes: state.heroes.heroes,
  matchups: state.favorites.matchups
})

export default connect(mapStateToProps)(Favorites);