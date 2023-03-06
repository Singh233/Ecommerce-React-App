import React, { useEffect, useState } from 'react'

import styles from '../../styles/AddProduct/StepTwo.module.scss'

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import 'animate.css';

// icons
import categoryIcon from '../../assets/icons/category.svg'
import starIcon from '../../assets/icons/star.svg'
import sortIcon from '../../assets/icons/sorting.svg'

// Toast
import toast from 'react-hot-toast';

export default function StepTwo(props) {

    // product state
    const { productDetails, setProductDetails } = props.stateAsProp;


    // input form validation
    const handleValidation = (e) => {
        if (e.target.value === '') {
            e.target.className = styles.error;
            toast.error('Description cannot be empty!');

        } else {
            e.target.className = styles.success;

        }
    };

    // handle description input change
    const handleDescriptionInputChange = (e) => {
        setProductDetails({
            ...productDetails,
            description: e.target.value,
        });
        console.log(productDetails)
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>Step Two</p>
            </div>

            <div className={styles.right}>
                <label htmlFor="product-name">Product Description</label>
                <textarea 
                    onBlur={handleValidation}
                    onChange={handleDescriptionInputChange}
                    value={productDetails.description}
                    rows={6} placeholder="Enter description..." />

                
            </div>

        </div>
    )
}
