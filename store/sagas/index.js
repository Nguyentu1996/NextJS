import { all } from 'redux-saga/effects'
import login from './login'
import fetchItem from './order-cart'

export default function* sagas() {
  yield all([
    login(),
    fetchItem(),
  ])
}
