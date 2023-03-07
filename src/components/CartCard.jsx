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

export default function CartCard() {
    const cardBackground = {
        // background: `url("${product.image}"), linear-gradient(${product.colorPalette.primary}, ${product.colorPalette.secondary})`,
        // backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={styles.cartCardContainer}>
            <div className={styles.overlay}>
                <div className={styles.image}>
                    <img
                        src="https://i.ibb.co/d2qwpyk/13pro-Background-Removed.png"
                        alt=""
                    />
                </div>

                <div className={styles.details}>
                    <div className={styles.heading}>
                        <p className={styles.category}>
                            {' '}
                            <img src={categoryIcon} alt="" /> Electronics{' '}
                        </p>
                        <p className={styles.rating}>
                            {' '}
                            4 / 5 <img src={starIcon} alt="" />{' '}
                        </p>
                    </div>
                    <p className={styles.name}> Apple Iphone 13 pro </p>
                    <p className={styles.price}> $999 </p>

                    <div className={styles.actions}>
                        <button className={styles.moveToWishlist}>
                            <FontAwesomeIcon icon={faHeart} /> Move to Wishlist
                        </button>
                        <button className={styles.remove}>
                            <FontAwesomeIcon icon={faTrash} /> Remove
                        </button>

                        
                    </div>

                </div>
            </div>
        </div>
    );
}
