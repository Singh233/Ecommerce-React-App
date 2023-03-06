import React from 'react';

// styles
import styles from '../styles/pages/Cart.module.scss';

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import sortIcon from '../assets/icons/sorting.svg'


export default function Cart() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p className={styles.title}>
                    Cart Items 
                </p>

                <div className={styles.options}>
                    <img src={sortIcon} alt="" />
                    
                </div>
            </div>
        </div>
    );
}
