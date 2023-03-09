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
import { sortByElectronics, sortByHomeAndKitchen } from '../actions'

export default function Search(props) {
    const [showOptions, setShowOptions] = useState(true);


    const handleCategoryClick = () => {
        setShowOptions(!showOptions);
    }

    const handleCategoryClickAll = () => {
        setShowOptions(!showOptions);
    }

    const handleCategoryClickHomeAndKitchen = () => {
        setShowOptions(!showOptions);
        props.dispatch(sortByHomeAndKitchen(props.products));
    }

    const handleCategoryClickElectronics = () => {
        setShowOptions(!showOptions);
        props.dispatch(sortByElectronics(props.products));
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
                    <p>Category <FontAwesomeIcon icon={faChevronDown} /> </p>
                </div>
                <input type="text" placeholder="Search" />
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
