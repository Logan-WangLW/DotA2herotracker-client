import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import heroReducer from './reducers/heroes';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import thunk from 'redux-thunk';
import { setAuthToken, refreshAuthToken } from './actions/auth.js';
import { loadAuthToken } from './local-storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    heroes: heroReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

//Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;