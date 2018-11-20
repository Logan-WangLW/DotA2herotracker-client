import { API_BASE_URL } from '../config';

export const FETCH_HEROES_REQUEST = 'FETCH_HEROES_REQUEST';
export const fetchHeroesRequest = () => ({
  type: FETCH_HEROES_REQUEST
});

export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const fetchHeroesSuccess = (heroes) => ({
  type: FETCH_HEROES_SUCCESS,
  heroes
});

export const FETCH_HEROES_ERROR = 'FETCH_HEROES_ERROR';
export const fetchHeroesError = error => ({
  type: FETCH_HEROES_ERROR,
  error
});

export const fetchHeroes = () => dispatch => {
  dispatch(fetchHeroesRequest());
  return fetch(`${API_BASE_URL}/herostats`)
    .then(res =>
      console.log(res.json())
    )
    .then(heroes => dispatch(fetchHeroesSuccess(heroes)))
    .catch(err => dispatch(fetchHeroesError(err)));
};