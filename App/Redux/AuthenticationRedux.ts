import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

type AuthenticationType = {
  token: string;
};

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginRequest: ['data'],
});

export const AuthenticationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE: AuthenticationType = Immutable({
  token: '',
});

/* ------------- Selectors ------------- */

// export const LanguageSelectors = {
//   getData: (state:User) => state.data.auth,
// };

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state: AuthenticationType) => {
  return {...state};
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST as string]: request,
});
