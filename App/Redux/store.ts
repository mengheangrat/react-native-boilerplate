import {createStore, applyMiddleware, compose, Middleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';

// creates the store
export default function configureStore(rootReducer: any) {
  /* ------------- Redux Configuration -------------*/

  //   const middleware = [];
  const middlewares: Middleware[] = [];
  const enhancers = [];
  // const enhancers = compose(applyMiddleware(...middlewares));

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, compose(...enhancers));

  return {
    store,
    // sagasManager,
  };
}
