import { useState } from 'react';
import '../styles/App.css';

// React Router
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Products from '../pages/Products';
import AddProduct from '../pages/AddProduct';
import Cart from '../pages/Cart';
import { connect } from 'react-redux';
import Wishlist from '../pages/Wishlist';




function App(props) {
    const [count, setCount] = useState(0);

    // destructuring the products reducer
    const { productsReducer } = props;
    const { products, wishlist } = productsReducer;



    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/Ecommerce-React-App/" element={<Home />} />
                <Route path="/Ecommerce-React-App/products" element={<Products />} />
                <Route path="/Ecommerce-React-App/add-product" element={<AddProduct />} />
                <Route path="/Ecommerce-React-App/cart" element={<Cart />} />
                <Route path="/Ecommerce-React-App/wishlist" element={<Wishlist dispatch={props.dispatch} products={wishlist} />} />
                <Route path="*" element={<Navigate to="/Ecommerce-React-App" />} />
            </Routes>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        productsReducer: state.productsReducer,
    };
};

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
