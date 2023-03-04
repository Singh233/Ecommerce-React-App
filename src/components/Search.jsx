import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styles from '../styles/Search.module.scss'

// fontawesome for icons
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {

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
                <div className={styles.categoryDropdown}>
                    <p>Electronics <FontAwesomeIcon icon={faChevronDown} /> </p>
                </div>
                <input type="text" placeholder="Search" />
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} /> 
            </div>
            
        </div>
    )
}
