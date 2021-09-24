//Action Types

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "ADD_TO_CART";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const GET_ITEM_IN_CART = "GET_ITEM_IN_CART";


//Action Creator
export const addToCart = (item, quantity) => ({
    type: ADD_TO_CART,
    payload: {...item, quantity}
});

export const removeItem = (item) => ({
    type: REMOVE_TO_CART,
    payload: item
});
export const incrementCounter = (item) => ({
    type: INCREMENT_COUNTER,
    payload: item
});

export const decrementCounter = (item) => ({
    type: DECREMENT_COUNTER,
    payload: item
});
export const getItemInCart = (items) => ({
    type: GET_ITEM_IN_CART,
    payload: items
});

