import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Navbar.module.scss";

// fontawesome for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// icons
import menu from "../assets/icons/menu.svg";
import LoadingBar from "react-top-loading-bar";

export default function Navbar() {
  // state to toggle smNavContainer
  const [toggle, setToggle] = React.useState(true);

  // state for cart count
  const [cartCount, setCartCount] = React.useState(0);

  // ref for loading bar
  const ref = React.useRef(null);

  // state for navigation selected
  const [selected, setSelected] = React.useState(window.location.pathname);

  // function to toggle smNavContainer
  const toggleNav = () => {
    setToggle(!toggle);
  };
  const navigate = useNavigate();

  useEffect(() => {
    setSelected(window.location.pathname);

    // get cart from local storage
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCartCount(cart.length);
    }
  }, [navigate, localStorage.getItem("cart")]);

  return (
    <>
      <LoadingBar color="#ffc300" ref={ref} />

      <div className={styles.navContainer}>
        <div className={styles.branding}>
          <div className={styles.square}></div>
          <p>
            {" "}
            <span>S</span>hop<span>W</span>ave
          </p>
        </div>

        <div className={styles.navLinks}>
          <Link
            onClick={() => ref.current.complete()}
            className={`${selected === "/home" ? styles.selected : ""}`}
            to=""
          >
            Home
          </Link>
          <Link
            onClick={() => ref.current.complete()}
            className={`${selected === "/products" ? styles.selected : ""}`}
            to="/products"
          >
            Products
          </Link>
          <Link
            onClick={() => ref.current.complete()}
            className={`${selected === "/add-product" ? styles.selected : ""}`}
            to="/add-product"
          >
            Add Product
          </Link>
        </div>

        <div className={styles.navIcons}>
          <Link
            onClick={() => ref.current.complete()}
            className={`${selected === "/user" ? styles.selected : ""}`}
            to="/user"
          >
            <FontAwesomeIcon icon={faCircleUser} />
          </Link>
          <Link
            onClick={() => ref.current.complete()}
            className={`${selected === "/wishlist" ? styles.selected : ""}`}
            to="/wishlist"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link
            onClick={() => ref.current.complete()}
            className={`${selected === "/cart" ? styles.selected : ""}`}
            to="/cart"
          >
            <div className={styles.cartCount}>
              <FontAwesomeIcon icon={faBagShopping} />
              <p>{cartCount}</p>
            </div>
          </Link>
        </div>

        <div className={styles.smMenu} onClick={toggleNav}>
          <img src={menu} alt="menu" />
        </div>
      </div>

      <div
        className={`animate__animated animate__faster ${
          styles.smNavContainer
        } ${toggle ? styles.hide : " animate__fadeIn"}  `}
      >
        <FontAwesomeIcon
          icon={faClose}
          className={styles.closeIcon}
          onClick={toggleNav}
        />
        <div className={styles.innerContainer}>
          <div className={styles.smNavLinks}>
            <Link onClick={toggleNav} to="/">
              Home
            </Link>
            <div className={styles.border}></div>
            <Link onClick={toggleNav} to="/products">
              Products
            </Link>
            <div className={styles.border}></div>
            <Link onClick={toggleNav} to="/add-product">
              Add Product
            </Link>
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
