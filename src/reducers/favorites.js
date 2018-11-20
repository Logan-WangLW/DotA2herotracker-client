import {
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR
} from '../actions/favorites.js';

//initial state
const initialState = {
  userFavorites: [],
  loading: false,
  error: null
}

// favoritesReducer: handles all actions that take place on favorites route
export const favoritesReducer = (state = initialState, action) => {
  if (action.type === FETCH_FAVORITES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === FETCH_FAVORITES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      userFavorites: action.favorites
    })
  } else if (action.type === FETCH_FAVORITES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
}