import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    // to return data we have to do 5 things
    // declare useState
    // use useEffect
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop'>
            <div className="shopping-item">
                <h1>Shopping Item :{product.length}</h1>
            </div>
            <div className="shopping-cart">
                <h1>Shopping Cart</h1>
            </div>

        </div>
    );
};

export default Shop;