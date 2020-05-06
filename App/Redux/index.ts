import { combineReducers } from 'redux';
import configureStore from './store';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  auth: require('./AuthRedux').reducer,
});

export default () => {
  const finalReducers = reducers;

  let { store } = configureStore(finalReducers);

  return store;
};
