import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';
import { fetchFavoritesMatchups } from '../actions/favorites';
import { API_BASE_URL } from '../config';
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
    fetch(`${API_BASE_URL}/heroes/${this.props.match.params.heroId}`).then(res => res.json())
      .then(hero => {
        this.setState({
          hero
        })
      })
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
    let bestAgainst;

    if (heroesArray.length > 0) {
      //best against
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
    } else {
      bestAgainst = 'loading';
    }
    //worst against
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
    } else {
      worstAgainst = 'loading';
    }

    return (
      <div className="hero-info-box">
        <div id="hero-info-box-left">
          <h1>{this.state.hero.localized_name}</h1>

          <img id="moreinfo-hero-img" src={`https://api.opendota.com${this.state.hero.img}`} alt={this.state.hero.localizedname} />
          <ul className="roles-list">Roles:{heroRoles}</ul>
        </div>
        <div id="hero-info-box-right">
          <ul className="winrate-heroes">Best against:{bestAgainst}</ul>
          <ul className="winrate-heroes">Worst against:{worstAgainst}</ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  heroes: state.heroes.heroes,
  matchups: state.favorites.matchups,
  loading: state.favorites.loading
})

export default connect(mapStateToProps)(Moreinfo);