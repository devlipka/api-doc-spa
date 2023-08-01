import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login/Login.vue";
import Products from "@/views/Products/Products.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Registration from "@/views/Registration/Registration.vue";
import AppLayout from "@/components/Layout/AppLayout/AppLayout.vue";
import AuthLayout from "@/components/Layout/AuthLayout/AuthLayout.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        meta: { layout: AppLayout },
    },
    {
        name: "Product",
        path: "/product",
        component: Products,
        meta: { layout: AppLayout },
    },
    {
        name: "Login",
        path: "/sign-in",
        component: Login,
        meta: { layout: AuthLayout },
    },
    {
        path: "/sign-up",
        name: "Registration",
        component: Registration,
        meta: { layout: AuthLayout },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
