import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addTodb, getCartFromDb } from '../../db';

const Shop = () => {
    // to return data we have to do 5 things
    // declare useState
    // use useEffect
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedData = getCartFromDb();
        //console.log(storedData);
        const savedCart = [];
        for (const id in storedData) {
            let storedProduct = products.find(product => product.id === id);
            // 
            if (storedProduct) {
                const Quantity = storedData[id];
                storedProduct.quantity = Quantity;
                savedCart.push(storedProduct);
            }
            //console.log(storedProduct);
            //storedProduct.quantity = storedData[id];
            //console.log(storedData[id]);

        }
        setCart(savedCart);

    }, [products])
    const handleAddToCart = (products) => {
        let newCart;
        const existedPdct = cart.find(product => product.id === products.id);
        if (!existedPdct) {
            products.quantity = 1;
            newCart = [...cart, products];
        }
        else {
            products.quantity = products.quantity + 1;
            const remain = cart.filter(product => product.id !== products.id);
            newCart = [...remain, existedPdct];
        }

        setCart(newCart);
        //console.log(products);
        addTodb(products.id);
    }
    //console.log(cart);
    return (
        <div className='shop'>
            <div className="shopping-item">{
                products.map((product) => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }

            </div>
            <div className="shopping-cart">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;