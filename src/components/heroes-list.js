import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';
import { addFavoriteToUser } from '../actions/favorites';
class HeroesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
  }

  showInfo() {
    this.setState({
      isHidden: !this.props.isHidden
    })
  }
  addFavorite(id) {
    return this.props.dispatch(addFavoriteToUser(id));
  }


  render() {
    // console.log(this.props.heroes);

    // console.log(this.props.heroes[0]);
    let strHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'str').map((hero, index) => {
      return (
        <li key={index} id={hero.id}>
          <div >
            <label >{hero.localized_name}</label>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.id} ></img>
            <button onClick={() => this.addFavorite(hero.id)}>Add to my favorites</button>
          </div>
        </li >
      )
    });
    let agiHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'agi').map((hero, index) => {
      return (
        <li key={index} id={hero.id}>
          <div>
            <label>{hero.localized_name}</label>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.id} ></img>
          </div>
        </li >
      )
    });
    let intHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'int').map((hero, index) => {
      return (
        <li key={index} id={hero.id}>
          <div>
            <label>{hero.localized_name}</label>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.id} ></img>
          </div>
        </li >
      )
    });

    return (


      <ul>
        <h2>Heroes List</h2>
        <button onClick={() => this.addFavorite()}>Add to my favorites</button>
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
  user: state.auth.currentUser,
  isHidden: true
})

export default connect(mapStateToProps)(HeroesList);