import { combineReducers } from "redux";






// actions
import { ADD_PRODUCTS, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, SHOW_WISHLIST, SET_LOADING, ADD_SEARCH_RESULT, ADD_NEW_PRODUCT } from '../actions';

// actions for cart
import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_CART } from '../actions';

// Initial products state
const initialProductsState = {
    products: [],
    wishlist: [],
    showWishlist: false,
    loading: false,
};

// Products reducer
export function productsReducer(state = initialProductsState, action) {
    switch (action.type) {
        case ADD_NEW_PRODUCT:
            const data = {
                ...state,
                products: [action.product, ...state.products],
            }
            localStorage.setItem('products', JSON.stringify(data.products));
            return {
                ...data,
            };
        case ADD_PRODUCTS:
            return {
                ...state,
                products: action.products,
            };
        case ADD_TO_WISHLIST:
            // add to local storage
            const wishlist = [...state.wishlist, action.product];
            localStorage.setItem('wishlist', JSON.stringify(wishlist));

            return {
                ...state,
                wishlist,
            };
        case REMOVE_FROM_WISHLIST:
            // get wishlist from local storage
            const wishlistFromLocalStorage = JSON.parse(localStorage.getItem('wishlist'));

            // remove from state
            const newWishlist = wishlistFromLocalStorage.filter((product) => product.id !== action.product.id);
            
            // remove from local storage
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));

            return {
                ...state,
                wishlist: newWishlist,
            };
        case SHOW_WISHLIST:
            return {
                ...state,
                showWishlist: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.value,
            };
        default:
            return state;
    }
}


const initialSearchState = {
    result: {},
    showSearchResults: false,

}

export function searchReducer(state = { initialSearchState }, action) {
    
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        default:
            return state;
    }
}

// initial cart state
const initialCartState = {
    cart: [],
    totalPrice: 0,
    showCart: false,
};

// reducer for cart products
export function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // add to local storage
            localStorage.setItem('cart', JSON.stringify([...state.cart, action.product]));
            return {
                ...state,
                cart: [...state.cart, action.product],
                totalPrice: state.totalPrice + Math.round(parseFloat(action.product.price)),
            };
        case REMOVE_FROM_CART:
            // get cart from local storage
            const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));

            // remove from state
            const cart = cartFromLocalStorage.filter((product) => product.id !== action.product.id);

            console.log('action ', cart);
            
            // remove from local storage
            localStorage.setItem('cart', JSON.stringify(cart));
            // update state
            return {
                ...state,
                cart: cart, 
                totalPrice: state.totalPrice - Math.round(parseFloat(action.product.price)),
            };
        case SHOW_CART:
            return {
                ...state,
                showCart: action.payload,
            };
        default:
            return state;
    }
}


export default combineReducers({
    productsReducer,
    searchReducer,
    cartReducer,
})
