const addTodb = (id) => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    let quantity = shoppingCart[id];
    if (quantity) {
        let newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;

    }
    else {
        shoppingCart[id] = 1;
    }


    localStorage.setItem("Shopping-cart", JSON.stringify(shoppingCart));
}
const removeIdFromDb = (id) => {
    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("Shopping-cart", JSON.stringify(shoppingCart));

        }
    }
}
const getCartFromDb = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const deleteFromDb = (id) => {
    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        localStorage.removeItem("shopping-cart")
    }
}
export { addTodb, removeIdFromDb, getCartFromDb, deleteFromDb };