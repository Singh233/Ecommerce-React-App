import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/Navbar.module.scss'

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    return (
        <div className={styles.navContainer}>

            <div className={styles.branding}>
                <div className={styles.square}></div>
                <p> <span>S</span>hop<span>W</span>ave</p>
            </div>

            <div className={styles.navLinks}>
                <Link to="/">Home</Link>
                <Link to="/about">Products</Link>
                <Link to="/contact">Add Product</Link>
            </div>

            <div className={styles.navIcons}>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faBagShopping} />
                </Link>
                <Link to="/user">
                    <FontAwesomeIcon icon={faCircleUser} />
                </Link>
            </div>

            
        </div>
    )
}
