import React, { useState } from 'react'
import StepOne from '../components/AddProduct/StepOne'
import StepTwo from '../components/AddProduct/StepTwo'
import StepThree from '../components/AddProduct/StepThree'

// styles
import styles from '../styles/pages/AddProduct.module.scss'

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { postProduct } from '../api'

export default function AddProduct() {
    const [step, setStep] = useState(1);

    // collect data from step one
    const [productDetails, setProductDetails] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        rating: ''
    });


    const handleNextClick = () => {
        if (step === 1) {
            if (productDetails.name === '' || productDetails.price === '') {
                alert('Please fill all the fields');
            } else {
                setStep(step + 1);
            }
        } else if (step === 2) {
            if (productDetails.description === '') {
                alert('Please fill all the fields');
            } else {
                setStep(step + 1);
            }
        }
    }

    const handleSubmitClick = async () => {
        if (productDetails.category === '' || productDetails.rating === '') {
            alert('Please fill all the fields');
        } else {
            const response = await postProduct(productDetails)
            console.log(response);
            alert('Product added successfully');
            // reset the form
            setStep(1);
            setProductDetails({
                name: '',
                description: '',
                price: '',
                category: '',
                rating: ''
            });
        }
    }

    const setProgress1 = {
        width: step === 1 ? '0%' : '100%'
        
    }

    const setProgress2 = {
        width: step === 2 || step === 1 ? '0%' : '100%'
    }

    const setShadow2 = {
        boxShadow: step === 2 || step === 3 ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, #e5b2ca 0px -12px 30px, rgba(119, 88, 255, 0.12) 0px 4px 6px, rgba(119, 88, 255, 0.12) 0px 12px 13px, rgba(119, 88, 255, 0.12) 0px -3px 5px' : 'none',
        backgroundColor: step === 2 || step === 3 ? '#e5b2ca' : 'rgb(86, 86, 86)'
    }

    const setShadow3 = {
        boxShadow: step === 3 ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, #e5b2ca 0px -12px 30px, rgba(119, 88, 255, 0.12) 0px 4px 6px, rgba(119, 88, 255, 0.12) 0px 12px 13px, rgba(119, 88, 255, 0.12) 0px -3px 5px' : 'none',
        backgroundColor: step === 3 ? '#e5b2ca' : 'rgb(86, 86, 86)'
    }



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
                        <div style={setProgress1} className={styles.progressFill1}></div>
                    </div>
                    
                </div>

                <div className={styles.step2}>
                    <div style={setShadow2} className={styles.dot2}></div>
                    <div className={styles.progress2}>
                        <div style={setProgress2} className={styles.progressFill2}></div>
                    </div>

                </div>

                <div className={styles.step3}>
                    <div style={setShadow3} className={styles.dot3}></div>
                </div>

            </div>

            {/* Steps */
                step === 1 ? <StepOne stateAsProp={{productDetails, setProductDetails}} /> : 
                step === 2 ? <StepTwo stateAsProp={{productDetails, setProductDetails}} /> : 
                <StepThree stateAsProp={{productDetails, setProductDetails}} />
            }

            {/* Buttons */}
            <div className={styles.buttons}>
                { step !== 1 && <button className={styles.back} onClick={() => setStep(step - 1)}> <FontAwesomeIcon icon={faChevronCircleLeft} /> Back</button> }
                { step === 3 ? <button onClick={handleSubmitClick} className={styles.submit}>Submit <FontAwesomeIcon icon={faCircleCheck} /> </button> : 
                    <button className={styles.next} onClick={handleNextClick}>Next <FontAwesomeIcon icon={faChevronCircleRight} /> </button> }
            </div>

            
            

        </div>
    )
}
