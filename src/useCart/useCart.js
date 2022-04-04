import { useEffect, useState } from "react"
import { getCartFromDb } from "../db";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getCartFromDb();

        const savedCart = [];
        for (const id in storedCart) {
            const savedProduct = products.find(product => product.id === id)
            if (savedProduct) {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);

            }
        }
        setCart(savedCart);
    }, [products])
    return [cart, setCart];
}
export default useCart;
