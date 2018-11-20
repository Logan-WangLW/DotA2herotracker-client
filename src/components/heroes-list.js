import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';

class HeroesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
  }
  render() {
    console.log(this.props.heroes);
    //update img to include link
    console.log(this.props.heroes[0]);
    const heroes = this.props.heroes.map((hero, index) => {

      // let heroImgArray = this.props.heroes.map(hero => `https://api.opendota.com${hero.img}`)

      return (
        <li key={index} id={hero.id}>
          <div>
            <label>{hero.localized_name}</label>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.id}></img>
          </div>
        </li >
      )
    })
    return (
      <ul>
        {heroes}
      </ul >
    )
  }

}

const mapStateToProps = state => ({
  heroes: state.heroes.heroes,
  user: state.auth.currentUser
})

export default connect(mapStateToProps)(HeroesList);