import { combineReducers } from 'redux'
import loginReducer from './login'
import oderCartReducer from './order-cart'


const reducer = combineReducers({
  login: loginReducer,
  oderCart: oderCartReducer
})

export default reducer
