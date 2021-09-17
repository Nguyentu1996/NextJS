import { ADD_TO_CART, REMOVE_TO_CART, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/order-cart'
const INIT_STATE = {
  result: [],
  success: null,
  message: null,
  fetching: false
}
function oderCartReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        result: [...state.result, action.payload]
      }
    case REMOVE_TO_CART:
      return {
        ...state,
        result: state.result.filter(item => item.id !== action.payload.id)
      }
    case INCREMENT_COUNTER:
      return {
        ...state,
        // result: state.result.map(item => {
        //   if (item.id === action.payload.id) {
        //     return item.quantity + 1;
        //   }
        // })
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        // result: state.result.map(item => {
        //   if (item.id === action.payload.id) {
        //     if (item.quantity > 1) {
        //       return item.quantity - 1;
        //     }
        //   }
        // })
      }
    default:
      return state
  }
}
export default oderCartReducer