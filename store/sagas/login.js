import { takeLatest } from 'redux-saga/effects'
import { TYPES } from '../actions'
import sagaHelper from './saga-helper'
import { loginService } from '../../services/login-service'

export default function* watchFetchData() {
  yield takeLatest(TYPES.LOGIN, sagaHelper({ api: loginService.login }))
}
