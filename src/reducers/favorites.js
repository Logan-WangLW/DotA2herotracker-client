import {
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR,
  ADD_FAVORITES_REQUEST,
  ADD_FAVORITES_SUCCESS,
  ADD_FAVORITES_ERROR,
  FETCH_FAVORITES_MATCHUPS_REQUEST,
  FETCH_FAVORITES_MATCHUPS_SUCCESS,
  FETCH_FAVORITES_MATCHUPS_ERROR
} from '../actions/favorites.js';

//initial state
const initialState = {
  userFavorites: [],
  matchups: [],
  loading: false,
  error: null
}

// favoritesReducer: handles all actions that take place on favorites route
export default (state = initialState, action) => {
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
  } else if (action.type === ADD_FAVORITES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === ADD_FAVORITES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      userFavorites: [action.favorites, ...state.userFavorites]
    })
  } else if (action.type === ADD_FAVORITES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_FAVORITES_MATCHUPS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === FETCH_FAVORITES_MATCHUPS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      matchups: [action.matchups, ...state.matchups]
    })
  } else if (action.type === FETCH_FAVORITES_MATCHUPS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
}