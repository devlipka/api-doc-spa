<template>
    <nav
        class="navigation bg-brandDarkGreen flex flex-col pb-8 justify-between"
    >
        <ul>
            <li>
                <router-link
                    class="no-underline p-4 block transition-colors ease-in-out hover:bg-brandBlue duration-500"
                    :to="{ name: ROUTE_NAMES.USERS }"
                    >Users</router-link
                >
            </li>
            <li>
                <router-link
                    class="no-underline p-4 block transition-colors ease-in-out hover:bg-brandBlue duration-500"
                    :to="{ name: ROUTE_NAMES.PRODUCTS }"
                    >Products</router-link
                >
            </li>
            <li>
                <router-link
                    class="no-underline p-4 block transition-colors ease-in-out hover:bg-brandBlue duration-500"
                    :to="{ name: ROUTE_NAMES.PROFILE }"
                >
                    My Profile
                </router-link>
            </li>
        </ul>
        <div class="px-6">
            <button type="button" @click="onLogOut">Log out</button>
        </div>
    </nav>
</template>

<script>
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import store from "@/store/index.js";

export default {
    name: "Navigation",
    computed: {
        ROUTE_NAMES() {
            return ROUTE_NAMES;
        },
    },
    methods: {
        onLogOut() {
            store.dispatch("auth/logout");
        },
    },
};
</script>
