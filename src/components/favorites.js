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
        <h1> LOL </h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Favorites);