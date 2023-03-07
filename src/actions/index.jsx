

// define the action types
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const ADD_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SHOW_FAVORITES = 'SHOW_FAVORITES';
export const SET_LOADING = 'SET_LOADING';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// action types for cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SHOW_CART = 'SHOW_CART';




// define the action creators
export const addProducts = (products) => {
    return {
        type: ADD_PRODUCTS,
        products,
    };
}

// action creator for adding new product
export const addNewProduct = (product) => {
    return {
        type: ADD_NEW_PRODUCT,
        product,
    };
}

// action creator for adding to cart
export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product,
    };
}

// action creator for removing from cart
export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        product,
    };
}
