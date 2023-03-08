import React, { useEffect, useState } from 'react';

// styles
import styles from '../styles/pages/Cart.module.scss';

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import sortIcon from '../assets/icons/sorting.svg'
import CartCard from '../components/CartCard';
import { connect } from 'react-redux';


function Cart(props) {
    // cart reducer destructuring
    const { cartReducer } = props;
    const { cart, showCart, totalPrice } = cartReducer;

    const [ cartItems, setCartItems ] = useState(cart);



    useEffect(() => {

        // check if local storage has cart and set it to the cart reducer
        if (localStorage.getItem('cart')) {
            const cartStore = JSON.parse(localStorage.getItem('cart'));
            setCartItems(cartStore);
        }
        




        
        return () => {
            // cleanup
            
        }


    }, [localStorage.getItem('cart')])

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p className={styles.title}>
                    Cart Items 
                </p>

                <div className={styles.options}>
                    <img src={sortIcon} alt="" />
                    
                </div>
            </div>

            {
                // iterate over the cart items
                cartItems.map((item, index) => {
                    return (
                        <CartCard key={index} product={item}  />
                    )
                })
            }
            
            <div className={styles.checkout}>
                <div className={styles.checkoutDetails}>
                    {
                        // iterate over the cart items
                        cartItems.map((item, index) => {
                            return (
                                <div key={index} className={styles.product}>
                                    <p className={styles.index}> {index + 1}. </p>
                                    <p className={styles.productName}>{item.name.substring(0, 17)}</p>
                                    <p className={styles.qty}>1</p> 
                                </div>
                            )
                        })
                    }         
                </div>
                <div className={styles.nextStepButton}>
                    <p className={styles.totalPrice}> ${totalPrice} </p>
                    <button>Checkout <FontAwesomeIcon icon={faArrowRight} />  </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer,
    }
}

const connectedCartComponent = connect(mapStateToProps)(Cart);

export default connectedCartComponent;
