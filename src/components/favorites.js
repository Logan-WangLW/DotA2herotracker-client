import React from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../actions/favorites';

export class Favorites extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchFavorites())
  }
  render() {

    return (
      <div>
        <h1> My Favorites </h1>
        <ul>
          {this.props.userFavorites.map(fav => (
            <li key={fav}>{fav}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userFavorites: state.favorites.userFavorites
})

export default connect(mapStateToProps)(Favorites);

/*  */