import router from "@/router/index.js";
import AuthService from "@/services/auth.service";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import { AUTH_MUTATION_TYPES } from "@/constants/mutationTypes/auth.mutationTypes.constants.js";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export default {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                (user) => {
                    commit(AUTH_MUTATION_TYPES.LOGIN_SUCCESS, user);
                    return Promise.resolve(user);
                },
                (error) => {
                    commit(AUTH_MUTATION_TYPES.LOGIN_FAILURE);
                    return Promise.reject(error);
                },
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit(AUTH_MUTATION_TYPES.LOGOUT);
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                (response) => {
                    commit(AUTH_MUTATION_TYPES.REGISTER_SUCCESS);
                    router.push({ name: ROUTE_NAMES.LOGIN });
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit(AUTH_MUTATION_TYPES.REGISTER_FAILURE);
                    return Promise.reject(error);
                },
            );
        },
    },
    mutations: {
        [AUTH_MUTATION_TYPES.LOGIN_SUCCESS](state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        [AUTH_MUTATION_TYPES.LOGIN_FAILURE](state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        [AUTH_MUTATION_TYPES.LOGOUT](state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        [AUTH_MUTATION_TYPES.REGISTER_SUCCESS](state) {
            state.status.loggedIn = false;
        },
        [AUTH_MUTATION_TYPES.REGISTER_FAILURE](state) {
            state.status.loggedIn = false;
        },
    },
};
