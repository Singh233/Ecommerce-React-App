

// define the action types
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const ADD_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const SHOW_WISHLIST = 'SHOW_WISHLIST';
export const SET_LOADING = 'SET_LOADING';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

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

// action creator for deleting product
export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id,
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

// action creator for adding to wishlist
export const addToWishlist = (product) => {
    return {
        type: ADD_TO_WISHLIST,
        product,
    };
}

// action creator for removing from wishlist
export const removeFromWishlist = (product) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        product,
    };
}

