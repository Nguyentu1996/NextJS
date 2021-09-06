import { all } from 'redux-saga/effects'

import login from './login'

export default function* sagas() {
  yield all([
    login()
  ])
}
