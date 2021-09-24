import { ADD_TO_CART, REMOVE_TO_CART, INCREMENT_COUNTER, DECREMENT_COUNTER, GET_ITEM_IN_CART  } from '../actions/order-cart'


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
        item.quantity += payload.quantity;
      }
      return item
    })
  } 
  return [...cart, payload]
}

function orderCartReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_ITEM_IN_CART: 
      return {
        ...state,
        result: action.data,
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
        result: state.result.filter(item => item.id !== action.payload.id),
        message: 'Deleted to cart'
      }
    case INCREMENT_COUNTER:
      return {
        ...state,
        result: state.result.map(item => {
          if (item.id === action.payload.id) {
            item.quantity++;
          }
          return item
        }),
        added: action.payload,
        message: 'Added to cart'
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        result: state.result.map((item, index) => {
          if (item.id === action.payload.id) {
            if (item.quantity > 1) {
              item.quantity--;
            } else {
              state.result.splice(index, 1)
            }
            return item
          }
        }),
        message: 'Decremented in cart'
      }
    default:
      return state
  }
}


export default orderCartReducer 