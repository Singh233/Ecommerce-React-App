import React, { useEffect, useState } from 'react';

import styles from '../../styles/AddProduct/StepThree.module.scss';

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

export default function StepThree(props) {
    // product state
    const { productDetails, setProductDetails } = props.stateAsProp;

        // get back click state
        const { backClick, setBackClick } = props.backClickState;

    // input form validation
    const handleValidation = (e) => {
        if (e.target.value === '') {
            e.target.className = styles.error;
            toast.error('Field cannot be empty!');
        } else {
            e.target.className = styles.success;
        }
    };

    // handle category input change
    const handleCategoryInputChange = (e) => {
        setProductDetails({
            ...productDetails,
            category: e.target.value,
        });
    };

    // handle rating input change
    const handleRatingInputChange = (e) => {
        setProductDetails({
            ...productDetails,
            rating: e.target.value,
        });
    };

    return (
        <div className={`animate__animated 
            ${props.currentStep !== 3 ? styles.hide : ''} 
            ${styles.container} 
            ${backClick && props.currentStep === 3 ? 'animate__bounceOutRight' : 'animate__bounceInRight'}
            `}>
            <div className={styles.left}>
                <p>Step Three</p>
            </div>

            <div className={styles.right}>
                <label htmlFor="product-name">Product Category</label>
                <input 
                    onBlur={handleValidation}
                    onChange={handleCategoryInputChange}
                    value={productDetails.category}
                    type="text" placeholder="Electronics.." />

                <label className={styles.label2} htmlFor="product-price">
                    Product Rating
                </label>
                <input
                    onBlur={handleValidation}
                    onChange={handleRatingInputChange}
                    value={productDetails.rating}
                
                    type="number"
                    maxLength={1}
                    placeholder="Rate out of 5"
                />
            </div>
        </div>
    );
}
