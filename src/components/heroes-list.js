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
        <td key={index} id={hero.id}>
          <div >
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} ></img>
            <button onClick={() => this.addFavorite(hero.id)}>Add to my favorites</button>
          </div>
        </td >
      )
    });
    let agiHeroes = this.props.heroes.filter(hero => hero.primary_attr === 'agi').map((hero, index) => {
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
      <table>
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
// // {/* <ul>
// <h2>Heroes List</h2>

// <div>
//   <h3>STRENGTH</h3>
//   {strHeroes}
// </div>
// <div>
//   <h3>AGILITY</h3>
//   {agiHeroes}
// </div>
// <div>
//   <h3>INTELLIGENCE</h3>
//   {intHeroes}
// </div>
// </ul > */}