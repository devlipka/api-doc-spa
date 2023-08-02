import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login/Login.vue";
import Users from "@/views/Users/Users.vue";
import Profile from "@/views/Profile/Profile.vue";
import Products from "@/views/Products/Products.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Registration from "@/views/Registration/Registration.vue";
import AppLayout from "@/components/Layout/AppLayout/AppLayout.vue";
import AuthLayout from "@/components/Layout/AuthLayout/AuthLayout.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Dashboard,
        meta: { layout: AppLayout },
    },
    {
        path: "/",
        name: "users",
        component: Users,
        meta: { layout: AppLayout },
    },
    {
        path: "/",
        name: "profile",
        component: Profile,
        meta: { layout: AppLayout },
    },
    {
        name: "products",
        path: "/products",
        component: Products,
        meta: { layout: AppLayout },
    },
    {
        name: "login",
        path: "/sign-in",
        component: Login,
        meta: { layout: AuthLayout },
    },
    {
        path: "/sign-up",
        name: "register",
        component: Registration,
        meta: { layout: AuthLayout },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
