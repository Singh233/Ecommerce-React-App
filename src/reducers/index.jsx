import { combineReducers } from "redux";






// actions
import { ADD_PRODUCTS, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, SHOW_WISHLIST, SET_LOADING, ADD_SEARCH_RESULT, ADD_NEW_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, SORT_PRODUCTS_LOW_TO_HIGH, SORT_PRODUCTS_HIGH_TO_LOW, SORT_BY_LATEST, SORT_BY_ELECTRONICS, SORT_BY_HOME_AND_KITCHEN, SORT_BY_CATEGORY_ALL } from '../actions';

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
            // get products from local storage
            const lsProducts = JSON.parse(localStorage.getItem('products')); 
            if (lsProducts !== null) {
                // add to local storage
                localStorage.setItem('products', JSON.stringify([action.product, ...lsProducts]));
            } else {
                // add to local storage
                localStorage.setItem('products', JSON.stringify([action.product]));
            }

            // add to all products local storage
            const allProducts = JSON.parse(localStorage.getItem('allProducts'));
            if (allProducts !== null) {
                // add to local storage
                localStorage.setItem('allProducts', JSON.stringify([action.product, ...allProducts]));
            } else {
                // add to local storage
                localStorage.setItem('allProducts', JSON.stringify([action.product]));
            }
            
            

            const data = {
                ...state,
                products: [action.product, ...state.products],
            }
            return {
                ...data,
            };
        case ADD_PRODUCTS:
            // add from local storage
            const productsFromLocalStorage = JSON.parse(localStorage.getItem('products'));

            let products = [];
            if (productsFromLocalStorage !== null) {
                products = [...productsFromLocalStorage, ...action.products];
            } else {
                products = [...action.products];
            }

            
            // add products to local storage that contains all products
            localStorage.setItem('allProducts', JSON.stringify(products));
            console.log(JSON.parse(localStorage.getItem('allProducts')), 'allProducts')
            return {
                ...state,
                products,
            };
        case DELETE_PRODUCT:
            // delete from local storage seperately to maintain users added products
            const productsFromLS = JSON.parse(localStorage.getItem('products'));
            if (productsFromLS.length > 0) {
                const newProductsFromLocalStorage = productsFromLS.filter((product) => product.id !== action.id);
                localStorage.setItem('products', JSON.stringify(newProductsFromLocalStorage));
                console.log(newProductsFromLocalStorage, 'newProductsFromLocalStorage')
            }

            // delete from state
            const newProducts = state.products.filter((product) => product.id !== action.id);

            return {
                ...state,
                products: [...newProducts],
            };
        case UPDATE_PRODUCT:
            // update from local storage seperately to maintain users added products
            const productsFromLocalStorage3 = JSON.parse(localStorage.getItem('products'));
            if (productsFromLocalStorage3.length > 0) {
                const newProductsFromLocalStorage = productsFromLocalStorage3.map((product) => {
                    if (product.id === action.product.id) {
                        return action.product;
                    }
                    return product;
                });
                localStorage.setItem('products', JSON.stringify(newProductsFromLocalStorage));
            }

            // update from state
            const updatedProducts = state.products.map((product) => {
                if (product.id === action.product.id) {
                    return action.product;
                }
                return product;
            });

            return {
                ...state,
                products: [...updatedProducts],
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

        case SORT_PRODUCTS_LOW_TO_HIGH:
            const sortedProducts = [...state.products].sort((a, b) => {
                return a.price - b.price; // sort by price low to high
            });
            return {
                ...state,
                products: sortedProducts,
            };
        case SORT_PRODUCTS_HIGH_TO_LOW:
            const sortedProducts2 = [...state.products].sort((a, b) => {
                return b.price - a.price; // sort by price high to low
            });
            return {
                ...state,
                products: sortedProducts2,
            };
        case SORT_BY_LATEST:
            const productsFromLocalStorage4 = JSON.parse(localStorage.getItem('products'));
            let products2 = [];
            if (productsFromLocalStorage4 !== null) {
                products2 = [...productsFromLocalStorage4, ...action.products];
            } else {
                products2 = [...action.products];
            }
            return {
                ...state,
                products: products2,
            };
        case SORT_BY_ELECTRONICS:
            const allProductsLocalStorage = JSON.parse(localStorage.getItem('allProducts'));
            const electronics = allProductsLocalStorage.filter((product) => product.category === "Electronics");
            console.log(electronics, 'electronics')
            return {
                ...state,
                products: electronics,
            };
        case SORT_BY_HOME_AND_KITCHEN: 
            // get all products from local storage of all products
            const allProductsLocalStorage2 = JSON.parse(localStorage.getItem('allProducts'));
            const homeAndKitchen = allProductsLocalStorage2.filter((product) => product.category === "Home & Kitchen");
            console.log(homeAndKitchen, 'homeAndKitchen')
            return {
                ...state,
                products: homeAndKitchen,
            };
        case SORT_BY_CATEGORY_ALL:
            const allProductsLocalStorage3 = JSON.parse(localStorage.getItem('allProducts'));
            return {
                ...state,
                products: allProductsLocalStorage3,
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
            const totalPrice = localStorage.getItem('totalPrice');
            console.log(totalPrice, 'totalPrice')

            // add total price to local storage
            if (totalPrice) {
                localStorage.setItem('totalPrice', JSON.stringify(parseInt(localStorage.getItem('totalPrice')) + Math.round(parseFloat(action.product.price))));
            } else {
                localStorage.setItem('totalPrice', JSON.stringify(Math.round(parseFloat(action.product.price))));
            }

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

            // update total price in local storage
            localStorage.setItem('totalPrice', JSON.stringify(localStorage.getItem('totalPrice') - Math.round(parseFloat(action.product.price))));
            
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
