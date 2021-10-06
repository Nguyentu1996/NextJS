/* eslint-disable no-unused-vars */
import { call, put } from 'redux-saga/effects'

export default function sagaHelper({ api }) {
  return function* ({ type, payload, callback }) {
    // const requestType = `${type}_REQUEST`
    // const successType = `${type}_SUCCESS`
    // const failureType = `${type}_FAILURE`
  
    console.log("type", type)
    try {
      // yield put({ type: type, payload: data })
      let result = yield call(api, payload)
      // console.log();
      if(result) yield put({ type: type, data: result, payload })

      if (callback) callback(true, result)
    } catch (exception) {
      yield put({ type: type, data: undefined })
    }
  }
}
