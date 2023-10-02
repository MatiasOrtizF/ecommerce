import { createContext, useState } from "react";
import ProductService from '../service/ProductService';
import CartService from '../service/CartService';

export const CartContext = createContext();

export function CartProvider({children}) {
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyIiwiaWF0IjoxNjk2MjAwNDk2LCJzdWIiOiJjYXJsb3MubWFydGluZXpAZW1haWwuY29tIiwiaXNzIjoiTWFpbiIsImV4cCI6MTY5NjgwNTI5Nn0.VWj9B9PaXAF_naJB3jftIv7Ki47SnUtFurh21H6-GqE");
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const listProducts = () => {
        ProductService.getAllProducts(token).then(response=> {
            setProducts(response.data);
        }).catch(error=> {
            console.log(error);
        })
    }

    const addToCart = (productId) => {
        CartService.addProductInCart(token, productId).then(response=> {
            cartList();
        }).catch(error=> {
            console.log(error);
        })
    }

    const minus = product => {
        const productInCartIndex = cart.findIndex(item=>item.id==product.id);
        if(cart[productInCartIndex].quantity  > 1) {
            const newCart = [...cart]
            newCart[productInCartIndex].quantity -= 1
            return setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const cartList = () => {
        CartService.getCart(token).then(response=> {
            const productData = response.data.map(item=> ({
                cartId: item.id,
                ...item.product,
            }));
            setCart(productData);
        }).catch(error=> {
            console.log(error);
        })
    }

    const removeFromCart = (cartId) => {
        CartService.deleteProductInCart(token, cartId).then(response=> {
            cartList();
        }).catch(error=> {
            console.log(error);
        })
    }


    return (
        <CartContext.Provider value={{
            addToCart,
            clearCart,
            minus,
            removeFromCart,
            cartList,
            listProducts,
            products,
            cart
        }} >
            {children}
        </CartContext.Provider>
    )


}