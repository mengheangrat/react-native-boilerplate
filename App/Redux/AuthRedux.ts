import {RootStateOrAny} from 'react-redux';
import {createReducer, createActions, createTypes} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {createSelector} from 'reselect';
import {AnyAction} from 'redux';

/* ------------- Types and Action Creators ------------- */
export type AuthType = {
  token: string;
};

const {Types, Creators} = createActions({
  loginRequest: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE: AuthType = Immutable({
  token: 'my token',
});

/* ------------- Selectors ------------- */
const authReducer = (state: RootStateOrAny) => state.auth;

export const AuthSelectors = {
  getToken: createSelector(authReducer, auth => auth.token),
};

/* ------------- Reducers ------------- */
export const request = (state: AuthType, action: AnyAction) => {
  const {token} = action;
  return {...state, token};
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST as string]: request,
});
