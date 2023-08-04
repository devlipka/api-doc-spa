import { createStore } from "vuex";
import auth from "@/store/modules/auth.js";
import user from "@/store/modules/user.js";

const store = createStore({
    state: {},
    actions: {},
    mutations: {},
    modules: {
        auth,
        user,
    },
});

export default store;
