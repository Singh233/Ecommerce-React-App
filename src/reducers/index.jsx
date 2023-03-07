import { combineReducers } from "redux";


// actions
import { ADD_PRODUCTS, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SHOW_FAVORITES, SET_LOADING, ADD_SEARCH_RESULT, ADD_NEW_PRODUCT } from '../actions';

// actions for cart
import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_CART } from '../actions';

// Initial products state
const initialProductsState = {
    products: [],
    favorites: [],
    showFavorites: false,
    loading: false,
};

// Products reducer
export function productsReducer(state = initialProductsState, action) {
    switch (action.type) {
        case ADD_NEW_PRODUCT:
            console.log(action.product, 'action-----')
            return {
                ...state,
                products: [action.product, ...state.products],
            };
        case ADD_PRODUCTS:
            return {
                ...state,
                products: action.products,
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.favorites],
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter((product) => product.id !== action.product.id),
            };
        case SHOW_FAVORITES:
            return {
                ...state,
                showFavorites: action.payload,
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
            return {
                ...state,
                cart: [...state.cart, action.product],
                totalPrice: state.totalPrice + parseFloat(action.product.price),
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.product.id), 
                totalPrice: state.totalPrice - action.product.price,
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
