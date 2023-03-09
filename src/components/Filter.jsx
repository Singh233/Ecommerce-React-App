import React, { useState } from 'react'

import styles from '../styles/Filter.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons'

import sortIcon from '../assets/icons/sorting.svg'
import { Link } from 'react-router-dom'
import { addProducts, sortByLatest, sortProductsHighToLow, sortProductsLowToHigh } from '../actions'
import toast from 'react-hot-toast'
import { getProducts } from '../api'

export default function Filter(props) {
    const [showOptions, setShowOptions] = useState(true);

    // state for current sort option
    const [currentSort, setCurrentSort] = useState('Latest');

    // state to keep button active
    const [active, setActive] = useState(false);

    // state for low to high button active
    const [lowToHighActive, setLowToHighActive] = useState(false);

    // state for high to low button active
    const [highToLowActive, setHighToLowActive] = useState(false);

    // state for latest button active
    const [latestActive, setLatestActive] = useState(true);


    const handleSortIconClick = () => {
        setShowOptions(!showOptions);
    }

    const buttonEffect = {
        backgroundColor: '#0f65ee',
    }

    const activeTextEffect = {
        color: '#0f65ee',
    }

    // for low to high
    const handleLowToHighClick = () => {
        setShowOptions(!showOptions);
        props.dispatch(sortProductsLowToHigh(props.products));
        setCurrentSort('Low to High')
        toast.success('Sorted by price low to high');
        setActive(true);
        setLowToHighActive(true);
        setHighToLowActive(false);
        setLatestActive(false);
    }

    // for high to low
    const handleHighToLowClick = () => {
        setShowOptions(!showOptions);
        props.dispatch(sortProductsHighToLow(props.products));
        setCurrentSort('High to Low')
        toast.success('Sorted by price high to low');
        setActive(true);
        setHighToLowActive(true);
        setLowToHighActive(false);
        setLatestActive(false);
    }

    // for latest
    const handleLatestClick = () => {
        setShowOptions(!showOptions);
        const fetchProducts = async () => {
            const response = await toast.promise(getProducts(), {
                loading: 'Sorting to latest...',
                success: 'Sorted by latest',
                error: 'Please try again later!',
            });
            props.dispatch(addProducts(response)); // dispatch action to add products to store
        };
        fetchProducts();
        setCurrentSort('Latest')
        setActive(false);
        setLatestActive(true);
        setHighToLowActive(false);
        setLowToHighActive(false);
    }

    return (
        <div className={styles.container}>
            <p className={styles.currentFilter}>{currentSort} <span></span> </p>

            <div className={styles.options}>
                <img style={active ? buttonEffect : {}} onClick={handleSortIconClick} src={sortIcon} alt="" />
                <Link to='/wishlist'><p> <FontAwesomeIcon icon={faHeart} /> </p></Link>

                <div className={`animate__animated animate__faster ${styles.sortOptions} ${showOptions ? styles.hide : 'animate__zoomIn'}`}>
                        <p 
                            onClick={handleLatestClick} 
                            style={latestActive ? activeTextEffect : {}}
                            className={styles.latest}> 
                                <FontAwesomeIcon icon={faDiceD6} /> Latest <span>Default</span> </p>
                        <div className={styles.border}></div>
                        <p 
                            style={lowToHighActive ? activeTextEffect : {}}
                            onClick={handleLowToHighClick} className={styles.lowHigh}> <FontAwesomeIcon icon={faArrowUp} /> Low to High</p>
                        <div className={styles.border}></div>
                        <p 
                            style={highToLowActive ? activeTextEffect : {}}
                            onClick={handleHighToLowClick} className={styles.highLow}> <FontAwesomeIcon icon={faArrowDown} /> High to Low</p>
                </div>

                
            </div>
        </div>
    )
}
