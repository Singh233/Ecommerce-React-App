import React, { useEffect, useState } from 'react'

import styles from '../styles/ProductCard.module.scss'

// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Products from '../pages/Products'

import 'animate.css';

// Toast
import toast from 'react-hot-toast';

// icons
import categoryIcon from '../assets/icons/category.svg'
import starIcon from '../assets/icons/star.svg'
import sortIcon from '../assets/icons/sorting.svg'
import { connect } from 'react-redux'
import { addToCart, addToWishlist, deleteProduct, removeFromWishlist } from '../actions'

export default function ProductCard(props) {
    const { product } = props;
    const [showDescription, setShowDescription] = useState(false);
    const [ hide, setHide ] = useState(false);
    // for action buttons
    const [addHover, setAddHover] = useState(false);
    const [menuExpand, setMenuExpand] = useState(false);

    // for animation
    const [animate, setAnimate] = useState(false);

    


    // add to cart handler
    const handleAddToCart = () => {
        const dispatch = props.dispatch(addToCart(product));

        // check if button is clicked from wishlist
        if (props.fromWishlist) {
            // remove from wishlist
            props.dispatch(removeFromWishlist(product));
        }
        toast.success('Added to cart');

    }

    // see details button click handler
    const seeDetailsHandler = () => {

        if (showDescription) {
            setShowDescription(!showDescription);

            setTimeout(() => {
                setHide(false);
            }, 500);
            
        } else {
            setShowDescription(!showDescription);
            setHide(true);
        }

    }

    // color palette
    const addToCartStyling = {
        // backgroundColor: addHover ? 'transparent' : product.colorPalette.primary,
        // border: `1px solid ${product.colorPalette.primary}`,
        // color: addHover ? product.colorPalette.primary : 'white'
    }

    const editButtonStyling = {
        // backgroundColor: editHover ? 'transparent' : product.colorPalette.secondary,
        // border: `1px solid ${product.colorPalette.secondary}`,
        // color: editHover ? product.colorPalette.secondary : 'white'
    }

    const seeDetailsStyling = {
        // background: `linear-gradient(90deg, ${product.colorPalette.primary} 0%, ${product.colorPalette.secondary} 50%, rgba(223,18,120,1) 100%)`,
    }

    const cardBackground = {
        background: `url("${product.image}"), linear-gradient(${product.colorPalette.primary}, ${product.colorPalette.secondary})`,
        // backgroundSize: 'contain',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',

    }

    // menu button click handler
    const handleMenuClick = () => {
        if (menuExpand) { 
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
                setMenuExpand(!menuExpand);
            }, 500);
            return;
        }
        setMenuExpand(!menuExpand);
    }

    // edit button click handler
    const handleEditClick = () => {
        // for edit product
        const { editProduct, setEditProduct } = props.editProductState;

        setEditProduct(product);
        
        // close menu 
        setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
                setMenuExpand(!menuExpand);
            }, 500);
    }

    // delete button click handler
    const handleDeleteClick = () => {
        console.log(product.id + ' id ----')
        props.dispatch(deleteProduct(product.id));
        toast.success('Product deleted');
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
            setMenuExpand(!menuExpand);
        }, 500);
    }

    // like button click handler
    const handleLikeClick = () => {
        console.log('like clicked');
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
            setMenuExpand(!menuExpand);
        }, 500);

        // dispatch action to add to wishlist
        props.dispatch(addToWishlist(product));

        toast.success('Added to wishlist');
    }



    

    


    return (
        <div style={cardBackground} className={styles.container}>
            <div className={styles.overlay}>
                {
                    props.editProductState &&
                    <div onClick={handleMenuClick} className={styles.menu}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                }
                

                <div
                    className={`animate__animated animate__faster ${
                        styles.menuExpanded
                    } ${!menuExpand ? styles.hideMenu : ' animate__zoomIn'}
                    ${animate ? ' animate__zoomOut' : ''}`}
                >
                    <p onClick={handleLikeClick} className={styles.likeButton}><FontAwesomeIcon icon={faHeart} /> Like</p>
                    <div className={styles.border}></div>
                    <p onClick={handleEditClick} className={styles.editButton}><FontAwesomeIcon icon={faPenToSquare} /> Edit</p>
                    <div className={styles.border}></div>
                    <p onClick={handleDeleteClick} className={styles.deleteButton}><FontAwesomeIcon icon={faTrash} /> Delete</p>
                    
                </div>

                <div className={styles.image}>
                    <img src={product.image} alt="" />
                </div>

                <div className={styles.details}>
                    <div className={styles.heading}>
                        
                        <p className={styles.category}> <img src={categoryIcon} alt="" /> {product.category}</p>
                        <p className={styles.rating}> {product.rating} / 5 <img src={starIcon} alt="" /> </p>

                    </div>
                    <p className={styles.name}> {product.name.substring(0, 20)} </p>
                    <p className={styles.price}> ${product.price} </p>
                </div>

                <div className={styles.actions}>
                    <button style={ addToCartStyling } className={styles.addToCart}
                        onMouseEnter={() => setAddHover(!addHover)}
                        onMouseLeave={() => setAddHover(!addHover)}
                        onClick={handleAddToCart}
                        >
                        <FontAwesomeIcon icon={faBagShopping} /> Add to Bag
                    </button>

                    {/* <div className={styles.manage}>
                        <button style={ editButtonStyling } className={styles.editButton}
                            onMouseEnter={() => setEditHover(!editHover)}
                            onMouseLeave={() => setEditHover(!editHover)}
                        > 
                        
                            <FontAwesomeIcon icon={faPenToSquare} /> 
                        </button>
                        <button className={styles.deleteButton}> <FontAwesomeIcon icon={faTrash} /> </button>
                    </div> */}

                </div>

                <div style={seeDetailsStyling} className={`animate__animated ${styles.descriptionOverlay} ${!showDescription ? ' animate__flipOutX' : ' animate__flipInX'} ${!hide ? styles.hide : ''}`}>
                    <p className={styles.description}> {product.description}</p>
                </div>

                <div style={seeDetailsStyling} onClick={seeDetailsHandler} className={styles.seeDetailsButton}>
                    <p>See Details &nbsp; 
                        <FontAwesomeIcon icon={!showDescription ? faChevronDown : faChevronUp} 
                            className={`animate__animated  ${showDescription ? 'animate__flipInX' : ''} `} /> 
                    </p>
                </div>
            </div>

            

        </div>
    )
}


