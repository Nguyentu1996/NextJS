//Action Types

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "ADD_TO_CART";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

//Action Creator
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeItem = () => ({
    type: REMOVE_TO_CART,
    payload: productId
});
export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});

