import { ADD_TO_CART, REMOVE_TO_CART, INCREMENT_COUNTER, DECREMENT_COUNTER, GET_ITEM_IN_CART } from '../actions/order-cart'


const INIT_STATE = {
  result: [],
  added: {},
  removed: {},
  success: null,
  message: null,
  fetching: false
}
const addedToCar = (cart = [], payload) => {
  if (cart && cart.length > 0 && cart.find((item) => payload.itemCdFv === item.itemCdFv)) {
    return cart.map(item => {
      if (item.itemCdFv === payload.itemCdFv) {
        item.quantity += payload.quantity;
      }
      return item
    })
  }
  cart.splice(0, 0, payload)
  return cart

}


function orderCartReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_ITEM_IN_CART:
      return {
        ...state,
        result: action.payload,
        message: 'loaded',
      }
    case ADD_TO_CART:
      return {
        ...state,
        result: addedToCar(state.result, action.payload),
        added: action.payload,
        message: 'Added to cart'
      }
    case REMOVE_TO_CART:
      return {
        ...state,
        result: state.result.filter(item => item.itemCdFv !== action.payload.itemCdFv),
        removed: action.payload,
        added: {},
        message: 'Deleted to cart'
      }
    case INCREMENT_COUNTER:
      return {
        ...state,
        result: state.result.map(item => {
          if (item.itemCdFv === action.payload.itemCdFv) {
            item.quantity += 1
          }
          return item
        }),
        added: action.payload,
        message: 'Added to cart'
      }
    case DECREMENT_COUNTER:
      if (state.result.find(item => item.itemCdFv === action.payload.itemCdFv && item.quantity > 1)) {
        return {
          ...state,
          result: state.result.map((item, index) => {
            if (item.itemCdFv === action.payload.itemCdFv) {
              item.quantity = item.quantity - 1
            }
            return item
          }),
          message: 'Decremented in cart'
        }
      } else {
        return {
          ...state,
          result: state.result.filter(item => item.itemCdFv !== action.payload.itemCdFv),
          removed: action.payload,
          message: 'Deleted to cart'
        }
      }

    default:
      return state
  }
}


export default orderCartReducer