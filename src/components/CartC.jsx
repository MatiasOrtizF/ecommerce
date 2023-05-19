import { createContext , useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart , setCart] = useState([]);

    const addToCart = product =>{
        const productInCartIndex = cart.findIndex(item=>item.id==product.id);
        // si encontre el producto
        if(productInCartIndex >= 0) {
            const newCart = [...cart]
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        } else {
            // si no encontro el producto en el carrito
            setCart(prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity:1
                }
            ]))
        }
    }

    const minus = product => {
        const productInCartIndex = cart.findIndex(item=>item.id==product.id);
        if(cart[productInCartIndex].quantity  > 1) {
            const newCart = [...cart]
            newCart[productInCartIndex].quantity -= 1
            return setCart(newCart)
        }
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
            minus,
            removeFromCart,
        }} >
            {children}
        </CartContext.Provider>
    )


}
