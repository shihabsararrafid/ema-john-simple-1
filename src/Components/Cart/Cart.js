import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for (let product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    tax = (total * .1).toFixed(2);
    //console.log(total);
    grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            <p>Selected Items:{quantity}</p>
            <p>Total:${total}</p>
            <p>Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h3>Grand Total:${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;