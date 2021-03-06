import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addTodb } from '../../db';

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, category, seller, price, ratings } = product;
    //console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='addCartBtn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>

        </div>
    );
};

export default Product;