/* ***********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import {call, put, delay} from 'redux-saga/effects';
import AuthActions, {AuthType} from '../Redux/AuthRedux';

import {AnyAction} from 'redux';

export function* requestLogin(action: AnyAction) {
  //   const {data} = action.data;
  //   try {
  //   } catch (err) {}
}
