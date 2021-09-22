import { ADD_TO_CART, REMOVE_TO_CART, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/order-cart'


const INIT_STATE = {
  result: [],
  added: {},
  success: null,
  message: null,
  fetching: false
}
const addedToCar = (cart, payload) => {
  if (cart.length > 0 && cart.find((item) => payload.itemCdFv === item.itemCdFv)) {
    return cart.map(item => {
      if(item.itemCdFv === payload.itemCdFv) {
        item.quantity++;
      }
      return item
    })
  } 
  return [...cart, payload]
}

function orderCartReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        result: addedToCar(state.result, action.payload),
        added: action.payload
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


export default orderCartReducer 