import React, { useEffect, useState } from 'react';

import styles from '../../styles/AddProduct/SuccessCard.module.scss';

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import 'animate.css';

// icons
import categoryIcon from '../../assets/icons/category.svg';
import starIcon from '../../assets/icons/star.svg';
import sortIcon from '../../assets/icons/sorting.svg';

// Toast
import toast from 'react-hot-toast';

export default function SuccessCard(props) {

    // get show success card state
    const { showSuccessCard, setShowSuccessCard } = props.showSuccessState;

    // get submit click state
    const { submitClick, setSubmitClick } = props.submitClickState;

    const currentStep = props.currentStep;



    return (
        <div className={`animate__animated 
            ${!showSuccessCard  ? styles.hide : ''} 
            ${styles.container} 
            ${!submitClick ? 'animate__bounceOutRight' : 'animate__bounceInRight'}
        `}>
            <div className={styles.main}>
                <p> <FontAwesomeIcon icon={faCheckCircle} /> Successfully Added</p>
                <span>Checkout on products page</span>
            </div>

        </div>
    );
}
