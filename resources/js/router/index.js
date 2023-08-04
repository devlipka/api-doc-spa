import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";
import Login from "@/views/Login/Login.vue";
import Users from "@/views/Users/Users.vue";
import Profile from "@/views/Profile/Profile.vue";
import Products from "@/views/Products/Products.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Registration from "@/views/Registration/Registration.vue";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import AppLayout from "@/components/Layout/AppLayout/AppLayout.vue";
import AuthLayout from "@/components/Layout/AuthLayout/AuthLayout.vue";

const routes = [
    {
        path: "/",
        component: Dashboard,
        name: ROUTE_NAMES.HOME,
        meta: { layout: AppLayout, authOnly: true },
    },
    {
        path: "/users",
        component: Users,
        name: ROUTE_NAMES.USERS,
        meta: { layout: AppLayout, authOnly: true },
    },
    {
        path: "/profile",
        component: Profile,
        name: ROUTE_NAMES.PROFILE,
        meta: { layout: AppLayout, authOnly: true },
    },
    {
        path: "/products",
        component: Products,
        name: ROUTE_NAMES.PRODUCTS,
        meta: { layout: AppLayout, authOnly: true },
    },
    {
        path: "/sign-in",
        component: Login,
        name: ROUTE_NAMES.LOGIN,
        meta: { layout: AuthLayout },
    },
    {
        path: "/sign-up",
        component: Registration,
        name: ROUTE_NAMES.REGISTER,
        meta: { layout: AuthLayout },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isUserAuthenticated = store.getters["auth/authToken"];
    const routeRequiresAuth = to.matched.some((item) => item.meta.authOnly);
    if (routeRequiresAuth && !isUserAuthenticated) {
        next("/sign-in");
    } else if (isUserAuthenticated && !routeRequiresAuth) {
        next("/");
    } else {
        next();
    }
});

export default router;
