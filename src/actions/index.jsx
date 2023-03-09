

// define the action types
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const ADD_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const SHOW_WISHLIST = 'SHOW_WISHLIST';
export const SET_LOADING = 'SET_LOADING';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

// action types for sorting
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const SORT_BY_CATEGORY = 'SORT_BY_CATEGORY';
export const SORT_PRODUCTS_LOW_TO_HIGH = 'SORT_PRODUCTS_LOW_TO_HIGH';
export const SORT_PRODUCTS_HIGH_TO_LOW = 'SORT_PRODUCTS_HIGH_TO_LOW';
export const SORT_BY_LATEST = 'SORT_BY_LATEST';
export const SORT_BY_ELECTRONICS = 'SORT_BY_ELECTRONICS';
export const SORT_BY_HOME_AND_KITCHEN = 'SORT_BY_HOME_AND_KITCHEN';

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

// action creator for updating product
export const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
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


// action creator for sorting product from low to high
export const sortProductsLowToHigh = (products) => {
    return {
        type: SORT_PRODUCTS_LOW_TO_HIGH,
        products,
    };
}

// action creator for sorting product from high to low
export const sortProductsHighToLow = (products) => {
    return {
        type: SORT_PRODUCTS_HIGH_TO_LOW,
        products,
    };
}

// action creator for sorting product by latest
export const sortByLatest = (products) => {
    return {
        type: SORT_BY_LATEST,
        products,
    };
}

// action creator for sorting product by Electronics category
export const sortByElectronics = (products) => {
    return {
        type: SORT_BY_ELECTRONICS,
        products,
    };
}

// action creator for sorting product by Home and kitchen category
export const sortByHomeAndKitchen = (products) => {
    return {
        type: SORT_BY_HOME_AND_KITCHEN,
        products,
    };
}
