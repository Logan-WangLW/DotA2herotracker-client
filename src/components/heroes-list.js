import React from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroes';

class HeroesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeroes());
  }
  render() {
    console.log(this.props);
    // const strHeroes = this.props.heroes.map(
    //   (hero) =>
    //     <div>{hero}</div>
    // );
    return (
      <table>
        <tbody>
          <tr>
            <th>Strength</th>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes
})

export default connect(mapStateToProps)(HeroesList);