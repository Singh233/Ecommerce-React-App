import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            {/* Heading */}
            <div className={styles.heading}>
                <p>Welcome to our store!</p>
            </div>

            {/* Sub heading */}
            <div className={styles.subHeading}>
                <p>Discover the options available for now!</p>
            </div>

            <div className={styles.cardsContainer}>
                {/* Card 1 */}
                <Link to="/products">
                    <div className={styles.card1}>
                        <p>Browse All Products</p>
                    </div>
                </Link>

                {/* Card 2 */}
                <Link to="/add-product">
                    <div className={styles.card2}>
                        <p>Add Products</p>
                    </div>
                </Link>

                {/* Card 3 */}
                <Link to="/wishlist">
                    <div className={styles.card3}>
                        <p>Wishlist</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
