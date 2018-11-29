import {
  FETCH_FAVORITES_MATCHUPS_REQUEST,
  FETCH_FAVORITES_MATCHUPS_SUCCESS,
  FETCH_FAVORITES_MATCHUPS_ERROR
} from '../actions/favorites.js';

//initial state
const initialState = {
  matchups: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  if (action.type === FETCH_FAVORITES_MATCHUPS_REQUEST) {
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