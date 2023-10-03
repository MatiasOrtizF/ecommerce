import axios from "axios";

class LoginService {
    loginUser(userData) {
        return axios.post("http://192.168.0.9:8080/api/login", userData);
    }
}

export default new LoginService;