import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, category, seller, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;