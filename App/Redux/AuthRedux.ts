import { RootStateOrAny } from 'react-redux'
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { createSelector } from 'reselect'
import { AnyAction } from 'redux'
import { AuthType } from './Types/AuthType'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: null,
  loginSuccess: ['user'],
  loginFailure: null,
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE: AuthType = Immutable({
  token: 'my token',
  user: { name: '', gender: '', id: '' },
  fetching: false,
})

/* ------------- Selectors ------------- */
const authReducer = (state: RootStateOrAny) => state.auth

export const AuthSelectors = {
  getToken: createSelector(authReducer, auth => auth.token),
  getUserInfo: createSelector(authReducer, auth => auth.user),
}

/* ------------- Reducers ------------- */
export const request = (state: AuthType) => {
  return { ...state, fetching: true }
}

export const success = (state: AuthType, action: AnyAction) => {
  const { user } = action
  return { ...state, user, fetching: false }
}

export const failure = (state: AuthType) => {
  return { ...state, fetching: false }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST as string]: request,
  [Types.LOGIN_SUCCESS as string]: success,
  [Types.LOGIN_FAILURE as string]: failure,
})
