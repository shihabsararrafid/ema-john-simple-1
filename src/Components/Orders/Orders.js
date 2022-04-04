import { faCheckDouble, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { removeIdFromDb } from '../../db';
import useCart from '../../useCart/useCart';
import useProducts from '../../useProducts/useProducts';
import Cart from '../Cart/Cart';
import OrderDetail from '../OrderDetail/OrderDetail';
import './Orders.css';

const Orders = () => {
    const [products, setproducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const deleteCart = (item) => {
        const rest = cart.filter(pdct => pdct.id !== item.id);
        setCart(rest);
        removeIdFromDb(item.id)

    }
    return (
        <div className='shop-another'>
            <div className='shopping-item-1'>


                {
                    cart.map(item => <OrderDetail item={item} deleteCart={deleteCart} key={item.id}></OrderDetail>)
                }
            </div>
            <div className='shopping-cart-1'>
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className='button-cart' >Proceed to Checkout <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;