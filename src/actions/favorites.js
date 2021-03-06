import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

// get all favorites from a user Favorites
export const FETCH_FAVORITES_REQUEST = 'FETCH_FAVORITES_REQUEST';
export const fetchFavoritesRequest = () => ({
  type: FETCH_FAVORITES_REQUEST
});

export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const fetchFavoritesSuccess = (favorites) => ({
  type: FETCH_FAVORITES_SUCCESS,
  favorites
});

export const FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR';
export const fetchFavoritesError = error => ({
  type: FETCH_FAVORITES_ERROR,
  error
});

export const fetchFavorites = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchFavoritesRequest());
  return fetch(`${API_BASE_URL}/favorites`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
      //console.log('favorites fetched')
      dispatch(fetchFavoritesSuccess(res))
    })
    .catch(err => dispatch(fetchFavoritesError(err)));
};

//add a favorite
export const ADD_FAVORITES_REQUEST = 'ADD_FAVORITES_REQUEST';
export const addFavoritesRequest = () => ({
  type: ADD_FAVORITES_REQUEST
});

export const ADD_FAVORITES_SUCCESS = 'ADD_FAVORITES_SUCCESS';
export const addFavoritesSuccess = (favorites) => ({
  type: ADD_FAVORITES_SUCCESS,
  favorites
});

export const ADD_FAVORITES_ERROR = 'ADD_FAVORITES_ERROR';
export const addFavoritesError = error => ({
  type: ADD_FAVORITES_ERROR,
  error
});

export const addFavoriteToUser = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(addFavoritesRequest());
  fetch(`${API_BASE_URL}/favorites/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authToken}`
    },
  })
    .then(result => result.json())
    .then(favorites => {
      dispatch(addFavoritesSuccess(favorites))
    })
}
//delete a favorite
export const deleteFavoriteToUser = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/favorites/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authToken}`
    },
  })
    .then(result => result.json())
    .then(favorites => {
      dispatch(fetchFavoritesSuccess(favorites))
    })
}

//get favorite matchups
export const FETCH_FAVORITES_MATCHUPS_REQUEST = 'FETCH_FAVORITES_MATCHUPS_REQUEST';
export const fetchFavoritesMatchupsRequest = (id) => ({
  type: FETCH_FAVORITES_MATCHUPS_REQUEST
});

export const FETCH_FAVORITES_MATCHUPS_SUCCESS = 'FETCH_FAVORITES_MATCHUPS_SUCCESS';
export const fetchFavoritesMatchupsSuccess = (matchups) => ({
  type: FETCH_FAVORITES_MATCHUPS_SUCCESS,
  matchups
});

export const FETCH_FAVORITES_MATCHUPS_ERROR = 'FETCH_FAVORITES_MATCHUPS_ERROR';
export const fetchFavoritesMatchupsError = error => ({
  type: FETCH_FAVORITES_MATCHUPS_ERROR,
  error
});

export const fetchFavoritesMatchups = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchFavoritesRequest());
  //console.log('matchupid', id);
  return fetch(`${API_BASE_URL}/heroes/${id}/matchups`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
      //console.log('matchups', res);
      dispatch(fetchFavoritesMatchupsSuccess(res))
    })
    .catch(err => dispatch(fetchFavoritesMatchupsError(err)));
};
