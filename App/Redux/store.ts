import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/';

// creates the store
export default function configureStore(rootReducer: any) {
  /* ------------- Redux Configuration -------------*/

  const middlewares: Middleware[] = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, compose(...enhancers));

  // then run the saga
  sagaMiddleware.run(rootSaga);

  return {
    store,
  };
}
