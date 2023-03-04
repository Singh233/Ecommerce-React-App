import React, { useEffect, useState } from 'react'
import { getProducts } from '../api';
import ProductCard from '../components/ProductCard'
import styles from '../styles/pages/Products.module.scss';


export default function Products() {

    // products state
    const [products, setProducts] = useState([]);

    useEffect(() => {

        // fetch products from the api
        const fetchProducts = async () => {
            const response = await getProducts();
            console.log(response);
            setProducts(response);
        }
        fetchProducts();
        

    }, [])

    return (
        <div className={styles.container}>
            <div>

            </div>

            <div className={styles.productsList}>
                {
                    products.map((product, id) => {
                        return (
                            <ProductCard key={id} product={product} />
                        )
                    }
                    )
                }

            </div>

        </div>
    )
}
