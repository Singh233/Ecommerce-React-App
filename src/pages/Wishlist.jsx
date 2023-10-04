import React, { useEffect, useState } from "react";

import styles from "../styles/pages/Wishlist.module.scss";

// fontawesome for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import sortIcon from "../assets/icons/sorting.svg";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link, Navigate } from "react-router-dom";

export default function Wishlist(props) {
  const { products, dispatch } = props;

  const [wishlistItems, setWishlistItems] = useState(products);

  useEffect(() => {
    // check if local storage has wishlist and set it to the local state
    if (localStorage.getItem("wishlist")) {
      const wishlistStore = JSON.parse(localStorage.getItem("wishlist"));
      setWishlistItems(wishlistStore);
    }
  }, [localStorage.getItem("wishlist")]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Wishlist Items</p>

        <div className={styles.options}>
          <img src={sortIcon} alt="" />
          <span className={styles.tooltiptext}>Coming soon!</span>
        </div>
      </div>

      <div className={styles.productsList}>
        {
          // iterate over the cart items
          wishlistItems.map((item, index) => {
            return (
              <ProductCard
                key={index}
                product={item}
                dispatch={dispatch}
                fromWishlist={true}
              />
            );
          })
        }
      </div>

      {wishlistItems.length === 0 && (
        <div className={` ${styles.empty} animate__animated animate__fadeIn`}>
          <p className={styles.emptyText}>Your wishlist is empty</p>
          <Link to="/products" className={styles.emptyLink}>
            <button>Browse Products</button>
          </Link>
        </div>
      )}

      <div className={styles.checkout}></div>
    </div>
  );
}
