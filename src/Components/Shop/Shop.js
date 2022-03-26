import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    // to return data we have to do 5 things
    // declare useState
    // use useEffect
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (products) => {
        console.log(products);
    }
    return (
        <div className='shop'>
            <div className="shopping-item">{
                products.map((product) => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }

            </div>
            <div className="shopping-cart">
                <h1>Shopping Cart</h1>
            </div>

        </div>
    );
};

export default Shop;