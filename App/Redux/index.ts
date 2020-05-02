import {createStore, combineReducers} from 'redux';

import configureStore from './store';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  auth: require('./AuthenticationRedux').reducer,
});

export default () => {
  const finalReducers = reducers;

  const {store} = configureStore(finalReducers);

  return store;
};
