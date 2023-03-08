import React from 'react';

import styles from '../styles/CartCard.module.scss';

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


// icons
import categoryIcon from '../assets/icons/category.svg';
import starIcon from '../assets/icons/star.svg';
import sortIcon from '../assets/icons/sorting.svg';
import { connect } from 'react-redux';
import { addToWishlist, removeFromCart } from '../actions';
import toast from 'react-hot-toast';

function CartCard(props) {
    // cart reducer destructuring
    const { cartReducer } = props;
    const { cart, showCart, totalPrice } = cartReducer;

    // product destructuring
    const { productsReducer } = props;
    const { products, wishlist } = productsReducer;


    const { product } = props;

    // handle remove from cart
    const handleRemoveFromCart = () => {
        console.log('remove from cart');

        // dispatch action to remove from cart
        props.dispatch(removeFromCart(product));

        toast.success('Removed from cart');
    }

    // handle move to wishlist
    const handleMoveToWishlist = () => {
        console.log('move to wishlist');

        // dispatch action to add to wishlist
        props.dispatch(addToWishlist(product));

        // dispatch action to remove from cart
        props.dispatch(removeFromCart(product));

        toast.success('Added to wishlist');
    }

    const cardBackground = {
        background: `url("${product.image}"), linear-gradient(to right, ${product.colorPalette.primary} 0%, ${product.colorPalette.secondary} 30%, black 90%)`,
    };

    return (
        <div style={cardBackground} className={styles.cartCardContainer}>
            <div className={styles.overlay}>
                <div className={styles.image}>
                    <img
                        src={product.image}
                        alt=""
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.heading}>
                        <p className={styles.category}>
                            {' '}
                            <img src={categoryIcon} alt="" /> {product.category}{' '}
                        </p>
                        <p className={styles.rating}>
                            {' '}
                            {product.rating} <img src={starIcon} alt="" />{' '}
                        </p>
                    </div>
                    <p className={styles.name}> {product.name.substring(0, 20)} </p>
                    <p className={styles.price}> ${product.price} </p>

                    <div className={styles.actions}>
                        <button onClick={handleMoveToWishlist} className={styles.moveToWishlist}>
                            <FontAwesomeIcon icon={faHeart} /> Move to Wishlist
                        </button>
                        <button onClick={handleRemoveFromCart} className={styles.remove}>
                            <FontAwesomeIcon icon={faTrash} /> Remove
                        </button>

                        
                    </div>

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        productsReducer: state.productsReducer,
        cartReducer: state.cartReducer
    }
}

const connectedCartCardComponent = connect(mapStateToProps)(CartCard);

export default connectedCartCardComponent;
