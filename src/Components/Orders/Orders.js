import React from 'react';
import useCart from '../../useCart/useCart';
import useProducts from '../../useProducts/useProducts';

const Orders = () => {
    const [products, setproducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>This is the orders page:{products.length}</h1>
            <h2>The product which has been added to the cart :{cart.length}</h2>
        </div>
    );
};

export default Orders;