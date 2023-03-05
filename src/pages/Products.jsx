import React, { useEffect, useState } from 'react'
import { getProducts } from '../api';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard'
import Search from '../components/Search';
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
            <Search />
            <Filter />

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
