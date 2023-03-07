import React, { useEffect, useState } from 'react'
import { getProducts } from '../api';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard'
import Search from '../components/Search';
import styles from '../styles/pages/Products.module.scss';
// Toast
import toast from 'react-hot-toast';
import { connect } from 'react-redux';
import { addProducts } from '../actions';

function Products(props) {
    const { productsReducer, cartReducer } = props;
    const {products, favorites, showFavorites, loading} = productsReducer;
    
    console.log(products, 'products-----');

    useEffect(() => {

        // check if products are already in local storage
        if (localStorage.getItem('products') !== null) {
            const response = toast.promise(getProducts(), {
                loading: 'Updating Products...',
                success: 'Products updated successfully',
                error: 'Please try again later!',
            });
            props.dispatch(addProducts(JSON.parse(localStorage.getItem('products')))); // dispatch action to add products to store
            return; // if products are already in local storage, don't fetch them again
        }
        
        // fetch products from api
        const fetchProducts = async () => {
            const response = await toast.promise(getProducts(), {
                loading: 'Updating Products...',
                success: 'Products updated successfully',
                error: 'Please try again later!',
            });
            props.dispatch(addProducts(response)); // dispatch action to add products to store
            localStorage.setItem('products', JSON.stringify(response)); // save products in local storage
        }
        fetchProducts();

        
        return () => {
            // cleanup
            
        }


    }, [])

    return (
        <div className={styles.container}>
            <Search />
            <Filter />

            <div className={styles.productsList}>
                {
                    products.map((product, id) => {
                        return (
                            <ProductCard key={id} product={product} dispatch={props.dispatch} />
                        )
                    }
                    )
                }

            </div>

        </div>
    )
}

// 
const mapStateToProps = (state) => {
    return {
        productsReducer: state.productsReducer,
        searchReducer: state.searchReducer,
        cartReducer: state.cartReducer,
    };
}


const connectedProductsComponent = connect(mapStateToProps)(Products);

export default connectedProductsComponent;