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




function App(props) {
    const [count, setCount] = useState(0);


    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
