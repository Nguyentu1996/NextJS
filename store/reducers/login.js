import { TYPES } from '../actions'

const INIT_STATE = {
  result: null,
  success: null,
  message: null,
  fetching: false
}
function loginReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case TYPES.LOGIN_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        result: action.data.result,
        success: action.data.success,
        message: action.data.message
      }
    case TYPES.LOGIN_FAILURE:
      return {
        ...state,
        message: 'LOGIN FAILURE'
      }
    default:
      return state
  }
}
export default loginReducer
