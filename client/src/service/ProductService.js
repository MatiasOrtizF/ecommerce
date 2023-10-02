import axios from "axios";

class ProductService {
    getAllProducts(token) {
        const config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }
        return axios.get("http://192.168.0.9:8080/api/product", config);
    }
}

export default new ProductService;