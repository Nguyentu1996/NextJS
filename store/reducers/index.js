import { combineReducers } from 'redux'
import loginReducer from './login'
import orderCartReducer from './order-cart'


const reducer = combineReducers({
  login: loginReducer,
  orderCart: orderCartReducer
})

export default reducer
