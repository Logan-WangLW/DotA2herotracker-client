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
    .then(res =>
      res.json()
    )
    .then(res => {
      console.log(res);
      dispatch(fetchFavoritesSuccess(res.heroes))
    })
    .catch(err => dispatch(fetchFavoritesError(err)));
};

//add a favorite

//delete a favorite