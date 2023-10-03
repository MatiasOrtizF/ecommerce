import { createContext, useState } from "react";
import ProductService from '../service/ProductService';
import CartService from '../service/CartService';
import { Alert } from "react-native";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [token, setToken] = useState("");
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [loadingCart, setLoadingCart] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);

    const totalPriceCalculator = () => {
        const total = cart.reduce((acc, product)=> {
            const priceWithDiscount = product.price * (1 - product.discountPercentage/100);
            return acc + (priceWithDiscount * product.quantity);
        }, 0); 
        setTotalPrice(total);
    }

    const listProducts = () => {
        ProductService.getAllProducts(token).then(response=> {
            setProducts(response.data);
        }).catch(error=> {
            console.log(error);
        }).finally(()=> {
            setLoadingProducts(false);
        })
    }

    const addToCart = (productId) => {
        CartService.addProductInCart(token, productId).then(response=> {
            cartList();
            totalPriceCalculator();
        }).catch(error=> {
            if(error.response && error.response.status === 400) {
                alert(error.response.data);
            } else {
                console.log(error);
            }
        })
    }

    const minus = product => {
        const productInCartIndex = cart.findIndex(item=> item.id==product.id);
        if(cart[productInCartIndex].quantity  > 1) {
            const newCart = [...cart]
            newCart[productInCartIndex].quantity -= 1
            totalPriceCalculator();
            return setCart(newCart)
        }
    }

    const plus = product => {
        const productInCartIndex = cart.findIndex(item=> item.cartId==product.cartId);
        if(cart[productInCartIndex].quantity  < 15) {
            const newCart = [...cart]
            newCart[productInCartIndex].quantity += 1
            totalPriceCalculator();
            return setCart(newCart)
        }
    }

    const clearCart = () => {
        Alert.alert('Confirm Checkout', 'Are you sure you want to proceed with the checkout?', [
            {text: 'Cancel'},
            {
                text: 'Yes',
                onPress: ()=> {
                    console.log("checkout");
                }
            }
        ])
    }

    const cartList = () => {
        CartService.getCart(token).then(response=> {
            const productData = response.data.map(item=> ({
                cartId: item.id,
                quantity: item.quantity,
                ...item.product,
            }));
            setCart(productData);
        }).catch(error=> {
            console.log(error);
        }).finally(()=> {
            setLoadingCart(false);
        })
    }

    const removeFromCart = (cartId) => {
        Alert.alert('Delete Product', 'Are you sure you want to delete product from cart?', [
            {text: 'Cancel'},
            {
                text: 'Yes',
                onPress: ()=> {
                    CartService.deleteProductInCart(token, cartId).then(response=> {
                        cartList();
                        totalPriceCalculator();
                    }).catch(error=> {
                        console.log(error);
                    })
                }
            }
        ])
    }


    return (
        <CartContext.Provider value={{
            addToCart,
            clearCart,
            minus,
            plus,
            removeFromCart,
            cartList,
            listProducts,
            products,
            cart,
            loadingProducts,
            loadingCart,
            isSignedIn,
            setToken,
            setIsSignedIn,
            totalPrice,
            totalPriceCalculator
        }} >
            {children}
        </CartContext.Provider>
    )


}