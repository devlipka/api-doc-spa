import axios from "axios";
import router from "@/router/index.js";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import { HTTP_STATUS_CODES } from "@/constants/httpStatuses.constants.js";
import { USER_MUTATION_TYPES } from "@/constants/mutationTypes/user.mutationTypes.constants.js";

export default {
    state: {
        user: null,
    },
    namespaced: true,
    actions: {
        setUserData({ commit }, payload) {
            commit(USER_MUTATION_TYPES.SET_USER_DATA, payload);
        },
        async fetchUser({ dispatch }) {
            try {
                const res = await axios.get("/api/user");
                console.log(res, "AAAAAA");

                dispatch("setUserData", res);
            } catch (error) {
                console.error(error);
            }
        },
    },
    mutations: {
        [USER_MUTATION_TYPES.SET_USER_DATA](state, payload) {
            state.user = payload;
        },
    },
};
