import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';
import { addFavoriteToUser, fetchFavorites } from '../actions/favorites';
import star from '../images/empty-star.png';
import emptyStar from '../images/star.png';

import './heroes-list.css';
class HeroesList extends React.Component {
  state = {
    addedHero: ''
  }

  componentDidMount() {
    this.props.dispatch(fetchHeroes());
    this.props.dispatch(fetchFavorites());
  }

  addFavorite(id) {
    return (this.props.dispatch(addFavoriteToUser(id)),
      this.props.dispatch(fetchFavorites()));
  }

  topFunction() {
    document.documentElement.scrollTop = 0;
  }
  render() {


    let userFavoritesArray = this.props.userFavorites.map((fav) => Number(fav.heroes));
    console.log(userFavoritesArray);

    //get state of recently added hero
    let addedHero = this.state.addedHero;

    const heroes = Object.keys(this.props.heroes).reduce((acc, current) => {
      const item = this.props.heroes[current];

      acc[current].data = item.map(hero => {
        const isFavorite = userFavoritesArray.includes(hero.id);

        if (this.props.user === null) {
          return (

            <div className="hero-box" key={hero.id}>
              <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            </div>

          )
        }

        return (
          <div className="hero-box" key={hero.id}>
            <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            <img src={isFavorite ? star : emptyStar} alt="StarImage" onClick={() => {
              // console.log('userFavoritesArray', userFavoritesArray);
              // console.log('hero.id', hero.id);
              if (!userFavoritesArray.includes(hero.id)) {
                this.addFavorite(hero.id);
                //this.addAddedHero(hero.localized_name);
                this.setState({ addedHero: hero.localized_name });
                this.topFunction();
              }
              else {
                this.setState({ addedHero: 'Hero is already a favorite' });
                this.topFunction();
              }
            }}></img>
          </div>
        )
      })

      return acc
    }, { str: { title: 'STRENGTH', data: [] }, agi: { title: 'AGILITY', data: [] }, int: { title: 'INTELLIGENCE', data: [] } })


    if (this.props.user) {
      return (

        <div className="heroes-table">
          <h2>Hero added: {addedHero}</h2>
          <div>
            {Object.keys(heroes).map(el => (
              <div key={el}>
                <h3>{heroes[el].title}</h3>
                <div>{heroes[el].data}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    return (
      <div className="heroes-table">
        <div>
          {Object.keys(heroes).map(el => (
            <div key={el}>
              <h3>{heroes[el].title}</h3>
              <div>{heroes[el].data}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes.heroes,
  user: state.auth.currentUser,
  userFavorites: state.favorites.userFavorites,
})

export default connect(mapStateToProps)(HeroesList);

