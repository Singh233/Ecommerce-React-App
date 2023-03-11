import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import styles from '../styles/Navbar.module.scss';

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

// icons
import menu from '../assets/icons/menu.svg';

export default function Navbar() {
    // state to toggle smNavContainer
    const [toggle, setToggle] = React.useState(true);

    // state for navigation selected
    const [selected, setSelected] = React.useState(window.location.pathname);

    // function to toggle smNavContainer
    const toggleNav = () => {
        setToggle(!toggle);
    };
    const navigate = useNavigate();


    useEffect(() => {
        setSelected(window.location.pathname);
        console.log(window.location.pathname);

    }, [navigate]);

    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.branding}>
                    <div className={styles.square}></div>
                    <p>
                        {' '}
                        <span>S</span>hop<span>W</span>ave
                    </p>
                </div>

                <div className={styles.navLinks}>
                    <Link className={`${selected === '/home' ? styles.selected : ''}`} to="/">Home</Link>
                    <Link className={`${selected === '/products' ? styles.selected : ''}`} to="/products">Products</Link>
                    <Link className={`${selected === '/add-product' ? styles.selected : ''}`} to="/add-product">Add Product</Link>
                </div>

                <div className={styles.navIcons}>
                    <Link className={`${selected === '/wishlist' ? styles.selected : ''}`} to="/wishlist">
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                    <Link className={`${selected === '/cart' ? styles.selected : ''}`} to="/cart">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </Link>
                    <Link className={`${selected === '/user' ? styles.selected : ''}`} to="/user">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </Link>
                </div>

                <div className={styles.smMenu} onClick={toggleNav}>
                    <img src={menu} alt="menu" />
                </div>
            </div>

            <div className={`animate__animated animate__faster ${styles.smNavContainer} ${ toggle ? styles.hide : ' animate__fadeIn'}  `}>
                <FontAwesomeIcon icon={faClose} className={styles.closeIcon} onClick={toggleNav} />
                <div className={styles.innerContainer}>
                    <div className={styles.smNavLinks}>
                        <Link onClick={toggleNav} to="/">Home</Link>
                        <div className={styles.border}></div>
                        <Link onClick={toggleNav} to="/products">Products</Link>
                        <div className={styles.border}></div>
                        <Link onClick={toggleNav} to="/add-product">Add Product</Link>
                        <div className={styles.border}></div>
                        <Link onClick={toggleNav} to="/wishlist">
                            <FontAwesomeIcon icon={faHeart} />
                            Wishlist
                        </Link>
                        <div className={styles.border}></div>

                        <Link onClick={toggleNav} to="/cart">
                            <FontAwesomeIcon icon={faBagShopping} />
                            Cart
                        </Link>
                        <div className={styles.border}></div>

                        <Link onClick={toggleNav} to="/user">
                            <FontAwesomeIcon icon={faCircleUser} />
                            Profile
                        </Link>
                    </div>

                    
                </div>
            </div>
        </>
    );
}
