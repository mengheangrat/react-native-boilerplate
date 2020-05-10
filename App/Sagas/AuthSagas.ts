import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/AuthRedux'
import { api } from '../Services/Api'

// import { AnyAction } from 'redux';

// action: AnyAction
export function* requestLogin() {
  try {
    // const data = action;
    const respond = yield call(api().getCustomer)
    yield put(AuthActions.loginSuccess(respond.data))
  } catch (err) {
    console.log(err.message)
    yield put(AuthActions.loginFailure())
  }
}
