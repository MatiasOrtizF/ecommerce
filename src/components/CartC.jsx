import { createContext , useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart , setCart] = useState([]);

    const addToCart = product =>{
        const productInCartIndex = cart.findIndex(item=>item.id==product.id);
        // si encontre el producto
        if(productInCartIndex >0) {
            console.log("ya existe");
        }

        // si no encontro el producto en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
            }
        ]))
        console.log(cart);
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item=>item.id!=product.id));
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }} >
            {children}
        </CartContext.Provider>
    )


}
