import React, { useState } from 'react';
import StepOne from '../components/AddProduct/StepOne';
import StepTwo from '../components/AddProduct/StepTwo';
import StepThree from '../components/AddProduct/StepThree';

// styles
import styles from '../styles/pages/AddProduct.module.scss';

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { postProduct } from '../api';
import toast from 'react-hot-toast';

import 'animate.css';
import SuccessCard from '../components/AddProduct/SuccessCard';

export default function AddProduct() {
    const [step, setStep] = useState(1);

    // state for next button click
    const [nextClick, setNextClick] = useState(false);

    // state for back button click
    const [backClick, setBackClick] = useState(false);

    // state for submit button click
    const [submitClick, setSubmitClick] = useState(false);

    // state for success card
    const [showSuccessCard, setShowSuccessCard] = useState(false);

    // collect data from step one
    const [productDetails, setProductDetails] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        rating: '',
    });

    const handleNextClick = () => {
        if (step === 1) {
            if (productDetails.name === '' || productDetails.price === '') {
                toast.error('Please fill all the fields');
            } else {
                setNextClick(true);
                setBackClick(false);
                setStep(step + 1);
            }
        } else if (step === 2) {
            if (productDetails.description === '') {
                toast.error('Please fill all the fields');
            } else {
                setStep(step + 1);
            }
        }
    };

    const handleBackClick = () => {
        setBackClick(true);
        setNextClick(false);
        setTimeout(() => {
            setStep(step - 1);
            setBackClick(false);
        }, 500);
    };

    const handleSubmitClick = async () => {
        if (productDetails.category === '' || productDetails.rating === '') {
            toast.error('Please fill all the fields');
        } else {
            const response = await toast.promise(postProduct(productDetails), {
                loading: 'Adding Product...',
                success: 'Product Added successfully',
                error: 'Please try again later!',
            });

            // outro animation

            setShowSuccessCard(true); // show success card
            setSubmitClick(true);

            setTimeout(() => {
                setSubmitClick(false); // bounce out animation trigger for success card
                setTimeout(() => {
                    setShowSuccessCard(false); // hide success card
                    setBackClick(true); // bounce out animation trigger for step three
                    setNextClick(false);
                    setTimeout(() => {
                        setStep(step - 1);
                        setBackClick(false); // bounce out animation trigger for step two
                        setBackClick(true);
                        setTimeout(() => {
                            setStep(1);
                            setBackClick(false);
                        }, 500);
                    }, 500);
                }, 500);
            }, 2000);

            // reset the form
            setProductDetails({
                name: '',
                description: '',
                price: '',
                category: '',
                rating: '',
            });
        }
    };

    const setProgress1 = {
        width: step === 1 ? '0%' : '100%',
    };

    const setProgress2 = {
        width: step === 2 || step === 1 ? '0%' : '100%',
    };

    const setShadow2 = {
        boxShadow:
            step === 2 || step === 3
                ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, #e5b2ca 0px -12px 30px, rgba(119, 88, 255, 0.12) 0px 4px 6px, rgba(119, 88, 255, 0.12) 0px 12px 13px, rgba(119, 88, 255, 0.12) 0px -3px 5px'
                : 'none',
        backgroundColor:
            step === 2 || step === 3 ? '#e5b2ca' : 'rgb(86, 86, 86)',
    };

    const setShadow3 = {
        boxShadow:
            step === 3
                ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, #e5b2ca 0px -12px 30px, rgba(119, 88, 255, 0.12) 0px 4px 6px, rgba(119, 88, 255, 0.12) 0px 12px 13px, rgba(119, 88, 255, 0.12) 0px -3px 5px'
                : 'none',
        backgroundColor: step === 3 ? '#e5b2ca' : 'rgb(86, 86, 86)',
    };

    return (
        <div className={styles.container}>
            {/* Heading */}
            <div className={styles.heading}>
                <p>Add new Product to the List</p>
            </div>

            {/* Sub heading */}
            <div className={styles.subHeading}>
                <p>Complete all the steps below to add product to the list.</p>
            </div>

            <div className={styles.progressBar}>
                <div className={styles.step1}>
                    <div className={styles.dot1}></div>
                    <div className={styles.progress1}>
                        <div
                            style={setProgress1}
                            className={styles.progressFill1}
                        ></div>
                    </div>
                </div>

                <div className={styles.step2}>
                    <div style={setShadow2} className={styles.dot2}></div>
                    <div className={styles.progress2}>
                        <div
                            style={setProgress2}
                            className={styles.progressFill2}
                        ></div>
                    </div>
                </div>

                <div className={styles.step3}>
                    <div style={setShadow3} className={styles.dot3}></div>
                </div>
            </div>

            <div className={styles.steps}>
                {/* Steps */}
                <StepOne
                    stateAsProp={{ productDetails, setProductDetails }}
                    // passing state to add animation to cards
                    nextClickState={{ nextClick, setNextClick }}
                    backClickState={{ backClick, setBackClick }}
                    currentStep={step}
                />

                <StepTwo
                    stateAsProp={{ productDetails, setProductDetails }}
                    // passing state to add animation to cards
                    nextClickState={{ nextClick, setNextClick }}
                    backClickState={{ backClick, setBackClick }}
                    currentStep={step}
                />

                <StepThree
                    stateAsProp={{ productDetails, setProductDetails }}
                    // passing state to add animation to cards
                    nextClickState={{ nextClick, setNextClick }}
                    backClickState={{ backClick, setBackClick }}
                    currentStep={step}
                />

                <SuccessCard
                    stateAsProp={{ productDetails, setProductDetails }}
                    // passing state to add animation to cards
                    showSuccessState={{ showSuccessCard, setShowSuccessCard }}
                    submitClickState={{ submitClick, setSubmitClick }}
                    currentStep={step}
                />
            </div>

            {/* Buttons */}
            <div className={styles.buttons}>
                {step !== 1 && (
                    <button className={styles.back} onClick={handleBackClick}>
                        {' '}
                        <FontAwesomeIcon icon={faChevronCircleLeft} /> Back
                    </button>
                )}
                {step === 3 ? (
                    <button
                        onClick={handleSubmitClick}
                        className={styles.submit}
                    >
                        Submit <FontAwesomeIcon icon={faCircleCheck} />{' '}
                    </button>
                ) : (
                    <button className={styles.next} onClick={handleNextClick}>
                        Next <FontAwesomeIcon icon={faChevronCircleRight} />{' '}
                    </button>
                )}
            </div>
        </div>
    );
}
