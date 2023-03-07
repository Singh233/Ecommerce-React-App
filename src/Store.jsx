
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'; // async function middleware


import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

console.log('store', store.getState());

export default store;