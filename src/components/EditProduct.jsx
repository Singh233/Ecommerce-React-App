import React, { useEffect, useState } from 'react';

import styles from '../styles/EditProduct.module.scss';

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

// icons
import categoryIcon from '../assets/icons/category.svg';
import starIcon from '../assets/icons/star.svg';
import sortIcon from '../assets/icons/sorting.svg';
import { connect } from 'react-redux';
import { addToWishlist, removeFromCart, updateProduct } from '../actions';
import toast from 'react-hot-toast';

export default function EditProduct(props) {
    const { editProduct, setEditProduct } = props.editProductState;

    const [productDetails, setProductDetails] = useState(editProduct);

    const [hide, setHide] = useState(true);

    useEffect(() => {
        console.log(editProduct);
        if (editProduct.name !== '') {
            setHide(false);
        }
        setProductDetails(editProduct)
    }, [editProduct]);

    const cardBackground = {
        background: `url("${editProduct.image}"), linear-gradient(to right, ${editProduct.colorPalette.primary} 0%, ${editProduct.colorPalette.secondary} 30%, black 90%)`,
    };

    const handleValidation = (e) => {
        if (e.target.value === '') {
            e.target.className = styles.error;
            toast.error('Field cannot be empty!');
        } else {
            e.target.className = styles.success;
        }
    };

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

    const handleDescriptionInputChange = (e) => {
        setProductDetails({
            ...productDetails,
            description: e.target.value,
        });
        console.log(productDetails);
    };

    // handle category input change
    const handleCategoryInputChange = (e) => {
        setProductDetails({
            ...productDetails,
            category: e.target.value,
        });
        console.log(productDetails);
    };

    // handle rating input change
    const handleRatingInputChange = (e) => {
        setProductDetails({
            ...productDetails,
            rating: e.target.value,
        });
        console.log(productDetails);
    };

    // handle close button click
    const handleCloseButtonClick = () => {
        setHide(true);
        setEditProduct({
            id: 1,
            image: '',
            name: '',
            category: '',
            description: '',
            price: 0,
            rating: 0,
            colorPalette: {
                primary: '#031059',
                secondary: '#1455D9',
            },
        });
    };

    // handle save button click
    const handleSaveButtonClick = () => {
        props.dispatch(updateProduct(productDetails));
        toast.success('Product updated successfully!');
    };

    return (
        <div
            className={` ${styles.editProductContainer} ${
                hide ? styles.hide : ''
            }`}
        >
            {/* close icon */}
            <FontAwesomeIcon
                onClick={handleCloseButtonClick}
                className={styles.closeIcon}
                icon={faClose}
            />

            <div style={cardBackground} className={styles.cardContainer}>
                <div className={styles.overlay}>
                    <div className={styles.image}>
                        <img src={editProduct.image} alt="" />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.nameAndPrice}>
                            <div className={styles.nameInput}>
                                <FontAwesomeIcon icon={faDiceD6} />
                                <input
                                    onBlur={handleValidation}
                                    onChange={handleNameInputChange}
                                    value={productDetails.name}
                                    type="text"
                                    placeholder="Iphone 14 pro max"
                                />
                            </div>

                            <div className={styles.priceInput}>
                                <FontAwesomeIcon icon={faDollarSign} />
                                <input
                                    onChange={handlePriceInputChange}
                                    onBlur={handleValidation}
                                    value={productDetails.price}
                                    type="number"
                                    placeholder="Enter price in dollars"
                                />
                            </div>
                        </div>

                        <div className={styles.description}>
                            <textarea
                                onBlur={handleValidation}
                                onChange={handleDescriptionInputChange}
                                value={productDetails.description}
                                rows={6}
                                cols={39}
                                placeholder="Enter description..."
                            />
                        </div>

                        <div className={styles.categoryAndRating}>
                            <div className={styles.categoryInput}>
                                <FontAwesomeIcon icon={faSquare} />
                                <input
                                    onBlur={handleValidation}
                                    onChange={handleCategoryInputChange}
                                    value={productDetails.category}
                                    type="text"
                                    placeholder="Electronics.."
                                />
                            </div>

                            <div className={styles.ratingInput}>
                                <FontAwesomeIcon icon={faStar} />

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

                        <div className={styles.actions}>
                            <button className={styles.saveButton}
                                onClick={handleSaveButtonClick}>
                                <FontAwesomeIcon icon={faCheck} />
                                Save
                            </button>
                            <button className={styles.cancelButton}>
                                <FontAwesomeIcon icon={faCancel} />
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
