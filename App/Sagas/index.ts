import { takeLatest, all } from 'redux-saga/effects'
import { AuthTypes } from '../Redux/AuthRedux'
import { requestLogin } from './AuthSagas'

export default function* root() {
  yield all([takeLatest(AuthTypes.LOGIN_REQUEST as string, requestLogin)])
}
