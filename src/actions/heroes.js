import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

//const get all heroes
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
    .then(res => normalizeResponseErrors(res))
    .then(res =>

      res.json()
    )
    .then(heroes => {

      console.log('heroes fetched')
      dispatch(fetchHeroesSuccess(heroes))
    }
    )
    .catch(err => dispatch(fetchHeroesError(err)));
};

//const get single hero for more-info
export const FETCH_HERO_REQUEST = 'FETCH_HERO_REQUEST';
export const fetchHeroRequest = (id) => ({
  type: FETCH_HERO_REQUEST,
  id
});

export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS';
export const fetchHeroSuccess = (hero) => ({
  type: FETCH_HERO_SUCCESS,
  hero
});

export const FETCH_HERO_ERROR = 'FETCH_HEROES_ERROR';
export const fetchHeroError = error => ({
  type: FETCH_HERO_ERROR,
  error
});

export const fetchHero = (id) => dispatch => {
  dispatch(fetchHeroesRequest());
  return fetch(`${API_BASE_URL}/heroes/${id}`)
    .then(res => normalizeResponseErrors(res))
    .then(res =>

      res.json()
    )
    .then(heroes => {

      console.log('heroes fetched')
      dispatch(fetchHeroesSuccess(heroes))
    }
    )
    .catch(err => dispatch(fetchHeroesError(err)));
};