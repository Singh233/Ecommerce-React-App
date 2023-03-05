import React from 'react'

import styles from '../styles/Filter.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faSort } from '@fortawesome/free-solid-svg-icons'

import sortIcon from '../assets/icons/sorting.svg'

export default function Filter() {

    return (
        <div className={styles.container}>
            <p className={styles.currentFilter}>Latest <span></span> </p>

            <div className={styles.options}>
                <img src={sortIcon} alt="" />
                <p> <FontAwesomeIcon icon={faHeart} /> </p>
            </div>
        </div>
    )
}
