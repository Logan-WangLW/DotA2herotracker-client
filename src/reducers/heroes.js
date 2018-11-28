import { FETCH_HEROES_ERROR, FETCH_HEROES_SUCCESS, FETCH_HEROES_REQUEST } from '../actions/heroes';

const initialState = {
  heroes: {
    int: [],
    str: [],
    agi: []
  },
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_HEROES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if (action.type === FETCH_HEROES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      heroes: action.heroes
    })
  }
  else if (action.type === FETCH_HEROES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
}

