import React from 'react';

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


export default function Cart() {
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

            <CartCard />
            <CartCard />
            <CartCard />
            
            <div className={styles.checkout}>
                <div className={styles.checkoutDetails}>
                    <div className={styles.product}>
                        <p className={styles.index}>1. </p>
                        <p className={styles.productName}>Iphone 13</p>
                        <p className={styles.qty}>3</p> 
                    </div>         
                </div>
                <div className={styles.nextStepButton}>
                    <p className={styles.totalPrice}> $999 </p>
                    <button>Checkout <FontAwesomeIcon icon={faArrowRight} />  </button>
                </div>
            </div>
        </div>
    );
}
