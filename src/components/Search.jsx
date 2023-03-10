import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import styles from '../styles/Search.module.scss'

// fontawesome for icons
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons'
import { sortByAll, sortByElectronics, sortByHomeAndKitchen } from '../actions'
import toast from 'react-hot-toast'

export default function Search(props) {
    const [showOptions, setShowOptions] = useState(true);

    // state for current sort option
    const [currentSort, setCurrentSort] = useState('Category');


    const handleCategoryClick = () => {
        setShowOptions(!showOptions);
    }

    const handleCategoryClickAll = () => {
        setShowOptions(!showOptions);
        props.dispatch(sortByAll(props.products));
        toast.success('All products displayed');
        setCurrentSort('Category');
    }

    const handleCategoryClickHomeAndKitchen = () => {
        setShowOptions(!showOptions);
        props.dispatch(sortByHomeAndKitchen(props.products));
        toast.success('Home and kitchen products displayed');
        setCurrentSort('Home and kitchen');
    }

    const handleCategoryClickElectronics = () => {
        setShowOptions(!showOptions);
        props.dispatch(sortByElectronics(props.products));
        toast.success('Electronics products displayed');
        setCurrentSort('Electronics');
    }



    
    return (
        <div className={styles.container}>

            {/* Heading */}
            <div className={styles.heading}>
                <p>Search for Popular Products</p>
            </div>

            {/* Sub heading */}
            <div className={styles.subHeading}>
                <p>Discover the best products for you. Search for products by name.</p>
            </div>

            {/* Search input */}
            <div className={styles.searchInput}>
                <div onClick={handleCategoryClick} className={styles.categoryDropdown}>
                    <p>{currentSort} <FontAwesomeIcon icon={faChevronDown} /> </p>
                </div>
                <input type="text" placeholder="Coming soon!" disabled />
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} /> 

                <div className={`animate__animated animate__faster ${styles.sortOptions} ${showOptions ? styles.hide : 'animate__zoomIn'}`}>
                        <p 
                            onClick={handleCategoryClickAll}
                            className={styles.latest}> 
                                All </p>
                        <div className={styles.border}></div>
                        <p 
                            onClick={handleCategoryClickHomeAndKitchen}
                            className={styles.lowHigh}>  Home and kitchen</p>
                        <div className={styles.border}></div>
                        <p 
                            onClick={handleCategoryClickElectronics}
                            className={styles.highLow}> Electronics</p>
                </div>
            </div>
            
        </div>
    )
}
