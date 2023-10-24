class UserService {
    getUserFromLS() {
        return JSON.parse(localStorage.getItem("banana_keys"));
    }
}

export default new UserService();
