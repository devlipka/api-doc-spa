import axios from "axios";

const API_URL = "http://localhost/api/auth/";

class AuthService {
    login(payload) {
        return axios.post(API_URL + "signIn", payload).then((response) => {
            if (response.data.token) {
                localStorage.setItem(
                    "banana_keys",
                    JSON.stringify(response.data),
                );
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("banana_keys");
    }

    register(payload) {
        return axios.post(API_URL + "signUp", payload);
    }
}

export default new AuthService();
