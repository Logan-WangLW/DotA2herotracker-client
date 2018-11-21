import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';

class HeroesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
  }
  render() {
    // console.log(this.props.heroes);

    // console.log(this.props.heroes[0]);
    let strHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'str').map((hero, index) => {

      // let heroImgArray = this.props.heroes.map(hero => `https://api.opendota.com${hero.img}`)

      return (
        <li key={index} id={hero.id}>
          <div>
            <label>{hero.localized_name}</label>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.id}></img>
          </div>
        </li >
      )
    });
    let agiHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'agi').map((hero, index) => {

      // let heroImgArray = this.props.heroes.map(hero => `https://api.opendota.com${hero.img}`)

      return (
        <li key={index} id={hero.id}>
          <div>
            <label>{hero.localized_name}</label>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.id}></img>
          </div>
        </li >
      )
    });
    let intHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'int').map((hero, index) => {

      // let heroImgArray = this.props.heroes.map(hero => `https://api.opendota.com${hero.img}`)

      return (
        <li key={index} id={hero.id}>
          <div>
            <label>{hero.localized_name}</label>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.id}></img>
          </div>
        </li >
      )
    });

    return (
      <ul>
        <div>
          <h3>STRENGTH</h3>
          {strHeroes}
        </div>
        <div>
          <h3>AGILITY</h3>
          {agiHeroes}
        </div>
        <div>
          <h3>INTELLIGENCE</h3>
          {intHeroes}
        </div>
      </ul >
    )
  }

}

const mapStateToProps = state => ({
  heroes: state.heroes.heroes,
  user: state.auth.currentUser
})

export default connect(mapStateToProps)(HeroesList);