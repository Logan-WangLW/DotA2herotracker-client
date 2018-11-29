import { FETCH_HEROES_ERROR, FETCH_HEROES_SUCCESS, FETCH_HEROES_REQUEST, FETCH_HERO_ERROR, FETCH_HERO_SUCCESS, FETCH_HERO_REQUEST, } from '../actions/heroes';

const initialState = {
  heroes: {
    int: [],
    str: [],
    agi: []
  },
  loading: false,
  error: null,
  hero: {}
};

//get all heroes reducer
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
  //get single heroes
  if (action.type === FETCH_HERO_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if (action.type === FETCH_HERO_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      hero: action.hero
    })
  }
  else if (action.type === FETCH_HERO_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
}

