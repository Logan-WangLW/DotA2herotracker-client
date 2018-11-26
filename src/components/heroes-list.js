import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';
import { addFavoriteToUser } from '../actions/favorites';
import './heroes-list.css';
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

    let strHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'str').map((hero, index) => {
      if (this.props.user === null) {
        return (
          <td key={index} id={hero.id}>
            <div >
              <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            </div>
          </td >
        )
      }
      return (
        <td key={index} id={hero.id}>
          <div >
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            <button onClick={() => this.addFavorite(hero.id)}>Add to my favorites</button>
          </div>
        </td >
      )
    });

    let agiHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'agi').map((hero, index) => {
      if (this.props.user === null) {
        return (
          <td key={index} id={hero.id}>
            <div >
              <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            </div>
          </td >
        )
      }
      return (
        <td key={index} id={hero.id}>
          <div>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            <button onClick={() => this.addFavorite(hero.id)}>Add to my favorites</button>
          </div>
        </td >
      )
    });

    let intHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'int').map((hero, index) => {
      if (this.props.user === null) {
        return (
          <td key={index} id={hero.id}>
            <div >
              <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            </div>
          </td >
        )
      }
      return (
        <td key={index} id={hero.id}>
          <div>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            <button onClick={() => this.addFavorite(hero.id)}>Add to my favorites</button>
          </div>
        </td >
      )
    });


    return (

      <table className="heroes-table">
        <tbody>
          <tr>
            <th>STRENGTH</th>
          </tr>
          <tr>{strHeroes}</tr>
          <tr>
            <th>AGILITY</th>
          </tr>
          <tr>{agiHeroes}</tr>
          <tr>
            <th>INTELLIGENCE</th>
          </tr>
          <tr>{intHeroes}</tr>
        </tbody>
      </table>


    )
  }

}

const mapStateToProps = state => ({
  heroes: state.heroes.heroes,
  user: state.auth.currentUser,
  isHidden: true
})

export default connect(mapStateToProps)(HeroesList);