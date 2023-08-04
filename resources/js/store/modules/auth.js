import axios from "axios";
import router from "@/router/index.js";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import { HTTP_STATUS_CODES } from "@/constants/httpStatuses.constants.js";

export default {
    state: {},
    namespaced: true,
    getters: {
        authToken() {
            return localStorage.getItem("banana_key") || "";
        },
    },
    actions: {
        async login({ commit, dispatch }, payload) {
            try {
                console.log(payload);
                const res = await axios.post("/api/signIn", payload);
                const { message, token } = res?.data;

                // TODO: Replace with notification
                console.info(message, token);
                localStorage.setItem("banana_key", token);
                dispatch("user/setUserData", message, {
                    root: true,
                });
                router.push({ name: ROUTE_NAMES.HOME });
            } catch (error) {
                // TODO: Replace with notification
                console.error(error);
            }
        },
        async register({ commit }, payload) {
            try {
                const res = await axios.post("/api/signUp", payload);
                const { data } = res;
                // TODO: Replace with notification
                console.info(data.message);

                router.push({ name: ROUTE_NAMES.LOGIN });
            } catch (error) {
                // TODO: Replace with notification
                console.error(error);
            }
        },
        async logout({ dispatch }) {
            try {
                await axios.post("/api/logout");
                dispatch("clearAuthData");
            } catch (error) {
                console.error(error);
            }
        },
        clearAuthData({ dispatch }) {
            dispatch("user/setUserData", null, {
                root: true,
            });

            localStorage.removeItem("banana_key");
            router.push({ name: ROUTE_NAMES.LOGIN });
        },
    },
    mutations: {},
};
