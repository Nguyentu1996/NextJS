/* eslint-disable no-unused-vars */
import { call, put } from 'redux-saga/effects'

export default function sagaHelper({ api, success, message, storeData }) {
  return function* ({ type, data, callback }) {
    const requestType = `${type}_REQUEST`
    const successType = `${type}_SUCCESS`
    const failureType = `${type}_FAILURE`
    try {
      yield put({ type: requestType, payload: data })
      let result = null;
      if (api) {
        result = yield call(api, data)
        yield put({ type: successType, data: result, payload: data })
      }
      if (storeData) {
        yield put({ type: successType, data: storeData, payload: data })
      }

      // if (result.success) {
      // //   yield put({ type: 'TOAST_REQUEST', data: success, payload: data })
      // }

      if (callback) callback(true, result, storeData)
    } catch (exception) {
      yield put({ type: failureType, exception })
    }
  }
}
