import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';
import { addFavoriteToUser, fetchFavorites, deleteFavoriteToUser } from '../actions/favorites';
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

    // let currentUser = this.props.user;
    // console.log(currentUser);
    // let favoritesArray = this.props.userFavorites;
    // console.log(favoritesArray);

    let userFavoritesArray = this.props.userFavorites.map((fav) => Number(fav.heroes));
    console.log(userFavoritesArray);

    //get state of recently added hero
    let addedHero = this.state.addedHero;

    let strHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'str').map((hero, index) => {
      if (this.props.user === null) {
        return (

          <div className="hero-box" key={index} id={hero.id}>
            <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
          </div>

        )
      }
      return (
        <div className="hero-box" key={index} id={hero.id}>
          <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
          <img src={star} alt="StarImage" onClick={() => {
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
    });

    let agiHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'agi').map((hero, index) => {
      if (this.props.user === null) {
        return (

          <div className="hero-box" key={index} id={hero.id}>
            <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
          </div>
        )
      }
      return (

        <div className="hero-box" key={index} id={hero.id}>
          <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
          <img src={star} alt="StarImage" onClick={() => {
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
    });

    let intHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'int').map((hero, index) => {
      if (this.props.user === null) {
        return (

          <div className="hero-box" key={index} id={hero.id}>
            <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
          </div>

        )
      }
      return (
        <div className="hero-box" key={index} id={hero.id}>
          <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
          <img src={star} alt="StarImage" onClick={() => {
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
    });


    if (this.props.user) {
      return (

        <div className="heroes-table">
          <h2>Hero added: {addedHero}</h2>
          <div>
            <h3>STRENGTH</h3>
            <div>{strHeroes}</div>
            <h3>AGILITY</h3>
            <div>{agiHeroes}</div>
            <h3>INTELLIGENCE</h3>
            <div>{intHeroes}</div>
          </div>
        </div>
      )
    }
    return (
      <div className="heroes-table">
        <div>
          <h3>STRENGTH</h3>
          <div>{strHeroes}</div>
          <h3>AGILITY</h3>
          <div>{agiHeroes}</div>
          <h3>INTELLIGENCE</h3>
          <div>{intHeroes}</div>
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

//console.log('addedHero', addedHero)

    //star logic
    // let favorites;
    // if (this.props.userFavorites.length > 0) {
    //   favorites = this.props.userFavorites.map((hero, index) => {
    //     if (hero.id === Number(hero.heroes)) {
    //       return (
    //         <div className="hero-box" key={index} id={hero.id}>
    //           <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
    //           <img src={star} alt="star" onClick={() => {
    //             this.addFavorite(hero.id);
    //             this.topFunction();
    //             this.props.dispatch(deleteFavoriteToUser(hero.id))
    //           }}></img>
    //         </div>
    //       )
    //     }
    //     return (

    //       <div className="hero-box" key={index} id={hero.id}>
    //         <img className="hero-image" src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
    //         <img src={emptyStar} alt="emptyStarImage" onClick={() => {
    //           this.addFavorite(hero.id);
    //           this.addAddedHero(hero.localized_name);
    //           this.topFunction();
    //         }}></img>
    //       </div>

    //     )
    //   }
    //   )
    // }