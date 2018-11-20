import { FETCH_HEROES_ERROR, FETCH_HEROES_SUCCESS, FETCH_HEROES_REQUEST } from '../actions/heroes';

const initialState = {
  heroes: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HEROES_REQUEST: {
      console.log('fetch heroes request');
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case FETCH_HEROES_SUCCESS: {
      return {
        ...state,
        heroes: action.heroes,
        loading: false
      };
    }
    case FETCH_HEROES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}
