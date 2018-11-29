import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';
import { fetchFavoritesMatchups } from '../actions/favorites';

import './more-info.css';

export class Moreinfo extends React.Component {
  state = {
    hero: null
  }
  componentDidMount() {
    this.getHero()
    this.props.dispatch(fetchFavoritesMatchups(this.props.match.params.heroId))
    this.props.dispatch(fetchHeroes())
  }

  getHero = () => {
    fetch(`http://localhost:8080/heroes/${this.props.match.params.heroId}`).then(res => res.json())
      .then(hero => {
        this.setState({
          hero
        })
      })
  }

  getMatchups(id) {
    this.props.dispatch(fetchFavoritesMatchups(id))
  }

  render() {
    //check if theres an object in state.hero
    if (!this.state.hero) {
      return (
        <h1>loading</h1>
      )
    }
    //heroesArray
    const heroesArray = [...this.props.heroes.agi, ...this.props.heroes.str, ...this.props.heroes.int]
    //get hero roles
    let heroRoles = [];
    heroRoles = this.state.hero.roles.map((roles, index) => {
      return (
        <li key={index}>
          {roles}
        </li>
      )
    });
    //get highwinrate and lowwinrate
    let highwinrateid = [];
    let lowwinrateid = [];
    if (this.props.matchups.length > 0) {
      highwinrateid.push(this.props.matchups[0][0].highwinrateid);
      lowwinrateid.push(this.props.matchups[0][0].lowwinrateid);
    }

    //best against
    let bestAgainst;
    if (heroesArray.length > 0) {
      bestAgainst = highwinrateid.map(hero => {

        let heroAgainst = heroesArray.find(heroId => heroId.id === hero);
        return (
          <li key={hero}>
            <div className="best-against">
              <img className="best-against-img" src={`https://api.opendota.com${heroAgainst.img}`} alt={heroAgainst.localized_name} />
            </div>
          </li>
        )
      })
    }
    let worstAgainst;
    if (heroesArray.length > 0) {
      worstAgainst = lowwinrateid.map(hero => {

        let heroAgainst = heroesArray.find(heroId => heroId.id === hero);
        return (
          <li key={hero}>
            <div className="worst-against">
              <img className="worst-against-img" src={`https://api.opendota.com${heroAgainst.img}`} alt={heroAgainst.localized_name} />
            </div>
          </li>
        )
      })
    }


    return (
      <div className="hero-info-box">
        <h1>{this.state.hero.localized_name}</h1>
        <img className="favorite-hero-img" src={`https://api.opendota.com${this.state.hero.img}`} alt={this.state.hero.localizedname} />
        <ul className="roles-list">Roles:{heroRoles}</ul>
        <ul className="winrate-heroes">Best against:{bestAgainst}</ul>
        <ul className="winrate-heroes">Worst against:{worstAgainst}</ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  heroes: state.heroes.heroes,
  matchups: state.favorites.matchups
})

export default connect(mapStateToProps)(Moreinfo);