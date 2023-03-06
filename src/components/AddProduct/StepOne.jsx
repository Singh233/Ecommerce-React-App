import React, { useEffect, useState } from 'react';

import styles from '../../styles/AddProduct/StepOne.module.scss';

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import 'animate.css';

// icons
import categoryIcon from '../../assets/icons/category.svg';
import starIcon from '../../assets/icons/star.svg';
import sortIcon from '../../assets/icons/sorting.svg';

// Toast
import toast from 'react-hot-toast';

export default function StepOne(props) {
    const { productDetails, setProductDetails } = props.stateAsProp;




    const handleNameInputChange = (e) => {
        setProductDetails({
            ...productDetails,
            name: e.target.value,
        });
    };

    const handlePriceInputChange = (e) => {
        setProductDetails({
            ...productDetails,
            price: e.target.value,
        });

    };

    const handleValidation = (e) => {
        if (e.target.value === '') {
            e.target.className = styles.error;
            toast.error('Field cannot be empty!');

        } else {
            e.target.className = styles.success;

        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>Step One</p>
            </div>

            <div className={styles.right}>
                <label htmlFor="product-name">Product name</label>
                <input
                    onBlur={handleValidation}
                    onChange={handleNameInputChange}
                    value={productDetails.name}
                    type="text"
                    placeholder="Iphone 14 pro max"
                />

                <label className={styles.label2} htmlFor="product-price">
                    Product Price ($)
                </label>
                <input 
                    onChange={handlePriceInputChange}
                    onBlur={handleValidation}
                    value={productDetails.price}
                    type="number" placeholder="Enter price in dollars" />
            </div>
        </div>
    );
}
