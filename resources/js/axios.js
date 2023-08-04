import axios from "axios";
import store from "@/store/index.js";
import router from "@/router/index.js";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import { HTTP_STATUS_CODES } from "@/constants/httpStatuses.constants.js";

axios.defaults.headers.common["Authorization"] =
    "Bearer " + store.getters["auth/authToken"];

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === HTTP_STATUS_CODES.HTTP_UNAUTHORIZED) {
            store.dispatch("auth/clearAuthData");
            router.push({ name: ROUTE_NAMES.LOGIN });
        }
        return Promise.reject(error);
    },
);
