export default function authHeader() {
    let user = JSON.parse(localStorage.getItem("banana_keys"));

    if (user.token) {
        return { Authorization: "Bearer " + user.token };
    } else {
        return {};
    }
}
