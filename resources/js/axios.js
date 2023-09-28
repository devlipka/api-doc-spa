import axios from "axios";
import AuthService from "@/services/auth.service.js";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import { HTTP_STATUS_CODES } from "@/constants/httpStatuses.constants.js";

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === HTTP_STATUS_CODES.HTTP_UNAUTHORIZED) {
            AuthService.logout();
            this.$router.push({ name: ROUTE_NAMES.LOGIN });
        }
        return Promise.reject(error);
    },
);
