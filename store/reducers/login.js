import { TYPES } from '../actions'

const INIT_STATE = {
  result: null,
  message: null,
}
function loginReducer(state = INIT_STATE, action) {
  switch (action.type) {
    
    case TYPES.LOGIN_REQUEST:
      return {
        ...state,
        message: null,
      }
    case TYPES.LOGIN_SUCCESS:
      console.log(action);
      return {
        ...state,
        result: action.data.login,
        message: 'Login successful'
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
