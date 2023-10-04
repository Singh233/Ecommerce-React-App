import { useRef, useState } from "react";
import "../styles/App.css";

// React Router
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import { connect } from "react-redux";
import Wishlist from "../pages/Wishlist";
import LoadingBar from "react-top-loading-bar";

function App(props) {
  const [count, setCount] = useState(0);

  // destructuring the products reducer
  const { productsReducer } = props;
  const { products, wishlist } = productsReducer;
  const ref = useRef(null);

  return (
    <div className="App">
      <Navbar forwardRef={ref} cartReducer={props.cartReducer} />

      <Routes>
        <Route path="/" element={<Home forwardRef={ref} />} />
        <Route path="/products" element={<Products forwardRef={ref} />} />
        <Route path="/add-product" element={<AddProduct forwardRef={ref} />} />
        <Route path="/cart" element={<Cart forwardRef={ref} />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              forwardRef={ref}
              dispatch={props.dispatch}
              products={wishlist}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productsReducer: state.productsReducer,
    cartReducer: state.cartReducer,
  };
};

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
