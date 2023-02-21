import { createContext, useState } from "react";
import { getProductData } from "./productsStore";

// Context (cart, addToCart, removeFromCart)

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
});


// Provider -> lets the entire react app access to all the content in my context -
// lets you access your cart anywehre in the app.

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    // Cart logic [{ id: 1, quantity: 2 }, {id:2, quantity: 3}] 
    // Get One Product Quantity 
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }
    // Add One 
    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            // Cart logic [{ id: 1, quantity: 2 }, {id:2, quantity: 1 + 1}] 
            // maps through array of products using ... spread operatior until it matches the number and then it can add 1 to quantity
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                    // if condidtion
                            ? { ...product, quantity: product.quantity + 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    // Delete one item from cart 
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) { //if quantity goes below 1, the entire product is deleted.
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                    // if condidtion
                            ? { ...product, quantity: product.quantity - 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    // Delete from cart 
    function deleteFromCart(id) {
        // .filter = [] if an object meets a condidtion, it adds it to the array 
        // Logic: if we need to remove a specific product like product 2 [product1, product2, product,3]
        // as long as the product DOES NOT have an id of 2, then pass it into a new array 
        // new array - [product1, product3], product2 is deleted
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id; // 2 != 2 then its false - will not be added to new array 
                })
        )
    }

    //total of all items in cart
    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => { //productData will store the price/quantity of the product 
            const productData = getProductData(cartItem.id);
            totalCost += productData.price * cartItem.quantity;
            return null;
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost

    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

// the CartProvider must then wrap around the entire app in app.js
export default CartProvider;