import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import configureStore from './store'
import persistConfig from '../Config/ReduxPersist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  auth: require('./AuthRedux').reducer,
})

export default () => {
  const finalReducers = persistReducer(persistConfig, reducers)
  const { store } = configureStore(finalReducers)

  const persistor = persistStore(store)

  return { store, persistor }
}
