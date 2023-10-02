import axios from "axios";

class CartService {
    getCart(token) {
        const config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }
        return axios.get("http://192.168.0.9:8080/api/cart", config);
    }
    addProductInCart(token, productId) {
        const config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }
        return axios.post("http://192.168.0.9:8080/api/cart?productId=" + productId, null, config);
    }
    deleteProductInCart(token, cartId) {
        const config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }
        return axios.delete("http://192.168.0.9:8080/api/cart/" + cartId, config);
    }
}

export default new CartService;