/* eslint-disable no-unused-vars */
import { call, put } from 'redux-saga/effects'

export default function sagaHelper({ api }) {
  return function* ({ type, data, callback }) {
    const requestType = `${type}_REQUEST`
    const successType = `${type}_SUCCESS`
    const failureType = `${type}_FAILURE`

    try {
      yield put({ type: requestType, payload: data })
      let result = yield call(api, data)
      if (result.fatalError && result.fatalError.length > 0 || result.normalError && result.normalError.length > 0) {
        yield put({ type: failureType, data: result })
        return
      } 
      yield put({ type: successType, data: result, payload: data })

      if (callback) callback(true, result)
    } catch (exception) {
      yield put({ type: failureType, data: undefined })
    }
  }
}
